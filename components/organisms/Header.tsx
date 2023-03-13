/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, memo } from 'react';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';

import Button from '@atom/Button';

import { proxyDarkmode } from '@store/global/darkmode';
import { proxyLanguage } from '@store/global/language';

import { cookies } from '@util/common.util';

export interface HeaderProps {
  img: ImageProps;
}

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;

  img {
    cursor: pointer;
  }
`;

const Languages = styled.div<{ darkmode: boolean }>`
  display: flex;
  justify-content: flex-end;
  > *,
  > button {
    color: var(--color-gray-4);
  }
  span {
    margin: 0 calc(5rem / 16);
  }
  button {
    border: none;
    border-radius: 0;
    margin: 0 !important;
    padding: 0;
    &.lang-ko,
    &.lang-en {
      color: var(--color-gray-${({ darkmode }) => (darkmode ? 6 : 9)});
    }
  }
`;

function Header({ img }: HeaderProps) {
  const { darkmode } = useSnapshot(proxyDarkmode);
  const { language } = useSnapshot(proxyLanguage);

  const onSwitchLanguage = useCallback((lang: 'ko' | 'en') => {
    proxyLanguage.language = lang;
  }, []);

  const onSwitchDarkmode = useCallback((mode: boolean) => {
    proxyDarkmode.darkmode = mode;
    cookies.set('darkmode', mode ? '1' : '0');
  }, []);

  return (
    <HeaderWrap>
      <Image {...img} onClick={() => onSwitchDarkmode(!darkmode)} />
      <Languages darkmode={darkmode}>
        <Button
          className={language === 'ko' ? 'lang-ko' : ''}
          onClick={() => onSwitchLanguage('ko')}
        >
          Kor
        </Button>
        <span>/</span>
        <Button
          className={language === 'en' ? 'lang-en' : ''}
          onClick={() => onSwitchLanguage('en')}
        >
          Eng
        </Button>
      </Languages>
    </HeaderWrap>
  );
}

export default memo(Header);
