import {Component, OnInit} from '@angular/core';
import {MessageServiceService} from '../infrastructure/message-service.service';
import {JunoMessage} from './junomessage';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {

   message: JunoMessage;

  constructor(private junoService: MessageServiceService) {
    this.message = {
      message: 'not yet'
    }
  }

  ngOnInit(): void {
        this.junoService.getMessage().subscribe(message => {
          this.message = message;
        })
    }
}
