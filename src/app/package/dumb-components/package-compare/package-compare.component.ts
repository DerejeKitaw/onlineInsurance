﻿import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { DataSource } from "@angular/cdk/collections";
import { MatSort } from "@angular/material";
import { Store } from "@ngrx/store";

import * as fromLayout from "@soushians/layout";
import { responseStatusTypes } from "@soushians/shared";

import { PackageAddModel } from "app/models/package";
import * as appReducer from "app/reducers";

@Component({
	selector: "package-compare",
	templateUrl: "./package-compare.component.html",
	styleUrls: [ "./package-compare.component.scss" ]
})
export class PackageCompareComponent implements OnInit {
	@Input() comparision: any;
	@Output() select = new EventEmitter();
	ready = false;
	// displayedColumns = ['icon', 'companyName', 'totalPenalty', 'dayPenalty', 'penalty', 'satisfaction', 'portion', 'complaint', 'branch', 'discount'];
	displayedColumns = [
		"icon",
		"companyName",
		"price",
		"cover",
		"totalPenalty",
		"dayPenalty",
		"penalty",
		"satisfaction",
		"portion",
		"branch",
		"actions"
	];
	links: any;
	policyTimebox: { value: string; dispalyValue: string }[];
	@ViewChild("selectPolicy") selectPolicy: ElementRef;
	constructor(private store: Store<appReducer.State>) {
		this.store.dispatch(new fromLayout.CloseSidenavAction());
		this.store.dispatch(new fromLayout.ChangeLayout("without-margin"));

		this.links = [
			{
				title: "درخواست مشاوره",
				description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
				icon: "phone_in_talk"
			}
		];
		this.policyTimebox = [
			{
				value: "1",
				dispalyValue: "یک سال"
			},
			{
				value: "2",
				dispalyValue: "شیش ماه"
			},
			{
				value: "3",
				dispalyValue: "3سه ماه"
			}
		];
	}

	ngOnInit() {
		this.ready = true;
	}
	done(policy) {
		this.select.emit(policy);
	}
}
