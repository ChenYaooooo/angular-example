/**
 * Created by Event on 2/9/17.
 */
angular.module('com.modihy.myApp.routes')
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('login', {
            url : '/login',
            views : {
                'main' : {
                    templateUrl : 'templates/views/login.html',
                    controller : 'LoginController'
                }
            }
        })
        // Default view to show
        $urlRouterProvider.otherwise('/login');
    })

