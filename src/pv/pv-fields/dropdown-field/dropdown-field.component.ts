import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { FieldDefinition } from '../view-models/field-definition';

@Component({
  selector: 'fw-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.css']
})
export class DropdownFieldComponent implements OnInit {
  @Input() field: FieldDefinition;
  @Input() form: FormGroup;
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit() {
  }

  hasOptions(): boolean {
    return this.field.options && this.field.options.length > 0;
  }

}
