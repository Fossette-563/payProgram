class Storage{
  // 设置本地存储数据
  static set(key,value){
    wx.setStorageSync(key, value)
  }
  // 获取本地存储数据
  static get(key){
    return wx.getStorageSync(key)
  }
  // 删除本地存储
  static remove(key){
    wx.removeStorageSync()
  }
  // 清空本地存储的数据
  static removeAll(){
    wx.clearStorageSync()
  }
}

export default Storage