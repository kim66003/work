Survey
    .StylesManager
    .applyTheme("bootstrap")

Survey
    .surveyLocalization
    .locales["my"] = dutchStrings;

var myCss = {
    matrix: {
        root: "table table-striped"
    },
    question: {
        number: "sv_q_num",
        description: "medium",
        title: "16px",
        text: "14px",
        comment: "form-control",
    },
};

var surveyJSON = {
    pages: [{
        name: "page1",
        elements: [{
            type: "html",
            name: "question1",
            html: "<h2>Culturele Diversiteit Online Tool</h2>\n<p>Deze tool geeft u inzicht in de kansen die culturele diversiteit biedt voor uw werkeenheid. \nDaarbij reikt de tool u concrete handvatten aan om in uw werkomgeving verder aan de slag te gaan met culturele diversiteit.\n\nDit is een try-out versie die aan de hand van uw input verder wordt ontwikkeld tot een gevalideerd instrument. \nAlvast hartelijk dank voor uw medewerking.</p>"
        }]
    }, {
        name: "page2",
        elements: [{
            type: "panel",
            name: "panel1",
            elements: [{
                type: "radiogroup",
                name: "question2",
                title: "Vind je het belangrijk om met culturele diversiteit* in jouw werkomgeving aan de slag te gaan? ",
                choices: [{
                    value: "1",
                    text: "Ja"
                }, {
                    value: "2",
                    text: "Nee"
                }]
            }, {
                type: "comment",
                name: "question3",
                visible: false,
                visibleIf: "{question1} = \"1\"",
                title: "Waarom?",
                isRequired: true
            }, {
                type: "comment",
                name: "question4",
                visible: false,
                visibleIf: "{question1} = \"2\"",
                title: "Waarom niet?",
                isRequired: true
            }]
        }],
        title: {
            nl: "  Onderdeel 1: Hoe kijk ik naar culturele diversiteit?"
        }
    }, {
        name: "page3",
        elements: [{
            type: "panel",
            name: "panel2",
            elements: [{
                type: "checkbox",
                name: "question5",
                title: "In jouw organisatie hebben wij medewerkers geïnterviewd over hun ervaringen met culturele diversiteit op de werkvloer. De volgende uitspraken kwamen uit de interviews naar voren:",
                choices: [{
                    value: "1",
                    text: "Objectieve beoordeling"
                }, {
                    value: "2",
                    text: "Creatieve oplossingen en innovatieve ideeën"
                }, {
                    value: "item3",
                    text: "Culturele diversiteit zou niet de focus moeten zijn"
                }, {
                    value: "item4",
                    text: "Legitimiteit (je geloofwaardigheid als organisatie)"
                }, {
                    value: "item5",
                    text: "Inzetten op maximale prestaties"
                }, {
                    value: "item6",
                    text: "Matching met de klant"
                }, {
                    value: "item7",
                    text: "Leren van elkaars invalshoeken"
                }, {
                    value: "item8",
                    text: "Aansluiting bij hoe de samenleving zich ontwikkelt"
                }, {
                    value: "item9",
                    text: "Voorkomen van discriminatie"
                }, {
                    value: "10",
                    text: "Het gaat om kwaliteit"
                }, {
                    value: "11",
                    text: "Gelijke kansen voor iedereen"
                }, {
                    value: "12",
                    text: "Verbeteren van de toegang tot verschillende doelgroepen"
                }, {
                    value: "13",
                    text: "Verbinding houden met groeiende visvijver van talent"
                }, {
                    value: "14",
                    text: "Vooruithelpen van achterstandsgroepen"
                }]
            }, {
                type: "html",
                name: "question6",
                html: "<p> Wellicht heb je na het lezen van bovenstaande uitspraken nieuwe ideeën opgedaan over het belang van culturele diversiteit in jouw organisatie of helpt het om je eigen visie aan te scherpen. </p>\n"
            }, {
                type: "comment",
                name: "question7",
                title: "Beschrijf nu nogmaals je motivatie om aan de slag te gaan met culturele diversiteit in jouw werkomgeving. Selecteer tenminste drie van de bovenstaande uitspraken en verwerk deze in je antwoord. ",
                isRequired: true
            }]
        }],
        title: "Onderdeel 1: Hoe kijk ik naar culturele diversiteit?"
    }, {
        name: "page4",
        elements: [{
            type: "panel",
            name: "panel3",
            elements: [{
                type: "html",
                name: "question8",
                html: "<p>Je krijgt nu telkens twee stellingen te zien die gaan over redenen om culturele diversiteit na te streven. Kies telkens de stelling waar je het het meest mee eens bent.</p>"
            }, {
                type: "radiogroup",
                name: "question9",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                choices: [{
                    value: "1",
                    text: "…omdat het onze sociale verantwoordelijkheid is om een afspiegeling te zijn van de maatschappij"
                }, {
                    value: "2",
                    text: "…als kwaliteitsdoelen maar eerst gewaarborgd zijn"
                }]
            }, {
                type: "radiogroup",
                name: "question10",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                choices: [{
                    value: "1",
                    text: "…omdat teamleden met verschillende culturele achtergronden elkaar versterken"
                }, {
                    value: "2",
                    text: " …omdat wij als organisatie moeten inspelen op het diverser worden van de markt"
                }]
            }, {
                type: "radiogroup",
                name: "question11",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                choices: ["1", "2", "item3"]
            }]
        }]
    }]
}

