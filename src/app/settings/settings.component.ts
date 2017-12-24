import { Component, OnInit } from '@angular/core';
import { AppSettingsService, AppSettings } from '../core/appsetting.service';

@Component({
    selector: 'settings',
    templateUrl: 'settings.component.html',
    styles: [`:host {padding:20px;}`]
})

export class SettingsComponent implements OnInit {
    settings: AppSettings;
    constructor(private appSettings: AppSettingsService) { }

    ngOnInit() {
        this.appSettings.getSettings().subscribe(res => {
            this.settings = res;
        });
     }

    saveSettings() {

    }
}