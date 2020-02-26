import router from './router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({
  showSpinner: false
}); // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  // determine whether the user has logged in
  next();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
