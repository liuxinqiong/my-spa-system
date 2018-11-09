import axios from 'axios'
import qs from 'qs'

import { NOT_LOGIN, OK } from './constant'

export default function (opts = { method: 'GET'}) {
  return new Promise((resolve, reject) => {
    axios({
      method: opts.method,
      url: opts.method === 'GET' ? opts.url + '?' + qs.stringify(opts.data) : opts.url,
      data: opts.data,
      // transformRequest: [function (data) {
      //   return qs.stringify(data) // 针对application/x-www-form-urlencoded
      // }],
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      const { code, data } = res.data
      // 相关状态码处理
      if (code === NOT_LOGIN) {
        // 跳转登录页？
        alert('此功能需要登录才能操作哦')
      } else if (code === OK) {
        resolve(data)
      } else {
        // 错误提示
        reject(data)
      }
    }, err => {
      // 服务端错误提示
      alert('服务出错啦')
    })
  })
}
