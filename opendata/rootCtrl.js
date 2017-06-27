/**
 * Created by Event on 1/20/17.
 */
angular.module('myApp', ['ngAnimate', 'ngTouch', 'ui.bootstrap'])
.controller('RootCtrl',['$scope','$rootScope',function($scope,$rootScope){
    $scope.time = new Date();
    $scope.hstep = 1;
    $scope.mstep = 1;
    $scope.ismeridian = false;
    $scope.turnLeft = 1;
    $scope.turnRight = 1;
    // $scope.status = 1;
    $scope.openPage = function(pageName){
        window.open("./views/BeiJingMesum/"+pageName);
    }

    $scope.clickRedButton = function(){
        console.log("-1");
        $scope.status = -1;
    }
    $scope.clickYellowButton = function(){
        console.log("0");
        $scope.status = 0;
    }
    $scope.clickGreenButton = function(){
        console.log("1");
        $scope.status = 1;
    }


    $scope.questions = [
        "","",""
    ];

    $scope.saveSessions = function(isValidate) {
        if(isValidate){

        }else{
            alert("There is something wrong;");
        }
    }

    $scope.thisTitle = null;

    $scope.checkInputValidation=function(){
        var str = "hello world aaaa \n bbb \t ccc##$$%^%$^$&%&$#%^$&% \v aaaaa";
        var str1 = "Playbacks  / Evaluation / Solution Pitches: \u000bEach team presents the proposals to Steven etc. for feedback"
        // str.replace(/[@\s]+/ig,' ');
        // str = str.replace(/[^A-Za-z0-9]/g, '');
        // str = str.replace(/[\x00-\x1F\x7F-\x9F]/g, "**");

        // var regexp = /^((?=[\x00-\x08\x0C\x0E-\x1F\x7F-\x9F]).)+$/i;

        $scope.thisTitle = $scope.thisTitle.replace(/[\x00-\x08\x0C\x0E-\x1F\x7F-\x9F]/g, "**");
        str1 = str1.replace(/[\x00-\x1F\x7F-\x9F]/g, "**");
        console.log("str1:"+str1);
        console.log("$scope.thisTitle:"+$scope.thisTitle);
    }

}]);