const sample = require('lodash.sample');
const argv = require('minimist')(process.argv.slice(2));
const isArray = require('lodash.isarray');

const customLaunchers = {
  bs_sierra_safari_10: {
    base: 'BrowserStack',
    device: null,
    os: 'OS X',
    browser_version: '10.0',
    browser: 'safari',
    os_version: 'Sierra',
  },
  bs_sierra_safari_11: {
    base: 'BrowserStack',
    device: null,
    os: 'OS X',
    browser_version: '11.1',
    browser: 'safari',
    os_version: 'High Sierra',
  },
  bs_sierra_safari_12: {
    base: 'BrowserStack',
    device: null,
    os: 'OS X',
    browser_version: '12.1',
    browser: 'safari',
    os_version: 'Mojave',
  },
  bs_sierra_safari_13: {
    base: 'BrowserStack',
    device: null,
    os: 'OS X',
    browser_version: '13.1',
    browser: 'safari',
    os_version: 'Catalina',
  },
  bs_win8_ie_10: {
    base: 'BrowserStack',
    browser: 'ie',
    browser_version: '10.0',
    os: 'Windows',
    os_version: '8',
  },
  bs_win81_ie_11: {
    base: 'BrowserStack',
    browser: 'ie',
    browser_version: '11.0',
    os: 'Windows',
    os_version: '8.1',
  },
  bs_win10_edge_17: {
    base: 'BrowserStack',
    device: null,
    os: 'Windows',
    browser_version: '17.0',
    browser: 'edge',
    os_version: '10',
  },
  bs_win10_edge_18: {
    base: 'BrowserStack',
    device: null,
    os: 'Windows',
    browser_version: '18.0',
    browser: 'edge',
    os_version: '10',
  },
  bs_win10_edge_84: {
    base: 'BrowserStack',
    device: null,
    os: 'Windows',
    browser_version: '84.0',
    browser: 'edge',
    os_version: '10',
  },
  bs_win10_firefox_60: {
    base: 'BrowserStack',
    device: null,
    os: 'Windows',
    browser_version: '60.0',
    browser: 'firefox',
    os_version: '10',
  },
  bs_win10_firefox_70: {
    base: 'BrowserStack',
    device: null,
    os: 'Windows',
    browser_version: '70.0',
    browser: 'firefox',
    os_version: '10',
  },
  bs_win10_firefox_80: {
    base: 'BrowserStack',
    device: null,
    os: 'Windows',
    browser_version: '80.0',
    browser: 'firefox',
    os_version: '10',
  },
  bs_win10_chrome_60: {
    base: 'BrowserStack',
    device: null,
    os: 'Windows',
    browser_version: '60.0',
    browser: 'chrome',
    os_version: '10',
  },
  bs_win10_chrome_70: {
    base: 'BrowserStack',
    device: null,
    os: 'Windows',
    browser_version: '70.0',
    browser: 'chrome',
    os_version: '10',
  },
  bs_win10_chrome_85: {
    base: 'BrowserStack',
    device: null,
    os: 'Windows',
    browser_version: '85.0',
    browser: 'chrome',
    os_version: '10',
  }
};

const getAllBrowsers = () => Object.keys(customLaunchers);
const getRandomBrowser = () => sample(getAllBrowsers());

/**
 * Environment variables are passed into the script and the depth of testing
 * is affected accordginly.
 *
 * - Whenever on a PR we only want to probe test with Firefox
 * - Whenever we are on the most recent node version on Travis we test via BrowserStack
 * - If none of the prior mentioned holds we assume to be running local and respect the passed
 *   in borwsers argv
 */
const shouldProbeOnly = argv.shouldProbeOnly === 'true';
const shouldTestOnBrowserStack = argv.shouldTestOnBrowserStack === 'true';
const defaultBrowsers = ['Firefox'];
const argvBrowsers = isArray(argv.browsers)
  ? argv.browsers.split(' ')
  : defaultBrowsers;
const browsers = shouldTestOnBrowserStack
  ? shouldProbeOnly
    ? defaultBrowsers
    : getAllBrowsers()
  : argvBrowsers;

module.exports = {
  customLaunchers,
  browsers,
  getRandomBrowser,
};
