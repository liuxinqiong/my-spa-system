import axios from 'axios'
import qs from 'qs'

import { NOT_LOGIN, OK } from './constant'

export default function (opts) {
  return new Promise((resolve, reject) => {
    axios({
      method: opts.method || 'GET',
      url: opts.method === 'GET' ? opts.url + '?' + qs.stringify(opts.data) : opts.url,
      data: opts.data,
      transformRequest: [function (data) {
        return qs.stringify(data)
      }]
    }).then(res => {
      const { code, data } = res.data
      // 相关状态码处理
      if (code === NOT_LOGIN) {
        // 跳转登录页？
      } else if (code === OK) {
        resolve(data)
      } else {
        // 错误提示
        reject(data)
      }
    }, err => {
      // 服务端错误提示
    })
  })
}
