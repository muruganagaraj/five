import { Injectable } from '@angular/core';

@Injectable()
export class ExternalUrl {
    customerServiceCenter?: string = 'http://172.16.4.192/customer-service-center';
    conatctUs?: string = 'http://172.16.4.192/contact-us';
    spmLandingPage?: string = 'http://172.16.4.192/';
    joinUsForRetail?: string = 'http://172.16.4.192/partner-with-us';
    joinUsForBroker?: string = 'http://172.16.4.192/partner-with-us';
    licensing?: string = 'http://172.16.4.192/licensing';
    nmlsConsumer?: string ='http://www.nmlsconsumeraccess.org';
    nmlsCompany?: string = 'http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1788';
    aboutUs?: string = 'http://172.16.4.192/about-us';
}

@Injectable()
export class Configuration {
    public ApiServer: string = process.env.API_URL;
    public appVersion?: string = '1.0.0';
    public uiBaseUrl?: string = 'http://localhost:1990/net/poswebwholesale/';
    public sessionTimeOut?: number = 20;
    public isMIcalculatorDisable?: boolean = false;
    public isMIDisable?: boolean = false;
    public externalUrls?: ExternalUrl;
    public allowedChannelSwapRoutes?: string[];
    public alterationsMaxValueFor203kLoan?: number;
    constructor() {
        this.externalUrls = new ExternalUrl();
    }
} 