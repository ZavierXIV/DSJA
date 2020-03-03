cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/wifiwizard2/www/WifiWizard2.js",
        "id": "wifiwizard2.WifiWizard2",
        "pluginId": "wifiwizard2",
        "clobbers": [
            "window.WifiWizard2"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ping/www/ping.js",
        "id": "cordova-plugin-ping.ping",
        "pluginId": "cordova-plugin-ping",
        "clobbers": [
            "Ping"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "es6-promise-plugin": "4.1.0",
    "wifiwizard2": "3.1.1",
    "cordova-plugin-ping": "0.5.0"
}
// BOTTOM OF METADATA
});