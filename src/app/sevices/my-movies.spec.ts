import { TestBed } from '@angular/core/testing';

import { MyMovies } from './my-movies';

describe('MyMovies', () => {
  let service: MyMovies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyMovies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
