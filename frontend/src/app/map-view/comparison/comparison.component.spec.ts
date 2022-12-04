import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { ComparisonComponent } from '@src/app/map-view/comparison/comparison.component';
import { SharedModule } from '@src/app/shared/shared.module';

function setUp() {
  const fixture: ComponentFixture<ComparisonComponent> = TestBed.createComponent(
    ComparisonComponent
  );
  const component: ComparisonComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('ComparisonComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, TranslationSetupModule, HttpClientModule, TranslationSetupModule],
      declarations: [ComparisonComponent],
      providers: [provideMockStore()]
    }).compileComponents();
  }));

  it('should create', () => {
    const { component } = setUp();
    expect(component).toBeTruthy();
  });
});
