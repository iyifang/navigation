/*
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-13 21:46:50
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-13 22:59:13
 * @Author: laptop-fpejg53f
 */
import Layout from "@/layout"
const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Components',
    icon: 'component'
  },
  children: [
    {
      path: 'back-to-top',
      component: () => import("@/views/components-dome/back-to-top"),
      name: 'BackToTopDemo',
      meta: { title: "Back To Top" }
    },
    {
      path: 'drag-kanban',
      component: () => import("@/views/components-dome/drag-kanban"),
      name: 'DragKanbanDemo',
      meta: { title: "Drag Kanban" }
    }
  ]
}
export default componentsRouter