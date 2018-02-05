import Ember from 'ember';
import { Promise as EmberPromise } from 'rsvp';

export default Ember.Service.extend({
    token: null,
    isAuthenticated: Ember.computed('token', ()=>{
        return Ember.isEmpty(this.get('token')) ? false : true;
    }),
    authenticate(username, password) {
        //模仿ajax请求。
        return new EmberPromise( resolve=>{
            setTimeout(()=>{
                resolve('success');
            }, 2000);
        });
    },
    invalidate() {
        this.set('token', null);
    }
});