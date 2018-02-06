import Ember from 'ember';
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

export default OAuth2Bearer.extend({
    authorize(sessionData, callback) {
        const token = sessionData['token'];
        if(!Ember.isEmpty(token)) {
            callback('Authorization', `Bearer ${token}`);
        }
    }
});