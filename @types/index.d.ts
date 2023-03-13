declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.mdx';

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}
