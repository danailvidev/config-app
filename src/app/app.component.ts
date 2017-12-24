import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu = [
    { label: 'Product', link: 'product' },
    { label: 'Settings', link: 'settings' }
  ];
}
