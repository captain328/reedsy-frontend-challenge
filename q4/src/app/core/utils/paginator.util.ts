import { HttpParams } from '@angular/common/http';

export function paginatorParam(skip = 0, take = 10) {
  let params = new HttpParams();
  params = params.append('skip', String(skip));
  params = params.append('take', String(take));
  return params;
}
