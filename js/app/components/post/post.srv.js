angular
	.module('app')
	.service('PostsService', function($stateParams, $http){

		this.getPost = function(id) {
			return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
		};

	});