// 引入中间件模块
const auth = require('../middleware/auth');
// 在路由上应用中间件
router.use(auth);

// middleware/auth.js
const auth = (req, res, next) => {
  if (req.query.admin === 'true') {
    next(); // 是 admin，继续执行下一个中间件或路由
  } else {
    res.send('No Auth'); // 不是 admin，拦截请求
  }
};

module.exports = auth;