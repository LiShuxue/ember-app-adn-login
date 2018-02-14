import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: {
    emberAppAdnLogin: {
      dependencies: {
        services: [
          'logService',
          'i18n'
        ],
        externalRoutes: {
          test: 'test'
        }
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
