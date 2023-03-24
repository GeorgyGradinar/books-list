import {TestBed} from '@angular/core/testing';

import {FilterService} from './filter.service';
import {Book} from "../interfaces/book.interface";
import {Filters} from "../interfaces/filters.interface";

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFilteredBooks() should', () => {
    const books:Book[] = [
      {
        "id": 95438597,
        "name": "Роковой подарокkk",
        "author": "Татьяна Устинова",
        "description": "Российская писательница, сценарист, переводчица и телеведущая Татьяна Устинова известна, в первую очередь, как автор детективов. Ее легкий слог, закрученные интриги, запоминающийся стиль давно полюбились читателям и критикам. Татьяна черпает вдохновение буквально ото всюду, а прообразами ее персонажей зачастую становятся ее современники, будь то политик, телеведущая, бизнесмен или дизайнер. Героиней новой книги «Роковой подарок» стала писательница Марина Покровская.",
        "pages": 290,
        "language": "Русский",
        "genre": "Современные детективы"
      },
      {
        "id": 957689677,
        "name": "Тревожные люди",
        "author": "Фредрик Бакман",
        "description": "Однажды утром некий отчаявшийся мужчина средних лет, вооруженный пистолетом, решил ограбить банк, но все пошло не по плану. Вместо банка он попал в дом, выставленный на продажу, а вместо солидной суммы денег захватил в заложники его потенциальных покупателей. Эти восемь встревоженных незнакомцев с кучей внутренних проблем оказались для грабителя сущим кошмаром",
        "pages": 300,
        "language": "Английский",
        "genre": "Современная зарубежная литература"
      },
    ] //test data

    it('return all books if filters are empty', () => {
      const filters:Filters = {
        search: '',
        genre: '',
        languages: [],
        authors: [],
        pageStart: 0,
        pageEnd: 0
      }
      const filteredBooks = service.getFilteredBooks(filters, books);

      expect(filteredBooks).toEqual(books);
    })

    it('return all filtered books if filters aren\'t empty and filter pageEnd equal 290', () => {
      const filters:Filters = {
        search: '',
        genre: '',
        languages: [],
        authors: [],
        pageStart: 0,
        pageEnd: 290
      }
      const expectedResult: Book[] = [{
        "id": 95438597,
        "name": "Роковой подарокkk",
        "author": "Татьяна Устинова",
        "description": "Российская писательница, сценарист, переводчица и телеведущая Татьяна Устинова известна, в первую очередь, как автор детективов. Ее легкий слог, закрученные интриги, запоминающийся стиль давно полюбились читателям и критикам. Татьяна черпает вдохновение буквально ото всюду, а прообразами ее персонажей зачастую становятся ее современники, будь то политик, телеведущая, бизнесмен или дизайнер. Героиней новой книги «Роковой подарок» стала писательница Марина Покровская.",
        "pages": 290,
        "language": "Русский",
        "genre": "Современные детективы"
      }]
      const filteredBooks = service.getFilteredBooks(filters, books);

      expect(filteredBooks).toEqual(expectedResult);
    });

    it('return empty array if filters don\'t find the right books ', () => {
      const filters:Filters = {
        search: '',
        genre: '',
        languages: [],
        authors: ["Фредрик Бакман"],
        pageStart: 0,
        pageEnd: 290
      }
      const expectedResult: Book[] = []
      const filteredBooks = service.getFilteredBooks(filters, books);

      expect(filteredBooks).toEqual(expectedResult);
    });
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

  describe('hasSearchText() should', () => {
    it('return true if filter is empty', () => {
      const hasSearchText = service.hasSearchText('', 'test search');

      expect(hasSearchText).toBeTruthy();
    });

    it('return true if filter isn\'t empty and filter are includes', () => {
      const hasSearchText = service.hasSearchText('search', 'test search');

      expect(hasSearchText).toBeTruthy();
    });

    it('return false if filter isn\'t empty and filter aren\'t includes', () => {
      const hasSearchText = service.hasSearchText('data', 'test search');

      expect(hasSearchText).toBeFalse();
    });

    it('return true if filter are includes and case-insensitive', () => {
      const hasSearchText = service.hasSearchText('SeArCh', 'test search');

      expect(hasSearchText).toBeTruthy();
    });
  });

  describe('isIncludeFilter() should', () => {
    it('return true if filter is empty', () => {
      const isIncludeFilter = service.isIncludeFilter([], 'test data');

      expect(isIncludeFilter).toBeTruthy();
    });

    it('return true if filter isn\'t empty and filter are includes', () => {
      const isIncludeFilter = service.isIncludeFilter(['test data'], 'test data');

      expect(isIncludeFilter).toBeTruthy();
    });

    it('return true if filter isn\'t empty and filter aren\'t includes', () => {
      const isIncludeFilter = service.isIncludeFilter(['another string'], 'test data');

      expect(isIncludeFilter).toBeFalsy();
    });
  });

  describe('isMore() should', () => {
    it('return true if filter is empty or equal 0', () => {
      const isMore = service.isMore(0, 100);

      expect(isMore).toBeTruthy();
    });

    it('return true if filter isn\'t empty and filter less than bookInfo', () => {
      const isMore = service.isMore(100, 200);

      expect(isMore).toBeTruthy();
    });

    it('return false if filter isn\'t empty and filter bigger than bookInfo', () => {
      const isMore = service.isMore(300, 200);

      expect(isMore).toBeFalsy();
    });
  });

  describe('isLess() should', () => {
    it('return true if filter is empty', () => {
      const isLess = service.isLess(0, 200);

      expect(isLess).toBeTruthy();
    });

    it('return true if filter isn\'t empty and filter bigger than bookInfo', () => {
      const isLess = service.isLess(300, 200);

      expect(isLess).toBeTruthy();
    });

    it('return false if filter isn\'t empty and filter less than bookInfo', () => {
      const isLess = service.isLess(100, 200);

      expect(isLess).toBeFalsy();
    });
  });
});
