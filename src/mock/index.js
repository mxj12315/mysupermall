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
  let detail = {
    topImages:[Random.dataImage('300x250',uid),Random.dataImage('300x250',uid),Random.dataImage('300x250',uid),Random.dataImage('300x250',uid)],
    bb:789
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
  return goodDetail(123)
})


