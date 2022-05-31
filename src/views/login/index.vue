<template>
  <div id="login">
    <!-- 表单区 -->
    <div class="form">
      <h4>Welcome to login</h4>
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm"
               :hide-required-asterisk="true">
        <el-form-item label="账号"
                      prop="username">
          <el-input v-model="ruleForm.username"
                    value="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input v-model="ruleForm.password"
                    show-password></el-input>
        </el-form-item>
        <el-form-item class="end_item">
          <el-button type="primary"
                     class="w5"
                     :loading="loading"
                     @click="submitForm('ruleForm')">立即登录</el-button>
          <el-button @click="testA('ruleForm')"
                     class="w3">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 背景 -->
    <img v-if="bgType"
         src="@/assets/login_bg.jpg"
         class="bg_img" />
    <video src="@/assets/video/bg_gif.mp4"
           autoplay
           muted
           loop
           class="video"
           v-else></video>
  </div>
</template>

<script>
import { setUser, getUser } from "@/utils/function";
import { test } from "@/api/user";
export default {
  data () {
    return {
      bgType: true,
      ruleForm: {
        username: "admin",
        password: "123456",
      },
      loading: false,
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 5,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created () {
  },
  methods: {
    // 登录
    submitForm (formName) {
      this.loading = true;
      const that = this;
      this.$refs[formName].validate((valid) => {
        if (
          valid &&
          this.ruleForm.username == "admin" &&
          this.ruleForm.password == "123456"
        )
        {
          this.$store.dispatch('user/login', this.ruleForm)
          setTimeout(() => {
            that.loading = false;
            that.$router.push({
              path: "/dashboard",
            });
            /* this.$message({
              showClose: true,
              message: "欢迎  " + username,
              type: "success",
            }); */
          }, 1000);
        } else
        {
          setTimeout(() => {
            that.loading = false;
            this.$message({
              showClose: true,
              message: "登录失败了哦亲！",
              type: "warning",
            });
          }, 1000);
          return false;
        }
      });
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },

    testA () {
      test().then(res => {
        console.log(res);
      })
    }
  },
};
</script>

<style lang="scss" scoped>
#login {
  height: 100%;
  background-color: #34495e;
  width: 100%;

  // 表单区
  .form {
    border-radius: 10px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff5c;
    z-index: 2;
    width: 30%;
    height: auto;
    padding: 20px;

    h4 {
      margin-top: 0;
      color: skyblue;
      font-size: 30px;
    }

    .el-form {
      // position: relative;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      /deep/.el-form-item__label {
        color: #ecf5ff;
        text-align: center;
        width: 80px !important;
      }
      /deep/.el-form-item__content {
        margin-left: 80px !important;
      }

      /deep/.el-button--primary {
        background-color: #1dd1a1;
        border: none;
      }
      .end_item {
        .el-form-item__content {
          display: flex;
          .w5 {
            width: 50%;
          }
          .w3 {
            width: 30%;
          }
        }
      }
    }
  }

  .video {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    object-fit: fill;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .bg_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>>
