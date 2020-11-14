import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoLoanQuotesModule } from './auto-loan-quotes/auto-loan-quotes.module';
import { AppContainerComponent } from './app-container.component';


@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
  ],
  imports: [
    AutoLoanQuotesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
