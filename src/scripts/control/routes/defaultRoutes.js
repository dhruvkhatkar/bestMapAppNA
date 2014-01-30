define(['model/appModel'], function(appModel) {
	
	return function (router) {

		router.routes['*path'] = function(actions) {console.log(123);
            if(!appModel.get('loggedIn'))
                window.location.hash = '/login';
        }

	}

})