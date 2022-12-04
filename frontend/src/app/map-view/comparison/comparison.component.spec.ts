import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { ComparisonComponent } from '@src/app/map-view/comparison/comparison.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { HavButtonModule, HavSelectModule } from 'hav-components';

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
      imports: [
        SharedModule,
        HttpClientModule,
        TranslationSetupModule,
        HavButtonModule,
        HavSelectModule
      ],
      declarations: [ComparisonComponent],
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
