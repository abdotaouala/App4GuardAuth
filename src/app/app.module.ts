import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserService} from './user.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {FormsModule} from '@angular/forms';

const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'dashboard',
    canActivate:[AuthGuard],
    component:DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
