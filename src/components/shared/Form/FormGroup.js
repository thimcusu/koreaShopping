import React from 'react';

import { StyledFormGroup } from './StyledForm';

function FormGroup() {
  return (
    <StyledFormGroup>
      <label>{label}</label>
      <input name={label} ref={register({ required })} />
    </StyledFormGroup>
  );
}

export default FormGroup;
