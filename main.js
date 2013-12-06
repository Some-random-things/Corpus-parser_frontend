/**
 * Created by imilka on 06.12.13.
 */
/*app.js tabs*/

var angularApp = angular.module('TabsApp', []);
angularApp.controller('TabManagerCtrl', ['$scope', function($scope) {

  $scope.tabManager = {};

  $scope.tabManager.tabItems = [];

  $scope.tabManager.checkIfMaxTabs = function(){
    var max = 4;
    var i = $scope.tabManager.tabItems.length;
    if(i > max){
      return true;
    }
    return false;
  };

  $scope.tabManager.getSelected = function() {
    var i = 0, increment = true;
    angular.forEach($scope.tabManager.tabItems, function(pane) {
      if(pane.selected) {
        increment = false;
      }

      if(increment) i++;
    })

    return i;
  }

  $scope.tabManager.getTitle = function(tabInfo){
    console.log("[ title ] -> ",tabInfo.title);
    tabInfo.title.substr(0,10);
  };

  $scope.tabManager.resetSelected = function(){
    angular.forEach($scope.tabManager.tabItems, function(pane) {
      pane.selected = false;
    });
  };

  $scope.tabManager.addTab = function(){
    if($scope.tabManager.checkIfMaxTabs()){
      alert("[Max Tabs] You have opened max tabs for this page.");
      return;
    }
    $scope.tabManager.resetSelected();
    var i = ($scope.tabManager.tabItems.length +1);
    $scope.tabManager.tabItems.push({
      title: "Tab No: " + i,
      content: "Lores sum ep sum news test [" + i +"]",
      selected: true
    });
  };

  //to select the tab
  $scope.tabManager.select = function(i) {
    angular.forEach($scope.tabManager.tabItems, function(tabInfo) {
      tabInfo.selected = false;
    });
    $scope.tabManager.tabItems[i].selected = true;
  }


  //add few tabs
  for(var i = 1; i < 3; i++){
    $scope.tabManager.tabItems.push({
      title: "Tab No: " + i,
      content: "Lores sum ep sum news test [" + i +"]",
      selected: false
    });
  }

  // init the first active tab
  $scope.tabManager.select(0);

}]);

angularApp.filter('limit', function() {
  return function (input, value) {
    return input.substr(0,value);
  };
});