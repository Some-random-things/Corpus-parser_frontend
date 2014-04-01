/**
 * Created by imilka on 06.12.13.
 */
/*app.js tabs*/

var angularApp = angular.module('TabsApp', ['ngSanitize']);

angularApp.factory('ajaxService', function($http) {
  return {
    getStats: function(data) {
      return $http.post("/api/spring-corpus/stats/bigram", data).success(function(result){
        return result;
      });
    },

    getHashStats: function(hash) {
      return $http.get("/api/spring-corpus/stats/bigram?hash=" + hash).success(function(result){
        return result;
      });
    },

    getSentences: function(data) {
      return $http.post("/api/spring-corpus/stats/getsentence", data).success(function(result){
        return result;
      });
    }
  }
});

angularApp.directive('loading', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="loading">LOADING...</div>',
    link: function (scope, element, attr) {
      scope.$watch('loading', function (val) {
        if (val)
          $(element).show();
        else
          $(element).hide();
      });
    }
  }
})

function TabManagerCtrl($scope, ajaxService) {

  $scope.posData = [
    {
      "partOfSpeech": "S",
      "text": "существительное",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской",
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "средний"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        },
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }
      ]
    },
    {
      "partOfSpeech": "A",
      "text": "прилагательное",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской"
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "женский"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        },
        {
          "dbfield": "comparison",
          "text": "степень сравнения",
          "values": [
            {
              "ident": "СРАВ",
              "text": "сравнительная"
            },
            {
              "ident": "ПРЕВ",
              "text": "превосходная"
            },
            {
              "ident": "NULL",
              "text": "положительная"
            }
          ]
        },
        {
          "dbfield": "short",
          "text": "краткость",
          "values": [
            {
              "ident": "КР",
              "text": "краткая"
            },
            {
              "ident": "NULL",
              "text": "полная"
            }
          ]
        },
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }
      ]
    },
    {
      "partOfSpeech": "V",
      "text": "глагол",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской"
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "женский"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        },
        {
          "dbfield": "short",
          "text": "краткость",
          "values": [
            {
              "ident": "КР",
              "text": "краткая"
            },
            {
              "ident": "NULL",
              "text": "полная"
            }
          ]
        },
        {
          "dbfield": "form",
          "text": "форма глагола",
          "values": [
            {
              "ident": "ИНФ",
              "text": "инфинитив"
            },
            {
              "ident": "ПРИЧ",
              "text": "причастие"
            },
            {
              "ident": "ДЕЕПР",
              "text": "деепричастие"
            },
            {
              "ident": "NULL",
              "text": "личная форма"
            }
          ]
        },
        {
          "dbfield": "mood",
          "text": "наклонение",
          "values": [
            {
              "ident": "ИЗЪЯВ",
              "text": "изъявительное"
            },
            {
              "ident": "ПОВ",
              "text": "повелительное"
            }
          ]
        },
        {
          "dbfield": "aspect",
          "text": "вид",
          "values": [
            {
              "ident": "НЕСОВ",
              "text": "несоверщенный вид"
            },
            {
              "ident": "СОВ",
              "text": "совершенный вид"
            }
          ]
        },
        {
          "dbfield": "tense",
          "text": "время",
          "values": [
            {
              "ident": "НЕПРОШ",
              "text": "непрошедшее"
            },
            {
              "ident": "ПРОШ",
              "text": "прошедшее"
            },
            {
              "ident": "НАСТ",
              "text": "настоящее"
            }
          ]
        },
        {
          "dbfield": "person",
          "text": "лицо",
          "values": [
            {
              "ident": "1-Л",
              "text": "первое лицо"
            },
            {
              "ident": "2-Л",
              "text": "второе лицо"
            },
            {
              "ident": "3-Л",
              "text": "третье лицо"
            }
          ]
        },
        {
          "dbfield": "pledge",
          "text": "залог",
          "values": [
            {
              "ident": "страд",
              "text": "страдательный"
            },
            {
              "ident": "NULL",
              "text": "действительный"
            }
          ]
        }

      ]
    },
    {
      "partOfSpeech": "ADV",
      "text": "наречие",
      "properties": [
        {
          "dbfield": "comparison",
          "text": "степень сравнения",
          "values": [
            {
              "ident": "СРАВ",
              "text": "сравнительная"
            },
            {
              "ident": "ПРЕВ",
              "text": "превосходная"
            },
            {
              "ident": "NULL",
              "text": "положительная"
            }

          ]
        },
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }

      ]
    },
    {
      "partOfSpeech": "NUM",
      "text": "числительное",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской"
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "женский"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        },
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }

      ]
    },
    {
      "partOfSpeech": "PR",
      "text": "предлог",
      "properties": []
    },
    {
      "partOfSpeech": "COM",
      "text": "композит",
      "properties": [
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }
      ]
    },
    {
      "partOfSpeech": "CONJ",
      "text": "союз",
      "properties": []
    },
    {
      "partOfSpeech": "PART",
      "text": "частица",
      "properties": []
    },
    {
      "partOfSpeech": "P",
      "text": "слово-предложение",
      "properties": []
    },
    {
      "partOfSpeech": "INTJ",
      "text": "междометие",
      "properties": []
    },
    {
      "partOfSpeech": "NID",
      "text": "иноязычное вкрапление",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской"
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "женский"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        }
      ]
    }
  ];
  $scope.posDataDep = [
    {
      "partOfSpeech": "S",
      "text": "существительное",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской",
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "средний"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        },
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }
      ]
    },
    {
      "partOfSpeech": "A",
      "text": "прилагательное",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской"
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "женский"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        },
        {
          "dbfield": "comparison",
          "text": "степень сравнения",
          "values": [
            {
              "ident": "СРАВ",
              "text": "сравнительная"
            },
            {
              "ident": "ПРЕВ",
              "text": "превосходная"
            },
            {
              "ident": "NULL",
              "text": "положительная"
            }
          ]
        },
        {
          "dbfield": "short",
          "text": "краткость",
          "values": [
            {
              "ident": "КР",
              "text": "краткая"
            },
            {
              "ident": "NULL",
              "text": "полная"
            }
          ]
        },
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }
      ]
    },
    {
      "partOfSpeech": "V",
      "text": "глагол",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской"
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "женский"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        },
        {
          "dbfield": "short",
          "text": "краткость",
          "values": [
            {
              "ident": "КР",
              "text": "краткая"
            },
            {
              "ident": "NULL",
              "text": "полная"
            }
          ]
        },
        {
          "dbfield": "form",
          "text": "форма глагола",
          "values": [
            {
              "ident": "ИНФ",
              "text": "инфинитив"
            },
            {
              "ident": "ПРИЧ",
              "text": "причастие"
            },
            {
              "ident": "ДЕЕПР",
              "text": "деепричастие"
            },
            {
              "ident": "NULL",
              "text": "личная форма"
            }
          ]
        },
        {
          "dbfield": "mood",
          "text": "наклонение",
          "values": [
            {
              "ident": "ИЗЪЯВ",
              "text": "изъявительное"
            },
            {
              "ident": "ПОВ",
              "text": "повелительное"
            }
          ]
        },
        {
          "dbfield": "aspect",
          "text": "вид",
          "values": [
            {
              "ident": "НЕСОВ",
              "text": "несоверщенный вид"
            },
            {
              "ident": "СОВ",
              "text": "совершенный вид"
            }
          ]
        },
        {
          "dbfield": "tense",
          "text": "время",
          "values": [
            {
              "ident": "НЕПРОШ",
              "text": "непрошедшее"
            },
            {
              "ident": "ПРОШ",
              "text": "прошедшее"
            },
            {
              "ident": "НАСТ",
              "text": "настоящее"
            }
          ]
        },
        {
          "dbfield": "person",
          "text": "лицо",
          "values": [
            {
              "ident": "1-Л",
              "text": "первое лицо"
            },
            {
              "ident": "2-Л",
              "text": "второе лицо"
            },
            {
              "ident": "3-Л",
              "text": "третье лицо"
            }
          ]
        },
        {
          "dbfield": "pledge",
          "text": "залог",
          "values": [
            {
              "ident": "страд",
              "text": "страдательный"
            },
            {
              "ident": "NULL",
              "text": "действительный"
            }
          ]
        }

      ]
    },
    {
      "partOfSpeech": "ADV",
      "text": "наречие",
      "properties": [
        {
          "dbfield": "comparison",
          "text": "степень сравнения",
          "values": [
            {
              "ident": "СРАВ",
              "text": "сравнительная"
            },
            {
              "ident": "ПРЕВ",
              "text": "превосходная"
            },
            {
              "ident": "NULL",
              "text": "положительная"
            }

          ]
        },
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }

      ]
    },
    {
      "partOfSpeech": "NUM",
      "text": "числительное",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской"
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "женский"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        },
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }

      ]
    },
    {
      "partOfSpeech": "PR",
      "text": "предлог",
      "properties": []
    },
    {
      "partOfSpeech": "COM",
      "text": "композит",
      "properties": [
        {
          "dbfield": "additional",
          "text": "дополнительные характеристики",
          "values": [
            {
              "ident": "СЛ",
              "text": "словосложение"
            },
            {
              "ident": "СМЯГ",
              "text": "смягченная степень"
            }
          ]
        }
      ]
    },
    {
      "partOfSpeech": "CONJ",
      "text": "союз",
      "properties": []
    },
    {
      "partOfSpeech": "PART",
      "text": "частица",
      "properties": []
    },
    {
      "partOfSpeech": "P",
      "text": "слово-предложение",
      "properties": []
    },
    {
      "partOfSpeech": "INTJ",
      "text": "междометие",
      "properties": []
    },
    {
      "partOfSpeech": "NID",
      "text": "иноязычное вкрапление",
      "properties": [
        {
          "dbfield": "animacy",
          "text": "одушевленность",
          "values": [
            {
              "ident": "ОД",
              "text": "одушевленное"
            },
            {
              "ident": "НЕОД",
              "text": "неодушевленное"
            }
          ]
        },
        {
          "dbfield": "gender",
          "text": "род",
          "values": [
            {
              "ident": "МУЖ",
              "text": "мужской"
            },
            {
              "ident": "ЖЕН",
              "text": "женский"
            },
            {
              "ident": "СРЕД",
              "text": "женский"
            }
          ]
        },
        {
          "dbfield": "count",
          "text": "число",
          "values": [
            {
              "ident": "ЕД",
              "text": "единственное"
            },
            {
              "ident": "МН",
              "text": "множественное"
            }
          ]
        },
        {
          "dbfield": "case",
          "text": "падеж",
          "values": [
            {
              "ident": "ИМ",
              "text": "именительный"
            },
            {
              "ident": "РОД",
              "text": "родительный"
            },
            {
              "ident": "ПАРТ",
              "text": "партитивный"
            },
            {
              "ident": "ДАТ",
              "text": "дательный"
            },
            {
              "ident": "ВИН",
              "text": "винительный"
            },
            {
              "ident": "ТВОР",
              "text": "творительный"
            },
            {
              "ident": "ПР",
              "text": "предложный"
            },
            {
              "ident": "МЕСТН",
              "text": "местный"
            },
            {
              "ident": "ЗВ",
              "text": "звательный"
            }
          ]
        }
      ]
    }
  ];

  $scope.stats = [];
  $scope.sentences = [];

  // MAIN

  $scope.tabManager = {};

  $scope.tabManager.tabItems = [];

  $scope.tabManager.selectItems = [];

  angular.forEach($scope.posData, function(pos) {
    $scope.tabManager.selectItems.push(pos);
  });

  $scope.tabManager.getTitle = function(tabInfo){
    console.log("[ title ] -> ",tabInfo.title);
    tabInfo.title.substr(0,10);
  };

  $scope.tabManager.addTab = function(){
    if($scope.selectedPos != undefined) {
      $scope.tabManager.selectItems = [];
      angular.forEach($scope.posData, function(pos) {
        if(pos.partOfSpeech == $scope.selectedPos) {
          $scope.tabManager.tabItems.push({
            partOfSpeech: pos.partOfSpeech,
            title: pos.text,
            content: pos.properties,
            selected: true
          });
        } else {
          $scope.tabManager.selectItems.push(pos);
        }
      });

      $scope.sendData();
    }
  };

  $scope.tabManager.removeTab = function(index) {
    items = []; i = 0;
    angular.forEach($scope.tabManager.tabItems, function(tab) {
      if(i != index) items.push(tab);
      i++;
    });
    $scope.tabManager.tabItems = items;

    $scope.sendData();
  }

  $scope.tabManager.getLabelClass = function(tab, index) {
    changed = false;
    angular.forEach(tab.content[index].values, function(value) {
      if(value.selected) changed = true;
    });

    if(changed) return "alert";
    else return "";
  }

  $scope.tabManager.updateSelected = function(property) {
    angular.forEach(property.values, function(value) {
      value.selected = false;
      angular.forEach(property.select, function(sel) {
        if(sel == value.ident) value.selected = true;
      })
    });

    $scope.sendData();
  }

  $scope.tabManager.getLabelString = function(property) {
    selected = [];
    angular.forEach(property.values, function(value) {
      if(value.selected) selected.push(value.ident);
    })

    if(selected.length == 0) return "";
    else return "[" + selected.join(",") + "]";
  }

  // DEP

  $scope.tabManagerDep = {};

  $scope.tabManagerDep.tabItems = [];

  $scope.tabManagerDep.selectItems = [];

  angular.forEach($scope.posDataDep, function(pos) {
    $scope.tabManagerDep.selectItems.push(pos);
  });

  $scope.tabManagerDep.getTitle = function(tabInfo){
    console.log("[ title ] -> ",tabInfo.title);
    tabInfo.title.substr(0,10);
  };

  $scope.tabManagerDep.addTab = function(){
    if($scope.selectedPosDep != undefined) {
      $scope.tabManagerDep.selectItems = [];
      angular.forEach($scope.posDataDep, function(pos) {
        if(pos.partOfSpeech == $scope.selectedPosDep) {
          $scope.tabManagerDep.tabItems.push({
            partOfSpeech: pos.partOfSpeech,
            title: pos.text,
            content: pos.properties,
            selected: true
          });
        } else {
          $scope.tabManagerDep.selectItems.push(pos);
        }
      });

      $scope.sendData();
    }
  };

  $scope.tabManagerDep.removeTab = function(index) {
    items = []; i = 0;
    angular.forEach($scope.tabManagerDep.tabItems, function(tab) {
      if(i != index) items.push(tab);
      i++;
    });
    $scope.tabManagerDep.tabItems = items;

    $scope.sendData();
  }

  $scope.tabManagerDep.getLabelClass = function(tab, index) {
    changed = false;
    angular.forEach(tab.content[index].values, function(value) {
      if(value.selected) changed = true;
    });

    if(changed) return "alert";
    else return "";
  }

  $scope.tabManagerDep.updateSelected = function(property) {
    angular.forEach(property.values, function(value) {
      value.selected = false;
      angular.forEach(property.select, function(sel) {
        if(sel == value.ident) value.selected = true;
      })
    });

    $scope.sendData();
  }

  $scope.tabManagerDep.getLabelString = function(property) {
    selected = [];
    angular.forEach(property.values, function(value) {
      if(value.selected) selected.push(value.ident);
    })

    if(selected.length == 0) return "";
    else return "[" + selected.join(",") + "]";
  }

  $scope.sendData = function() {
    if($scope.tabManager.tabItems.length == 0 || $scope.tabManagerDep.tabItems.length == 0) return;
    $scope.dataToSend = {};

    $scope.dataToSend.main = $scope.tabManager.tabItems;
    $scope.dataToSend.dep = $scope.tabManagerDep.tabItems;
    $scope.dataToSend.rawRequest = false;

    $scope.loading = true;
    ajaxService.getStats($scope.dataToSend).then(function(stats) {
      console.log(stats);
      $scope.stats = stats.data.combinations;
      window.location.hash = stats.data.hash;
      $scope.loading = false;
      $scope.sentences = [];
    });
  }

  $scope.getSentences = function(index) {
    $scope.sentenceLoading = true;
    $scope.sentences = [];
    ajaxService.getSentences($scope.stats[index]).then(function(stats) {
      $scope.sentences = stats.data;
      $scope.sentenceLoading = false;
    })
  }

  angular.element(document).ready(function () {
    var hash = document.location.hash.replace("#", "");
    if(hash.length != 0) {
      ajaxService.getHashStats(hash).then(function(stats) {
        console.log(stats);
        $scope.stats = stats.data.combinations;
        window.location.hash = stats.data.hash;
        $scope.loading = false;
        $scope.sentences = [];
      });
    }
  });
}

angularApp.filter('limit', function() {
  return function (input, value) {
    return input.substr(0,value);
  };
});

angularApp.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
      return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});

angularApp.filter('join', function() {
  return function (input) {
    return input.join(", ");
  }
});

angularApp.filter('highlight', function() {
  return function (input, bigram) {
    temp = input.replace(bigram.main, "<span class='main-partOfSpeech'>" + bigram.main + "</span>");
    temp = temp.replace(bigram.dep, "<b>" + bigram.dep + "</b>");
    return temp;
  }
})

function collapse() {
  $(".property-settings").addClass("hidden");
}