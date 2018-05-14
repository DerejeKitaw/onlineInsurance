import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	MatFormFieldModule,
	MatButtonModule,
	MatSelectModule,
	MatGridListModule,
	MatCardModule,
	MatExpansionModule,
	MatInputModule,
	MatTabsModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatIconModule,
	MatTableModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatCheckboxModule,
	MatStepperModule,
	MatChipsModule,
	MatRadioModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FileDropModule } from "ngx-file-drop";

import { InfraModule } from "@soushians/infra";

import { TestComponent } from "./test/test.component";
import { OrderRoutingModule } from "./order-routing.module";
import { StoreModule } from "@ngrx/store";
import { FeatureReducers } from "./order.reducers";
import { EffectsModule } from "@ngrx/effects";
import { GetOrderTypesApiEffects, SaveOrderFormApiEffects, GetNewOrderFormApiEffects } from "./services/api";
import { OrderComponent } from "./order.component";
import { NewOrderComponent } from "./new-order/new-order.component";
import { RouterModule } from "@angular/router";
import { CompareComponent } from "./compare/compare.component";
import { PoliciesCompareItemComponent } from "./policies-compare-item/policies-compare-item.component";
import { InsurerInfoComponent } from "./insurer-info/insurer-info.component";
import { SaveOrderApiEffects } from "./services/api/save-order";
import { PurchaseComponent } from "./purchase/purchase.component";
import { ReviewOrderComponent } from './review-order/review-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ViewOrderComponent } from './view-order/view-order.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		FormsModule,
		MatSelectModule,
		MatInputModule,
		MatSlideToggleModule,
		MatTabsModule,
		MatIconModule,
		MatButtonModule,
		MatChipsModule,
		MatRadioModule,
		MatTableModule,
		MatStepperModule,
		MatSidenavModule,
		MatCheckboxModule,
		MatCardModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatExpansionModule,
		MatGridListModule,
		FlexLayoutModule,
		StoreModule.forFeature("order", FeatureReducers),
		InfraModule,
		FileDropModule,
		OrderRoutingModule,
		EffectsModule.forFeature([
			GetOrderTypesApiEffects,
			SaveOrderFormApiEffects,
			GetNewOrderFormApiEffects,
			SaveOrderApiEffects
		])
	],
	declarations: [
		TestComponent,
		OrderComponent,
		NewOrderComponent,
		CompareComponent,
		PoliciesCompareItemComponent,
		InsurerInfoComponent,
		PurchaseComponent,
		ReviewOrderComponent,
		MyOrdersComponent,
		ViewOrderComponent
	]
})
export class OrderModule {}
