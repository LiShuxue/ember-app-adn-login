import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    this.transitionTo('ember-app-adn-login.login');
  }
});