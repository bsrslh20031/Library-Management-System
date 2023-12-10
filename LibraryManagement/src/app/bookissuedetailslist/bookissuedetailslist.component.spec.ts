import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookissuedetailslistComponent } from './bookissuedetailslist.component';

describe('BookissuedetailslistComponent', () => {
  let component: BookissuedetailslistComponent;
  let fixture: ComponentFixture<BookissuedetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookissuedetailslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookissuedetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
