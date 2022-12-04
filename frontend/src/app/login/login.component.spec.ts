import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { LoginComponent } from './login.component';
import { HavFormFieldModule, HavButtonModule } from 'hav-components';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslationSetupModule } from '../app-translation-setup.module';

function setUp() {
  const fixture: ComponentFixture<LoginComponent> = TestBed.createComponent(LoginComponent);
  const component: LoginComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('LoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HavFormFieldModule,
        HavButtonModule,
        ReactiveFormsModule,
        TranslationSetupModule,
        RouterTestingModule
      ],
      declarations: [LoginComponent],
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
