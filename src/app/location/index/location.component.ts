import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  locations: string[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locations = this.locationService.all();
  }

}
