// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
    '../../images/banner-01@2x.png',
    '../../images/banner-02@2x.png',
    '../../images/banner-03@2x.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,  
    previousMargin:"30rpx",
    nextMargin:"30rpx",
    circular:true,
    // 热门课程数据
    hotLesson:[
      {
        color:"#4399f9",
        title:"创意DIY班",
        subtitle:"适合1-3岁宝宝"
      },
      {
        color:"#8c43f9",
        title:"速写班",
        subtitle:"适合3-6岁宝宝"
      },
      {
        color:"#f94388",
        title:"国画班",
        subtitle:"适合6-9岁宝宝"
      },
      {
        color:"#8333f9",
        title:"色彩班",
        subtitle:"适合9-16岁宝宝"
      },
      {
        color:"#f92088",
        title:"创意美术班",
        subtitle:"适合16-19岁宝宝"
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
  
  }
})