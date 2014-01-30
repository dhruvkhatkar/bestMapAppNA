
/*

TO LEARN BACKBONE SEE

http://clock.co.uk/tech-blogs/an-introduction-to-backbonejs

WHAT IS THIS FILE?

This file is the "view" for the map. This file is responsible for drawing the map

*/


define(['model/mapModel', 'hbs!templates/maps', 'less!styles/base'], function(mapModel, mapViewTemplate, css, mapTemplate) {

	var view = Backbone.View.extend({

		// this function runs when the view is rendered
		initialize: function() {

			// generate model
			if(!this.model)
				this.model = new mapModel;

			this.render();

		},


		// this is the function that draws the view, a pointer to the div is this.el
		render: function() {
			
			// this draws the template in templates/maps to this view
			this.el.innerHTML = mapViewTemplate({ test1: 1, test2: 2 });

		}

	});

	return view;

});