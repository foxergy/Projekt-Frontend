import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwsItemService } from 'src/service/aws-item.service';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SensorOverviewPage } from './pages/sensor-overview/sensor-overview.page';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { SensorDetailsPage } from './pages/sensor-details/sensor-details.page';

@NgModule({
  declarations: [
    AppComponent,
    RoomCardComponent,
    ItemListComponent,
    HeaderBarComponent,
    SensorOverviewPage,
    SensorDetailsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AwsItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
