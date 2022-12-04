import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconButtonComponent } from '@src/app/shared/icon-button/icon-button.component';
import { IconComponent } from '@src/app/shared/icon/icon.component';
import { SharedModule } from '@src/app/shared/shared.module';

import { AreaGroupComponent } from './area-group.component';

function setUp() {
  const fixture: ComponentFixture<AreaGroupComponent> = TestBed.createComponent(AreaGroupComponent);
  const component: AreaGroupComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('AreaGroupComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AreaGroupComponent, IconComponent, IconButtonComponent],
      imports: [SharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    const { component } = setUp();
    expect(component).toBeTruthy();
  });
});
