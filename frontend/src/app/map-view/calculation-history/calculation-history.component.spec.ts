import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculationHistoryComponent } from './calculation-history.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { IconComponent } from '@src/app/shared/icon/icon.component';

function setUp() {
  const fixture: ComponentFixture<CalculationHistoryComponent> = TestBed.createComponent(
    CalculationHistoryComponent
  );
  const component: CalculationHistoryComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('CalculationHistoryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculationHistoryComponent, IconComponent],
      imports: [TranslationSetupModule],
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
