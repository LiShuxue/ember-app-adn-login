/* eslint-env node */
'use strict';
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-app-adn-login',
  lazyLoading: true,
  isDevelopingAddon: function() { return true; }
});