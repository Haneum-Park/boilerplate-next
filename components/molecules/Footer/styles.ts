import styled from 'styled-components';

import { Caption1 } from '@const/globalStyles';

type FooterWrapProps = {
  colorcode?: string;
};

export const FooterInfoWrap = styled.p<FooterWrapProps>`
  color: var(${({ colorcode }) => colorcode || '--color-grey-7'});
  font-size: calc(12rem / 16);
`;

export const CopyrightWrap = styled(Caption1)`
  color: var(--color-gray-6) !important;
  span {
    font-size: calc(12rem / 16);
    font-family: 'Bold';
    color: var(--color-gray-6) !important;
  }
`;
