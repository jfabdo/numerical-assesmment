import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../station';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {
  @Input() station: Station;

  constructor() { }

  ngOnInit() {
  }

}