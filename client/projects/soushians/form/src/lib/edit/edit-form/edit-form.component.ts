import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { FormSchemaModel, EditFormApiModel } from "../../models";
import { FormService } from "../../services/form.service";
import { AddFormComponent } from "../../add/add-form";

@Component({
	selector: "edit-form",
	templateUrl: "./edit-form.component.html"
})
export class EditFormComponent extends AddFormComponent {
	@Input() schema: any;
	emit() {
		if (!this.formGroup.valid) return;
		return this.submited.emit(this.formGroup.value);
	}
}
