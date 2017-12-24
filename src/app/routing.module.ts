import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// settings
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/product-detail' },
  { path: 'product-detail', component: ProductComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/product-detail' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
  static components = [
    ProductComponent,
    ProductDetailComponent,
    SettingsComponent
  ];
}
