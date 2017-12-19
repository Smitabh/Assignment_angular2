import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHandler} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { empService } from './Service/employeeSrvc.service';
import { DataTableModule} from "angular2-datatable";
import { FlashMessagesModule } from 'angular2-flash-messages';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),DataTableModule
  ],
  providers: [empService],
  bootstrap: [AppComponent],
})
export class AppModule { }
