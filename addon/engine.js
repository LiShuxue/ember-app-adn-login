import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
 
const { modulePrefix } = config;
// externalRoutes: 指定engine需要跳转的外部链接。Engine defines what it would like to go to and the application tells it where that is.
const Eng = Engine.extend({
  modulePrefix,
  Resolver,
  dependencies: {
    services: [],
    externalRoutes: [
      'test'
    ]
  }
});
 
loadInitializers(Eng, modulePrefix);
 
export default Eng;