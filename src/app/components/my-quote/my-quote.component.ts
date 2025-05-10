import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-quote',
  standalone: true,
  imports: [],
  templateUrl: './my-quote.component.html',
})
export class MyQuoteComponent {
  @Input() myQuote: string = '';
}
