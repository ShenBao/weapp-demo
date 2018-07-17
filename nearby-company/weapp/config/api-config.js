/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-07-17 21:49:21 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-07-17 21:49:21 
*/

// host
let host = 'https://wx.hougeauto.com/app/';

let apiConfig = {
	host,
	// 列表
	lists: `${host}lists`,
	// 详情
	info: `${host}info`

};

module.exports = apiConfig;