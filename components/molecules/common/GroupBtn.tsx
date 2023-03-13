import React, { memo } from 'react';
import styled from 'styled-components';

import Button from '@atom/Button';
import type { BtnProps } from '@atom/Button';

export interface GroupBtnStyleProps extends React.HTMLAttributes<HTMLButtonElement> {
  maxWidth?: number | string;
}

const GroupBtnWrap = styled.div<GroupBtnStyleProps>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  gap: 1rem;
`;

export interface GroupBtnProps extends GroupBtnStyleProps {
  btns: BtnProps[];
}

function GroupBtn({ btns, maxWidth }: GroupBtnProps) {
  return (
    <GroupBtnWrap maxWidth={maxWidth}>
      {btns &&
        btns.length > 0 &&
        btns.map(({ children, ...rest }, idx) => (
          <Button key={`btn-${idx}`} {...rest}>
            {children}
          </Button>
        ))}
    </GroupBtnWrap>
  );
}

export default memo(GroupBtn);
