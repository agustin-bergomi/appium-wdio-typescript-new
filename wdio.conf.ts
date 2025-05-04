import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel 7 API 34',
    'appium:platformVersion': '14',
    'appium:automationName': 'UiAutomator2',
    'appium:app': './apps/ApiDemos-debug.apk',
    'appium:appPackage': 'io.appium.android.apis',
    'appium:appActivity': '.ApiDemos'
  }],
  logLevel: 'info',
  hostname: '127.0.0.1',
  port: 5554,
  path: '/wd/hub',
  framework: 'mocha',
  injectGlobals: true,
  reporters: ['spec'],
  services: [['appium', { command: 'appium' }]],
  mochaOpts: {
    timeout: 60000,
    retries: 2
  },
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json'
    }
  },
  
};