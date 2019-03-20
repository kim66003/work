Survey
    .StylesManager
    .applyTheme("orange");

var json = {
    "completeText": "Finish",
    "pageNextText": "Continue",
    "pagePrevText": "Previous",

    "pages": [
      {
        "name":"page1",
        "elements": [
          {
            "type":"panel",
            "name":"panel1",

            "elements": [
              {
                "type":"html",
                "name":"question1",
                "html":"<article class='intro'>    \n<h2 class='intro_heading'> Culturele Diversiteit Online Tool </h2>    \n<div class='intro__body'>\n<p>Deze tool geeft u inzicht in de kansen die culturele diversiteit biedt voor uw werkeenheid. <br> Daarbij reikt de tool u concrete handvatten aan om in uw werkomgeving verder aan de slag te gaan met culturele diversiteit.</p>\n<p>Dit is een try-out versie die aan de hand van uw input verder wordt ontwikkeld tot een gevalideerd instrument. <br> Alvast hartelijk dank voor uw medewerking. </p>\n</div>\n</article>"
              }
            ],
          }
        ],
        "navigationButtonsVisibility": "show"
      }, {
        "name":"page2",
        "elements": [
          {
            "type":"panel",
            "name":"panel2",
            "elements":[
              {
                "type":"radiogroup",
                "name":"question2",
                "title":"Bij welk organisatieonderdeel bent u werkzaam?",
                "choices":[
                  {
                    "value":"onderdeel1",
                    "text":"Onderdeel 1"
                  }, {
                    "value":"onderdeel2",
                    "text":"Onderdeel 2"
                  }, {
                    "value":"onderdeel3",
                    "text":"Onderdeel 3"
                  }
                ]
              }
            ],
            "title":"Onderdeel 1: Algemene vragen"
          }
        ]
      }, {
        "name":"page3",
        "elements":[
          {
            "type":"html",

            "elements":[
              {
                "type":"panel",
                "name":"panel3",
                "elements":[
                  {
                    "type":"comment",
                    "name":"question3",
                    "title":"hello"
                  }
                ]

              }
            ],
            "name": "description",
            "html": "<h5>Waarom vindt u het belangrijk om culturele diversiteit* in uw werkomgeving na te streven? <br>*met culturele diversiteit bedoelen wij de verscheidenheid aan nationale en etnische achtergronden van medewerkers</h5>"
          }
        ]
      }
    ],

    "requiredText": "",
    "showQuestionNumbers": "off",
    "storeOthersAsComment": false
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
