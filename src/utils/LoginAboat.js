/**
 * 登陆流程相关控制
 */
class LoginManager {
  static LOGIN_KEY = 'USERINFO'; //本地用户数据存储字段
  // 获取登陆数据
  static getLoginData = () => {
    try {
      return JSON.parse(localStorage.getItem(this.LOGIN_KEY));
    } catch (error) {
      return null;
    }
  };
  // 设置登陆数据
  static setLoginData = data => {
    data && localStorage.setItem(this.LOGIN_KEY, JSON.stringify(data));
  };
  // 获取hash
  static getAppHash = () => {
    try {
      return JSON.parse(localStorage.getItem('LOGIN_HASH'));
    } catch (error) {
      return null;
    }
  };
  // 退出登录
  static backLogin = () => {
    localStorage.clear();
    window.location.href = `${window.location.origin}`;
  };
  // 获取token
  static getToken = () => {
    try {
      return JSON.parse(localStorage.getItem('TOKEN'));
    } catch (error) {
      return null;
    }
  };
}

export default LoginManager;
