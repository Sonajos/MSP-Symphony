import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HavButtonModule,
  HavAccordionModule,
  HavFormFieldModule,
  HavSelectModule
} from 'hav-components';
import { ScenarioEditorComponent } from './scenario-editor.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { SliderControlsComponent } from '../band-selection/slider-controls/slider-controls.component';
import { MatrixSelectionComponent } from './scenario-detail/matrix-selection/matrix-selection.component';
import { EcoSliderComponent } from '../band-selection/eco-slider/eco-slider.component';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { HttpClientModule } from '@angular/common/http';
import { NormalizationSelectionComponent } from './scenario-detail/normalization-selection/normalization-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

function setUp() {
  const fixture: ComponentFixture<ScenarioEditorComponent> = TestBed.createComponent(
    ScenarioEditorComponent
  );
  const component: ScenarioEditorComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('EcoEditorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        HavButtonModule,
        HavAccordionModule,
        TranslationSetupModule,
        RouterTestingModule,
        HavFormFieldModule,
        HavSelectModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ScenarioEditorComponent,
        SliderControlsComponent,
        EcoSliderComponent,
        MatrixSelectionComponent,
        NormalizationSelectionComponent
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

  it('should create', () => {
    const { component } = setUp();
    expect(component).toBeTruthy();
  });
});
