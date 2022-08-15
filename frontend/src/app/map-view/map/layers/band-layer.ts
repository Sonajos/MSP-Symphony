import { environment as env } from '@src/environments/environment';
import { Layer } from 'ol/layer';
import { Band, BandType } from '@data/metadata/metadata.interfaces';
import ImageLayer from "ol/layer/Image";
import LayerGroup from 'ol/layer/Group';
import { ImageStatic } from "ol/source";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AppSettings } from "@src/app/app.settings";
import { StaticImageOptions } from "@data/calculation/calculation.interfaces";

class DataLayer extends ImageLayer {
  constructor(opts: StaticImageOptions) {
    super({
      // TODO: It would be more convenient to make use of a tiled protocol here: => WM(T)S?
      source: new ImageStatic(opts)
    });
  }
}

class BandLayer extends LayerGroup {
  private visibleBands = {
    ecoComponents: new Map<number, Layer>(),
    pressures: new Map<number, Layer>()
  };

  constructor(private baseline: string,
              private http: HttpClient) {
    super();
  }

  public setVisibleBands(bandType: BandType, bands: Band[]) {
    const layerBands =
      bandType === 'ECOSYSTEM' ? this.visibleBands.ecoComponents : this.visibleBands.pressures;

    // remove layers
    const bandNumbers = bands.map(band => band.bandNumber);
    layerBands.forEach((layer: Layer, bandNumber: number) => {
      if (!bandNumbers.includes(bandNumber)) {
        if (this.getLayers().remove(layer)) layerBands.delete(bandNumber);
      }
    });

    // add layers
    bands.forEach((band: Band) => {
      if (!layerBands.get(band.bandNumber)) {
        const type = layerBands === this.visibleBands.ecoComponents ? 'ECOSYSTEM' : 'PRESSURE';
        const url = `${env.apiBaseUrl}/datalayer/${type.toLowerCase()}/${band.bandNumber}/${this.baseline}`;
        // TODO: Try with client-side-reprojection a la result images?
        // proj4.defs('ESRI:54043', '+proj=cea +lat_ts=-12 +lon_0=12 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs')
        const params = new HttpParams().set('crs', AppSettings.MAP_PROJECTION);

        this.http.get(url, {
          responseType: 'blob',
          observe: 'response',
          params
        }).subscribe(response => {
          const extentHeader = response.headers.get('SYM-Image-Extent');
          if (extentHeader) {
            const imageOpts = {
              url: URL.createObjectURL(response.body),
              imageExtent: JSON.parse(extentHeader),
              projection: AppSettings.MAP_PROJECTION
            };

            const layer = new DataLayer(imageOpts);
            this.getLayers().push(layer);
            layerBands.set(band.bandNumber, layer);
            this.setBandLayerOpacity(bandType, band.bandNumber, (band.layerOpacity ?? 100)/100);
          } else {
            console.error("Image for band "+band.bandNumber+" does not have any extent header ignoring.");
          }
        });
      }
    });
  }

  private setBandLayerOpacity(type: BandType, layerNumber: number, opacity: number) {
    if (type === 'ECOSYSTEM') {
      this.visibleBands.ecoComponents.get(layerNumber)!.setOpacity(opacity);
    } else {
      this.visibleBands.pressures.get(layerNumber)!.setOpacity(opacity);
    }
  }
}

export default BandLayer;
