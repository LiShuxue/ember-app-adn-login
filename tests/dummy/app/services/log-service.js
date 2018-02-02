import Ember from 'ember';

export default Ember.Service.extend({
  log() {
    Ember.Logger.log('this is log-service');
  }
});
