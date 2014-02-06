define(['utilities', 'model/appModel', 'view/topBar', 'less!styles/base', 'less!styles/mainViewContainer'], function(utilities, appModel, topBarView) {
	
	// this controller is responsible for overseeing interactions between the main app model and the lowest level UI
	// this controller is responsible for managing the app router (for navigation)

	var app = function() {

		// tell the app model that we (the super controller) want to know when the main app view changes
		appModel.on('change:view', this.changeView.bind(this));

		// assign body as playground
		this.playground = document.body;

		// build the header
		this.drawHeader();

		// create a container for the view
		this.mainViewContainer = document.createElement('div');
		this.mainViewContainer.className = 'mainViewContainer';
		this.playground.appendChild(this.mainViewContainer);

		// boot up the app router to start navigation
		require(['control/appRouter']);

	}

	// changes the current app view to a new one
	app.prototype.changeView = function(oldView, newView) {
		this.mainViewContainer.innerHTML = '';
		this.mainViewContainer.appendChild(newView.el);
	}

	// draw the header model
	app.prototype.drawHeader = function() {
		var topBar = new topBarView({ model: appModel });
		this.playground.appendChild(topBar.el);
	}

	return app;

});