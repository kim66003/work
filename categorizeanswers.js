function categorizeAnswers(params) {
// counts which category (1-4) is answered most

    // return false if there are no parameters
    if (!params && params.length < 1) {
        return false;
    }

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

    // check for every answer to which category it belongs and add to count (cat1-4)
    for (var key in allQuestions) {
        var question = allQuestions[key][0]
        if (question.choices) {
            var qValue = question.value;
            if (qValue) {
                question.choices.forEach(function(choice) {
                    if (choice.value === qValue || qValue.includes(choice.value)) {
                        if (choice.score == 1) {
                            cat1 += 1;
                        } else if (choice.score == 2) {
                            cat2 += 1;
                        } else if (choice.score == 3) {
                            cat3 += 1;
                        } else if (choice.score == 4) {
                            cat4 += 1;
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
        var score = arrayRows[i].score
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

    if (params[0] === 0) {
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
    } else if (params[0] === 1) {
      // return scores for every category
      return dictCats;
    }

}
