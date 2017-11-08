import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        loginAction() {
            Ember.Logger.log('login success');
        }
    }
});
