import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var data2 = {
    "name": "上海贝格计算机数据服务有限公司",
    "children": [
      {
        "name": "股东（9）",
        "children": [
          { "name": "股东A" },
          { "name": "股东B" },
          { "name": "股东C" },
          { "name": "股东D" },
          { "name": "股东E" },
          { "name": "股东F" },
          { "name": "股东G" },
          { "name": "股东H" },
          { "name": "股东I" },
        ]
      },
      {
        "name": "高管（10）",
        "children": [
          { "name": "高管A" },
          { "name": "高管B" },
          { "name": "高管C" },
          { "name": "高管D" },
          { "name": "高管E" },
          { "name": "高管F" },
          { "name": "高管G" },
          { "name": "高管H" },
          { "name": "高管I" },
          { "name": "高管J" }
        ]
      },
      {
        "name": "对外投资（2）",
        "children": [
          { "name": "上海贝格计算机数据服务有限公司深圳分公司" },
          { "name": "上海贝格一欧信息科技有限公司" }
        ]
      }
    ]
  };


  var option = {
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    series: [
      {
        type: 'tree',
        data: [data2],

        top: '30%',
        left: '10%',
        bottom: '5%',
        right: '10%',
        // layout: 'radial',
        symbol: 'emptyCircle',
        initialTreeDepth: 3,
        animationDurationUpdate: 750,
        symbolSize: 7,

        // label: {
        //     normal: {
        //         position: 'left',
        //         verticalAlign: 'middle',
        //         align: 'right'
        //     }
        // },


      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
