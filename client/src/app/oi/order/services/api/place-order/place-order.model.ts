import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { RouterAction } from "@ngrx/router-store";
import { map, switchMap } from "rxjs/operators";

import { HttpRequestBaseModel, HttpResponseBaseModel } from "@soushians/shared";

import { OrderModel, InitiationGatewayResultuModel } from "../../../models";

export namespace PlaceOrderApiModel {
	export class Request {
		constructor(initValue = {}) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response {
		Result: InitiationGatewayResultuModel;
		constructor() {}
	}
}
