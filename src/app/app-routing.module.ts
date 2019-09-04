import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorOverviewPage } from './pages/sensor-overview/sensor-overview.page';
import { SensorDetailsPage } from './pages/sensor-details/sensor-details.page';

const routes: Routes = [
  {path: 'sensor-overview', component: SensorOverviewPage},
  {path: 'sensor-details', component: SensorDetailsPage},
  {path: '', redirectTo: '/sensor-overview', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
