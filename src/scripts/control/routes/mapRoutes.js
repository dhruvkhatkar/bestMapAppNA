define(['model/appModel', 'view/mapView'], function(appModel, mapView) {
	
	return function (router) {

		router.routes.map = function() {
			appModel.set('view', new mapView);
		}

	}

})