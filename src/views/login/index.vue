<template>
  <div id="login">
    <!-- 表单区 -->
    <div class="form">
      <h4>Welcome to login</h4>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :hide-required-asterisk="true"
      >
        <el-form-item label="账号" prop="account">
          <el-input
            v-model="ruleForm.account"
            :value="ruleForm.account"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item class="end_item">
          <el-button
            type="primary"
            class="w5"
            :loading="loading"
            @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
          <el-button @click="resetForm('ruleForm')" class="w3">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 动态背景 -->
    <video
      src="../../assets/video/bg_gif.mp4"
      autoplay
      muted
      loop
      class="video"
    ></video>
  </div>
</template>

<script>
import { setUser, getUser } from "../../utils/function";
export default {
  data() {
    return {
      ruleForm: {
        account: "admin",
        password: "123456",
      },
      loading: false,
      rules: {
        account: [
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
  created() {},
  methods: {
    // 登录
    submitForm(formName) {
      this.loading = true;
      let that = this;
      this.$refs[formName].validate((valid) => {
        if (
          valid &&
          this.ruleForm.account == "admin" &&
          this.ruleForm.password == "123456"
        ) {
          setTimeout(() => {
            that.loading = false;
            setUser("userinfo", that.ruleForm);
            that.$router.push({
              path: "/main",
            });
            let username = getUser("userinfo").account;
            this.$message({
              showClose: true,
              message: "欢迎  " + username,
              type: "success",
            });
          }, 1000);
        } else {
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
    width: 25%;
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
}
</style>>