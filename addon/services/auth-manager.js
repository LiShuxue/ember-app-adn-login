import Ember from 'ember';

export default Ember.Service.extend({
    token: null,
    isAuthenticated: Ember.computed('token', ()=>{
        return Ember.isEmpty(this.get('token')) ? false : true;
    }),
    authenticate(username, password) {
       return Ember.$.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/user/login',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                username,
                password
            })
        }).then( res=>{
            Ember.Logger.log('service login success.');
            this.set('token', res.token);
        }, err=>{
            Ember.Logger.log('service login failed.');
            Ember.Logger.log(err);
        });
    },
    invalidate() {
        this.set('token', null);
    }
});