import { SelectOption } from './select-option';
import { PvTableColumn } from 'src/pv/pv-table/pv-table.component';


export interface FieldDefinition {
  key: string,
  type: string,
  isId: boolean,
  label: string,
  showLabel:false,
  required: boolean,
  inputType?: string,
  options?: Array<SelectOption>
}
