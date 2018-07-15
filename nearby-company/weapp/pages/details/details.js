/*
 * @Author: ShenBao 
 * @Date: 2018-07-15 00:38:59 
 * @Last Modified by: ShenBao
 * @Last Modified time: 2018-07-15 00:39:33
 */
// pages/details/details.js

import wxRequest from '../../requests/index.js';

Page({

    /**
     * 页面的初始数据
     */
    data: {

		isShowLoading: true

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

		let routeUrl = this.route;
		console.log(routeUrl);

        let id = options.id;

        const app = getApp();
        let location = app.globalData.location;
        let {
            latitude,
            longitude
        } = location;

        let data = {
            id,
            latitude,
            longitude
        };

        this.getDetails(data);

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    /**
     * 拨打电话
     */
    makePhoneCallHandle: function(event) {

        let item = event.currentTarget.dataset.item;

        let phoneNumber = '123456789';

        wx.makePhoneCall({
            phoneNumber: phoneNumber
        });
    },

    /**
     * 一键导航
     */

    toOpenLocationHandle: function(event) {

        let item = event.currentTarget.dataset.item;

        let latitude = 40.046494;
        let longitude = 116.34306;

        wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28,
            name: '测试地址',
            address: '北京市朝阳区大屯路枫林绿洲底商（中国科学院天地科学园区对面）'
        });

    },

    /**
     * getDetails
     */
    getDetails: function(opts) {

        console.log(opts);

		wx.showLoading({
			title: '加载中',
		});

		this.setData({
			isShowLoading: false
		});

		wx.hideLoading();

    }
})