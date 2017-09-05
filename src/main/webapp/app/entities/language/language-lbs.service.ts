import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { LanguageLbs } from './language-lbs.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class LanguageLbsService {

    private resourceUrl = 'api/languages';
    private resourceSearchUrl = 'api/_search/languages';

    constructor(private http: Http) { }

    create(language: LanguageLbs): Observable<LanguageLbs> {
        const copy = this.convert(language);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(language: LanguageLbs): Observable<LanguageLbs> {
        const copy = this.convert(language);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<LanguageLbs> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(language: LanguageLbs): LanguageLbs {
        const copy: LanguageLbs = Object.assign({}, language);
        return copy;
    }
}
