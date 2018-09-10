import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './base-field-dropdown';
import { BaseFields }     from './base_field';
import { TextboxQuestion }  from './base-field-textbox';
import {RadioQuestion} from './base-field-radio';
import { CheckQuestion } from './base-field-checkbox';

@Injectable()
export class QuestionService {

  getQuestions() {

    let questions: BaseFields<any>[] = [

      new DropdownQuestion({
        key: 'quality',
        label: 'quality',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Subash',
        required: true,
        order: 1
      }),

      new RadioQuestion({
        key:'Payment' ,
        label:'Payment',
        value:'choose'
      ,order:5
      }) ,
      
      new CheckQuestion({
        key:'Trial',
        label:'Somethoing',
        value:'work'
      }),

      new TextboxQuestion({
        key: 'skype',
        label: 'skype address',
        type: 'email',
        order: 2
      }),
      new DropdownQuestion({
        key: 'erae',
        label: 'reay',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
      })
    ]
    


    return questions;
  }
}

