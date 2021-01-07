const Mock = require('mockjs');
// const {email} = require("mockjs");

const Random = Mock.Random;

//生成首页列表的数据
function good(type, page) {
  const list = new Array()
  for (let i = 0; i < 10 * page; i++) {
    const obj = {
      id: type+''+page+''+(i + 1),
      title: Random.ctitle(15),
      price: Random.float(10, 200, 2, 2),
      star: Random.int(1, 99),
      type: type,
      url: Random.url(),
      img: Random.dataImage('300x250', type+'-'+page+'-'+(i + 1))
    }
    list.push(obj)
  }
  return list
}

// 提取参数
function GetParameter(paramsName, url) {
  let reg = new RegExp("(^|&)" + paramsName + "=([^&]*)(&|$)");
  let r = url.match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

// 生成详情页的数据
function goodDetail(uid){
  const array = ["中通快递","韵达快递","圆通快递","天天快递","顺丰快递","邮政快递"];
  let detail = {
    topImages:[Random.dataImage('300x250',uid),Random.dataImage('300x250',uid),Random.dataImage('300x250',uid),Random.dataImage('300x250',uid)],
    title:Random.ctitle(30),
    columns:['销量 '+Random.int(10,1000)+'件','收藏 '+Random.int(10,1000)+'人','快递 '+array[Math.round(Math.random() * array.length)]],
    desc:'新款上市',
    discount:'活动价',
    newPrice:Random.float(10, 200, 2, 2),
    oldPrice:Random.float(20, 300, 2, 2),
    realPrice:Random.float(10, 200, 2, 2),

  };
  return {detail}
}

//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock(RegExp('/home/data' + ".*"), 'get', function (options) {
  let goodsType = GetParameter('type', options.url.split('?')[1])
  let goodsPage = parseInt(GetParameter('page', options.url.split('?')[1]))

  return {[goodsType]: good(goodsType, goodsPage)}
});

Mock.mock(RegExp('/detail' + ".*"), 'get',function (options){
  let goodsUid = GetParameter('uid', options.url.split('?')[1])

  return goodDetail(goodsUid)
})


