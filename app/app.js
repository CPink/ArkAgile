(function(){
    
    'use strict';
    
    angular
        .module('ArkAgile', [
            'ui.router',
            'firebase'
        ])
        
        .constant('FirebaseUrl', 'https://arkagile.firebaseio.com/')
        
        .config(function($stateProvider, $urlRouterProvider){
            $stateProvider
            
                .state('login', {
                    url: '/',
                    controller: 'LoginController',
                    controllerAs: 'lc',
                    templateUrl: 'app/components/login/login.html'
                })
                
                .state('home', {
                    url: '/home',
                    controller: 'HomeController',
                    controllerAs: 'hc',
                    templateUrl: 'app/components/home/home.html'
                })
                
                $urlRouterProvider.otherwise('/')
        })
}());