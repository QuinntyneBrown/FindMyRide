import { Injectable, Inject } from '@angular/core';
import { baseUrl } from '../_core/constants';
import { HttpClient } from '@angular/common/http';
import { AutoLoanQuote } from './auto-loan-quote';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoLoanQuotesService {

  constructor(
    @Inject(baseUrl) private _baseUrl: string,
    private _client: HttpClient
  ) { }

  public get(): Observable<AutoLoanQuote[]> {
    return this._client.get<{ autoLoanQuotes: AutoLoanQuote[] }>(`${this._baseUrl}api/autoLoanQuotes`)
      .pipe(
        map(x => x.autoLoanQuotes)
      );
  }

  public getById(options: { autoLoanQuoteId: number }): Observable<AutoLoanQuote> {
    return this._client.get<{ autoLoanQuote: AutoLoanQuote }>(`${this._baseUrl}api/autoLoanQuotes/${options.autoLoanQuoteId}`)
      .pipe(
        map(x => x.autoLoanQuote)
      );
  }

  public remove(options: { autoLoanQuote: AutoLoanQuote }): Observable<void> {
    return this._client.delete<void>(`${this._baseUrl}api/autoLoanQuotes/${options.autoLoanQuote.autoLoanQuoteId}`);
  }

  public save(options: { autoLoanQuote: AutoLoanQuote }): Observable<{ autoLoanQuoteId: number }> {
    return this._client.post<{ autoLoanQuoteId: number }>(`${this._baseUrl}api/autoLoanQuotes`, { autoLoanQuote: options.autoLoanQuote });
  }  
}
