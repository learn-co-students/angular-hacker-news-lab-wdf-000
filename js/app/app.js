angular
  .module('app', ['ui.router'])
  .service('Top30Service', function ($http) {
    // this.getIds = function () {
    //   return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    // }
    var self = this;
    this.getArticles = function(ids) {
      var ids = $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      self.articles = []
      ids.forEach(function (id) {
	self.articles.push($http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json'))
      });
      return self.articles
    }
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('top', {
	url: '/top',
	templateUrl: 'views/top.html',
	controller: 'TopController as top',
	resolve: {
	  articles: function ($route, Top30Service) {
	    return Top30Service.getArticles().data;
	  }
	}
      })
      .state('post', {
	url: '/post/:id',
	templateUrl: 'views/post.html',
	controller: 'PostsController as post',
	resolve: {
	  article: function ($route) {
	    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + $route.current.params.id + '.json').data;
	  }
	}
      })
  })
