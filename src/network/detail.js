import {requestDetail} from "@/network/request";

export function getDetail(uid){
  return  requestDetail({
    url:'/detail',
    params:{
      uid
    }
  })
}
