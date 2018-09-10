import { BaseFields } from './base_field';

export class CheckQuestion extends BaseFields<string> {
  controlType = 'checkbox';
  type:string;
 value:string;

  constructor(options: {} = {}) {
    super(options);
    this.value = options['value'] || [];
  }
}
