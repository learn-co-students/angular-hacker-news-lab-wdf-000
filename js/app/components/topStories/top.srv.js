angular
	.module('app')
	.service('TopService', function($stateParams, $http){
		this.getTopStoryIds = function() {
			return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
		};
	});