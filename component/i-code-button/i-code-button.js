Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 开启扫码
    handleScanCode(){
      wx.scanCode({
        onlyFromCamera: true,
        success: (res) =>{
          // console.log(res.result,'p')
          this.triggerEvent("getResult",res.result)
        },
        fail:(err)=>{
          console.log('取消扫码');
        }
      })
    }
  }
})