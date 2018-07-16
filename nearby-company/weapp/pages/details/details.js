/*
 * @Author: ShenBao 
 * @Date: 2018-07-15 00:38:59 
 * @Last Modified by: ShenBao
 * @Last Modified time: 2018-07-16 22:34:26
 */
// pages/details/details.js

import requests from '../../requests/index.js';
const {
    getInfo
} = requests;

import Mindex from '../../models/index.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {

        isShowLoading: true,

        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000,

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    /**
     * 拨打电话
     */
    makePhoneCallHandle: function (event) {

        let phoneNumber = this.data.info.tel;

        wx.makePhoneCall({
            phoneNumber: phoneNumber
        });
    },

    /**
     * 一键导航
     */

    toOpenLocationHandle: function (event) {

        let { latitude, longitude, name, address } = this.data.info;

        wx.openLocation({
            latitude: Number(latitude),
            longitude: Number(longitude),
            name,
            address
        });

    },

    /**
     * getDetails
     */
    getDetails: function (opts) {


        getInfo({
            data: opts,
            success: (res) => {

                let {
                    statusCode,
                    errMsg,
                    data
                } = res;
                if (data.status !== 200) {
                    console.log('status !== 200');
                    return;
                }

                let info = Mindex.Minfo(data.data);
                let setData = {
                    info,
                    isShowLoading: false
                }

                this.setData(
                    setData
                );
            },
            fail: (res) => {
                console.log(res);
            }
        });

    }
})