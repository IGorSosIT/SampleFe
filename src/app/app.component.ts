import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MessageComponent} from './domain/task/application/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hallo, Juno';
}
