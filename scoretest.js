Survey
    .JsonObject
    .metaData
    .addProperty("question", {name: "score:number"});

    Survey
    .JsonObject
    .metaData
    .addProperty("question", {name:"maxScore:number"});
//Questions json
var js ={
  title:"Welcome developer!",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "text",
     "name": "question1",
     "maxScore": 10,
     "isRequired": true,
    },
    {
     "type": "checkbox",
     "name": "question2",
     "maxScore": 15,
     "choices": [
      "item1",
      "item2",
      "item3"
     ]
    },
    {
     "type": "radiogroup",
     "name": "question3",
     "maxScore": 12,
     "choices": [
      "item1",
      "item2",
      "item3"
     ]
    },
    {
     "type": "boolean",
     "name": "question4",
     "maxScore": 8
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "text",
     "name": "question5",
     "maxScore": 5
    },
    {
     "type": "checkbox",
     "name": "question6",
     "maxScore": 6,
     "choices": [
      "item1",
      "item2",
      "item3"
     ]
    },
    {
     "type": "comment",
     "name": "question8",
     "maxScore": 8
    },
    {
     "type": "rating",
     "name": "question9",
     "maxScore": 9
    },
    {
     "type": "dropdown",
     "name": "question7",
     "maxScore": 7,
     "choices": [
      "item1",
      "item2",
      "item3"
     ]
    }
   ]
  }
 ]
};
//initialize the survey with questions json
window.survey = new Survey.Model(js);

//Answers json that we should get from the submitter
survey.data ={
    "question1": "Answer 1",
    "question2": [
        "item1",
        "item3"
    ],
    "question3": "item3",
    "question4": true,
    "question5": "Answer 5",
    "question6": [
        "item2"
    ],
    "question8": "Answer 8",
    "question9": 4,
    "question7": "item1"
};

//score json that was submitter by the evaluator
var score = [{"name":"question1","score":8},{"name":"question2","score":6},{"name":"question3","score":5}];

//function to read score json and modify the question property
function GetScoreValue(qName){
   var result;
   if(score)
   result = score.filter(function(data) {return data.name == qName});
   return result.length>0?result[0].score:0;
}

survey
    .onComplete
    .add(function (result) {

       var modifiedData = Object.keys(result.data).map(function(qName) {
          return {
            name: result.getQuestionByName(qName).name,
            score: result.getQuestionByName(qName).score,
          };
        });
        document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
        document.querySelector('#surveyScore').innerHTML = "Score result: " + JSON.stringify(modifiedData);
    });


survey.onValidateQuestion.add(function (s, options) {
   if(options.question.score){
     if(options.question.score<0 ||options.question.score>options.question.maxScore) {
          options.error = "Enter correct score!!";
      }

   else if(!Number.isInteger(Number(options.question.score)||Number.isNaN(Number(options.question.score))))
      options.error = "Enter Numbers only!!";
   }

});
survey.checkForErrors="";
survey
    .onAfterRenderQuestion
    .add(function (survey, options) {
        //Return if there is max score
        if (!options.question.maxScore)
            return;
        var maxScore=document.createElement("span");
        maxScore.innerHTML = '/ '+options.question.maxScore;
        var score = document.createElement("input");
        score.value= GetScoreValue(options.question.name);
        options.question.score = score.value;
        score.style="width:40px";
        //Add a score input;
        var question = options.question;
        score.onchange = function(){
        options.question.score = score.value;
         //fire validation
        options.question.hasErrors(true);
        };

        var header = options
            .htmlElement
            .querySelector("div");
        header.prepend(maxScore);
        header.prepend(score);
        options.question.readOnly = true;
    });

$("#surveyElement").Survey({model: survey});
