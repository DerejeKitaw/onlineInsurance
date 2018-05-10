import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { OrderFormModel } from "../models/order-form.model";
import { GetNewOrderForm, SaveOrderForm } from "./mock";
import { of } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class OrderFormService {
	constructor(private http: HttpClient) {}

	GetNewOrderForm(): Observable<OrderFormModel> {
		// return of(GetNewOrderForm as OrderFormModel);
		return this.http
			.get("http://185.208.174.92:2000/order/GetNewOrderForm/?type=1")
			.map((response: any) => response.Result as OrderFormModel);
	}
	SaveOrderForm(): Observable<OrderFormModel> {
		// return of(SaveOrderForm as OrderFormModel);
		return this.http
			.get("http://185.208.174.92:2000/order/SaveOrderForm")
			.map((response: any) => response.Result as OrderFormModel);
	}
}