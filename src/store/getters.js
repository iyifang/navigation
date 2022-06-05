/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-05-29 14:51:28
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-05 13:43:38
 * @Author: laptop-fpejg53f
 */
const getters = {
  roles: state => state.user.roles,
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes
}
export default getters
