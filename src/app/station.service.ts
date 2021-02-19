import { Injectable } from '@angular/core';

import { Station } from './station';
import { STATIONS } from './mock-stations';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private stationUrl = 'https://api-v3.mbta.com';  // URL to web api

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StationService: ${message}`);
  }

  /** GET heroes from the server */
getStations(): Observable<Station[]> {
  return this.http.get<Station[]>(this.stationUrl)
}
}

