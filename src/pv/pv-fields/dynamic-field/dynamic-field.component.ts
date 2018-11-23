import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClassField } from '@angular/compiler/src/output/output_ast';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FieldDefinition } from '../view-models/field-definition';


@Component({
  selector: 'fw-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit, OnChanges  {
  @Input() field: FieldDefinition;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: boolean;
  public disabled = false;

  get isValid() { return this.form.controls[this.field.key].valid; }

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setEnableDisable(this.operation);
  }

  setEnableDisable(operation): void {
    if (operation === 'details' || !this.field || this.field.isId) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }


}
