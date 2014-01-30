define(['model/loginModel', 'hbs!templates/topBar', 'less!styles/base'], function(loginModel, tpTopBar) {

	var view = Backbone.View.extend({

		initialize: function() {

			// generate model
			if(!this.model)
				this.model = new loginModel;

			this.render();

		},

		render: function() {
			this.el.innerHTML = 'test 123';
		}

	});

	return view;

});