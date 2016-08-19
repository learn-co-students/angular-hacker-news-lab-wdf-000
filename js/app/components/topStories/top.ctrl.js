function TopController(topStories, $filter) {
	var ctrl = this;
	// ctrl.topStories = topStories.data;
	// ctrl.page = 0;
	// ctrl.POSTS_PER_PAGE = 30;

	// ctrl.totalStories = ctrl.topStories.length;
	// ctrl.totalPages = Math.ceil(ctrl.totalStories / ctrl.POSTS_PER_PAGE);

	// ctrl.paginate = function () {
	// 	ctrl.posts = ctrl.topStories.slice(ctrl.page * ctrl.POSTS_PER_PAGE, (ctrl.page + 1) * ctrl.POSTS_PER_PAGE);
	// };

	// ctrl.nextPage = function () {
	// 	ctrl.page++;
	// 	ctrl.paginate()
	// };

	// ctrl.previousPage = function () {
	// 	ctrl.page--;
	// 	ctrl.paginate();
	// };

	// ctrl.paginate();

	ctrl.currentPage = 0;
  ctrl.pageSize = 0;
  ctrl.posts = [];

  ctrl.initData = function() {
  	ctrl.posts = topStories.data;
  	ctrl.pageSize = 30;
  }

  ctrl.filterPosts = function() {
  	// console.log(ctrl.posts);
  	return $filter('filter')(ctrl.posts, ctrl.pageSize)
  }

  ctrl.numberOfPages = function(){
    return Math.ceil(ctrl.filterPosts().length/ctrl.pageSize);                
  }

  ctrl.initData();

}

angular
	.module('app')
	.controller('TopController', TopController)
	.filter('startFrom', function(){
		return function(input, start) {
			debugger;
        start = +start; 
        return input.slice(start);
    }
	});



