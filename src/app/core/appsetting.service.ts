import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

const SETTINGS_LOCATION = 'assets/appSettings.json';
const SETTINGS_KEY = 'consfiguration';
const SETTINGS_FIRESTORE_DOCID = 'dBK5jqWbqjGBgdDJQiJC';

export class AppSettings {
    appSettingsId: number = null;
    defaultPrice: number = 1;
    defaultUrl: string = 'http://defaultClass.com';
    isFromLocalStorage: boolean = false;
}

@Injectable()
export class AppSettingsService {
    settingsDoc: AngularFirestoreDocument<any>;
    settingsFromDB: Observable<any>;

    constructor(
        private httpClient: HttpClient,
        private db: AngularFirestore) { }

    getSettings(): Observable<AppSettings> {

        const settings = localStorage.getItem(SETTINGS_KEY);
        if (settings) {
            let ret: AppSettings;
            ret = JSON.parse(settings);
            ret.isFromLocalStorage = true;
            return of(ret);
        } else if (SETTINGS_FIRESTORE_DOCID) {
            this.settingsDoc = this.db.doc<AppSettings>('settings/' + SETTINGS_FIRESTORE_DOCID);
            return this.settingsDoc.valueChanges().pipe(
                tap(data => {
                    if (data) {
                        this.saveSettings(data);
                    }
                })
            );
        } else {
            return this.httpClient.get<AppSettings>(SETTINGS_LOCATION).pipe(
                tap(data => {
                    if (data) {
                        this.saveSettings(data);
                    }
                }),
                catchError(this.handleError<AppSettings>('getSettings', new AppSettings()))
            );
        }
    }

    getSettingsFallback() {
        const settings = localStorage.getItem(SETTINGS_KEY);
        if (settings) {
            return of(JSON.parse(settings));
        } else {
            return this.httpClient.get<AppSettings>(SETTINGS_LOCATION).pipe(
                tap(data => {
                    if (data) {
                        this.saveSettings(data);
                    }
                }),
                catchError(this.handleError<AppSettings>('getSettings', new AppSettings()))
            );
        }
    }

    deleteSettings(): void {
        localStorage.removeItem(SETTINGS_KEY);
    }

    saveSettings(appSettings: AppSettings) {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(appSettings));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // log the error
            switch (error.status) {
                case 404:
                    console.error('Cant find file ' + SETTINGS_LOCATION);
                    break;
                default:
                    console.error(error);
                    break;
            }

            return of(result as T);
        };
    }
}
