// miniprogram/pages/ai/search.js

const db = wx.cloud.database({
  env: 'my-cloud-981201'
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myIndex: 0,
    MAX_LIMIT: 20,
    page: 0,
    dataCount: 0,
    datas: [],
    searchTxt: "",
    logo: "",
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  searchIcon: function(e) {
    var that = this
    that.data.searchTxt = e.detail.value
    console.log("搜索：" + that.data.searchTxt)
    var index = that.data.myIndex
    db.collection('product').where({
        name: db.RegExp({
          regexp: that.data.searchTxt,
        })
      })
      .get({
        success: function(res) {
          console.log(res)
          if (res.data.length == 0) {
            wx.showModal({
              title: '提示',
              content: '查询无结果，是否提交数据？',
              success: function (res) {
                if (res.confirm) {//这里是点击了确定以后
                  console.log('用户点击确定')
                  wx.navigateTo({
                    url: '../result/commit',
                  })
                } else {//这里是点击了取消以后
                  console.log('用户点击取消')
                }
              }
            })

          } else {
            console.log(res.data[0].sortId)
            that.setData({
              index: res.data[0].sortId
            })
            console.log(index)
            console.log(res.data[0].sortId)
            var indexClick = that.data.index
            wx.navigateTo({
              url: '/pages/result/list?keyword=' + that.data.searchTxt,
            })
          }
        },
      })
    that.data.myIndex = index
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

  }
})