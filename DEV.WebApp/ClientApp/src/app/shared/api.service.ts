import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import UserRecord from './UserRecord';

@Injectable()
export default class ApiService {
    public API = 'https://localhost:44376';
    public USER_RECORDS_ENDPOINT = `${this.API}/users`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<UserRecord> {
        return this.http.get<UserRecord>(this.USER_RECORDS_ENDPOINT);
    }

    filterColumn(column, text): Observable<UserRecord> {
        return this.http.get<UserRecord>(this.USER_RECORDS_ENDPOINT + `?${column}=${text}`);
    }

    getPage(pageNumber, column, text): Observable<UserRecord> {
        if (column == "") {
            return this.http.get<UserRecord>(this.USER_RECORDS_ENDPOINT + `?page=${pageNumber}`);
        }
        return this.http.get<UserRecord>(this.USER_RECORDS_ENDPOINT + `?page=${pageNumber}` + `&${column}=${text}`);
    }
}