import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { SharedModule } from '@src/app/shared/shared.module';

import { FooterComponent } from './footer.component';

function setUp() {
  const fixture: ComponentFixture<FooterComponent> = TestBed.createComponent(FooterComponent);
  const component: FooterComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('FooterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, TranslationSetupModule],
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  it('should create', () => {
    const { component } = setUp();
    expect(component).toBeTruthy();
  });
});
