import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  locations$: Observable<string[]>;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locations$ = this.locationService.all();
  }

}
