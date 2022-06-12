/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-05-29 15:07:16
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-12 21:08:28
 * @Author: laptop-fpejg53f
 */
import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getUserInfo(token) {
  return request({
    url: '/getUserInfo',
    method: 'get',
    params: { token }
  })
}

export function logout(params) {
  return request({
    url: '/logout',
    method: 'post',
    params
  })
}