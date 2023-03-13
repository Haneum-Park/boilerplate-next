/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
    // ! 컴파일 할 때 console을 전부 지움
    // removeConsole: true,
    // NOTE 만약 console.log 제외한 console을 전부 지우고 싶다면
    // removeConsole: {
    //   exclude: ['log'],
    // }
  },
  // NOTE 크기가 방대한 라이브러리들을 불러올 때, 전부 불러오지 않고 필요한 부부만 불러오는 방법
  // experimental: {
  // modularizeImports: {
  //   lodash: {
  //     transform: 'lodash/{{member}}',
  //   }
  // }
  // },
};

module.exports = nextConfig;
