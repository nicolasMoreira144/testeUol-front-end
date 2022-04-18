import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incidente } from './incidente';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incidentes : Incidente[] = [];
  
  constructor(private httpClient: HttpClient) { 
      httpClient.get<Incidente[]>('http://localhost:8080/im-day/incidentes')
      .subscribe(incidente => this.incidentes = incidente);
      
    }
    
  
}
