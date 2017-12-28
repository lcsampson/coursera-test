(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.menu = '';
        $scope.msg = '';

        $scope.isTooMuch = function () {
            var menuList = $scope.menu;
            var cnt = menuList.split(',').length;

            $scope.msg = (menuList == '') ? 'Please enter data first' :
                         (cnt <= 3) ? "Enjoy!" : "Too much!";
        };
    }
})();