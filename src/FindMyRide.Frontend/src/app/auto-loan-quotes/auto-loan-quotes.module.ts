import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoLoanQuotesComponent } from './auto-loan-quotes/auto-loan-quotes.component';
import { AutoLoanQuotesRoutingModule } from './auto-loan-quotes-routing.module';
import { EditAutoLoanQuoteComponent } from './edit-auto-loan-quote/edit-auto-loan-quote.component';
import { AutoLoanQuotesService } from './auto-loan-quotes.service';
import { SharedModule } from '../_shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutoLoanQuotesComponent, EditAutoLoanQuoteComponent],
  providers: [
    AutoLoanQuotesService
  ],
  imports: [
    CommonModule,
    AutoLoanQuotesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AutoLoanQuotesModule { }
