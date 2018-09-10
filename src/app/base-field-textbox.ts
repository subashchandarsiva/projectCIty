import { BaseFields } from './base_field';


export class TextboxQuestion extends BaseFields<string> {
  controlType = 'textbox';
  type: string;
  name:string;


  constructor(options: {} = {}) {
    super(options);
    this.name = options['name'] || '';
  
  }
}
