Survey
    .StylesManager
    .applyTheme("orange");

var json = {
  "completeText": "Finish",
  "pageNextText": "Continue",
  "pagePrevText": "Previous",

  "pages":[
    {
      "name":"page1",
      "elements":[
        {
          "type":"panel",
          "name":"panel1",
          "elements":[
            {
              "type":"html",
              "name":"question1",
              "html":"<article class='intro'>    \n<h2 class='intro_heading'> Culturele Diversiteit Online Tool </h2>    \n<div class='intro__body'>\n<p>Deze tool geeft u inzicht in de kansen die culturele diversiteit biedt voor uw werkeenheid. <br> Daarbij reikt de tool u concrete handvatten aan om in uw werkomgeving verder aan de slag te gaan met culturele diversiteit.</p>\n<p>Dit is een try-out versie die aan de hand van uw input verder wordt ontwikkeld tot een gevalideerd instrument. <br> Alvast hartelijk dank voor uw medewerking. </p>\n</div>\n</article>"
            }
          ]
        }
      ],
      "navigationButtonsVisibility":"show"
    }, {
      "name":"page2",
      "elements":[
        {
          "type":"panel",
          "name":"panel2",
          "elements":[
            {
              "type":"radiogroup",
              "name":"question2",
              "title":"Bij welk organisatieonderdeel bent u werkzaam?",
              "isRequired":true,
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
          "type":"panel",
          "name":"panel3",
          "elements":[
            {
              "type":"comment",
              "name":"question3",
              "isRequired":true,
              "validators": [
                {
                    "type": "text",
                    "minLength": 50,
                }
              ],
              "title": "Waarom vindt u het belangrijk om culturele diversiteit* in uw werkomgeving na te streven?",
              "description": "*met culturele diversiteit bedoelen wij de verscheidenheid aan nationale en etnische achtergronden van medewerkers",
            }
          ],
          "title":"Onderdeel 2: Diagnose (hoe kijk ik naar culturele diversiteit?)"
        }
      ]
    }, {
      "name":"page4",
      "elements":[
        {
          "type":"panel",
          "name":"panel4",
          "elements":[
            {
              "type":"html",
              "name":"description4",
              "html":"<p>In uw organisatie hebben wij medewerkers geïnterviewd over hun ervaringen met culturele diversiteit op de werkvloer. De volgende uitspraken kwamen uit de interviews naar voren:</p><ul> \t <li>\t\tGelijke kansen voor iedereen \t</li>\t<li>\t\tVerbeteren van de toegang tot verschillende doelgroepen \t</li>\t<li>\t\tCulturele diversiteit is geen issue \t</li>\t<li>\t\tHet gaat om kwaliteit \t</li>\t<li>\t\tMatching met de klant \t</li>\t<li>\t\tGelijke kansen voor iedereen \t</li>\t<li>\t\tVoorkomen van discriminatie \t</li>\t<li>\t\tStrategisch voordeel \t</li>\t<li>\t\tLegitimiteit (je geloofwaardigheid als organisatie) \t</li>\t<li>\t\tAansluiting bij hoe de samenleving zich ontwikkelt \t</li>\t<li>\t\tObjectieve beoordeling Inzetten op maximale prestaties \t</li>\t<li>\t\tVooruithelpen van achterstandsgroepen \t</li>\t<li>\t\tLeren van elkaars invalshoeken \t</li>\t<li>\t\tCreatieve oplossingen en innovatieve ideeën \t</li> <p>Wellicht heeft u na het lezen van bovenstaande uitspraken nieuwe ideeën opgedaan over culturele diversiteit in uw werkomgeving of helpen ze u om uw eigen visie aan te scherpen.</p></ul>"
            },
            {
              "type":"comment",
              "name":"question4",
              "isRequired":true,
              "validators": [
                {
                    "type": "text",
                    "minLength": 50,
                }
              ],
              "title": "Beschrijf nu nogmaals uw motivatie om aan de slag te gaan met culturele diversiteit in uw werkomgeving. Verwerk tenminste drie van de bovenstaande uitspraken in uw antwoord.",
            }
          ],
          "title":"Onderdeel 2: Diagnose (hoe kijk ik naar culturele diversiteit?)"
        }
      ]
    }, {
      "name":"page5",
      "elements":[
        {
          "type":"panel",
          "name":"panel5",
          "elements":[
            {
              "type":"matrix",
              "name":"question5",
              "title":"U krijgt nu telkens twee stellingen te zien. Geef bij elke stelling aan in hoeverre u het hier mee eens bent en kies vervolgens met welke stelling u het meest eens bent.",
              "isRequired":true,
              "columns":[
                {
                  "value":"1",
                  "text":"Helemaal niet mee eens"
                }, {
                  "value":"2",
                  "text":"Niet mee eens"
                }, {
                  "value":"3",
                  "text":"Niet eens, niet oneens"
                }, {
                  "value":"4",
                  "text":"Mee eens"
                }, {
                  "value":"5",
                  "text":"Helemaal mee eens"
                }
              ],
              "rows":[
                {
                  "value":"1",
                  "text":"Stelling 1"
                }, {
                  "value":"2",
                  "text":"Stelling 2"
                }
              ],
              "isAllRowRequired":true,
            }
          ],
          "title":"Onderdeel 2: Diagnose (vragenlijst)"
        }
      ],
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
