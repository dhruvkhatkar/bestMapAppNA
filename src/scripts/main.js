/*

	This file tells requirejs about the libraries used in the project.

	This file also runs on page load, and creates an instance of "app" which is the primary controller for this application.

*/

require.config({

	paths: {
		// inform requirejs about the libraries and modules being used in the application
		"jquery"		: 	"lib/jquery-2.0.3.min",
		"underscore"	: 	"lib/underscore.1.5.2",
		"backbone"		: 	'lib/backbone.1.1.0',
		'utilities'		: 	'lib/utilities', 
		'hbs'			:   'lib/require-handlebars-plugin/hbs'
	},

	//  tell grunt about the less package which preprocesses css
    packages: [
      {
        name: 'less',
        location: 'lib/require-less',
        main: 'less'
      }
    ],

    // tell requirejs about the globals that underscore, backbone and jQuery delare
	shim: {
		underscore: {
		    exports: '_'
		},

		backbone: {
		    deps: ["underscore", "jquery"],
		    exports: "Backbone"
		}
	}

});

// instanciate the main app controller (app.js)
require(['app'], function(app) {
	new app();
});