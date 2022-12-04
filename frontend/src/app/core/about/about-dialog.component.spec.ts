import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDialogComponent } from './about-dialog.component';
import { DialogRef } from '@shared/dialog/dialog-ref';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { HavButtonModule } from 'hav-components';

class MockDialogRef {
  close = () => {};
}

describe('AboutDialogComponentComponent', () => {
  let component: AboutDialogComponent;
  let fixture: ComponentFixture<AboutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslationSetupModule, HavButtonModule],
      declarations: [AboutDialogComponent],
      providers: [{ provide: DialogRef, useClass: MockDialogRef }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
