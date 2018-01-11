import { Injectable } from '@angular/core';
import { BaseState } from './baseState.provider';
import { StateType } from './baseState.provider';

@Injectable()
export class HomeState extends BaseState {
    constructor() {
        super([
            { type: StateType.session, name: 'channel' },
            { type: StateType.session, name: 'authenticationtoken' },
            { type: StateType.inMemory, name: 'isBusy' }
        ]);
    }

    public set channel(value: string) {
        this.setState('channel', value);
    }
    public get channel(): string {
        return this.getState<string>('channel');
    }

    public get authentication(): string {
        return this.getState<string>('authenticationtoken');
    }
    public set authentication(value: string) {
        this.setState('authenticationtoken', value);
    }
    
    public set isBusy(value: boolean) {
        this.setState('isBusy', value);
    }
    public get isBusy(): boolean {
        return this.getState<boolean>('isBusy');
    }

    public clear(): void {
        this.clear();
    }
}