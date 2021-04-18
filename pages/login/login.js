// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let button = wx.createUserInfoButton({
      type: 'text',
      text: '获取用户信息',
      style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
      }
    })
    button.onTap((res) => {
      console.log(res)
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let button = wx.createUserInfoButton({
      type: 'text',
      text: '获取用户信息',
      style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
      }
    })
    button.onTap((res) => {
      console.log(res)
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let button = wx.createUserInfoButton({
      type: 'text',
      text: '获取用户信息',
      style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
      }
    })
    button.onTap((res) => {
      console.log(res)
    })
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

  }
})