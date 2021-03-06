cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "wifiwizard2.WifiWizard2",
      "file": "plugins/wifiwizard2/www/WifiWizard2.js",
      "pluginId": "wifiwizard2",
      "clobbers": [
        "window.WifiWizard2"
      ]
    },
    {
      "id": "cordova-plugin-ping.ping",
      "file": "plugins/cordova-plugin-ping/www/ping.js",
      "pluginId": "cordova-plugin-ping",
      "clobbers": [
        "Ping"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "es6-promise-plugin": "4.1.0",
    "wifiwizard2": "3.1.1",
    "cordova-plugin-ping": "0.5.0",
    "cordova-plugin-inappbrowser": "3.2.0"
  };
});