import React, { memo } from 'react';

import { CopyrightWrap } from './styles';

function Copyright() {
  return (
    <CopyrightWrap>
      <span>All right reserved.</span> ©2022 day-off
    </CopyrightWrap>
  );
}

export default memo(Copyright);
