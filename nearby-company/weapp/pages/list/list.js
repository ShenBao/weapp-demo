/*
 * @Author: ShenBao 
 * @Date: 2018-07-15 00:39:42 
 * @Last Modified by: ShenBao
 * @Last Modified time: 2018-07-16 22:34:22
 */
// pages/list/list.js

import requests from '../../requests/index.js';
const {
    getLists
} = requests;

import Mindex from '../../models/index.js'

const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
	data: {

		defaultShopImg: '../../imgs/default_store.png',

		inputShowed: false,
		inputVal: "",

		imgUrls: [
			'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
		],
		indicatorDots: false,
		autoplay: true,
		interval: 5000,
		duration: 1000,

		isShowLoading: true

	},

    /**
     * 生命周期函数--监听页面加载
     */
	onLoad: function (options) {

		this.getLocation();

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
     * 搜索
     */

	showInput: function () {
		this.setData({
			inputShowed: true
		});
	},
	hideInput: function () {
		this.setData({
			inputVal: "",
			inputShowed: false
		});
	},
	clearInput: function () {
		this.setData({
			inputVal: ""
		});
	},
	inputTyping: function (e) {
		this.setData({
			inputVal: e.detail.value
		});
	},

	bindconfirmHandle: function (e) {
		console.log(e.detail.value);

		let name = e.detail.value;
		let { latitude, longitude, } = this.data;

		let data = {
			latitude, longitude, name
		};

		this.getListData(data);

	},

    /**
     * 事件
     */

	toDetailsHandle: function (event) {

		let routeUrl = this.route;

		console.log(routeUrl);

		let item = event.currentTarget.dataset.item;
		console.log(item);

		let url = '/pages/details/details?id=' + item.id;
		wx.navigateTo({
			url: url,
		})

	},

    /**
     * 一键导航
     */

	toOpenLocationHandle: function (event) {

		let item = event.currentTarget.dataset.item;

		let {
            latitude,
			longitude,
			name,
			address

        } = item;

		wx.openLocation({
			latitude: Number(latitude),
			longitude: Number(longitude),
			name,
			address
		});

	},

    /**
     * 获取定位
     */

	getLocation: function () {

		wx.showLoading({
			title: '加载中',
		});

		wx.getLocation({
			type: 'wgs84',
			success: (res) => {

				let {
                    latitude,
					longitude
                } = res;

				this.setData({
					latitude,
					longitude
				});

				app.globalData.location = res;

				let data = {
					latitude,
					longitude
				};

				this.getListData(data);

			},
			fail: (res) => {

				let url = '/pages/auth-location/auth-location';
				wx.redirectTo({
					url: url,
				})
			},
			complete: (res) => { }
		})
	},

    /**
     * getListData
     */
	getListData: function (opts) {

		getLists({
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

				let {
                    list,
					banner
                } = data.data;
				let lists = Mindex.Mlists(list);
				if (!(banner instanceof Array)) {
					banner = [];
				}
				let setData = {
					banner,
					lists,
					isShowLoading: false
				}

				this.setData(
					setData
				);
			},
			fail: (res) => {
				console.log(res);
				wx.showToast({
					title: JSON.stringify(_onBLECharacteristicValueChangeCallbackResult),
					icon: 'none',
					duration: 2000
				})
			}
		});

	}
})