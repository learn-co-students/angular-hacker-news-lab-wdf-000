function TopArticles ($http, $rootScope) {
  var self = this;
  this.getIds = function () { 
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json'); 
  };

  this.getArticle = function (id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  }

  this.getArticles = function () {

    self.getIds().then(function(resp){ 
      self.ids = resp.data;

      // responding to `$scope.$on` call in TopController
      angular.forEach(self.ids, function (id,index) {
        self.getArticle(id).then(function (resp) {
          $rootScope.$broadcast('done',resp.data)
        });

      });
    });
  }
}

angular
  .module('app')
  .service('TopArticles',TopArticles)
