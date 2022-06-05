<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-03 00:12:58
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-05 14:00:00
 * @Author: laptop-fpejg53f
-->
<template>
  <div v-if="!item.hidden">
    <el-submenu ref="subMenu"
                :index="resolvePath(item.path)"
                popper-append-to-body>
      <template slot="title">
        <Item v-if="item.meta"
              :icon="item.meta && item.meta.icon"
              :title="item.meta.title" />
      </template>
      <sidebar-item v-for="child in item.children"
                    :key="child.path"
                    :is-nest="true"
                    :item="child"
                    :base-path="resolvePath(child.path)"
                    class="nest-menu">

      </sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
import { isExternal } from "@/utils/validate"
import Item from "./Item"
import path from "path"
import SidebarItem from './SidebarItem.vue'
export default {
  name: 'SidebarItem',
  components: { SidebarItem, Item },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    resolvePath (routePath) {
      if (isExternal(routePath))
      {
        return routePath
      }
      if (isExternal(this.basePath))
      {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style>
</style>