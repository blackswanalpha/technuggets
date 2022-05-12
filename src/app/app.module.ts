import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EventComponent } from './admin/event/event.component';
import { JobsComponent } from './admin/jobs/jobs.component';
import { TrainingComponent } from './admin/training/training.component';
import { NavComponent } from './admin/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
   
    DashboardComponent,
    EventComponent,
    JobsComponent,
    TrainingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
