import { Component } from '@angular/core';
import { Configuration } from '../../../configuration/configuration'

@Component({
    selector: 'home-footer',
    templateUrl: 'homeFooter.component.html'
})
export class HomeFooterComponent {
    public year: number = undefined;
    public appVersion: string = undefined;

    constructor(
        public config: Configuration) {
        this.year = new Date().getFullYear();
        this.appVersion = this.config.appVersion;
    }
}