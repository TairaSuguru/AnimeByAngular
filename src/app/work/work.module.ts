import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    LoginComponent,
    IndexComponent,
    PageComponent
  ],
  exports: [IndexComponent],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
