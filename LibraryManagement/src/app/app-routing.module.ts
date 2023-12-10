import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebookComponent } from './createbook/createbook.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { CreatestaffComponent } from './createstaff/createstaff.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { StafflistComponent } from './stafflist/stafflist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { StaffupdateComponent } from './staffupdate/staffupdate.component';
import { CreatebookissuedetailComponent } from './createbookissuedetails/createbookissuedetails.component';
import { BookissuedetailupdateComponent } from './bookissuedetailsupdate/bookissuedetailsupdate.component';
import { BookissuelistComponent } from './bookissuedetailslist/bookissuedetailslist.component';
const routes: Routes = [
  {path:'getBooks',component:BooklistComponent},
  {path:'createBook',component:CreatebookComponent},
  {path:'updateBook',component:BookupdateComponent},
  {path:'getBookIssueDetails',component:BookissuelistComponent},
  {path:'createBookIssue',component:CreatebookissuedetailComponent},
  {path :'updateBookIssue',component:BookissuedetailupdateComponent},
  {path:'getStudents',component:StudentlistComponent},
  {path:'createStudent',component:CreatestudentComponent},
  {path:'updateStudent',component:StudentupdateComponent},
  {path:'getStaffs',component:StafflistComponent},
  {path:'createStaff',component:CreatestaffComponent},
  {path:'updateStaff',component:StaffupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }