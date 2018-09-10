import { BaseFields } from './base_field';

export class RadioQuestion extends BaseFields<string> {
  controlType = 'radio';
value = 'string';
  constructor(options: {} = {}) {
    super(options);
    this.value= options['value'] || '';
    
  }
}
