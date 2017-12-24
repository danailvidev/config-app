import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product',
    template: `<div class="container">
    <product-detail></product-detail>
    </div>`,
    styles: [`:host {padding:20px;}`]
})

export class ProductComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}