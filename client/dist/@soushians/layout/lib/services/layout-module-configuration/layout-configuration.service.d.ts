import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ConfigState } from "@soushians/config";
import { LayoutModuleConfig } from "../../layout.config";
export declare class LayoutConfigurationService {
    private store;
    private _config;
    readonly config: any;
    config$: BehaviorSubject<LayoutModuleConfig>;
    constructor(configFile: any, store: Store<ConfigState>);
}
