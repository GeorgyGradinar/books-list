import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('hasGenre() should', () => {
    it('return true if filter is empty', () => {
      const hasGenre = service.hasGenre('', 'test genre');

      expect(hasGenre).toBeTruthy();
    });

    it('return true if filter isn\'t empty and genres are equal', () => {
      const hasGenre = service.hasGenre('test genre', 'test genre');

      expect(hasGenre).toBeTruthy();
    });

    it('return false if filter isn\'t empty and genres aren\'t equal', () => {
      const hasGenre = service.hasGenre('test genre', 'genre');

      expect(hasGenre).toBeFalse();
    });
  });
});
