import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reports-select-dialog',
  templateUrl: './reports-select-dialog.component.html',
  styleUrls: ['./reports-select-dialog.component.scss']
})
export class ReportsSelectDialogComponent {
  disabled:boolean = true;
  toppings = this._formBuilder.group({
    sid: this.disabled,
    n19: false,
    firstName: true,
    lastName: false,
    email: true,
    clockIn:false,
    clockOut:false

  });

  constructor(private _formBuilder: FormBuilder) {}   
}
