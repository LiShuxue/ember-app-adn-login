import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

// application route需要继承ApplicationRouteMixin，就可以实现登录成功之后直接跳转到目标路由。
export default Ember.Route.extend(ApplicationRouteMixin, {
  routeAfterAuthentication: 'navigation.after-login'
});
