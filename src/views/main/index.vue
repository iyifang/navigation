<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div class="left"></div>
      <div class="right">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <span class="user_name">{{userName}}</span>
            <img src="../../assets/mq.gif" alt="" class="head" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">退出登录</el-dropdown-item>
            <el-dropdown-item command="2">个人信息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">Aside</el-aside>
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
import { getUser, removeAll } from "../../utils/function";
export default {
  data() {
    return {
      userName: "",
    };
  },
  created() {
    this.userName = getUser("userinfo").account;
  },
  methods: {
    handleCommand(command) {
      if (command == 1) {
        removeAll();
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  box-shadow: 0px 2px 3px 0px #ecf5ff;
  display: flex;
  justify-content: space-between;
  .right {
    .el-dropdown {
      line-height: 60px;
      height: 60px;

      
    .user_name{
      font-size: 1rem; 
      color: skyblue;
      margin-right:1rem;
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
</style>