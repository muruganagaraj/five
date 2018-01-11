//Library Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Application Modules
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeHeaderComponent } from './home/homeHeader/homeHeader.component';
import { LoginComponent } from './home/login/login.component';
import { HomePageComponent } from './home/homePage/homePage.component';
import { HomeFooterComponent } from './home/homeFooter/homeFooter.component';
import { BaseState } from '../common/providers/storage/baseState.provider';
import { HomeState } from '../common/providers/storage/homeState.provider';

//Providers
import { AppInterceptor } from '../common/interceptors/app.interceptor';
import { Configuration, ExternalUrl } from '../configuration/configuration';
import { CanActivateRouteGuard } from '../common/providers/routeGuards/canActivateRouteGuard.provider';
import { AuthenticatedRouteGuard } from '../common/providers/routeGuards/authenticatedRouteGuard.provider';


@NgModule({
    imports: [
        BrowserModule, RouterModule, routing, FormsModule, BrowserAnimationsModule, ToasterModule, NgbModule
    ],
    declarations: [
        AppComponent, HomeComponent, HomeHeaderComponent,
        DashboardComponent, LoginComponent, HomePageComponent, HomeFooterComponent
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi: true
    }, Configuration, ExternalUrl, BaseState, HomeState, CanActivateRouteGuard, AuthenticatedRouteGuard],
    bootstrap: [AppComponent]
})
export class AppModule { } 
