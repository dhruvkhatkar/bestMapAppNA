define(['utilities', 'model/appModel'], function(utilities, appModel) {
	
	var app = function() {

		// tell the app model that we (the super controller) want to know when the main app view changes
		appModel.on('change:view', this.changeView.bind(this));

		// assign body as playground
		this.playground = document.body;

		// boot up the app router to start navigation
		require(['control/appRouter']);

	}

	app.prototype.changeView = function(oldView, newView) {
		this.playground.innerHTML = '';
		this.playground.appendChild(newView.el);
	}

	return app;

});