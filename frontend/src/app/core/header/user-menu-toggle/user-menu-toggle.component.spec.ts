import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuToggleComponent } from './user-menu-toggle.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { IconComponent } from '@src/app/shared/icon/icon.component';

function setUp() {
  const fixture: ComponentFixture<UserMenuToggleComponent> = TestBed.createComponent(
    UserMenuToggleComponent
  );
  const component: UserMenuToggleComponent = fixture.componentInstance;
  return { component, fixture };
}

describe('UserMenuToggleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [UserMenuToggleComponent, IconComponent]
    }).compileComponents();
  }));

  it('should create', () => {
    const { component } = setUp();
    expect(component).toBeTruthy();
  });
});
