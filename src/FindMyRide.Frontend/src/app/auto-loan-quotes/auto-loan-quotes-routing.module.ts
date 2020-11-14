import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AutoLoanQuotesComponent } from './auto-loan-quotes/auto-loan-quotes.component';
import { EditAutoLoanQuoteComponent } from './edit-auto-loan-quote/edit-auto-loan-quote.component';

const routes: Routes = [
  { path: "", component: AutoLoanQuotesComponent },
  { path: "create", component: EditAutoLoanQuoteComponent },
  { path: "edit/:id", component: EditAutoLoanQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoLoanQuotesRoutingModule {}
