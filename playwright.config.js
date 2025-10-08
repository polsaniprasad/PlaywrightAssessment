
const config = {
  testDir: './tests',
  use: { headless: false ,
    screenshot : "on",
    video : "retain-on-failure"
  },
  
  projects: [
    { name: 'Google Chrome', use: { channel: 'chrome' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } }, 
  ],
  reporter : [ ["dot"], ["json", {
     outputFile:"jsonReports/jsonReports.json" 
    } ], ["html", { 
      open: "never"
    }] ]
};

module.exports = config;