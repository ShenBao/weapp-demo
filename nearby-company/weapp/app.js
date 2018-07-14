//app.js
import apiConfig from './config/api-config.js';
import imgConfig from './config/img-config.js';
import config from './config/config.js';

console.log(apiConfig, imgConfig, config);

App({
  onLaunch: function () {},
  globalData: {
    userInfo: null
  }
})