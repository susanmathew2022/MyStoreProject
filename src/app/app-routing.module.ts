import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './Users/login/login.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [ {path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path:'products', children:[
 {path:'',component:ProductListComponent},
 {path:':id',component:ProductAddComponent},
 {path:':id/edit',component:ProductAddComponent}
]
},
{path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
