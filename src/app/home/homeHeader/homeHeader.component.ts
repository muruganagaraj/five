import { Component } from '@angular/core';
import { HomeState } from '../../../common/providers/storage/homeState.provider';
import { Configuration } from '../../../configuration/configuration'
 
@Component({
    selector: 'home-header',
    templateUrl: 'homeHeader.component.html'
})
export class HomeHeaderComponent{
    public userName: string;  
    public channel: string;

    constructor(public homeState: HomeState,
        public config: Configuration,
    ) {
        this.channel = this.homeState.channel;
        this.userName = 'Ramakrishnan Seerangasamy';
    }
}