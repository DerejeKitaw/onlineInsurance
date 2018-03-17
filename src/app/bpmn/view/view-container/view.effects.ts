// ./effects/auth.ts
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { FlowService } from "../../services";
import { FlowModel, ProcessModel, ActionTypes, TaskTypes, TaskModel, BpmnShapesType } from "../../models";
import { FlowViewActionTypes, GoToStateAction, ProcessTraversedAction } from "./view.actions";

@Injectable()
export class FlowViewEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: FlowService) {}

	// @Effect()
	// EditProfileRequest$ = this.actions$.ofType(FormsListActionTypes.FORMS_LIST).map(data => new FormsListStartAction());

	// @Effect()
	// GetForm$ = this.actions$
	// 	.ofType(FormsListActionTypes.GET_FORM_SCHEMA)
	// 	.map(toPayload)
	// 	.switchMap(id => this.service.get(id))
	// 	.map(formSchema => new FormSchemaFechedAction(formSchema));

	@Effect()
	get_forms_list$ = this.actions$
		.ofType(FlowViewActionTypes.PROCESS_TRAVERSED)
		.map(action => action.payload)
		.map(({ process, data, flow }: { process: ProcessModel; data: any; flow: FlowModel }) => {
			debugger;
			return new GoToStateAction({ process, data, flow });
		});

	@Effect()
	navigate$ = this.actions$
		.ofType(FlowViewActionTypes.GO_TO_STATE)
		.map(action => action.payload)
		.delay(500)
		.map(({ process, data, flow }: { process: ProcessModel; data: any; flow: FlowModel }) => {
			var task = process.currentState as TaskModel;
			var ToState = process.find(flow.ToState);
			debugger;
			if (task.Properties.Type == TaskTypes.NAVIGATE) {
				this.router.navigate([ task.Properties.Route ]);
			}
			if (flow.Properties.Type == ActionTypes.NAVIGATE) {
				this.router.navigate([ flow.Properties.Route ]);
			}

			if (ToState.ShapeType == BpmnShapesType.GATEWAY) {
				debugger;
				let selectedflow: FlowModel;
				if (ToState.Flows.length == 1) {
					selectedflow = ToState.Flows[0];
				} else {
					selectedflow = ToState.Flows.find(flowItem => {
						debugger;
						var evaluator = function() {
							return eval(flowItem.Properties.Condition);
						};
						return evaluator.call(process.Data);
					});
				}
				process.ActiveStateId = selectedflow.ToState;
				return new ProcessTraversedAction({
					process: process,
					data: process.Data,
					flow: selectedflow
				});
			}
			// return new GoToStateAction({ process, data, flow });
			return { type: "null" };
		});
}
