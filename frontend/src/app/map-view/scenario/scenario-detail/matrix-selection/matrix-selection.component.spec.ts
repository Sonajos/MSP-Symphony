import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HavButtonModule, HavFormFieldModule, HavSelectModule } from 'hav-components';
import { SharedModule } from '@shared/shared.module';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';

import { MatrixSelectionComponent } from './matrix-selection.component';

function setUp() {
  const fixture: ComponentFixture<MatrixSelectionComponent> = TestBed.createComponent(
    MatrixSelectionComponent
  );
  const component: MatrixSelectionComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('MatrixSelectionComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TranslationSetupModule,
        HavButtonModule,
        HavFormFieldModule,
        HavSelectModule
      ],
      declarations: [MatrixSelectionComponent],
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

  /*it('should create', () => {
    const { component } = setUp()
    expect(component).toBeTruthy();
  });*/
});
