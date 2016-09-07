function PostController(post){
  this.data = post.data;  

  // var unbind = $rootScope.$on('doneArticle', function (e, post) {
  //   self.post = post;
  // });
  //
  // $scope.$on('$destroy', unbind);
}

angular
  .module('app')
  .controller('PostController', PostController)
