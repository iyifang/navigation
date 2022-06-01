/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-05-29 15:07:16
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-01 00:33:59
 * @Author: laptop-fpejg53f
 */
import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/test',
    method: 'get',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/navigation/user/info',
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