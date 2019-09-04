import { Component, Input } from "@angular/core";
import { AwsItems } from 'src/service/model/AwsItems';
import { AwsItem } from 'src/service/model/AwsItem';

@Component({
    selector: 'item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['../../../scss/item-list.component.scss']
})
export class ItemListComponent{

    @Input() awsItems: AwsItems= null;

    constructor(){}

    sortedItems(): Array<AwsItem>{
        return this.awsItems.Items.sort((a, b) =>{
            return b.Id - a.Id;
        });
    }

}