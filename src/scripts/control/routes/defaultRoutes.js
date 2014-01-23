define(['model/appModel'], function(appModel) {
	
	return function (router) {

		router.routes['*actions'] = function(actions) {
            if(!appModel.get('loggedIn'))
                window.location.hash = '/login';
        }

	}

})