import Ember from 'ember';

export default Ember.Controller.extend({
    authManager: Ember.inject.service(),
    actions: {
        cancleAction() {
            Ember.Logger.log('login failed');
        },
        loginAction() {
            // this.getProperties可以一次获得多个属性。this.get('username')只可以获得单独的属性。虽然我们没有声明username和password，但是hbs中使用了，会自动绑定为我们的属性。
            // username: "lsx"
            // password: "03f6d3b315ca27d3a8f3859e3fb7fb01"
            const { username, password } = this.getProperties('username', 'password');
            this.get('authManager').authenticate(username, password).then( ()=>{
                Ember.Logger.log('controller login success.');
            }, err=>{
                Ember.Logger.log('controller login failed.');
                Ember.Logger.log(err);
            });
        },
        testLoginSuccess() {
            if(this.get('authManager.token')){
                alert('login success');
            }else{
                alert('not login');
            }
        }
    }
});
