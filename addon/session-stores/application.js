import SessionStorageStore from 'ember-simple-auth/session-stores/session-storage';

export default SessionStorageStore.extend();
// session数据持久化，可以选择localStorage，Cookie，或sessionStorage进行存储。
// 如果不选择的化，会进行默认存储，stores its data in the browser's localStorage if that is available or in a cookie if it is not。