import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookissuedetailsComponent } from './createbookissuedetails.component';

describe('CreatebookissuedetailsComponent', () => {
  let component: CreatebookissuedetailsComponent;
  let fixture: ComponentFixture<CreatebookissuedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatebookissuedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatebookissuedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
