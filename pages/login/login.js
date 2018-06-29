// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['请选择', '你所在', '位置'],
    customItem: '全部'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  bindRegionChange: function (e) {
    
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit:function(e){

    console.log(e.detail.value);
    var xinxi = e.detail.value;
    if (xinxi.userName == "" || xinxi.age=="" || xinxi.sex == ""){
      wx.showLoading({
        title: '信息么有正确',
        mask: true,
      });
      setTimeout(function () {
        wx.hideLoading();        
      }, 1000)
    }else{
      wx.showLoading({
        title: '注册中....',
        mask: true,
      });
      setTimeout(function () {
        app.globalData.userInfo = e.detail.value;
        console.log(e.detail.value);
        wx.hideLoading();
        wx.showToast({
          title: "欢迎你",
          icon: 'success',
          duration: 1500,
          mask: true,
          success: function (e) {
            console.log(1111);
            wx.switchTab({
              url: '/pages/index/index'
            });
          }

        });
      }, 2000)
    }


   
   

  }

})