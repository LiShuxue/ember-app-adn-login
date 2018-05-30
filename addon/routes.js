import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
    this.route('navigation', function(){
        this.route('login');
        // 添加一个登录成功后的路由
        this.route('after-login');
    });
});
