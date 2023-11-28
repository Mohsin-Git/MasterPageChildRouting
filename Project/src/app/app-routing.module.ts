import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './LoginRelated_Pages/forgot-password/forgot-password.component';
import { LoginComponent } from './LoginRelated_Pages/login/login.component';
import { NotFoundComponent } from './LoginRelated_Pages/not-found/not-found.component';
// import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// import { LoginComponent } from './components/login/login.component';
 
const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {
   path:'admin', 
   loadChildren:() => import('./modules/admin/admin.module').then((m)=> m.AdminModule),
  },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
