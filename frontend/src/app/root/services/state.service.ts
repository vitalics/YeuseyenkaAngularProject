import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import * as root from '../../shared/reducers';

import { environment } from '../../../environments/environment';
import { AppState } from 'app/root/typings/state';



@Injectable()
export class StateService {
    constructor(private http: Http) { }

    getStoreState(): Observable<AppState> {
        return this.http.get(`${environment.baseApiUrl}/api/state`)
            .map(res => res.json());
    }
    postStoreState(newState: AppState): Observable<any> {
        return this.http.post(`${environment.baseApiUrl}/api/state`, newState);
    }
}
