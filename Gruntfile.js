module.exports = function(grunt) {
   // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/app.js',
        dest: 'build/js/app.min.js'
      }
    },
	emberTemplates: {
	  compile: {
	    options: {
	      templateBasePath: /templates\/hbs\//
	    },
	    files: {
	      "templates/js/application.tpl.js": "templates/hbs/application.hbs",
	      "templates/js/steam.tpl.js": 		 "templates/hbs/steam.hbs",
	      "templates/js/dota.tpl.js":        "templates/hbs/dota.hbs",
	      "templates/js/cs-go.tpl.js": 		 "templates/hbs/cs-go.hbs",
	      "templates/js/tf.tpl.js": 		 "templates/hbs/tf.hbs",
	      "templates/js/sell.tpl.js": 		 "templates/hbs/sell.hbs",
	      "templates/js/sellgame.tpl.js":   "templates/hbs/sellgame.hbs",
  	      "templates/js/faq.tpl.js": 		 "templates/hbs/faq.hbs",
  	      "templates/js/about.tpl.js": 		 "templates/hbs/about.hbs"
	    }
	  }
	},
	sass: {
		dist: {
			options: {
				cacheLocation: "css/.sass-cache"
			},
			files: {
				"css/style.css": "css/input.sass"
			}
		}
	},
	watch: {
		emberTemplates: {
			files: "templates/hbs/*.hbs",
			tasks: ["emberTemplates"]
		},
		css: {
			files: "css/*.sass",
			tasks: ["sass"]
		}
	}
  });
  
 
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-localserver');

  // Default task(s).
  grunt.registerTask('default', ["watch"]);
  grunt.registerTask('deploy', ["uglify"]);
 
};