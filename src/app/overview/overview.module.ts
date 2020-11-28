import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OverviewComponent,
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: ProductComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [OverviewComponent, ProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class OverviewModule {}
