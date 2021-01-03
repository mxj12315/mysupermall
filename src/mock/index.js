const Mock = require('mockjs');
// const {email} = require("mockjs");

const Random = Mock.Random;

function good(type) {
  const list = new Array()
  for (let i = 0; i < Math.random() * 10000; i++) {
    const obj = {
      id: i + 1,
      title: Random.ctitle(15),
      price: Random.float(10, 200, 2, 2),
      star: Random.int(1, 99),
      type: type,
      url:Random.url(),
      img:Random.dataImage('300x250',type+''+i)
    }
    list.push(obj)
  }
  return list
}

//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock(RegExp('/home/data' + ".*"), 'get', function (options) {
  return {
    pop: good('pop'),
    new: good('new'),
    sell: good('sell')
  }
});

