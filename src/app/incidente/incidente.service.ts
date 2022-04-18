import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incidente } from './incidente';


@Injectable({
  providedIn: 'root'
})
export class IncidenteService {

  constructor(private httpClient: HttpClient) { }

  getIncidentes(){
    return this.httpClient.get<Incidente[]>('http://localhost:8080/im-day/incidentes');
  }
}
