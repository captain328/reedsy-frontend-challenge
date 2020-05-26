import { paginatorParam } from './paginator.util';

describe('PaginatorParam', () => {
  it('#paginatorParam should make params object with given parameters', () => {
    const params = paginatorParam();
    expect(params.toString()).toBe('skip=0&take=10');
  });
});
