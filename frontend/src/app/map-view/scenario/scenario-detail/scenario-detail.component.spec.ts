import { NormalizationSelectionComponent } from './normalization-selection/normalization-selection.component';
import { action } from '@storybook/addon-actions';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { IconComponent } from '@src/app/shared/icon/icon.component';
import { SharedModule } from '@src/app/shared/shared.module';

import { ScenarioDetailComponent } from './scenario-detail.component';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import {
  HavButtonModule,
  HavFormFieldModule,
  HavRadioButtonModule,
  HavSelectModule
} from 'hav-components';
import { HttpClientModule } from '@angular/common/http';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { NormalizationType } from '@data/calculation/calculation.service';
import { MultiPoint } from 'ol/geom';
import { MatrixSelectionComponent } from './matrix-selection/matrix-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ScenarioEditorComponent', () => {
  let component: ScenarioDetailComponent;
  let fixture: ComponentFixture<ScenarioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScenarioDetailComponent,
        IconComponent,
        NormalizationSelectionComponent,
        MatrixSelectionComponent
      ],
      imports: [
        SharedModule,
        HavButtonModule,
        HttpClientModule,
        TranslationSetupModule,
        HavFormFieldModule,
        HavSelectModule,
        BrowserAnimationsModule,
        HavRadioButtonModule
      ],
      providers: [
        provideMockStore({
          initialState: {
            metadata,
            area,
            user,
            scenario,
            calculation
          }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioDetailComponent);
    component = fixture.componentInstance;
    component.scenario = {
      id: 'string',
      timestamp: 0,
      baselineId: 0,
      name: 'string',
      feature: { type: 'Feature', geometry: { type: 'Point', coordinates: [] }, properties: [] }, // Would like to use proper OL feature
      changes: { type: 'FeatureCollection', features: [] },
      matrix: {},
      normalization: { type: NormalizationType.Area },
      latestCalculation: 'string', // id of the latest calculation,
      ecosystemsToInclude: [],
      pressuresToInclude: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
