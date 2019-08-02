function categorizeAnswers(params) {
  // counts which category (1-4) is answered most

  // get to survey questions
  var allQuestions = this.survey.questionHashes.names;
  if (!allQuestions) {
    return false;
  }

  // category counts
  var dictValues = {};
  var arrayRows = [];
  var dictCats = {
    quality: 0,
    justice: 0,
    access: 0,
    learning: 0
  }

  // check for every answer to which category it belongs and add to dictionary
  for (var key in allQuestions) {
    var question = allQuestions[key][0]

    if (question.name === "waarom_belangrijk") {
      if (question.value) {
        var wordsArray = splitByWords(question.value);
        var wordsMap = createWordMap(wordsArray);
        var finalWordsArray = sortByCount(wordsMap);
        var perspectives = countPerspectives(wordsMap)
        for (var key in perspectives) {
          for (var dictkey in dictCats) {
            if (key == dictkey) {
              dictCats[dictkey] += perspectives[key]
            }
          }
        }
      }
    }

    if (question.choices) { // radiogroup and checkbox scores
      var qValue = question.value;
      if (qValue) {
        question.choices.forEach(function(choice) {
          var cValue = Number(choice.value)
          var cValueStr = cValue.toString()
          var cScore = choice.score
          if (cValueStr === qValue || qValue.includes(cValueStr)) {
            if (cScore === 1) {
              dictCats.quality += 1;
            } else if (cScore === 2) {
              dictCats.justice += 1;
            } else if (cScore === 3) {
              dictCats.access += 1;
            } else if (cScore === 4) {
              dictCats.learning += 1;
            }
          }
        });
      }
    } else if (question.rows) { // matrix scores
      var qValue = question.value;
      if (qValue) {
        var rows = question.rows
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
        dictCats.quality += 1;
      } else if (score === 2 && (value === 4 || value === 5)) {
        dictCats.justice += 1;
      } else if (score === 3 && (value === 4 || value === 5)) {
        dictCats.access += 1;
      } else if (score === 4 && (value === 4 || value === 5)) {
        dictCats.learning += 1;
      }
    }
  }
  // make list of scores and get the highest score
  var values = Object.values(dictCats)
  var highest = Math.max.apply(null, values)

  if (params === 0) {
    // return number of category with highest count
    if (dictCats.quality === highest) {
      return 1;
    } else if (dictCats.justice === highest) {
      return 2;
    } else if (dictCats.access === highest) {
      return 3;
    } else if (dictCats.learning === highest) {
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

function splitByWords(text) {
  // split string by spaces (including spaces, tabs, and newlines)
  var wordsArray = text.split(/\s+/);
  return wordsArray;
}

function countPerspectives(wordsMap) {

  var wordsQuality = ["kwaliteit", "kwalitatief", "kwaliteiten", "competentie", "competenties", "competente", "kwaliteiten", "capaciteit", "bekwaamheid", "geschikt", "expertise", "competitie"]
  var wordsJustice = ["rechtvaardigheid", "rechtvaardig", "eerlijkheid", "eerlijk", "integriteit", "gelijkwaardig"]
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

function createWordMap(wordsArray) {

  // create map for word counts
  var wordsMap = {};

  wordsArray.forEach(function(key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;

}

function sortByCount(wordsMap) {

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

function checkMatrixValue(qname) {
  var question = this.survey.getQuestionByName(qname);
  var value = question.value;
  var rows = question.rows;
  if (value) {
    var isArrayAnswered = true;
    rows.forEach(function(row) {
      if (!(value[row.value])) {
        isArrayAnswered = false;
      }
    })
  }

  if (isArrayAnswered) {
    return rows.length;
  } else {
    return 0;
  }
}

function rowsArray(nr) {
  return [{
    value: answers[nr][0].number,
    text: answers[nr][0].text,
    score: answers[nr][0].value,
  }, {
    value: answers[nr][1].number,
    text: answers[nr][1].text,
    score: answers[nr][1].value,
  }];
}