/*
 * @Author: ShenBao 
 * @Date: 2018-07-15 20:44:32 
 * @Last Modified by:   ShenBao 
 * @Last Modified time: 2018-07-15 20:44:32 
*/

/**
 * err提示框
 * code 错误状态码
 */
function errShowModal(code) {
  wx.showModal({
    title: '提示',
    content: `失败(${code})`,
    confirmText: "好的",
    showCancel: false,
    success: (res) => {
    }
  });
};


module.exports = {
  errShowModal,
}