// pages/kecheng/kecheng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kechengData:[
      {
        lujing:"../../images/ke1@2x.png",
        title:"创意DIY班",
        subtitle:"适合1-3岁宝宝",
        flag:1
      },
      {
        lujing:"../../images/ke2@2x.png",
        title:"创意美术班",
        subtitle:"适合3-6岁宝宝",
        flag:0
      },
      {
        lujing:"../../images/ke4@2x.png",
        title:"色彩班",
        subtitle:"适合6-7岁宝宝",
        flag:1
      },
      {
        lujing:"../../images/ke3@2x.png",
        title:"素描班",
        subtitle:"适合7-8岁宝宝",
        flag:1
      },
      {
        lujing:"../../images/ke5@2x.png",
        title:"速写班",
        subtitle:"适合8-9岁宝宝",
        flag:1
      }
    ]
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
  tiao:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/mulu/mulu?id="+id
    });
  }
})