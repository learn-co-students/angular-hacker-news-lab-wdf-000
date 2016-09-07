function TopController($rootScope,$scope){
  var self = this;
  this.articles = [];

  this.currPage = 0;
  this.perPage = 30

  var unbind = $rootScope.$on('done',function (e, article){
    self.articles.push(article);
  });

  $scope.$on('$destroy', unbind);
}

angular
  .module('app')
  .controller('TopController', TopController)
  .filter('filter', function () {
    return function (input, first) {
        first = +first;
        return input.slice(first);
    }
  }); 
