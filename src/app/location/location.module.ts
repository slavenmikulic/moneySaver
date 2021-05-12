import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './index/location.component';
import { LocationService } from './services/location.service';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    IonicModule
  ],
  providers: [
    LocationService
  ]
})
export class LocationModule { }
