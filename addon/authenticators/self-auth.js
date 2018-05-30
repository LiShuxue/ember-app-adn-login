import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
    authenticate: function (username, password) {
        Ember.Logger.log("authenticators/self-auth:authenticate");
        // return Ember.$.ajax({
        //     type: 'POST',
        //     url: 'http://localhost:3000/api/user/login',
        //     contentType: 'application/json;charset=UTF-8',
        //     data: JSON.stringify({
        //         username,
        //         password
        //     })
        // }).then( res=>{
        //     Ember.Logger.log('self-auth login success.');
        //     return res;
        // }, err=>{
        //     Ember.Logger.log('self-auth login failed.');
        //     Ember.Logger.log(err);
        // });

        // 为了测试方便，模拟登录成功
        return new Promise( (resolve, reject) => {
          setTimeout(()=>{
            resolve();
          }, 3000)
        });
    }
});
