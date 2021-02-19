import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { StationService } from '../station.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})

export class StationsComponent implements OnInit {

  stations: Station[];
  selectedStation?: Station;

  constructor(private stationService: StationService, private messageService: MessageService) { }

  ngOnInit() {
    this.getStations();
  }

  onSelect(station: Station): void {
    this.selectedStation = station;
    this.messageService.add(`StatinosComponent: Selected hero id=${station.id}`);
  }

  getStations(): void {
    this.stationService.getStations()
    .subscribe(stations => this.stations = stations);
  }

}
