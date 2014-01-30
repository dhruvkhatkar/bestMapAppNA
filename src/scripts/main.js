require.config({

	paths: {
		"jquery"		: 	"lib/jquery-2.0.3.min",
		"underscore"	: 	"lib/underscore.1.5.2",
		"backbone"		: 	'lib/backbone.1.1.0',
		'utilities'		: 	'lib/utilities', 
		'hbs'			:   'lib/require-handlebars-plugin/hbs',
		'styles'		:   '../styles',
		'templates'		:   '../templates'
	},

    packages: [
      {
        name: 'less',
        location: 'lib/require-less',
        main: 'less'
      }
    ],

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

require(['app'], function(app) {
	new app();
});