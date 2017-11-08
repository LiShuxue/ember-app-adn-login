import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        cancleAction() {
            Ember.Logger.log('login failed');
        },

        loginAction() {
            Ember.Logger.log('login success');
        }
    }
});
