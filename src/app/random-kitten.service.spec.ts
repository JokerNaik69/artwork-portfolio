import { TestBed } from '@angular/core/testing';

import { RandomKittenService } from './random-kitten.service';

describe('RandomKittenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomKittenService = TestBed.get(RandomKittenService);
    expect(service).toBeTruthy();
  });
});
