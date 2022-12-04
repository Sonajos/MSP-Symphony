import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandSelectionComponent } from './band-selection.component';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { SharedModule } from '@src/app/shared/shared.module';
import { provideMockStore } from '@ngrx/store/testing';
import { SelectionLayoutComponent } from '../selection-layout/selection-layout.component';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';

function setUp() {
  const fixture: ComponentFixture<BandSelectionComponent> = TestBed.createComponent(
    BandSelectionComponent
  );
  const component: BandSelectionComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('BandSelectionComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BandSelectionComponent, SelectionLayoutComponent],
      imports: [SharedModule, TranslationSetupModule],
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
