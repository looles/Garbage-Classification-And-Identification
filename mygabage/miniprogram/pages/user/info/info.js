Page({
  data: {
    name : '',
    gender :'',
    city : '',
    province : ''
  },
  onLoad: function() {
    // 查看是否授权
    var that = this
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              that.setData({ name: res.userInfo.nickName })
              if(res.userInfo.gender==1){
                that.setData({ gender : '男' })
              }else if(res.userInfo.gender==2){
                that.setData({ gender : '女' })
              }
              that.setData({ city : res.userInfo.city })
              that.setData({ province: res.userInfo.province})
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  }
})