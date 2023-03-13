import React, { memo } from 'react';
import styled from 'styled-components';

import Copyright from '@molecule/Footer/Copyright';

function Footer() {
  return (
    <FooterWrap>
      <Copyright />
    </FooterWrap>
  );
}

export default memo(Footer);

const FooterWrap = styled.footer`
  @media screen and (max-width: 1600px) {
    position: absolute;
    bottom: 2%;
    transform: translateY(-50%);
  }
`;
