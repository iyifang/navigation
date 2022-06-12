/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-05-29 14:51:28
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-12 00:42:13
 * @Author: laptop-fpejg53f
 */
const getters = {
  roles: state => state.user.roles,
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes,
  tagsView: state => state.tagsView.visitedViews,
  device: state => state.app.device
}
export default getters
