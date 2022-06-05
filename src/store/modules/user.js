/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-05-29 15:06:43
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-03 11:00:10
 * @Author: laptop-fpejg53f
 */
import { login, logout, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  acatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  }
}

const actions = {

  // 登录
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      let params = {
        username: username.trim(),
        password: password
      }
      login(params).then(res => {
        const { Data } = res
        commit('SET_TOKEN', Data.user.token)
        setToken(Data.user.token)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },


  // 获取用户信息
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token).then(response => {
        const { data } = response
        if (!data)
        {
          reject('验证失败，请重新登录!')
        }
        const { roles, name, avatar, introduction } = data.info
        // roles must be a non-empty array
        if (!roles || roles.length <= 0)
        {
          reject('getInfo: 角色必须是非null数组!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data.info)
      }).catch(error => {
        reject(error)
      })
    })
  },

  logout ({ commit, state, dispatch }) {

  },

  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}