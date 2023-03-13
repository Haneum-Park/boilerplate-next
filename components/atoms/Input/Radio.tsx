import React, { memo } from 'react';
import styled from 'styled-components';

import Label from '@atom/Label';

export interface RadioStyleProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface RadioProps extends RadioStyleProps {
  label: string;
  htmlFor: string;
}

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const RadioWrap = styled.input`
  padding: 0;
  margin: 0 5px;
`;

function Radio({ label, htmlFor, ...rest }: RadioProps) {
  return (
    <RadioContainer>
      <RadioWrap type='radio' {...rest} id={htmlFor} />
      <Label htmlFor={htmlFor}>{label}</Label>
    </RadioContainer>
  );
}

export default memo(Radio);
