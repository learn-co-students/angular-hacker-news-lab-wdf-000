angular
  .module('app', ['ui.router'])
  .controller('TopController', function() {
    this.articles = Top30Articles.getArticles();
  })
  .controller('PostsController', function() {

  })
  .service('Top30Service', function ($http) {
    // this.getIds = function () {
    //   return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    // }
    var self = this;
    this.getArticles = function() {
      var ids = $http.get('https://hacker-news.firebaseio.com/v0/topstories.json').data
      self.articles = []
      ids.forEach(function (id) {
	self.articles.push($http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json'))
      });
      return self.articles
    }

    this.getArticle = function(id) {
      return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json').data;
    }
  })
  .config(function ($stateProvider, $httpProvider) {
    $httpProvider.useApplyAsync(true);
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
	    return Top30Service.getArticle($route.current.params.id);
	  }
	}
      })
  })
