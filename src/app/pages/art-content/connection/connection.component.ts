import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DividerComponent } from '../../../components/divider/divider.component';
import { MyQuoteComponent } from '../../../components/my-quote/my-quote.component';

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [RouterModule, DividerComponent, MyQuoteComponent],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss',
})
export class ConnectionComponent {}
