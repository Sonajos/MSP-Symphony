import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HavButtonModule } from 'hav-components';
import { provideMockStore } from '@ngrx/store/testing';
import { PopupMessageComponent } from './popup-message.component';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';

function setUp() {
  const fixture: ComponentFixture<PopupMessageComponent> = TestBed.createComponent(
    PopupMessageComponent
  );
  const component: PopupMessageComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('PopupMessageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMessageComponent],
      imports: [HavButtonModule],
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
