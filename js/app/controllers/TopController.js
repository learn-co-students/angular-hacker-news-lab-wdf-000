function TopController($rootScope,$scope){
  var ctrl = this;
  
  ctrl.stories = [];

  ctrl.currPage = 1;
  ctrl.pageSize = 30

  var unbind = $rootScope.$on('storyFetched',function(event,story){
    ctrl.stories.push(story);
  });

  $scope.$on('$destroy', unbind);
}

angular
  .module('app')
  .controller('TopController',TopController)
  // http://stackoverflow.com/questions/11581209/pagination-on-a-list-using-ng-repeat
  .filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
  }); 
