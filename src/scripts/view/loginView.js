define(['model/loginModel', 'hbs!templates/topBar'], function(loginModel, tpTopBar) {

	var view = Backbone.View.extend({

		initialize: function() {

			// generate model
			if(!this.model)
				this.model = new loginModel;

			this.render();

		},

		render: function() {
			this.el.innerHTML = tpTopBar(5);
		}

	});

	return view;

});