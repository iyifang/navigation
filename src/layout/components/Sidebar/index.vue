<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-02 23:54:42
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-03 17:45:51
 * @Author: laptop-fpejg53f
-->
<template>
  <div>
    <el-scrollbar wrpa-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu"
               :unique-opened="false"
               :collapse="isCollapse"
               :background-color="variables.menuBg"
               :text-color="variables.menuText"
               :active-text-colo="variables.menuActiveText"
               :collapse-transition="false"
               mode="vertical">
        <sidebar-item v-for="route in permission_routes"
                      :item="route"
                      :base-path="route.path"
                      :key="route.path">
        </sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
import { mapGetters } from "vuex"
import variables from '@/styles/variables.scss'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu)
      {
        return meat.activeMenu
      }
      // 如果设置路径，侧栏将突出显示您设置的路径
      return path
    },
    variables () {
      return variables
    },
    // 是否折叠菜单
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  mounted () {
    // console.log(this.permission_routes);
  }
}
</script>

<style>
</style>