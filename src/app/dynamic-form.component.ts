import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { BaseFields }              from './base_field';
import { BaseControlService }    from './base-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ BaseControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: BaseFields<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: BaseControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}