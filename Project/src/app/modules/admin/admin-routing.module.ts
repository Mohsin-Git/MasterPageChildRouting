import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'', component: AdminDashboardComponent,
   children: [
    {path:'home',  component:HomeComponent  },
    {path:'about',  component:AboutComponent  },
    {path:'contact',  component:ContactsComponent  },
    {path:'', redirectTo:'/admin/home', pathMatch:'full'  },

  ]
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
