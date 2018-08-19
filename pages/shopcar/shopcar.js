// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classes:[
      {
        classID:1,
        title:'皇宫婚纱旗舰店',
        items:[
          {
            itemID:11,
            src:'one.png',
            title:'2018新款婚纱冬季新娘结婚韩版',
            descrip:[
              {
                key:'颜色',
                value:'白色'
              },
              {
                key:'尺码',
                value:'L'
              }
            ],
            num:0,
            prePrice:895,
            nowPrice:495.9
          },
          {
            itemID: 12,
            src: 'two.png',
            title: '2018新款婚纱夏季新娘结婚韩版',
            descrip: [
              {
                key: '颜色',
                value: '红色'
              },
              {
                key: '尺码',
                value: 'L'
              }
            ],
            num: 1,
            prePrice: 895,
            nowPrice: 298.9
          }
        ]
      },
      {
        classID: 1,
        title: '小米零食店',
        items: [
          {
            itemID: 11,
            src: 'three.png',
            title: '海国进口零食即食烤海苔紫菜40g',
            descrip: [
              {
                key: '口味',
                value: '烧烤味'
              }
            ],
            num: 0,
            prePrice: 15.5,
            nowPrice: 9.9
          },
          {
            itemID: 12,
            src: 'four.png',
            title: '海欣手撕蟹柳500g散称蟹味棒零食',
            descrip: [
              {
                key: '口味',
                value: '香辣味'
              }
            ],
            num: 1,
            prePrice: 45,
            nowPrice: 29.8
          }
        ]
      },
      {
        classID: 1,
        title: '日韩衣橱',
        items: [
          {
            itemID: 11,
            src: 'five.png',
            title: '秋冬款韩版半高领中长款宽松套头打',
            descrip: [
              {
                key: '颜色',
                value: '紫色'
              },{
                key:'尺码',
                value:'均码'
              }
            ],
            num: 0,
            prePrice: 15.5,
            nowPrice: 9.9
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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