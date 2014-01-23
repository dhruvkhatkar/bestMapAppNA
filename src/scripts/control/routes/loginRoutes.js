define(['model/appModel', 'view/loginView'], function(appModel, loginView) {
	
	return function (router) {

		router.routes.login = function() {
			appModel.set('view', new loginView);
		}

	}

})