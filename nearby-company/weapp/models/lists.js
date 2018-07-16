/*
 * @Author: ShenBao 
 * @Date: 2018-07-16 23:05:15 
 * @Last Modified by:   ShenBao 
 * @Last Modified time: 2018-07-16 23:05:15 
*/

// "id": "4",
// "name": "公司1",
// "score": "3.5",
// "tel": "13242312433",
// "time": "13：00 --- 17:00",
// "address": "北京市朝阳区朝阳大悦城",
// "latitude": "39.931187196258",
// "longitude": "116.52537868255",
// "content": "饿313123",
// "banner": "/Public/attached/2018/07/16/5b4c4e9409632.jpg",
// "icon": "http://wx.hougeauto.com/Public/attached/2018/07/14/5b4a030a43db8.jpg",
// "created_time": "2018-07-14 10:05:19",
// "updated_time": "2018-07-16 03:51:50",
// "distance": "10.5"

function Mlists(lists) {

    if (!(lists instanceof Array)) {
        lists = [];
    }
    let newList = [];
    lists.forEach(item => {
        let newItem = {};
        let timeArr = (item.time).split(' --- ');
        let startTime = timeArr[0];
        let endTime = timeArr[1];

        newItem.id = item.id;
        newItem.name = item.name;
        newItem.score = parseInt(item.score);
        newItem.tel = item.tel;
        newItem.startTime = startTime;
        newItem.endTime = endTime;
        newItem.address = item.address;
        newItem.latitude = item.latitude;
        newItem.longitude = item.longitude;
        newItem.content = item.content;
        newItem.banner = item.banner;
        newItem.icon = item.icon;
        newItem.distance  = item.distance;

        newList.push(item);
    });

    return newList;
}

module.exports = {
    Mlists,
}








