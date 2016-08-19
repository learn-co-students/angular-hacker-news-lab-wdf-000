angular
    .module('app', ['ui.router'])
    .config(function($httpProvider, $stateProvider, $urlRouterProvider){
    	$httpProvider.useApplyAsync(true);

    	$stateProvider
    		.state('top', {
    			url: '/top',
    			controller: 'TopController as top',
    			templateUrl: 'js/app/components/topStories/top.html',
				  resolve: {
				    topStories: function(TopService) { return TopService.getTopStoryIds(); }
				  }
    		})
        .state('post', {
          url: '/post/:id',
          templateUrl: 'js/app/components/post/post.html',
          controller: 'PostController as post',
          resolve: {
            post: function ($stateParams, PostsService) {
              return PostsService.getPost($stateParams.id);
            }
          }
        });

    	$urlRouterProvider.otherwise('/');
    });