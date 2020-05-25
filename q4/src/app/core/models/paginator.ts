export interface Paginator<T> {
  count: number;
  data: T[];
}

export const PageSizeDefault = 10;
export const PageSizeSmall = 5;
