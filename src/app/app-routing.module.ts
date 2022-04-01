import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path:'contact', component:ContactUsComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
