import { Component, Input } from '@angular/core';
import { AwsItem } from 'src/service/model/AwsItem';


@Component({
    selector: 'room-card',
    templateUrl: './room-card.component.html',
    styleUrls: ['../../../scss/room-card.component.scss']
})
export class RoomCardComponent{

    @Input() awsItem: AwsItem= null;
    
    constructor(){}

    getHumidity(){
        const humidity = this.awsItem.data.data.humidity;
        return +humidity;
    }
}