var Item = {
  templateUrl: 'views/item.html',
  bindings: {
    id: '='
  },
  controller: function (PostsService) {
    var self = this;

    PostsService
      .getPost(this.id)
      .then(function (resp) {
	self.data = resp.data;
      })
  },
  controllerAs: 'item'
};

angular
  .module('app')
  .component('item', Item);
