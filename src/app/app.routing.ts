import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './home/login/login.component';
import { HomePageComponent } from './home/homePage/homePage.component';
import { CanActivateRouteGuard } from '../common/providers/routeGuards/canActivateRouteGuard.provider';
import { AuthenticatedRouteGuard } from '../common/providers/routeGuards/authenticatedRouteGuard.provider';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', component: HomePageComponent},
            { path: 'login', component: LoginComponent, canActivate : [CanActivateRouteGuard] }
        ]
    },

    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticatedRouteGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: false });