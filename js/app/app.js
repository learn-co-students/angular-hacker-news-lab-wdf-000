angular
  .module('app',['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('top',{
	url: '/top',
	templateUrl: 'views/top.html',
	controller: 'TopController as top',
	resolve: {
	  articles: function(TopArticles){
	    return TopArticles.getArticles();
	  } 
	}
      })
    .state('post', {
      url: '/post/:id',
      templateUrl: 'views/post.html',
      controller: 'PostController as post',
      resolve: {
	post: function ($stateParams, PostsService) {
	  return PostsService.getPost($stateParams.id);
	}
      }
    });
    $urlRouterProvider.otherwise('/top');
  });
