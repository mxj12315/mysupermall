const Mock = require('mockjs');
// const {email} = require("mockjs");

const Random = Mock.Random;

function good(type, page) {
  const list = new Array()
  for (let i = 0; i < 10 * page; i++) {
    const obj = {
      id: i + 1,
      title: Random.ctitle(15),
      price: Random.float(10, 200, 2, 2),
      star: Random.int(1, 99),
      type: type,
      url: Random.url(),
      img: Random.dataImage('300x250', type + '' + i)
    }
    list.push(obj)
  }
  return list
}

//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock(RegExp('/home/data' + ".*"), 'get', function (options) {
  // console.log(GetParameter('type', options.url.split('?')[1]));
  // console.log(GetParameter('page', options.url.split('?')[1]));
  let goodsType = GetParameter('type', options.url.split('?')[1])
  let goodsPage = parseInt(GetParameter('page', options.url.split('?')[1]))

  return {[goodsType]: good(goodsType, goodsPage)}
});


function GetParameter(paramsName, url) {
  // 提取参数
  let reg = new RegExp("(^|&)" + paramsName + "=([^&]*)(&|$)");
  let r = url.match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
