define(['backbone'], function(){

	var appModel = Backbone.Model.extend({
		defaults: {
			loggedIn: false,
			view: null
		}
	});

	return new appModel;

});