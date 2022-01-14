import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import UserAuth from './UserAuth';

const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Headers', 'Content-Type, Origin');
headers.append('Access-Control-Allow-Methods', 'OPTIONS,POST');

@Injectable()
export default class ApiService {
    public API = 'https://localhost:44376';
    public USER_AUTH_ENDPOINT = `${this.API}/api/auth`;

    constructor(private http: HttpClient) { }

    validateUser(usr, pwd): Observable<UserAuth> {
        return this.http.post<UserAuth>(this.USER_AUTH_ENDPOINT + `?userName=${usr}` + `&password=${pwd}`, { 'headers': headers });
    }
}