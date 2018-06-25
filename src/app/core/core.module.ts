import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './core.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [
    BsNavbarComponent,
    LoginComponent,
    CoreComponent
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
