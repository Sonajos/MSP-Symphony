import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSelectionComponent } from './area-selection.component';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { SharedModule } from '@src/app/shared/shared.module';
import { HavCheckboxModule } from 'hav-components';
import { provideMockStore } from '@ngrx/store/testing';
import { SelectionLayoutComponent } from '../selection-layout/selection-layout.component';
import { AreaGroupComponent } from './area-group/area-group.component';

function setUp() {
  const fixture: ComponentFixture<AreaSelectionComponent> = TestBed.createComponent(
    AreaSelectionComponent
  );
  const component: AreaSelectionComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('AreaSelectionComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AreaSelectionComponent, SelectionLayoutComponent, AreaGroupComponent],
      imports: [SharedModule, HavCheckboxModule, TranslationSetupModule],
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
