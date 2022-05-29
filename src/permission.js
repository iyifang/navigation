import router from "./router"
import store from "./store"
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from "@/utils/get-page-title"
import { getToken } from "@/utils/auth"

NProgress.configure({ showSpinner: false }) // NProgress 配置参数

const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to, from, next) => {
  // 开启进度条
  NProgress.start()
  // 设置标题
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()

  if (hasToken)
  {
    if (to.path === '/login')
    {
      next({ path: '/' })
      NProgress.done()
    } else
    {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles)
      {
        next()
      } else
      {
        try
        {
          const { roles } = await store.dispatch('user/getInfo')
          // 获取角色路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
        } catch (error)
        {

        }
      }
    }

  }

})