import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseFields } from './base_field';

@Injectable()
export class BaseControlService {
  

  toFormGroup(questions: BaseFields<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '')
                                          console.log("Finding",question)
    });
    return new FormGroup(group);
  }
}
