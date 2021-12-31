import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    browserName: 'chromium',
    baseURL: 'http://localhost:3006',
  },
};
export default config;
