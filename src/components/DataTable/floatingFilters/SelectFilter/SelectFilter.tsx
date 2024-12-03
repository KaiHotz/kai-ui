import { CustomFloatingFilterProps } from 'ag-grid-react';

import { ISelectOption } from '../../../Select';
import { Form, FormSelect } from '../../../Forms';
import './SelectFilter.scss';

export interface SelectFilterProps extends CustomFloatingFilterProps {
  placeholder?: string;
  options: ISelectOption[];
}

export const SelectFilter = ({ placeholder, options, onModelChange, currentParentModel }: SelectFilterProps) => {
  return (
    <div className="ui-select-filter">
      <Form
        defaultValues={{
          filter: currentParentModel() || undefined,
        }}
        onSubmit={(values) => {
          onModelChange({ filter: values.filter?.value || null, filterType: 'select' });
        }}
        submitOnChange
      >
        <FormSelect
          name="filter"
          small
          options={options}
          placeholder={placeholder}
          reserveSpaceForError={false}
          menuPlacement="bottom"
          isClearable
        />
      </Form>
    </div>
  );
};
