<template>
  <div class="login" v-loading="loading" element-loading-text="正在登录中,请稍后" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, .8)"></div>
</template>

<script>
import { mapActions } from 'vuex';
const defaultSettings = require('@/settings');
import Api from '@/api/user';
import LoginAboat from '@/utils/LoginAboat';
export default {
  name: 'LoginMiddle',
  data() {
    return {
      info: {
        account: null,
        password: null
      },
      area: '+86',
      loading: true,
      token: ''
    };
  },
  methods: {
    ...mapActions('USER', ['setUserInfo']),
    //检测是否通过URL登陆
    checkAccVsPas() {
      if (this.$route.query.account && this.$route.query.password) {
        this.info = {
          account: this.$route.query.account,
          password: this.$route.query.password
        };
        return true;
      }
      return false;
    },
    // 静默登陆-->开始
    letsGoLogin() {
      Api.login({
        account: `${this.area}-${this.info.account}`,
        password: this.$md5(this.info.password + '')
      }).then(res => {
        var data = res.data.data;
        this.hash = res.data.hash;
        this.token = res.data.token;
        localStorage.setItem('TOKEN', JSON.stringify(this.token));
        localStorage.setItem('LOGIN_HASH', JSON.stringify(this.hash));
        if (data.serve_type === 3) {
          this.$message({
            showClose: false,
            message: '您的系统使用权限已到期，请联系管理员重新开通',
            type: 'error'
          });
        } else {
          this.authorization(data);
        }
      });
    },
    //权限解析处理-->登陆成功必要操作
    authorization(res) {
      // 存储用户信息到 vuex
      this.setUserInfo(res);
      setTimeout(() => {
        this.$router.push({
          name: 'HomePage'
        });
      }, 800);
    }
  },
  mounted() {
    // console.log(window.location.origin);
    if (this.checkAccVsPas()) {
      this.letsGoLogin();
      // console.log("========URL登陆========");
    } else if (LoginAboat.getLoginData()) {
      // console.log("========被动登陆========");
      this.authorization(LoginAboat.getLoginData());
    } else {
      if (window.location.hostname === 'localhost') {
        window.location.href = `${window.location.origin}/login-middle?account=${defaultSettings.account}&password=${defaultSettings.password}`;
      } else {
        LoginAboat.backLogin();
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background: none;
}
</style>
