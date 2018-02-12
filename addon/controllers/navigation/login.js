import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
    authManager: Ember.inject.service(),
    session: Ember.inject.service(),    // Once the library is installed, the session service can be injected wherever needed in the application
    //先声明一个task
    LoginTask: task(function* (){
        const { username_b, password_b } = this.getProperties('username_b', 'password_b');
        yield this.get('session').authenticate('authenticator:selfAuth', username_b, password_b).then( ()=>{
            Ember.Logger.log('Login login success.');
            // The `authenticated` key holds the session data that the authenticator resolved with when the session was authenticated
            // authenticate 成功的数据会自动保存在session.data.authenticated中
            Ember.Logger.log(this.get('session.data.authenticated.token'));
        }, err=>{
            Ember.Logger.log('Login login failed.');
            Ember.Logger.log(err);
        });
    }).drop(),

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
        },

        Login() {
            this.get('LoginTask').perform();   //在action中去调用这个task
        },
        Logout() {
            // session service's invalidate method to invalidate the session
            this.get('session').invalidate();
        },
        testAuthorize(){
            // authorize原理就是检查一下session的data是否有access_token，如果有，说明已经是验证通过的，然后对请求头header添加‘Authorization’属性。
            // 相当于headers['Authorization'] = "Bearer " + accessToken;
            this.get('session').authorize('authorizer:custom', (headerName, headerValue) => {
                const headers = {};
                headers[headerName] = headerValue;
                Ember.$.ajax('/secret-data', { headers });
            });
        }
    }
});
