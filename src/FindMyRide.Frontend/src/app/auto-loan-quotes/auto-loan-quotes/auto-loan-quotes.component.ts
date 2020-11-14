import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutoLoanQuotesService } from '../auto-loan-quotes.service';
import { Observable, Subject } from 'rxjs';
import { AutoLoanQuote } from '../auto-loan-quote';
import { MatTableDataSource } from '@angular/material/table';
import { map, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-loan-quotes',
  templateUrl: './auto-loan-quotes.component.html',
  styleUrls: ['./auto-loan-quotes.component.scss']
})
export class AutoLoanQuotesComponent implements OnDestroy {

  private readonly _destroyed: Subject<void> = new Subject();
  
  public columnsToDisplay: string[] = [

    'edit'
  ];

  public dataSource$ = this.autoLoanQuotesService.get().pipe(
    takeUntil(this._destroyed),
    map(x => new MatTableDataSource(x))
  );

  constructor(
    private autoLoanQuotesService: AutoLoanQuotesService,
    private router: Router
  ) { }

  public handleEditClick(autoLoanQuote: AutoLoanQuote): void {
    this.router.navigateByUrl(`autoLoanQuotes/edit/${autoLoanQuote.id}`);
  }

  public handleCreateClick(): void {
    this.router.navigateByUrl('autoLoanQuotes/create');
  }
  
  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
