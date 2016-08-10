angular
  .module('app',['ui.router'])
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('top',{
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopController as top',
        resolve: {
          getStories: function(GetTopStoriesService){
            GetTopStoriesService.getStories();
          } 
        }
      })
      .state('post',{
        url: 'post/:id',
        templateUrl: 'views/post.html'
      });

      $urlRouterProvider.otherwise('/top');
  });
