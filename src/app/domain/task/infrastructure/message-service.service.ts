import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {JunoMessage} from '../application/junomessage';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private http: HttpClient) { }

  private taskUrl = 'http://localhost:8080/api/v1/juno';

  getMessage(): Observable<JunoMessage> {
    return this.http.get<JunoMessage>(this.taskUrl);
}

}
