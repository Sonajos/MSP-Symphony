import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HavAccordionModule } from 'hav-components';
import { SliderControlsComponent } from './slider-controls.component';
import { EcoSliderComponent } from '../eco-slider/eco-slider.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { IconComponent } from '@src/app/shared/icon/icon.component';

function setUp() {
  const fixture: ComponentFixture<SliderControlsComponent> = TestBed.createComponent(
    SliderControlsComponent
  );
  const component: SliderControlsComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('SliderControlsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HavAccordionModule, TranslationSetupModule],
      declarations: [SliderControlsComponent, EcoSliderComponent, IconComponent],
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
