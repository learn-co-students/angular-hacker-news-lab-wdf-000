function PostsService ($http, id) {
  this.getPost = function (id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  };
}

angular
  .module('app')
  .service('PostsService', PostsService);
