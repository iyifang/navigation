<template>
  <el-container>
    <el-aside width="200px">
      <div class="logo">
        <img src="@/assets/vue_logo.webp" />
      </div>
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="#34495e"
               text-color="white">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3"
                      disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="left">
          <el-radio-group v-model="isCollapse"
                          style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
        </div>
        <div class="right">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <span class="user_name">{{ userName }}</span>
              <img src="../../assets/mq.gif"
                   alt=""
                   class="head" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">退出登录</el-dropdown-item>
              <el-dropdown-item command="2">个人信息</el-dropdown-item>
              <el-dropdown-item command="2">设置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getUser, removeAll } from "../../utils/function";
export default {
  data () {
    return {
      userName: "",
      isCollapse: false
    };
  },
  created () {
    this.userName = getUser("userinfo").account;
  },
  methods: {
    handleCommand (command) {
      if (command == 1)
      {
        removeAll();
        this.$router.push("/");
      }
    },

    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    // background-color: aquamarine;
  }
}
// 头部
.el-header {
  box-shadow: 0px 2px 3px 0px #ecf5ff;
  display: flex;
  justify-content: space-between;
  background-color: skyblue;
  .right {
    .el-dropdown {
      line-height: 60px;
      height: 60px;

      .user_name {
        font-size: 1rem;
        color: skyblue;
        margin-right: 1rem;
      }
      .head {
        vertical-align: middle;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
      }
    }
  }
}
.el-aside {
  background-color: #34495e;
}
// 主体
.el-container {
  height: 100%;

  .el-main {
    background-color: #f1f1f1;
  }
  .el-footer {
    line-height: 60px;
  }
}
</style>
