import Ember from 'ember';

export default Ember.Controller.extend({
    authManager: Ember.inject.service(),
    actions: {
        cancleAction() {
            Ember.Logger.log('login failed');
        },

        loginAction() {
            //this.getProperties可以一次获得多个属性。this.get('username')只可以获得单独的属性。虽然我们没有声明username和password，但是hbs中使用了，会自动绑定为我们的属性。
            const { username, password } = this.getProperties('username', 'password');
            this.get('authManager').authenticate(username, password).then( msg=>{
                if(msg === 'success'){
                    this.get('authManager').set('token', '01234567890');
                    Ember.Logger.log('login success');
                }       
            });
        }
    }
});
