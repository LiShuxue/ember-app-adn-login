import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clickAction() {
      this.get('onClickAction')();
    }
  }
});
