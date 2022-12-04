import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '@src/app/shared/shared.module';
import { DialogRef } from '@shared/dialog/dialog-ref';
import { ConfirmResetComponent } from './confirm-reset.component';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { HavButtonModule } from 'hav-components';

class MockDialogRef {
  close = () => {};
}

function setUp() {
  const fixture: ComponentFixture<ConfirmResetComponent> = TestBed.createComponent(
    ConfirmResetComponent
  );
  const component: ConfirmResetComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('ConfirmResetComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HavButtonModule, TranslationSetupModule],
      providers: [
        {
          provide: DialogRef,
          useValue: MockDialogRef
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
      ],
      declarations: [ConfirmResetComponent]
    }).compileComponents();
  }));

  it('should create', () => {
    const { component } = setUp();
    expect(component).toBeTruthy();
  });
});
