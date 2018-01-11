import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeState } from '../../../common/providers/storage/homeState.provider';
import { Constants } from '../../../configuration/constants';

@Component({
    selector: 'home-page',
    templateUrl: 'homePage.component.html'
})
export class HomePageComponent {
    retailText: string = Constants.retailText;
    correspondentText: string = Constants.correspondentText;
    wholesaleText: string = Constants.wholesaleText;
    customerServiceText: string = Constants.customerServiceText;

    constructor(public homeState: HomeState,
        private router: Router
    ) {
    }

    onChannelClick(channel: string) {
        this.homeState.channel = channel;
        this.router.navigate(['home/login']);
    }
}