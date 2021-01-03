import axios from 'axios'

// // Promise风格
// export function request1(config) {
//     return new Promise((resolve, reject) => {
//         const axios1 = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 1000
//         })
//
//
//         axios1(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

// Promise风格优化1
export function request(config) {
    // 1.创建axios实例
    const axios1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 1000
    })
    // 2.axios拦截器
    // axios.interceptors  //全局拦截
    axios1.interceptors.request.use(config => {
        // 请求成功拦截
        // console.log(config);
        // 1.对config进行一些修改
        // 2.请求过程中添加动画
        // 3.某些网络请求，必须携带一些特殊的信息，否则提示用户登录
        return config   // 需要将成功结果返回，否则外面拿不到
    }, err => {
        // 请求失败拦截
    })

    axios1.interceptors.response.use(res => {
        // console.log(res);
        /*
        做一些处理
        */
        return res.data
    }, err => {
        console.log(err);
    })

    // 3.返回promise对象
    return axios1(config)
}



// callback风格
// export function request2(config, success, fail) {
//     const axios2 = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 1000
//     })
//     axios2(config)
//         .then(res => {
//             success(res)
//         })
//         .catch(err => {
//             fail(err)
//         })
// }

// callback风格2
// export function request3(baseConfig) {
//     const axios2 = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 1000
//     })
//     axios2(baseConfig.config)
//         .then(res => {
//             baseConfig.success(res)
//         })
//         .catch(err => {
//             baseConfig.fail(err)
//         })
// }

export function requestGoods(config){
  const _axios = axios
  return _axios(config)
}
