import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './index/location.component';
import { LocationService } from './services/location.service';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    LocationRoutingModule,
  ],
  providers: [
    LocationService
  ]
})
export class LocationModule { }
