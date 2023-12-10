import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookissuedetailsupdateComponent } from './bookissuedetailsupdate.component';

describe('BookissuedetailsupdateComponent', () => {
  let component: BookissuedetailsupdateComponent;
  let fixture: ComponentFixture<BookissuedetailsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookissuedetailsupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookissuedetailsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
