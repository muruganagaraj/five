import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { HomeState } from '../../../common/providers/storage/homeState.provider';
import { ViewModel } from '../login/login.viewModel'

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    public vm?: ViewModel = {};
    public currentDate: any = new Date();
    private toasterService: ToasterService;

    constructor(private router: Router,
        public homeState: HomeState,
        toasterService: ToasterService) {
        this.toasterService = toasterService;
    }
    ngOnInit() {
        this.vm.loginVM = {};
        this.vm.loginVM.userName = 'Muruga';
        this.vm.loginVM.password = 'nagaraju';
    }
    onLoginClick() {
        if (this.isValid()) {
            this.homeState.authentication = 'Session ID';
            this.router.navigate(['dashboard']);
        } else {
            this.toasterService.pop('error','Invalid Credential');
        }
    }

    private isValid(): boolean {
        if (this.vm &&
            this.vm.loginVM &&
            this.vm.loginVM.userName === 'Muruga' &&
            this.vm.loginVM.password === 'nagaraju') {
            return true;
        }
        return false;
    }
    popToast() {
        this.toasterService.pop('success', 'Args Title', 'Args Body');
    }
}