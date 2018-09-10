import { BaseFields } from './base_field';
import { Key } from 'readline';

export class TextboxQuestion extends BaseFields<string> {
  controlType = 'textbox';
  type: string;
  name:string;
  id: Key;

  constructor(options: {} = {}) {
    super(options);
    this.name = options['name'] || '';
    this.id =options['id'];
  }
}
