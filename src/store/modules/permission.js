/*
 * @Description: 基础路由
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-05-29 16:29:29
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-05 13:59:50
 * @Author: laptop-fpejg53f
 */

import { asyncRoutes, constantRoutes } from '@/router'

export function filterAsyncRoutes (routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp))
    {
      if (tmp.children)
      {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

function hasPermission (roles, route) {
  if (route.meta && route.meta.roles)
  {
    return roles.some(role => route.meta.roles.includes(role))
  } else
  {
    return true
  }
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes ({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin'))
      {
        accessedRoutes = asyncRoutes || []
      } else
      {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}