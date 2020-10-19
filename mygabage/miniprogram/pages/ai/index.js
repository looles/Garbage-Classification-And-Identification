// pages/ai/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ShOW_TOP:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("第一个页面")
    var myDate = new Date();
    var isShowed = wx.getStorageSync("tip")
    if(isShowed!=1){
      setTimeout(()=>{
        this.setData({
          SHOW_TOP:false
        })
        wx.setStorageSync("tip", 1)
      },2*1000)
    }else{
      this.setData({
        SHOW_TOP:false
      })
    }
  },

  goSearch:function(){
    wx.navigateTo({
      url: 'search',
    })
  },

  onBindCamera:function(){
    wx.navigateTo({
      url: 'camera/camera',
    })
  }
})