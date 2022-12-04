import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DialogConfig } from '@src/app/shared/dialog/dialog-config';
import { SharedModule } from '@src/app/shared/shared.module';
import { DialogRef } from '@shared/dialog/dialog-ref';
import { ConfirmResetComponent } from './confirm-reset.component';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';

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
      imports: [SharedModule, TranslationSetupModule],
      providers: [
        {
          provide: DialogRef,
          useValue: MockDialogRef
        },
        provideMockStore()
      ],
      declarations: [ConfirmResetComponent]
    }).compileComponents();
  }));

  it('should create', () => {
    const { component } = setUp();
    expect(component).toBeTruthy();
  });
});
