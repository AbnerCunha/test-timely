import { getTestBed, TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpParams } from '@angular/common/http';

describe('BaseService', () => {
  let httpMock: HttpTestingController
  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })

    httpMock = getTestBed().get(HttpTestingController);
    service = TestBed.get(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get()', () => {
    service.get('');
  });

  it('should call post()', () => {
    const params = new HttpParams().set('url', 'url')
    service.post('', params);
  });
});
