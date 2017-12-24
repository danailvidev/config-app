import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class AppSettings {
    defaultPrice: number = 1;
    defaultUrl: string = 'http://test.com';
}


@Injectable()
export class AppSettingsService {
    constructor(private httpClient: HttpClient) { }

    getSettings(): Observable<AppSettings> {
        const test = new AppSettings();
        return of(test);
    }
}
