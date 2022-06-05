/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-05-29 15:07:16
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-01 23:12:58
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

export function test(token) {
  return request({
    url: '/test',
    method: 'get',
    params: { token }
  })
}

export function list(params) {
  return request({
    url: '/list',
    method: 'post',
    params
  })
}