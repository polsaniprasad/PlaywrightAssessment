const config = {
  testDir: './tests',
  use: { headless: false },
  projects: [
    { name: 'Google Chrome', use: { channel: 'chrome' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } }, // Safari engine
  ],
};

module.exports = config;