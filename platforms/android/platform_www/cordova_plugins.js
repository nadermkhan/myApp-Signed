cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-admob-plus.AdMob",
      "file": "plugins/cordova-plugin-admob-plus/www/AdMob.js",
      "pluginId": "cordova-plugin-admob-plus",
      "clobbers": [
        "window.AdMob"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-extension": "1.6.0",
    "cordova-plugin-splashscreen": "6.0.1",
    "cordova-plugin-admob-plus": "1.3.2"
  };
});