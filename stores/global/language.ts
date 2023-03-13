import { proxy } from 'valtio';

export interface ProxyLanguage {
  language: 'ko' | 'en';
}

export const proxyLanguage = proxy<ProxyLanguage>({
  language: 'ko',
});
