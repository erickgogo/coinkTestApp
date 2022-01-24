import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {

    private _loader : BehaviorSubject<LoaderData> = new BehaviorSubject<LoaderData>({show:false,loaderText:""});

    constructor() {        
    }

    showLoader(show: Boolean,loaderText: string = "") {        
        setTimeout(() => {
            var loaderData :LoaderData= {show,loaderText};
            this.loader.next(loaderData);    
        });        
    }

    public get loader(): BehaviorSubject<LoaderData> {
        return this._loader;
    }
}

export interface LoaderData {
    show: Boolean,
    loaderText: string    
}
