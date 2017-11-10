import Ember from 'ember';

export default Ember.Route.extend({
    logService: Ember.inject.service(),
    actions: {
        testGo() {
            this.transitionToExternal('test');
        },
        testServiceFromEngine() {
            this.get('logService').log();
        }
    }
});
