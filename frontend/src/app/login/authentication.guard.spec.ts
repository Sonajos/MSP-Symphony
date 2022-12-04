import { TestBed, inject } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as area } from '@data/area/area.reducers';
import { initialState as user } from '@data/user/user.reducers';
import { initialState as scenario } from '@data/scenario/scenario.reducers';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
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
    });
  });

  it('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
