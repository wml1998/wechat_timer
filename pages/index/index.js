//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    birthday:0,
    year:0,
    month:0,
    distance:0,
    end:0,
    percent:0
  },
  onLoad(options){
    //在这里获取路由传参，赋值给this
  },
  onReady(){
    //不怎么使用
  },
  onShow() {
    // 统一在这里发起网络请求和一些初始化的工作
    let now = new Date();
    this.setData({
      end: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
    })
  },
  onHide() {

  },
  onUnload() {

  },
  changeBirthday(e) {
    console.log('e...', e);
    let value = e.detail.value.split('-');
    let distance = this.getDistanceMonth(e.detail.value, this.data.end);

    this.setData({
      birthday: e.detail.value,
      year: value[0],
      month: value[1],
      distance,
      percent: (distance / 9).toFixed(0)
    })
  },
  // pre 2020-02 now 2019-12
  getDistanceMonth(pre, now) {
    let preArr = pre.split('-'),
      nowArr = now.split('-');
    return Number((nowArr[0] - preArr[0]) * 12) + Number(nowArr[1] - preArr[1])
  },
  clear() {
    let now = new Date();
    this.setData({
      birthday: 0,
      month: String(now.getMonth() + 1).padStart(2, '0'),
      year: now.getFullYear(),
      distance: 0
    })
  }
})
