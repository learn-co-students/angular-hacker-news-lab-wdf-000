var Item = {
	templateUrl: 'js/app/components/item/item.html',
	bindings: {
		id: '='
	},
	controller: function (PostsService) {
		var ctrl = this;

		PostsService
			.getPost(this.id)
			.then(function (res) {
				ctrl.data = res.data;
			})
	},
	controllerAs: 'item'
};

angular
	.module('app')
	.component('item', Item);