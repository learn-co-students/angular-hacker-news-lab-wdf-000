angular
  .module('app',['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('top',{
        url: 'top'
      })
      .state('post',{
        url: 'post/:id'
      });
  });
