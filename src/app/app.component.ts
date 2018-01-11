import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute, Params, RoutesRecognized, NavigationCancel } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HomeState } from '../common/providers/storage/homeState.provider';
import '../assets/css/styles.css';
import '../assets/less/styles.less';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
    queryParamsSubscription: Subscription;
    paramsSubscription: Subscription;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public homeState: HomeState
    ) {
        this.router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                console.log(event.url);
                this.homeState.isBusy = true;
            }
            if (event instanceof RoutesRecognized) {
                console.log(event.state.root.firstChild.data.title);
            }
            if (event instanceof NavigationEnd) {
                console.log(event.url);
                this.homeState.isBusy = false;
            }
            if (event instanceof NavigationCancel) {
                console.log(event.url);
                this.homeState.isBusy = false;
            }
        });
    }

    ngOnInit() {
        this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
            let userId = params['username'];
            console.log(userId);
        });

        this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
            let userId = params['username'];
            console.log(userId);
        });
    }

    ngOnDestroy() {
        this.queryParamsSubscription.unsubscribe();
        this.paramsSubscription.unsubscribe();
    }
}