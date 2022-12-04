import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from '@shared/dialog/dialog-ref';
import { DialogConfig } from '@shared/dialog/dialog-config';

import { MatrixTableComponent } from './matrix-table.component';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { HavCoreModule, HavButtonModule } from 'hav-components';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';

import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { IconComponent } from '@src/app/shared/icon/icon.component';

function setUp() {
  const fixture: ComponentFixture<MatrixTableComponent> = TestBed.createComponent(
    MatrixTableComponent
  );
  const component: MatrixTableComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('MatrixTableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatrixTableComponent, IconComponent],
      imports: [HttpClientModule, HavCoreModule, HavButtonModule, TranslationSetupModule],
      providers: [
        {
          provide: DialogRef,
          useValue: {}
        },
        {
          provide: DialogConfig,
          useValue: {
            data: {
              matrixData: {
                name: ''
              }
            }
          }
        },
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
