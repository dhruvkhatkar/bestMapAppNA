define(['model/mapModel', 'less!styles/base'], function(mapModel) {

	var view = Backbone.View.extend({

		initialize: function() {

			// generate model
			if(!this.model)
				this.model = new mapModel;

			this.render();

		},

		render: function() {
			this.el.innerHTML = 'test 123ghg';
		}

	});

	return view;

});