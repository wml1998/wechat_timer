// pages/discover/waterfall_flow/waterfall_flow.js
Page({
  /**
  * 页面的初始数据
  */
  data: {
    dataList: [], //数据源
    windowWidth: 0, //页面视图宽度
    windowHeight: 0, //视图高度
    imgMargin: 6, //图片边距: 单位px
    imgWidth: 0, //图片宽度: 单位px
    topArr: [0, 0], //存储每列的累积top
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
    //获取页面宽高度
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        var windowWidth = res.windowWidth;
        var imgMargin = that.data.imgMargin;
        //两列，每列的图片宽度
        var imgWidth = (windowWidth - imgMargin * 3) / 2;
        that.setData({
          windowWidth: windowWidth,
          windowHeight: res.windowHeight,
          imgWidth: imgWidth
        }, function () {
          that.loadMoreImages(); //初始化数据
        });
      },
    })
  },
  //加载图片
  loadImage: function (e) {
    var index = e.currentTarget.dataset.index; //图片所在索引
    var imgW = e.detail.width, imgH = e.detail.height; //图片实际宽度和高度
    var imgWidth = this.data.imgWidth; //图片宽度
    var imgScaleH = imgWidth / imgW * imgH; //计算图片应该显示的高度
    var dataList = this.data.dataList;
    var margin = this.data.imgMargin; //图片间距
    //第一列的累积top，和第二列的累积top
    var firtColH = this.data.topArr[0], secondColH = this.data.topArr[1];
    var obj = dataList[index];
    obj.height = imgScaleH;
    if (firtColH < secondColH) { //表示新图片应该放到第一列
      obj.left = margin;
      obj.top = firtColH + margin;
      firtColH += margin + obj.height;
    }
    else { //放到第二列
      obj.left = margin * 2 + imgWidth;
      obj.top = secondColH + margin;
      secondColH += margin + obj.height;
    }
    this.setData({
      dataList: dataList,
      topArr: [firtColH, secondColH],
    });
  },
  //加载更多图片
  loadMoreImages: function () {
    var imgs = [
      "http://dummyimage.com/234x60",
      "http://dummyimage.com/336x280",
      "http://dummyimage.com/250x250",
      "http://dummyimage.com/120x240",
      "http://dummyimage.com/120x90",
      "http://dummyimage.com/120x240",
      "http://dummyimage.com/120x600",
      "http://dummyimage.com/120x600",
      "http://dummyimage.com/468x60",
      "http://dummyimage.com/180x150",
      "http://dummyimage.com/720x300",
      "http://dummyimage.com/240x400",
      "http://dummyimage.com/300x250",
      "http://dummyimage.com/180x150",
      "http://dummyimage.com/300x600",
      "http://dummyimage.com/120x90",
      "http://dummyimage.com/468x60",
      "http://dummyimage.com/234x60",
      "http://dummyimage.com/125x125",
      "http://dummyimage.com/180x150",
      "http://dummyimage.com/234x60",
      "http://dummyimage.com/180x150",
      "http://dummyimage.com/728x90",
      "http://dummyimage.com/125x125",
      "http://dummyimage.com/88x31",
      "http://dummyimage.com/250x250",
      "http://dummyimage.com/120x60",
      "http://dummyimage.com/234x60",
      "http://dummyimage.com/88x31",
      "http://dummyimage.com/120x600",
      "http://dummyimage.com/88x31",
      "http://dummyimage.com/125x125",
      "http://dummyimage.com/240x400",
      "http://dummyimage.com/250x250",
      "http://dummyimage.com/160x600",
      "http://dummyimage.com/125x125",
      "http://dummyimage.com/234x60",
      "http://dummyimage.com/728x90",
      "http://dummyimage.com/180x150",
      "http://dummyimage.com/120x240",
      "http://dummyimage.com/468x60",
      "http://dummyimage.com/120x90",
      "http://dummyimage.com/125x125",
      "http://dummyimage.com/120x600",
      "http://dummyimage.com/234x60",
      "http://dummyimage.com/120x60",
      "http://dummyimage.com/728x90",
      "http://dummyimage.com/468x60",
      "http://dummyimage.com/120x600",
      "http://dummyimage.com/720x300",
      "http://dummyimage.com/300x250",
      "http://dummyimage.com/720x300",
      "http://dummyimage.com/468x60",
      "http://dummyimage.com/120x60",
      "http://dummyimage.com/234x60",
      "http://dummyimage.com/468x60",
      "http://dummyimage.com/88x31",
      "http://dummyimage.com/180x150",
      "http://dummyimage.com/720x300",
      "http://dummyimage.com/88x31",
      "http://dummyimage.com/234x60",
      "http://dummyimage.com/120x60",
      "http://dummyimage.com/728x90",
      "http://dummyimage.com/120x90",
      "http://dummyimage.com/120x600",
      "http://dummyimage.com/120x600",
      "http://dummyimage.com/468x60",
      "http://dummyimage.com/180x150",
      "http://dummyimage.com/120x240",
      "http://dummyimage.com/468x60",
      "http://dummyimage.com/720x300",
      "http://dummyimage.com/240x400",
      "http://dummyimage.com/234x60",
      "http://dummyimage.com/300x250",
      "http://dummyimage.com/120x60",
      "http://dummyimage.com/160x600",
      "http://dummyimage.com/120x240",
      "http://dummyimage.com/720x300",
      "http://dummyimage.com/300x600",
      "http://dummyimage.com/88x31",
      "http://dummyimage.com/240x400",
      "http://dummyimage.com/120x60",
      "http://dummyimage.com/160x600",
      "http://dummyimage.com/120x240",
      "http://dummyimage.com/180x150",
      "http://dummyimage.com/120x60",
      "http://dummyimage.com/120x60",
      "http://dummyimage.com/120x600",
      "http://dummyimage.com/720x300",
      "http://dummyimage.com/720x300",
      "http://dummyimage.com/468x60",
      "http://dummyimage.com/120x240",
      "http://dummyimage.com/88x31",
      "http://dummyimage.com/120x600",
      "http://dummyimage.com/300x600",
      "http://dummyimage.com/300x250",
      "http://dummyimage.com/125x125",
      "http://dummyimage.com/728x90",
      "http://dummyimage.com/728x90",
      "http://dummyimage.com/240x400"
    ];
    var tmpArr = [];
    for (let i = 0; i < 22; i++) {
      var index = parseInt(Math.random() * 100) % imgs.length;
      var obj = {
        src: imgs[index],
        height: 0,
        top: 0,
        left: 0,
      }
      tmpArr.push(obj);
      imgs.splice(index, 1);
    }
    var dataList = this.data.dataList.concat(tmpArr)
    this.setData({ dataList: dataList }, function () {
      wx.hideLoading()
    });
  },
  /**预览图片 */
  previewImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var dataList = this.data.dataList;
    var currentSrc = dataList[index].src;
    // var srcArr = dataList.map(function (item) {
    // return item.src;
    // });
    wx.previewImage({
      urls: [currentSrc],
    })
  },
})