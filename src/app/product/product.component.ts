import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product',
    template: `<div class="container"><product-detail></product-detail></div>`
})

export class ProductComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}