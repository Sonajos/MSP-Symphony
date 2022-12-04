import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogConfig } from '@src/app/shared/dialog/dialog-config';
import { SharedModule } from '@src/app/shared/shared.module';
import { DialogRef } from '@shared/dialog/dialog-ref';
import { MetaInfoComponent } from './meta-info.component';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { HavButtonModule } from 'hav-components';

class MockDialogRef {
  close = () => {};
}

function setUp() {
  const fixture: ComponentFixture<MetaInfoComponent> = TestBed.createComponent(MetaInfoComponent);
  const component: MetaInfoComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('MetaInfoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MetaInfoComponent],
      imports: [SharedModule, TranslationSetupModule, HavButtonModule],
      providers: [
        {
          provide: DialogRef,
          useValue: MockDialogRef
        },
        {
          provide: DialogConfig,
          useValue: { data: { band: { statePath: ['ecoComponent'] } } }
        }
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    const { component } = setUp();
    expect(component).toBeTruthy();
  });
});
