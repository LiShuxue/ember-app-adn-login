import Ember from 'ember';
import layout from '../templates/components/loading-spinner';

export default Ember.Component.extend({
    layout,
    tagName: 'span',
    classNames: ['test-spinner']
});
