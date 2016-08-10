function GetTopStoriesService($http,$rootScope){
  var ctrl = this;

  ctrl.getStoryIds = $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');

  ctrl.getStory = function(id){
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
  }

  ctrl.getStories = function(){
    ctrl.getStoryIds.then(function(resp){ 
      ctrl.storyIds = resp.data;

      angular.forEach(ctrl.storyIds,function(storyId,index){
        ctrl.getStory(storyId).then(function(resp){
          $rootScope.$emit('storyFetched',resp.data)
        });
      });

    });
  }
}

angular
  .module('app')
  .service('GetTopStoriesService',GetTopStoriesService)
