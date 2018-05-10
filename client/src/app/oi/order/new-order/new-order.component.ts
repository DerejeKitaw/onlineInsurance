import { Component, OnInit } from "@angular/core";
import { OrderFormModel } from "../models";
import { Observable } from "rxjs/Observable";
import { AppState } from "../order.reducers";
import { Store } from "@ngrx/store";
import { FieldModel, FieldOptionModel } from "../models/field.model";
import { GetNewOrderFormStartAction, GetNewOrderFormApiModel } from "../services/api";
import {
	GetCarModelsOfBrandStartAction,
	GetCarModelsOfBrandApiModel,
	ComparePoliciesStartAction,
	ComparePoliciesApiModel
} from "../../policy/services/api";
import { FormGroup, FormControl } from "@angular/forms";
import { from } from "rxjs";
import { Router } from "@angular/router";

@Component({
	selector: "app-new-order",
	templateUrl: "./new-order.component.html",
	styleUrls: [ "./new-order.component.css" ]
})
export class NewOrderComponent implements OnInit {
	formGroup: FormGroup;
	orderForm$: Observable<OrderFormModel>;
	CarBrand$: Observable<FieldModel>;
	CarModel$: Observable<FieldModel>;
	CarModelOptions$: Observable<FieldOptionModel[]>;
	CarProductionYear$: Observable<FieldModel>;
	CarYearsWithoutIncident$: Observable<FieldModel>;
	LastPolicyExpirationDate$: Observable<FieldModel>;

	constructor(private store: Store<AppState>, private router: Router) {
		this.formGroup = new FormGroup({
			CarBrand: new FormControl(""),
			CarModel: new FormControl(""),
			CarProductionYear: new FormControl(""),
			CarYearsWithoutIncident: new FormControl(""),
			LastPolicyExpirationDate: new FormControl("")
		});
		this.orderForm$ = this.store.select(state => state.order.newOrder.data);
		this.CarBrand$ = this.orderForm$.filter(orderForm => orderForm != null).map(orderForm => orderForm.CarBrand);
		this.formGroup.get("CarBrand").valueChanges.subscribe(CarBrand =>
			this.store.dispatch(
				new GetCarModelsOfBrandStartAction({
					carBrand: CarBrand
				} as GetCarModelsOfBrandApiModel.Request)
			)
		);
		this.CarModelOptions$ = this.store.select(state => state.order.newOrder.carModels);
		this.CarProductionYear$ = this.orderForm$
			.filter(orderForm => orderForm != null)
			.map(orderForm => orderForm.CarProductionYear);
		this.CarYearsWithoutIncident$ = this.orderForm$
			.filter(orderForm => orderForm != null)
			.map(orderForm => orderForm.CarYearsWithoutIncident);
		this.LastPolicyExpirationDate$ = this.orderForm$
			.filter(orderForm => orderForm != null)
			.map(orderForm => orderForm.LastPolicyExpirationDate);
	}

	ngOnInit() {
		this.store.dispatch(new GetNewOrderFormStartAction({ type: 1 } as GetNewOrderFormApiModel.Request));
	}
	compare() {
		this.router.navigate([ "order/compare" ]);
	}
}
