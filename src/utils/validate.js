/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-03 16:43:16
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-03 17:15:38
 * @Author: laptop-fpejg53f
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}