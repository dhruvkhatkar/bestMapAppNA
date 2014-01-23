define(['model/appModel', 'control/routes/loginRoutes', 'control/routes/defaultRoutes', 'underscore', 'backbone'], function(appModel, loginRoutes, defaultRoutes) {
	
    // this is the data which the router will be made out of
    var routerData = {

        routes: { },

        initialize: function() {

            Backbone.history.start();

        }

    }

    // before the router backbone template is made, allow additions to the routerData
    loginRoutes(routerData);
    defaultRoutes(routerData);

    // create and return the singleton router
    var router = Backbone.Router.extend(routerData);
    return new router;

});



