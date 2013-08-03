'use strict';

angular.module('Swale', [])

  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/', {
        templateUrl: 'views/home.html',
        resolve : {
          'Kurippu' : function(Config)  {
            return Config.fetch();
          },

          'KurippuPosts' : function(Posts)  {
            return Posts.fetch();
          }
        },
        controller: 'HomeController'
      })

      .when('/post/:id/:file', {
        resolve : {
          'Kurippu' : function(Config)  {
            return Config.fetch();
          },

          'KurippuPosts' : function(Posts)  {
            return Posts.fetch();
          }
        },
        templateUrl : 'views/post.html',
        controller : 'PostController'
      })

      .otherwise({
        redirectTo: '/'
      });

  });

'use strict'

angular.module('Swale')
.controller('HomeController', function($scope, $rootScope, Config, Posts)	{
	var socialNetworks = {};

	$scope.config = Config.get();
	$scope.config.author.email = md5($scope.config.author.email);
	$scope.posts = Posts.get();
	$scope.socials = {};
	
	var urls = {
		dribble : "http://dribble.com/",
		facebook : "http://facebook.com/",
		flickr : "http://flickr.com/",
		github : "http://github.com/",
		gplus : "http://gplus.com/",
		twitter : "http://twitter.com/",
		linkedin : "http://linkedin.com/",
		youtube : "http://youtube.com/"
	};

	socialNetworks = $scope.config.social;
	for(var network in socialNetworks)	{
		if(socialNetworks[network] !== "")	{
			$scope.socials[network] = urls[network] + socialNetworks[network];
		}
	}

	$rootScope.test = "yes";
});
'use strict'

angular.module('Swale')
.controller('PostController', function($scope, $routeParams, $q, $http, Config, Posts)	{

	$scope.article = {};

	$scope.article.author = Config.get().author.name;

	$scope.article.name = Posts.get()[$routeParams.id].name;
	$scope.article.date = Posts.get()[$routeParams.id].date;

	$q.all([$http.get('/posts/' + $routeParams.file + '.md')]).then(function(mdData)	{
		var selector = angular.element(document.querySelector('.article__content'));
		selector.append(new Showdown.converter().makeHtml(mdData[0].data));
	});
});
'use strict'

angular.module('Swale')
.service('Config', function($http)	{

	var _config = null;

	return	{
		fetch : function()	{
			return $http.get('swale.conf.json').success(function(data)	{
				_config = data;
			});
		},

		get : function()	{
			return _config;
		}
	}

});
'use strict'

angular.module('Swale')
.service('Posts', function($http)	{

	var _posts = null;

	return	{
		fetch : function()	{
			return $http.get('/posts/post.json').success(function(data)	{
				_posts = data;
			});
		},

		get : function()	{
			return _posts;
		}
	}

});