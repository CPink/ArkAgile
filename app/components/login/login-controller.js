(function() {

    'use strict';

    angular
        .module('ArkAgile')
        .controller('LoginController', LoginController);

    function LoginController($scope, $state, LoginService) {

        var vm = this;

        vm.login = function() {
            return LoginService.login(vm.user, function(user) {
                $state.go('home');
            });
        }

        vm.register = function() {
            return LoginService.register(vm.user, function(user) {
                $state.go('home');
            });
        }
    }
} ());