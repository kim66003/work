function categorizeAnswers(params) {
    if (!params && params.length < 1) {
        return false;
    }
    var allQuestions = this.survey.questionHashes.names;
    if (!allQuestions) {
        return false;
    }
    var cat1 = 0;
    var cat2 = 0;
    var cat3 = 0;
    var cat4 = 0;

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
        }
    }
    var allCats = [cat1, cat2, cat3, cat4]
    var highest = Math.max.apply(null, allCats)
    if (cat1 === highest) {
        return 1;
    } else if (cat2 === highest) {
        return 2;
    } else if (cat3 === highest) {
        return 3;
    } else if (cat4 === highest) {
        return 4;
    }
}
