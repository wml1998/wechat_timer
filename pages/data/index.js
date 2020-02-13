const app = getApp();

Page({
  data: {
    start: '',
    end: '',
    distance: 0,
    endDate: ''
  },
  onShow() {
    let now = new Date();
    now = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDay()).padStart(2, '0')}`
    this.setData({
      endDate: now,
      start: now,
      end: now
    }, () => {
      console.log('this.endDate...1', this.data.endDate);
    })
    console.log('this.endDate...2', this.data.endDate);
  },
  changeStart(e) {
    console.log('e...', e);
    this.setData({
      start: e.detail.value
    }, () => {
      this.getDistance();
    })
  },
  changeEnd(e) {
    this.setData({
      end: e.detail.value
    }, () => {
      this.getDistance();
    })
  },
  getDistance() {
    let distance = +new Date(this.data.end) - (+new Date(this.data.start));
    console.log('distance...', distance);
    this.setData({
      distance: Math.floor(distance / 1000 / 60 / 60 / 24)
    })
  }
})