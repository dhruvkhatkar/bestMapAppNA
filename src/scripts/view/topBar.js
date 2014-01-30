define(['hbs!templates/topBar', 'less!styles/topBar'], function(tpTopBar) {

	var view = Backbone.View.extend({

		initialize: function() {
			this.render();
		},

		render: function() {
			this.el.innerHTML = tpTopBar();
		}

	});

	return view;

});