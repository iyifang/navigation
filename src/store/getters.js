/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-05-29 14:51:28
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-07 22:45:41
 * @Author: laptop-fpejg53f
 */
const getters = {
  roles: state => state.user.roles,
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes,
  tagsView: state => state.tagsView.visitedViews
}
export default getters
