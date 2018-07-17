/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-07-17 21:49:33 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-07-17 21:49:33 
*/


// 资源公共地址
let imageUrl = 'http://img.host.cn/';
let staticUrl = 'http://img.static.cn/';

let imgConfigObj = {

  defaultHead: `${staticUrl}default_head@2x.jpg`,

  errorImg: `${staticUrl}error@2x.png`,

};

let imgConfig = {
  imageUrl,
  ...imgConfigObj
}

module.exports = imgConfig;