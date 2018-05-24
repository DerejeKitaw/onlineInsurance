/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { EffectsModule } from "@ngrx/effects";
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from "@angular/material";
import { LayoutReducers } from "./reducers";
import { MainMenuComponent, SearchBoxComponent, LogoContainerComponent, ToolbarMenuComponent, FooterComponent, TitleComponent, MainComponent } from "./dumb-components";
import { LayoutConfigurationService } from "./services";
import { MODULE_CONFIG_TOKEN } from "./layout.config";
import { BrowserModule } from "@angular/platform-browser";
var NgsLayoutModule = /** @class */ (function () {
    function NgsLayoutModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsLayoutModule.forRoot = function (config) {
        return {
            ngModule: RootNgsLayoutModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, LayoutConfigurationService]
        };
    };
    return NgsLayoutModule;
}());
export { NgsLayoutModule };
NgsLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BrowserModule,
                    RouterModule,
                    FormsModule,
                    HttpClientModule,
                    FlexLayoutModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSnackBarModule,
                    MatSidenavModule,
                    MatExpansionModule,
                    MatSelectModule,
                    MatFormFieldModule,
                    MatListModule,
                    MatMenuModule,
                    MatRadioModule,
                    MatInputModule,
                    MatToolbarModule,
                    MatDatepickerModule,
                    MatProgressBarModule,
                    RouterModule
                ],
                declarations: [
                    MainMenuComponent,
                    SearchBoxComponent,
                    LogoContainerComponent,
                    ToolbarMenuComponent,
                    FooterComponent,
                    TitleComponent,
                    MainComponent
                ],
                exports: [
                    MainMenuComponent,
                    SearchBoxComponent,
                    LogoContainerComponent,
                    ToolbarMenuComponent,
                    FooterComponent,
                    TitleComponent,
                    MainComponent
                ]
            },] },
];
var RootNgsLayoutModule = /** @class */ (function () {
    function RootNgsLayoutModule() {
    }
    return RootNgsLayoutModule;
}());
export { RootNgsLayoutModule };
RootNgsLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgsLayoutModule, StoreModule.forFeature("layout", LayoutReducers), EffectsModule.forFeature([])],
                exports: [NgsLayoutModule]
            },] },
];
//# sourceMappingURL=layout.module.js.map
