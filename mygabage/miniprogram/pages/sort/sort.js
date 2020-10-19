// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList:[
      {url:"../../images/kehuishoulaji-caise.png",
      title:"可回收垃圾"
    },
      {url:"../../images/youhailaji.png",
      title:"有害垃圾"
    },
    {url:"../../images/shilaji-caise.png",
    title:"湿垃圾"
  },
  {url:"../../images/ganlaji-caise.png",
      title:"干垃圾"
    },
   
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  goSearch:function(){
    wx.navigateTo({
      url: '/pages/ai/search',
    })
  },

  onClick:function(e){
    console.log(JSON.stringify(e))
    var index = e.currentTarget.dataset.index
    var indexClick = 0;
    switch(index){
      case 0:
        indexClick=1
        break;
      case 1:
        indexClick = 2
        break;
      case 2:
        indexClick = 3
        break;
      case 3:
        indexClick = 4
        break;
    }
    wx.navigateTo({
      url: '/pages/ai/filter/filter?type=' + indexClick,
    })
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