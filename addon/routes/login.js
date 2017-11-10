import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        testGo() {
            this.transitionToExternal('test');
        }
    }
});