var surveyJSON = {

    "pages": [{
        "name": "page1",
        "elements": [{
            "type": "panel",
            "name": "panel1",
            "elements": [{
                "type": "html",
                "name": "question1",
                "html": "<article class='intro'>    \n<h2 class='intro_heading'> Culturele Diversiteit Online Tool </h2>    \n<div class='intro__body'>\n<p>Deze tool geeft u inzicht in de kansen die culturele diversiteit biedt voor uw werkeenheid. <br> Daarbij reikt de tool u concrete handvatten aan om in uw werkomgeving verder aan de slag te gaan met culturele diversiteit.</p>\n<p>Dit is een try-out versie die aan de hand van uw input verder wordt ontwikkeld tot een gevalideerd instrument. <br> Alvast hartelijk dank voor uw medewerking. </p>\n</div>\n</article>"
            }]
        }],
        "navigationButtonsVisibility": "show"
    }, {
        "name": "page2",
        "elements": [{
            "type": "panel",
            "name": "panel2",
            "elements": [{
                "type": "radiogroup",
                "name": "question2",
                "title": "Vind je het belangrijk om met culturele diversiteit* in jouw werkomgeving aan de slag te gaan?",
                "description": "*met culturele diversiteit bedoelen wij de verscheidenheid aan nationale en etnische achtergronden van medewerkers",
                "isRequired": true,
                "choices": ["Ja", "Nee"],
            }, {
                "type": "comment",
                "name": "question3",
                "visible": false,
                "visibleIf": "{question2} = \"Ja\"",
                "title": "Waarom?",
                "isRequired": true,
                "validators": [{
                    "type": "text",
                    "minLength": 20,
                }],
            }, {
                "type": "comment",
                "name": "question4",
                "visible": false,
                "visibleIf": "{question2} = \"Nee\"",
                "title": "Waarom niet?",
                "isRequired": true,
                "validators": [{
                    "type": "text",
                    "minLength": 20,
                }],
            }],
            "title": "Onderdeel 1: Hoe kijk ik naar culturele diversiteit?"
        }],
    }, {
        "name": "page3",
        "elements": [{
            "type": "panel",
            "name": "panel3",
            "elements": [{
                "type": "checkbox",
                "name": "question5",
                "title": "In jouw organisatie hebben wij medewerkers geïnterviewd over hun ervaringen met culturele diversiteit op de werkvloer. De volgende uitspraken kwamen uit de interviews naar voren:",
                "isRequired": true,
                "choices": ["1|Objectieve beoordeling", "2|Creatieve oplossingen en innovatieve ideeën", "3|Culturele diversiteit zou niet de focus moeten zijn", "4|Legitimiteit (je geloofwaardigheid als organisatie)", "5|Inzetten op maximale prestaties", "6|Matching met de klant", "7|Leren van elkaars invalshoeken", "8|Aansluiting bij hoe de samenleving zich ontwikkelt", "9|Voorkomen van discriminatie", "10|Het gaat om kwaliteit", "11|Gelijke kansen voor iedereen", "12|Verbeteren van de toegang tot verschillende doelgroepen", "13|Verbinding houden met groeiende visvijver van talent", "14|Vooruithelpen van achterstandsgroepen"],

            }, {
                type: "html",
                name: "question6",
                html: "<p>Wellicht heb je na het lezen van bovenstaande uitspraken nieuwe ideeën opgedaan over het belang van culturele diversiteit in jouw organisatie of helpt het om je eigen visie aan te scherpen.</p>"
            }, {
                "type": "comment",
                "name": "question7",
                "isRequired": true,
                "validators": [{
                    "type": "text",
                    "minLength": 20,
                }],
                "title": "Beschrijf nu nogmaals je motivatie om aan de slag te gaan met culturele diversiteit in jouw werkomgeving. Selecteer tenminste drie van de bovenstaande uitspraken en verwerk deze in je antwoord.",
            }],
            "title": "Onderdeel 1: Hoe kijk ik naar culturele diversiteit?"
        }]
    }, {
        "name": "page4",
        "elements": [{
            "type": "panel",
            "name": "panel4",
            elements: [{
                type: "html",
                name: "question8",
                html: "<p>Je krijgt nu telkens twee stellingen te zien die gaan over redenen om culturele diversiteit na te streven. Kies telkens de stelling waar je het het meest mee eens bent.</p>"
            }, {
                type: "radiogroup",
                name: "question9",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    text: "...omdat het onze sociale verantwoordelijkheid is om een afspiegeling te zijn van de maatschappij"
                }, {
                    value: "2",
                    text: "...als kwaliteitsdoelen maar eerst gewaarborgd zijn"
                }]
            }, {
                type: "radiogroup",
                name: "question10",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    text: "...omdat teamleden met verschillende culturele achtergronden elkaar versterken"
                }, {
                    value: "2",
                    text: "...omdat wij als organisatie moeten inspelen op het diverser worden van de markt"
                }]
            }, {
                type: "radiogroup",
                name: "question11",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    text: "...zolang het maar niet ten koste gaat van het maximaliseren van onze prestaties"
                }, {
                    value: "2",
                    text: "...omdat onze klantengroepen ook steeds diverser worden",
                  }]
            }, {
              type: "radiogroup",
              name: "question12",
              title: "Ik steun culturele diversiteit in onze organisatie...",
              isRequired: true,
              choices: [{
                  value: "1",
                  text: "...omdat wij als organisatie rechtvaardig moeten zijn"
              }, {
                  value: "2",
                  text: "...omdat het ons helpt als organisatie innovatief te zijn",
                }]
            }, {
              type: "radiogroup",
              name: "question13",
              title: "Ik steun culturele diversiteit in onze organisatie...",
              isRequired: true,
              choices: [{
                  value: "1",
                  text: "...omdat iemands culturele achtergrond er niet toe doet in het werk, het zijn kwalificaties die tellen"
              }, {
                  value: "2",
                  text: "...omdat het helpt medewerkers te laten reflecteren op het eigen handelen",
                }]
            }, {
              type: "radiogroup",
              name: "question14",
              title: "Ik steun culturele diversiteit in onze organisatie...",
              isRequired: true,
              choices: [{
                  value: "1",
                  text: "...omdat het matchen van medewerkers met klanten/leveranciers op basis van culturele achtergrond ons marktaandeel kan vergroten"
              }, {
                  value: "2",
                  text: "...omdat wij als organisatie iedereen gelijke kansen moeten bieden",
                }]
            }, {
              type: "radiogroup",
              name: "question15",
              title: "Ik steun culturele diversiteit in onze organisatie...",
              isRequired: true,
              choices: [{
                  value: "1",
                  text: "...omdat wij geen onderscheid moeten maken op basis van culturele achtergrond"
              }, {
                  value: "2",
                  text: "...omdat wij medewerkers met een achterstandspositie extra moeten ondersteunen",
                }]
            }, {
              type: "radiogroup",
              name: "question16",
              title: "Ik steun culturele diversiteit in onze organisatie...",
              isRequired: true,
              choices: [{
                  value: "1",
                  text: "...omdat het ons helpt om tunnelvisie in teams tegen te gaan"
              }, {
                  value: "2",
                  text: "...omdat kennis en ervaring uit een bepaalde cultuur ons helpt om producten en services af te stemmen op klanten met die cultuur",
                }]
            }, {
              type: "radiogroup",
              name: "question17",
              title: "Ik steun culturele diversiteit in onze organisatie...",
              isRequired: true,
              choices: [{
                  value: "1",
                  text: "...omdat beoordeling objectief moet zijn, iemands culturele achtergrond speelt hierin geen rol"
              }, {
                  value: "2",
                  text: "...omdat het ons toegang geeft tot een grotere visvijver aan talent",
                }]
            }, {
              type: "radiogroup",
              name: "question18",
              title: "Ik steun culturele diversiteit in onze organisatie...",
              isRequired: true,
              choices: [{
                  value: "1",
                  text: "...omdat wij culturele minderheden in de organisatie vooruit moeten helpen in hun loopbaan "
              }, {
                  value: "2",
                  text: "...omdat het ons helpt nieuwe ideeën op de werkvloer te stimuleren",
                }]
            }, {
              type: "radiogroup",
              name: "question19",
              title: "Ik steun culturele diversiteit in onze organisatie...",
              isRequired: true,
              choices: [{
                  value: "1",
                  text: "...omdat het ons helpt om vastgeroeste processen te doorbreken"
              }, {
                  value: "2",
                  text: "...omdat het uiteindelijk gaat om de beste kandidaat, ongeacht iemands culturele achtergrond",
                }]
            }, {
              type: "radiogroup",
              name: "question20",
              title: "Ik steun culturele diversiteit in onze organisatie...",
              isRequired: true,
              choices: [{
                  value: "1",
                  text: "...omdat het ons een aantrekkelijkere werkgever maakt"
              }, {
                  value: "2",
                  text: "...omdat wij achterstandsgroepen in de samenleving een kans moeten bieden op werk",
                }]
            }],
            "title": "Onderdeel 2: Diagnose (hoe kijk ik naar culturele diversiteit?)"
        }]
    }, {
        "name": "page5",
        "elements": [{
            "type": "panel",
            "name": "panel5",
            "elements": [{
                "type": "matrix",
                "name": "question21",
                "title": "U krijgt nu telkens twee stellingen te zien. Geef bij elke stelling aan in hoeverre u het hier mee eens bent en kies vervolgens met welke stelling u het meest eens bent.",
                "columns": [{
                    "value": "1",
                    "text": "Helemaal niet mee eens"
                }, {
                    "value": "2",
                    "text": "Niet mee eens"
                }, {
                    "value": "3",
                    "text": "Niet eens, niet oneens"
                }, {
                    "value": "4",
                    "text": "Mee eens"
                }, {
                    "value": "5",
                    "text": "Helemaal mee eens"
                }],
                "rows": [{
                    "value": "1",
                    "text": "Stelling 1"
                }, {
                    "value": "2",
                    "text": "Stelling 2"
                }],
                "isAllRowRequired": true,
            }],
            "title": "Onderdeel 2: Diagnose (vragenlijst)"
        }],
    }],

};

window.survey = new Survey.Model(surveyJSON);

survey
    .onComplete
    .add(function(result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

survey.showProgressBar = 'top';
survey.requiredText = '';
survey.showQuestionNumbers = 'off';
survey.storeOthersAsComment = false;
survey.locale = "my";
survey.render();

$("#surveyElement")
    .Survey({
        model: survey,
        css: myCss
    });
