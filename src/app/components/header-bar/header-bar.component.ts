import { Component, Input } from '@angular/core';

@Component({
    selector:'header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls:['../../../scss/header-bar.component.scss']
})
export class HeaderBarComponent{
    @Input() title= null;
}