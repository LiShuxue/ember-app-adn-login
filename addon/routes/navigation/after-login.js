import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// 登录后才能访问的路由需要继承AuthenticatedRouteMixin，同时定义登录页面的路由：authenticationRoute
export default Ember.Route.extend(AuthenticatedRouteMixin, {
  authenticationRoute: 'navigation.login'
});
