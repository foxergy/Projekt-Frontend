import { Component } from "@angular/core";
import { AwsItem } from 'src/service/model/AwsItem';
import { AwsItems } from 'src/service/model/AwsItems';
import { AwsItemService } from 'src/service/aws-item.service';
import { _ }  from '../../../../node_modules/underscore/underscore';

@Component({
    selector: 'sensor-overview',
    templateUrl: './sensor-overview.page.html',
    styleUrls: ['../../../scss/sensor-overview.page.scss']
})
export class SensorOverviewPage{
    items: AwsItems = null;
    iterableByDeviceId: Array<Array<AwsItem>>= [];
  
    constructor(private awsItemService: AwsItemService){
      this.getAwsItems();
    }
  
    getAwsItems(){
      new Promise(resolve => setTimeout(()=>{
        this.awsItemService.getAwsItems().subscribe(entities => {
            this.items = entities;
        });
        resolve();
      }, 10));
    }
  
    groupByDeviceID(){
      const items = _.groupBy(this.items.Items, 'deviceId');
      for(let i = 0; i<Object.keys(items).length; i++){
        this.iterableByDeviceId.push(items[Object.keys(items)[i]]);
      }
      return this.iterableByDeviceId;
    }
    
    getLastItem(items: any): AwsItem{
      let biggestId= 0;
      items.forEach(item =>{
        if(item.Id > biggestId){
          biggestId = item.Id;
        }
      });
      return items.find(x => x.Id == biggestId);
    }
}