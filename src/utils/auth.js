/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-05-29 13:07:36
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-01 23:20:54
 * @Author: laptop-fpejg53f
 */
import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}