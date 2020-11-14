import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLoanQuotesComponent } from './auto-loan-quotes.component';

describe('AutoLoanQuotesComponent', () => {
  let component: AutoLoanQuotesComponent;
  let fixture: ComponentFixture<AutoLoanQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoLoanQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLoanQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
