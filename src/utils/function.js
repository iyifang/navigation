// 存储用户信息
export const setUser = (key, data) => {
  if (data == undefined || data == null) window.sessionStorage.set(key, data)
  else {
    window.sessionStorage.setItem(key, JSON.stringify(data))
  }
}

// 获取用户信息
export const getUser = (key) => {
  if (window.sessionStorage.getItem(key) == 'undefined' || window.sessionStorage.getItem(key) == null) {
    return undefined
  } else {
    return JSON.parse(window.sessionStorage.getItem(key))
  }
}

// 删除用户信息
export const remoteUser = (key) => {
  window.sessionStorage.removeItem(key)
}

// 清除所有sessionStorage
export const removeAll = () => {
  window.sessionStorage.clear()
}