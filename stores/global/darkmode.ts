import { proxy } from 'valtio';

export interface ProxyDarkmode {
  darkmode: boolean;
}

export const proxyDarkmode = proxy<ProxyDarkmode>({
  darkmode: false,
});
