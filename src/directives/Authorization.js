import Ciphertext from '../utils/Ciphertext';

// 获取 storage 当中的可用 keys
function stepGetKeys() {
  return new Promise((resolve, reject) => {
    let data = localStorage.getItem('TEMP'),
      user = localStorage.getItem('USERINFO');
    if (data && user) {
      resolve(Ciphertext('decode')(data).split(','));
    } else {
      reject();
    }
  });
}

export default {
  key: 'authorization',
  func: {
    inserted(el, binding) {
      stepGetKeys().then(
        res => {
          if (res.indexOf(binding.value) === -1) {
            el.style.display = 'none';
            // 如果没有权限，就删掉该元素
            let parent = el.parentNode;
            parent.removeChild(el);
          }
        },
        () => {
          throw new Error('获取到当前用户权限！');
        }
      );
    }
  }
};
