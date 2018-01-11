import { Injectable } from '@angular/core';

export enum StateType {
    inMemory,
    session,
    persisted
}

interface StorageDescriptor {
    name: string;
    type: StateType;
}

interface StateStorage {
    type: StateType;
    value?: any;
}

@Injectable()
export class BaseState {
    private _storage: any = {};
    constructor(storage: StorageDescriptor[]) {
        (storage || []).forEach((descriptor: StorageDescriptor) => {
            this._storage[descriptor.name] = { type: descriptor.type };
        });
    }

    public clear(): void {
        for (let item in this._storage) {
            if (this._storage.hasOwnProperty(item)) {
                this.setState(item, undefined);
            }
        }
    }

    public reset(): void {
        this.clear();
    }

    protected setState<T>(name: string, value: T): void {
        let storage: StateStorage = this._storage[name];
        if (!storage) {
            throw new Error(`Cannot find storage item named ${name}`);
        }
        switch (storage.type) {
            case StateType.inMemory:
                storage.value = value;
                break;
            case StateType.session:
                if (Boolean(value)) {
                    sessionStorage[name] = value;
                } else {
                    delete sessionStorage[name];
                }
                break;
            case StateType.persisted:
                if (Boolean(value)) {
                    localStorage[name] = value;
                } else {
                    localStorage[name];
                }
                break;
            default:
                console.error(`Don't know how to handle storage type ${storage.type}`);
                break;
        }
    }

    protected getState<T>(name: string): T {
        let storage: StateStorage = this._storage[name];
        if (!storage) {
            throw new Error(`Cannot find storage item named ${name}`);
        }
        switch (storage.type) {
            case StateType.inMemory:
                return storage.value;
            case StateType.session:
                return sessionStorage[name];
            case StateType.persisted:
                return localStorage[name];
            default:
                console.error(`Don't know how to handle storage type ${storage.type}`);
                return storage.value;
        }
    }
}