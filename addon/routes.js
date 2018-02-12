import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
    this.route('navigation', function(){
        this.route('login');
    });
});
