import { CracoConfig } from '@craco/types';

const config: CracoConfig = {
  webpack: {
    configure: {
      entry: './src/index.tsx',
    },
  },
};

export default config;
