
<div ng-app="myApp">

  <superhero flight speed strength>Superman</superhero>
  <superhero speed>The Flash</superhero>

  <!-- <div ng-controller="AppCtrl">
      <div enter="deleteTweets()">Roll over to load more tweets</div>
  </div> -->

  <!-- <div enter="panel" leave>I'm content</div> -->

  <!-- <div superman flash></div>-->

  <!-- <div ng-controller="TextCtrl">
      <input type="text" ng-model="search.title">
      <table>
          <tr ng-repeat="text in texts.data | filter:search">
              <td>{{text.id}}</td>
              <td>{{text.title}}</td>
          </tr>
      </table>
  </div> -->

  <!--<div ng-controller="FirstCtrl">
      <input type="text" ng-model="data.message">
      <h1>{{data.message}}</h1>
  </div>

  <div ng-controller="SecondCtrl">
      <input type="text" ng-model="data.message">
      <h1>{{data.message|reverse}}</h1>
  </div>-->
</div>

/* var myApp = angular.module("myApp", []);

myApp.directive("superhero", function() {
  return {
    restrict: "E",
    scope:{},

    controller: function($scope) {
      $scope.abilities = [];

      this.addStrength = function() {
        $scope.abilities.push("strength")
      }

      this.addSpeed = function() {
        $scope.abilities.push("speed")
      }

      this.addFlight = function() {
        $scope.abilities.push("flight")
      }
    },

    link: function(scope, element) {
      element.addClass("button")
      element.bind("mouseenter", function() {
        console.log(scope.abilities)
      })
    }
  }
});

myApp.directive("strength", function() {
  return {
    require: "superhero",
    link: function(scope, element, attrs, superheroCtrl) {
      superheroCtrl.addStrength();
    }
  }
})

myApp.directive("speed", function() {
  return {
    require: "superhero",
    link: function(scope, element, attrs, superheroCtrl) {
      superheroCtrl.addSpeed();
    }
  }
})

myApp.directive("flight", function() {
  return {
    require: "superhero",
    link: function(scope, element, attrs, superheroCtrl) {
      superheroCtrl.addFlight();
    }
  }
})

/*myApp.controller("AppCtrl", function($scope) {
  $scope.loadMoreTweets = function() {
    alert("Loading tweets");
  }

  $scope.deleteTweets = function() {
    alert("Deleting tweets");
  }
})

myApp.directive("enter", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      scope.$apply(attrs.enter)
    })
  }
}) */

/*******/

/*myApp.directive("enter", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.addClass(attrs.enter)
    })
  }
})

myApp.directive("leave", function() {
  return function(scope, element, attrs) {
    element.bind("mouseleave", function() {
      element.removeClass(attrs.enter)
    })
  }
}) */

/**************/

/*myApp.directive("superman", function() {
  return {
    restrict: "A",
    link: function() {
      alert("I'm working stronger")
    }
  }
})

myApp.directive("flash", function() {
  return {
    restrict: "A",
    link: function() {
      alert("I'm working faster")
    }
  }
})*/

/***********/

/*myApp.factory('Texts', function() {
  var Texts = {};
  Texts.data = [{"id":1,"annot":"АЛ","author":"С.Антонов","textdate":"15.05.2009","editor":"ЛМ","source":null,"title":"Анкета","relativepath":"C:\\corpus\\corpus_ru\\2003\\Anketa.tgt"},{"id":2,"annot":null,"author":null,"textdate":null,"editor":null,"source":null,"title":null,"relativepath":"C:\\corpus\\corpus_ru\\2003\\Armeniya.tgt"},{"id":3,"annot":"ВС","author":"А.Кузнецов","textdate":"07.07.2009","editor":"ЛИ","source":null,"title":"АРТИСТ МИМАНСА","relativepath":"C:\\corpus\\corpus_ru\\2003\\Artist_mimansa.tgt"},{"id":4,"annot":"СГ","author":null,"textdate":"15.06.2008","editor":"ИБ","source":"www.Cnews.ru","title":"Украина разработала оружие для бескровной войны","relativepath":"C:\\corpus\\corpus_ru\\2003\\Ataka.tgt"},{"id":5,"annot":"АЛ","author":"Степан Кривошеев, Василий Дятлов","textdate":"08.06.2009","editor":"ЛМ","source":null,"title":"Атланты и атлантологи","relativepath":"C:\\corpus\\corpus_ru\\2003\\Atlanty_i_atlantologi.tgt"},{"id":6,"annot":"СГ","author":null,"textdate":"15.05.2009","editor":"ЛИ","source":null,"title":"Рынок автоматизации продуктовых торговых сетей в России","relativepath":"C:\\corpus\\corpus_ru\\2003\\Avtomatizatsiya.tgt"},{"id":7,"annot":"ВС","author":"Л. Серова","textdate":"14.06.2009","editor":"СГ","source":"Наука и жизнь, № 2, 2003","title":"А он, мятежный, просит бури...","relativepath":"C:\\corpus\\corpus_ru\\2003\\A_on_myatezhnyi.tgt"},{"id":8,"annot":"АЛ","author":"Г. Бакланов","textdate":"08.06.2009","editor":"ЛМ","source":null,"title":" Мертвые сраму не имут","relativepath":"C:\\corpus\\corpus_ru\\2003\\Baklanov.tgt"},{"id":9,"annot":"СГ","author":null,"textdate":"03.06.2008","editor":"ЛИ","source":"Химия и жизнь;  http://www.cnews.ru/lib/","title":" Первый шаг к российской водородной батарейке","relativepath":"C:\\corpus\\corpus_ru\\2003\\Batareika.tgt"}];

  return Texts;
})

function TextCtrl($scope, Texts) {
  $scope.texts = Texts;
}*/

/*******/

/*myApp.factory('Data', function() {
    return {message:"I'm data from a service"}
})

myApp.filter('reverse', function(Data) {
  return function(text) {
    return text.split("").reverse().join("") + Data.message;
  }
})

function FirstCtrl($scope, Data) {
  $scope.data = Data;
}

function SecondCtrl($scope, Data) {
  $scope.data = Data;

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  }
}*/