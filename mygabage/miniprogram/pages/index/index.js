// pages/index/index.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'./user-login.png',
    userInfo:{},
    loogged:false,
    takeSession:false,
    requestResult:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!wx.cloud){
      wx.redirectTo({
        url: '../ai/index',
      })
      return
    }

    //获取用户信息
    wx.getSetting({
      success:res=>{
        if(res.authSetting['scope.userInfo']){
          //已经授权，可以直接调用getUserInfo获取头像昵称，不会弹框
          wx.getUserInfo({
            success:res=>{
              this.setData({
                avatarUrl:res.userInfo.avatarUrl,
                userInfo:res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo:function(e){
    if(!this.loogged && e.detail.userInfo){
      this.setData({
        loogged:true,
        avatarUrl:e.detail.userInfo.avatarUrl,
        userInfo:e.detail.userInfo
      })
    }
  },

  onGetOpenid:function(){
    //调用云函数
    wx.cloud.callFunction({
      name:'login',
      data:{},
      success:res=>{
        console.log('[云函数][login] user openid:',JSON.stringify(res))
        app.globalData.openid = res.result.openid
        wx.switchTab({
          url:'../ai/index?key=value',
        })
        console.log('zhuan')
      },
      fail:err=>{
        console.error('[云函数][login] 调用失败',err)
        wx.switchTab({
          url: '../ai/index',
        })
      }
    })
  },

  //上传图片
  doUpload:function(){
    //选择图片
    wx.chooseImage({
      count:1,
      sizeType:['compressed'],
      sourceType:['album','camera'],
      success:function(res){
        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]

        //上传图片
        const cloudPath ='my-image'+filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          filePath,
          success:res=>{
            console.log('[上传文件] 成功：',res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../ai/index',
            })
          },
          fail: e=>{
            console.error('[上传文件] 失败:',e)
            wx.showToast({
              icon:'none',
              title:'上传失败',
            })
          },
          complete:() =>{
            wx.hideLoading()
          }
        })
      },
      fail:e=>{
        console.error(e)
      }
    })
  },

  
})