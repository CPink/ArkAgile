(function() {

    'use strict';

    angular
        .module('ArkAgile')
        .service('LoginService', LoginService);

    function LoginService(FirebaseUrl, $rootScope) {

        var vm = this;

        var firebase = FirebaseUrl;
        var userLog = new Firebase(firebase);

        // login and authenitcate user to firebase
        vm.login = function(user, cb) {
            userLog.authWithPassword({
                userName: user.userName,
                email: user.email,
                password: user.password

            }, function(err, authData) {
                if (err) {
                    switch (err.code) {
                        case "INVALID_EMAIL":
                            console.log(err);
                            break;

                        case "INVALID_PASSWORD":
                            console.log(err);
                            break;

                        default:
                    }
                } else if (authData) {
                    console.log("Logged in! user ID: " + authData.uid);
                    cb(authData);
                }

            });
        }

        vm.register = function(user, cb) {
            userLog.createUser({
                email: user.email,
                password: user.password
            }, function(err) {
                if (!err) {
                    console.log("User created successfully");
                    userLog.authWithPassword({
                        email: user.email,
                        password: user.password
                    }, function(err, authData) {
                        if (authData) {
                            authData.userName = user.email;
                            authData.timestamp = Date.now();

                            userLog.child('users').child(authData.uid).set(authData);
                            cb(authData);
                        } else {
                            console.log("something bad happened");
                        }

                    });
                } else {
                    console.log("Error creating user " + err);
                    return false;
                }

            });
        }
    }
} ());