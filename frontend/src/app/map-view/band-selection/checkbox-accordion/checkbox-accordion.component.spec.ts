import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxAccordionComponent } from './checkbox-accordion.component';
import { HavCheckboxModule, HavCoreModule } from 'hav-components';
import {
  AccordionBoxComponent,
  AccordionBoxHeaderComponent,
  AccordionBoxContentComponent
} from '../../../shared/accordion-box/accordion-box.component';
import { IconButtonComponent } from '../../../shared/icon-button/icon-button.component';
import { IconComponent } from '../../../shared/icon/icon.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';

function setUp() {
  const fixture: ComponentFixture<CheckboxAccordionComponent> = TestBed.createComponent(
    CheckboxAccordionComponent
  );
  const component: CheckboxAccordionComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('CheckboxAccordionComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxAccordionComponent,
        AccordionBoxComponent,
        AccordionBoxHeaderComponent,
        AccordionBoxContentComponent,
        IconButtonComponent,
        IconComponent
      ],
      imports: [HavCheckboxModule, HavCoreModule],
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
