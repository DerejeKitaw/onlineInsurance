import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";

import { OrderFormModel } from "../models/order-form.model";
import { GetNewOrderForm, SaveOrderForm } from "./mock";
import { OrderConfigurationService } from "./order-configuration.service";

@Injectable({
	providedIn: "root"
})
export class OrderFormService {
	constructor(private http: HttpClient, private configurationService: OrderConfigurationService) {}

	GetNewOrderForm(type): Observable<OrderFormModel> {
		// return of(GetNewOrderForm as OrderFormModel);
		return this.http
			.get(`${this.configurationService.config.env.server}/order/GetNewOrderForm/?type=1`)
			.map((response: any) => response.Result as OrderFormModel);
	}
	SaveOrderForm(): Observable<OrderFormModel> {
		// return of(SaveOrderForm as OrderFormModel);
		return this.http
			.get(`${this.configurationService.config.env.server}/order/SaveOrderForm`)
			.map((response: any) => response.Result as OrderFormModel);
	}
	ApproveOrder(orderForm: OrderFormModel): Observable<OrderFormModel> {
		return this.http
			.post(`${this.configurationService.config.env.server}/order/ApproveOrder`, orderForm)
			.map((response: any) => response.Result as OrderFormModel);
	}
	RejectOrder(orderForm: OrderFormModel): Observable<OrderFormModel> {
		return this.http
			.post(`${this.configurationService.config.env.server}/order/RejectOrder`, orderForm)
			.map((response: any) => response.Result as OrderFormModel);
	}
}
