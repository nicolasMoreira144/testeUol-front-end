import { Component } from '@angular/core';
import { Incidente } from './incidente/incidente';
import { IncidenteService } from './incidente/incidente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incidentes : Incidente[] = [];

  constructor(private incidenteService: IncidenteService) {

      incidenteService.getIncidentes()
      .subscribe(incidente => this.incidentes = incidente);
    }


}
