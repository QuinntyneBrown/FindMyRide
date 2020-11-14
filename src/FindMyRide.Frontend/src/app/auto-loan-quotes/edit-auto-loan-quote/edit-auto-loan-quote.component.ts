import { Component, OnDestroy, OnInit } from '@angular/core';
import { AutoLoanQuotesService } from '../auto-loan-quotes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoLoanQuote } from '../auto-loan-quote';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-auto-loan-quote',
  templateUrl: './edit-auto-loan-quote.component.html',
  styleUrls: ['./edit-auto-loan-quote.component.scss']
})
export class EditAutoLoanQuoteComponent implements OnInit, OnDestroy {

  public autoLoanQuote: AutoLoanQuote = {} as AutoLoanQuote;
  private readonly _destroyed: Subject<void> = new Subject();

  public form = new FormGroup({     
    //name: new FormControl(this.autoLoanQuote.name, [Validators.required]),      
  });
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private autoLoanQuotesService: AutoLoanQuotesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.autoLoanQuote.autoLoanQuoteId = this.activatedRoute.snapshot.params.id;

    if(this.autoLoanQuote.autoLoanQuoteId) {
      this.autoLoanQuotesService.getById({ autoLoanQuoteId: this.activatedRoute.snapshot.params.id }).pipe(
        map(x => {
          this.form.patchValue({
            //title: x.name,
          });
        })
      ).subscribe();
    }
  }

  public handleSaveClick(): void {
    const autoLoanQuote: AutoLoanQuote = {} as AutoLoanQuote;

    //this.autoLoanQuote.name = this.form.value.name;

    this.autoLoanQuotesService.save({ autoLoanQuote: this.autoLoanQuote }).pipe(
      takeUntil(this._destroyed)
    ).subscribe(
      () => this.form.reset(),
      errorResponse => {
        // handle error
      }
    );

  }

  public handleCancelClick(): void {
    this.router.navigateByUrl('/autoLoanQuotes');
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
