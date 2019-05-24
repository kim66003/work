function categorizeAnswers(params) {
// counts which category (1-4) is answered most

    // get to survey questions
    var allQuestions = this.survey.questionHashes.names;
    if (!allQuestions) {
        return false;
    }

    // category counts
    var cat1 = 0;
    var cat2 = 0;
    var cat3 = 0;
    var cat4 = 0;
    var dictValues = {};
    var arrayRows = [];
    var dictCats2 = {
      quality: 0,
      justice: 0,
      access: 0,
      learning: 0
    }

    // check for every answer to which category it belongs and add to count (cat1-4)
    for (var key in allQuestions) {
        var question = allQuestions[key][0]
        if (question.choices) {
            var qValue = question.value;
            if (qValue) {
                question.choices.forEach(function(choice) {
                  var cValue = Number(choice.value)
                  var cValueStr = cValue.toString()
                  var cScore = choice.score
                    if (cValueStr === qValue || qValue.includes(cValueStr)) {
                        if (cScore === 1) {
                            cat1 += 1;
                            dictCats2.quality += 1;
                        } else if (cScore === 2) {
                            cat2 += 1;
                            dictCats2.justice += 1;
                        } else if (cScore === 3) {
                            cat3 += 1;
                            dictCats2.access += 1;
                        } else if (cScore === 4) {
                            cat4 += 1;
                            dictCats2.learning += 1;
                        }
                    }
                });
            }
        } else if (question.rows) {
          var qValue = question.value;
          if (qValue) {
            rows = question.rows
            if (Array.isArray(rows)) {
              dictValues = Object.assign({}, dictValues, qValue);
              rows.forEach(function(row) {
                arrayRows.push(row)
              })
            }
          }
        }
    }
    keys = Object.keys(dictValues)
    if (keys.length === 24) {
      for (i = 0; i < arrayRows.length; i++) {
        var key = Number(arrayRows[i].value)
        var score = Number(arrayRows[i].score)
        var value = Number(dictValues[key])
        if (score === 1 && (value === 4 || value === 5)) {
          cat1 += 1;
        } else if (score === 2 && (value === 4 || value === 5)) {
          cat2 += 1;
        } else if (score === 3 && (value === 4 || value === 5)) {
          cat3 += 1;
        } else if (score === 4 && (value === 4 || value === 5)) {
          cat4 += 1;
        }
      }
    }
    // make list of category counts and get the highest score
    var allCats = [cat1, cat2, cat3, cat4]
    var dictCats = {
      "cat1": cat1,
      "cat2": cat2,
      "cat3": cat3,
      "cat4": cat4
    }
    var highest = Math.max.apply(null, allCats)

    if (params === 0) {
      // return number of category with highest count
      if (cat1 === highest) {
          return 1;
      } else if (cat2 === highest) {
          return 2;
      } else if (cat3 === highest) {
          return 3;
      } else if (cat4 === highest) {
          return 4;
      }
    } else if (params === 1) {
      // return scores for every category
      return dictCats;
    } else {
      return false;
    }

}

function showText(persp) {
  var x = document.getElementsByClassName(persp);
  for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}

function showInitialText(perspectives) {
  console.log(perspectives)
  var result = categorizeAnswers(0)
  if (result === 1) {
    var x = document.getElementsByClassName(perspectives[0]);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  } else if (result === 2) {
    var x = document.getElementsByClassName(perspectives[1]);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  } else if (result === 3) {
    var x = document.getElementsByClassName(perspectives[2]);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  } else if (result === 4) {
    var x = document.getElementsByClassName(perspectives[3]);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  }
}

function processResults(survey) {
  var results = [];
  var count = 0;
  var questions = survey.questionHashes.names;
  for (var key in questions) {
    var question = questions[key][0]
    var displayValue = question.displayValue
    if (displayValue) {
          count += 1;
          var title = "\nVraag " + count.toString() + ": " + question.title + "\nAntwoord:"
          results.push(title)
          results.push(JSON.stringify(displayValue))
        }
  }
  return results;
}

function splitByWords (text) {
  // split string by spaces (including spaces, tabs, and newlines)
  var wordsArray = text.split(/\s+/);
  return wordsArray;
}

function countPerspectives (wordsMap) {

  var wordsQuality = ["kwaliteit", "kwalitatief", "competentie", "kwaliteiten", "capaciteit", "bekwaamheid", "geschikt", "expertise", "competitie"]
  var wordsJustice = ["rechtvaardigheid", "rechtvaardig", "eerlijkheid", "eerlijk", "integriteit"]
  var wordsAccess = ["toegang", "toegankelijkheid"]
  var wordsLearning = ["leren", "leergierig", "geleerd"]

  var perspectives = {
    quality: 0,
    justice: 0,
    access: 0,
    learning: 0
  }

  for (var key in wordsMap) {
    if (wordsQuality.includes(key)) {
      perspectives.quality += wordsMap[key]
    } else if (wordsJustice.includes(key)) {
      perspectives.justice += wordsMap[key]
    } else if (wordsAccess.includes(key)) {
      perspectives.access += wordsMap[key]
    } else if (wordsLearning.includes(key)) {
      perspectives.learning += wordsMap[key]
    }
  }

  return perspectives

}

function createWordMap (wordsArray) {

  // create map for word counts
  var wordsMap = {};

  wordsArray.forEach(function (key) {
      if (wordsMap.hasOwnProperty(key)) {
        wordsMap[key]++;
      } else {
        wordsMap[key] = 1;
      }
  });

  return wordsMap;

}

function sortByCount (wordsMap) {

  // sort by count in descending order
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;

}