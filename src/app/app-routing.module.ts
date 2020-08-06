import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LoginComponent} from './login/login.component';

import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';

const routes: Routes = [
  {
    path:  "", 
    pathMatch:  "full",
    redirectTo:  "home", 
    data: {     
        breadcrumbs: ['home'],
        text: 'Home'
     }
  },
  {
    path: "home", 
    component: HomeComponent,
    data: {    
      breadcrumbs: ['home'],
      text: 'Home'
    }
  },
  {
    path: "details/:id", 
    component: ProductDetailComponent,
    data: {     
      breadcrumbs: ['detail']
    }
  },
  {
    path: "login", 
    component: LoginComponent,
    data: {     
      breadcrumbs: ['login']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BreadcrumbsModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
