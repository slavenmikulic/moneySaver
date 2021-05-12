import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './index/location.component';
import { LocationService } from './services/location.service';
import { CoreModule } from '../core/core.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LocationComponent
  ],
    imports: [
        CoreModule,
        CommonModule,
        LocationRoutingModule,
        IonicModule,
    ],
  providers: [
    LocationService
  ]
})
export class LocationModule { }
