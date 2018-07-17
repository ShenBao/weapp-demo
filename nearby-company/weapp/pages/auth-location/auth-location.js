/*
 * @Author: ShenBao shenbaoone@gmail.com 
 * @Date: 2018-07-17 21:50:21 
 * @Last Modified by: ShenBao shenbaoone@gmail.com 
 * @Last Modified time: 2018-07-17 21:50:21 
*/

// pages/auth-location/auth-location

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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

    bindOpenSetting: function(res) {

        let auth = res.detail.authSetting;
        console.log(auth);

        if (auth['scope.userLocation'] === true) {
            let url = '/pages/list/list';
            wx.redirectTo({
                url: url,
            })
        }

    }
})