/*
 * @Author: ShenBao 
 * @Date: 2018-07-16 23:05:00 
 * @Last Modified by:   ShenBao 
 * @Last Modified time: 2018-07-16 23:05:00 
*/

// "id": "5",
// "name": "公司2",
// "score": "3.0",
// "tel": "1231243141",
// "time": "13：00 --- 17:00",
// "address": "北京市海淀区国际创业园东区",
// "latitude": "40.052647871878",
// "longitude": "116.31269990339",
// "content": "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
// "banner": [
// "http://wx.hougeauto.com/Public/attached/2018/07/16/5b4c4dc811d6b.jpg"
// ],
// "icon": "http://wx.hougeauto.com/Public/attached/2018/07/16/5b4c4dc089ecd.jpg",
// "created_time": "2018-07-16 03:48:39",
// "updated_time": null,
// "distance": "18.3"


function Minfo(info) {

    let timeArr = (info.time).split(' --- ');
    let startTime = timeArr[0];
    let endTime = timeArr[1];

    let banner = info.banner;
    if (!(banner instanceof Array)) {
        banner = [];
    }

    let newinfo = {};

    newinfo.id = info.id;
    newinfo.name = info.name;
    newinfo.score = info.score;
    newinfo.tel = info.tel;
    newinfo.startTime = startTime;
    newinfo.endTime = endTime;
    newinfo.address = info.address;
    newinfo.latitude = info.latitude;
    newinfo.longitude = info.longitude;
    newinfo.content = info.content;
    newinfo.banner = banner;
    newinfo.icon = info.icon;
    newinfo.distance = info.distance;

    return newinfo;
}

module.exports = {
    Minfo,
}