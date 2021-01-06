import {request, requestGoods} from "@/network/request";

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}


export function getHomeGoods(type, page) {
  return requestGoods({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}


