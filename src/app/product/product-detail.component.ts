import { Component, OnInit } from '@angular/core';
import { AppSettingsService, AppSettings } from '../core/appsetting.service';
import { Product } from './product';

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    product: Product;
    settings: AppSettings;

    constructor(private appSettings: AppSettingsService) { }

    ngOnInit() {
        this.appSettings.getSettings().subscribe(res => {
            this.settings = res;
        },
            () => null,
            () => {
                this.product = new Product();
                this.product.price = this.settings.defaultPrice;
                this.product.url = this.settings.defaultUrl;
            });
    }

    saveProduct() {
        console.log(this.product);
    }
}
