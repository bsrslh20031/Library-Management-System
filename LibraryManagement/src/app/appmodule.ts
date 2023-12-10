import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { CreatestaffComponent } from './createstaff/createstaff.component';
import { StaffupdateComponent } from './staffupdate/staffupdate.component';
import { CreatebookissuedetailComponent } from './createbookissuedetails/createbookissuedetails.component';
import { BookissuedetailupdateComponent } from './bookissuedetailsupdate/bookissuedetailsupdate.component';
import { BookissuelistComponent } from './bookissuedetailslist/bookissuedetailslist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    CreatebookComponent,
    BookupdateComponent,
    StudentlistComponent,
    CreatestudentComponent,
    StudentupdateComponent,
    StafflistComponent,
    CreatestaffComponent,
    StaffupdateComponent,
    BookissuelistComponent,
    CreatebookissuedetailComponent,
    BookissuedetailupdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }