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

var answers = answercombinations(cat_list, length_cat)
console.log(answers)

Survey
    .FunctionFactory
    .Instance
    .register("categorizeAnswers", categorizeAnswers);

Survey
    .StylesManager
    .applyTheme("orange")

Survey
    .surveyLocalization
    .locales["my"] = dutchStrings;

Survey
    .JsonObject
    .metaData
    .addProperty("itemvalue", {
        name: "score:number",
        default: 0,
    });

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
                    // "minLength": 20,
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
                    // "minLength": 20,
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
                "choices": [{
                    value: "1",
                    text: "Objectieve beoordeling",
                    score: 1,
                }, {
                    value: "2",
                    text: "Creatieve oplossingen en innovatieve ideeën",
                    score: 2,
                }, {
                    value: "3",
                    text: "Culturele diversiteit zou niet de focus moeten zijn",
                    score: 3,
                }, {
                    value: "4",
                    text: "Legitimiteit (je geloofwaardigheid als organisatie)",
                    score: 4,
                }, {
                    value: "5",
                    text: "Inzetten op maximale prestaties",
                    score: 1,
                }, {
                    value: "6",
                    text: "Matching met de klant",
                    score: 2,
                }, {
                    value: "7",
                    text: "Leren van elkaars invalshoeken",
                    score: 3,
                }, {
                    value: "8",
                    text: "Aansluiting bij hoe de samenleving zich ontwikkelt",
                    score: 4,
                }, {
                    value: "9",
                    text: "Voorkomen van discriminatie",
                    score: 1,
                }, {
                    value: "10",
                    text: "Het gaat om kwaliteit",
                    score: 2,
                }, {
                    value: "11",
                    text: "Gelijke kansen voor iedereen",
                    score: 3,
                }, {
                    value: "12",
                    text: "Verbeteren van de toegang tot verschillende doelgroepen",
                    score: 4,
                }, {
                    value: "13",
                    text: "Verbinding houden met groeiende visvijver van talent",
                    score: 1,
                }, {
                    value: "14",
                    text: "Vooruithelpen van achterstandsgroepen",
                    score: 2,
                }],
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
                    // "minLength": 20,
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
                    // text: "...omdat het onze sociale verantwoordelijkheid is om een afspiegeling te zijn van de maatschappij",
                    text: answers[0][0],
                    score: 1,
                }, {
                    value: "2",
                    // text: "...als kwaliteitsdoelen maar eerst gewaarborgd zijn",
                    text: answers[0][1],
                    score: 2,
                }]
            }, {
                type: "radiogroup",
                name: "question10",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat teamleden met verschillende culturele achtergronden elkaar versterken",
                    text: answers[1][0],
                    score: 3,
                }, {
                    value: "2",
                    // text: "...omdat wij als organisatie moeten inspelen op het diverser worden van de markt",
                    text: answers[1][1],
                    score: 4,
                }]
            }, {
                type: "radiogroup",
                name: "question11",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...zolang het maar niet ten koste gaat van het maximaliseren van onze prestaties",
                    text: answers[2][0],
                    score: 1,
                }, {
                    value: "2",
                    // text: "...omdat onze klantengroepen ook steeds diverser worden",
                    text: answers[2][1],
                    score: 2,
                }]
            }, {
                type: "radiogroup",
                name: "question12",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat wij als organisatie rechtvaardig moeten zijn",
                    text: answers[3][0],
                    score: 3,
                }, {
                    value: "2",
                    // text: "...omdat het ons helpt als organisatie innovatief te zijn",
                    text: answers[3][1],
                    score: 4,
                }]
            }, {
                type: "radiogroup",
                name: "question13",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat iemands culturele achtergrond er niet toe doet in het werk, het zijn kwalificaties die tellen",
                    text: answers[4][0],
                    score: 1,
                }, {
                    value: "2",
                    // text: "...omdat het helpt medewerkers te laten reflecteren op het eigen handelen",
                    text: answers[4][1],
                    score: 2,
                }]
            }, {
                type: "radiogroup",
                name: "question14",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat het matchen van medewerkers met klanten/leveranciers op basis van culturele achtergrond ons marktaandeel kan vergroten",
                    text: answers[5][0],
                    score: 3,
                }, {
                    value: "2",
                    // text: "...omdat wij als organisatie iedereen gelijke kansen moeten bieden",
                    text: answers[5][1],
                    score: 4,
                }]
            }, {
                type: "radiogroup",
                name: "question15",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat wij geen onderscheid moeten maken op basis van culturele achtergrond",
                    text: answers[6][0],
                    score: 1,
                }, {
                    value: "2",
                    // text: "...omdat wij medewerkers met een achterstandspositie extra moeten ondersteunen",
                    text: answers[6][1],
                    score: 2,
                }]
            }, {
                type: "radiogroup",
                name: "question16",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat het ons helpt om tunnelvisie in teams tegen te gaan",
                    text: answers[7][0],
                    score: 3,
                }, {
                    value: "2",
                    // text: "...omdat kennis en ervaring uit een bepaalde cultuur ons helpt om producten en services af te stemmen op klanten met die cultuur",
                    text: answers[7][1],
                    score: 4,
                }]
            }, {
                type: "radiogroup",
                name: "question17",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat beoordeling objectief moet zijn, iemands culturele achtergrond speelt hierin geen rol",
                    text: answers[8][0],
                    score: 1,
                }, {
                    value: "2",
                    // text: "...omdat het ons toegang geeft tot een grotere visvijver aan talent",
                    text: answers[8][1],
                    score: 2,
                }]
            }, {
                type: "radiogroup",
                name: "question18",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat wij culturele minderheden in de organisatie vooruit moeten helpen in hun loopbaan ",
                    text: answers[9][0],
                    score: 3,
                }, {
                    value: "2",
                    // text: "...omdat het ons helpt nieuwe ideeën op de werkvloer te stimuleren",
                    text: answers[9][1],
                    score: 4,
                }]
            }, {
                type: "radiogroup",
                name: "question19",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat het ons helpt om vastgeroeste processen te doorbreken",
                    text: answers[10][0],
                    score: 1,
                }, {
                    value: "2",
                    // text: "...omdat het uiteindelijk gaat om de beste kandidaat, ongeacht iemands culturele achtergrond",
                    text: answers[10][1],
                    score: 2,
                }]
            }, {
                type: "radiogroup",
                name: "question20",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                isRequired: true,
                choices: [{
                    value: "1",
                    // text: "...omdat het ons een aantrekkelijkere werkgever maakt",
                    text: answers[11][0],
                    score: 3,
                }, {
                    value: "2",
                    // text: "...omdat wij achterstandsgroepen in de samenleving een kans moeten bieden op werk",
                    text: answers[11][1],
                    score: 4,
                }]
            }],
            "title": "Onderdeel 1: Vragenlijst"
        }]
    }, {
        "name": "page5",
        "elements": [{
          type: "panel",
          name: "panel5",
          "elements": [{
            type: "matrix",
            name: "question21",
            title: "Je krijgt nu telkens twee stellingen te zien die gaan over redenen om culturele diversiteit na te streven. Bepaal voor elke stelling in welke mate je eens of oneens ermee bent.",
            description: "Ik steun culturele diversiteit in onze organisatie...",
            columns: [
                {
                    value: 1,
                    text: "Helemaal oneens"
                }, {
                    value: 2,
                    text: "Oneens"
                }, {
                    value: 3,
                    text: "Neutraal"
                }, {
                    value: 4,
                    text: "Eens"
                }, {
                    value: 5,
                    text: "Helemaal eens"
                }
            ],
            rows: [
                {
                    value: "1",
                    text: answers[0][0]
                }, {
                    value: "2",
                    text: answers[0][1]
                }
            ]
          }]
        }]
    }, {
        "name": "page6",
        "elements": [{
            "type": "panel",
            "name": "panel6",
            "elements": [{
                type: "html",
                name: "question22",
                visibleIf: "categorizeAnswers('question9') == 1",
                html: "<p>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' style='width:500px;'><p>Scoor je hoog op Kwaliteit?</p><p>Dan sta je open voor culturele diversiteit, maar uiteindelijk gaat het om kwaliteit. Iedereen is welkom in de organisatie, als ze maar de juiste capaciteiten meebrengen. Het waarborgen van kwaliteit is zeker belangrijk voor een organisatie. Daarnaast is het mooi dat je iedereen gelijk behandelt en mensen niet in hokjes plaatst op basis van hun culturele achtergrond.</p><p>Er zit echter ook een keerzijde aan het kwaliteitsperspectief. Vaak zie je bij een focus op kwaliteit dat er uiteindelijk weinig van culturele diversiteit terecht komt.</p><p>Een voorbeeld is de huidige samenstelling van ons kabinet. Mark Rutte is iemand met het kwaliteitsperspectief. Zijn reactie op het geringe aantal vrouwen in het kabinet:</p><p><q>Ik had graag meer willen hebben, maar uiteindelijk geldt: we gaan voor de beste mensen. Het is wat het is.</q></p><p>Betekent dit dat er simpelweg niet voldoende gekwalificeerde kandidaten met een migratieachtergrond zijn? Onderzoek suggereert iets anders. Het blijkt dat het kwaliteitsperspectief ongelijkheid in een organisatie juist kan vergroten. Door geen aandacht te schenken aan het bestaan van culturele verschillen, worden vooroordelen vaak juist versterkt in plaats van weggenomen. <i>(lees meer: artikel)</i></p><p>Daarnaast is er een sterke nadruk op objectieve selectie- en beoordelingscriteria. Echter, door iedereen op precies dezelfde manier te beoordelen, is er weinig ruimte voor de inbreng van unieke eigenschappen. Dit zorgt ervoor dat medewerkers druk voelen om zich aan te passen. Daarbij wordt de potentiële meerwaarde van diversiteit niet benut.</p><p>>> Nieuwsgierig naar de andere perspectieven? Klik dan door.</p>"
            }],
            "title": "Onderdeel 2: Score en uitleg (jouw perspectief)"
        }],
    }, {
        "name": "page7",
        "elements": [{
            type: "panel",
            name: "panel7",
            "elements": [{
                type: "html",
                name: "question23",
                visibleIf: "categorizeAnswers('question9') == 2",
                html: "<p>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' style='width:500px;'><p>Scoor je hoog op Eerlijkheid?</p><p> Dan vind je dat de organisatie een maatschappelijke verantwoordelijkheid heeft om zich in te zetten voor culturele diversiteit. Het is belangrijk om discriminatie tegen te gaan en achterstandsgroepen in de samenleving vooruit te helpen. Je vindt dat ieder mens gelijke kansen moet krijgen en dat de organisatie een afspiegeling zou moeten zijn van de samenleving.</p><p> Eerlijkheid is een nobel uitgangspunt. Je streeft naar culturele diversiteit als een doel dat losstaat van mogelijke uitkomsten. Het voordeel hiervan is dat de inzet op culturele diversiteit niet wordt beïnvloed door zaken als marktwerking.</p><p>Er zit echter ook een keerzijde aan het eerlijkheidsperspectief. Een actief diversiteitsbeleid dat inzet op extra ondersteuning van culturele minderheden roept al snel een angst op dat men hierin doorslaat. Niet altijd onterecht. In 2017 plaatste de politie een vacature met de volgende tekst:</p><p><q>Om te zorgen dat de samenstelling van de teamchefs daadwerkelijk diverser wordt, wordt een kandidaat geselecteerd met een andere culturele achtergrond.</q> <i>(lees meer: https://www.ad.nl/nieuws/politie-slaat-door-met-positieve-discriminatie~a0ef5edc/) </i></p><p> Positieve discriminatie roept weerstand op bij zowel de culturele meerderheid als culturele minderheden. De culturele meerderheid kan het idee hebben zelf geen kansen meer te hebben binnen de organisatie.  Culturele minderheden daarentegen kunnen het gevoel krijgen dat zij niet als gelijke worden gezien en niet op hun kwaliteiten zijn geselecteerd.</p><p> Daarnaast, hoewel je culturele diversiteit belangrijk vindt, zie je het voornamelijk als MVO onderwerp en niet als organisatieontwikkeling. Dit zorgt ervoor dat medewerkers druk voelen om zich aan te passen aan de huidige gang van zaken. Er is weinig ruimte voor unieke perspectieven en de potentiële meerwaarde van diversiteit wordt niet benut.</p><p> >> Nieuwsgierig naar de andere perspectieven? Klik dan door.</p>"
            }],
            "title": "Onderdeel 2: Score en uitleg (jouw perspectief)"
        }],
    }, {
        "name": "page8",
        "elements": [{
            "type": "panel",
            "name": "panel8",
            "elements": [{
                type: "html",
                name: "question24",
                visibleIf: "categorizeAnswers('question9') == 3",
                html: "<p>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' style='width:500px;'><p>Scoor je hoog op Toegang?</p><p>Dan zie je culturele diversiteit als een commerciële asset voor de organisatie. Het is noodzakelijk om verbinding te houden met een steeds diverser wordende samenleving en een groeiende visvijver van talent. Je bent ervan overtuigd dat culturele diversiteit zorgt voor een verscheidenheid aan netwerken en kennis in de organisatie. Daarbij helpt het ook bij klantenbinding: een gezamenlijke culturele achtergrond zorgt al snel voor meer vertrouwen en een gemakkelijkere communicatie.</p><p>Inzetten op toegang is zeer belangrijk voor een business organisatie. Het is mooi dat je een meerwaarde ziet in culturele diversiteit en dat wil benutten. Culturele diversiteit kan worden ingezet als een manier om het marktaandeel te vergroten en de geloofwaardigheid als organisatie te behouden.</p><p>Aandachtspunten bij het toegangsperspectief:</p><p>- Inzet op culturele diversiteit is afhankelijk van de samenstelling van de markt. Vaak zie je dat culturele diversiteit alleen in lagere segmenten van de organisatie aanwezig is. Medewerkers uit minderheidsgroepen kunnen het gevoel krijgen dat hun stem niet vertegenwoordigd is in de rest van de organisatie of dat zij enkel worden aangenomen op basis van hun culturele achtergrond.</p><p>- Door de focus op toegang tot externe markten, is er intern in de organisatie vaak weinig uitwisseling tussen medewerkers met verschillende culturele achtergronden. Dit kan leiden tot een scheiding tussen verschillende culturele groepen. Dit is niet goed voor de sociale samenhang. Daarnaast blijft de meerwaarde van culturele diversiteit beperkt.</p><p>>> Nieuwsgierig naar de andere perspectieven? Klik dan door.</p>"
            }],
            "title": "Onderdeel 2: Score en uitleg (jouw perspectief)"
        }],
    }, {
        "name": "page9",
        "elements": [{
            type: "panel",
            name: "panel9",
            "elements": [{
                type: "html",
                name: "question25",
                visibleIf: "categorizeAnswers('question9') == 4",
                html: "<p>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' style='width:500px;'><p>Scoor je hoog op Leren?</p><p>Dan zie je culturele diversiteit als een bron van leren en innovatie voor de organisatie. Medewerkers met diverse culturele achtergronden brengen een verscheidenheid aan perspectieven met zich mee. In teamverband stimuleert dit creativiteit, vernieuwing en een betere besluitvorming. Verschillende invalshoeken in jouw team zetten je aan het denken. Dit is leerzaam en leidt op de lange termijn ook tot betere resultaten.</p><p>Het leerperspectief komt uit onderzoek naar voren als het perspectief dat samengaat met de meest positieve uitkomsten van culturele diversiteit. Leren en innovatie is belangrijk voor het voortbestaan van een organisatie. Het is mooi dat je inziet dat culturele diversiteit hierbij kan helpen.</p><p>Aandachtspunten bij Leren:</p><p>- Je waardeert de aanwezigheid van verschillende perspectieven in de werkomgeving. Meerdere perspectieven kunnen echter ook leiden tot conflict. Wanneer dit conflict negatief geladen is, kan het ervoor zorgen dat er geen positieve uitkomsten van culturele diversiteit meer behaald worden.</p><p>- Je ziet culturele diversiteit als een verrijking van de organisatie. Door een sterke focus op de meerwaarde van culturele verschillen kan het echter zijn dat de culturele meerderheid zich buitengesloten voelt en twijfelt over zijn/haar eigen positie.</p>"
            }],
            "title": "Onderdeel 2: Score en uitleg (jouw perspectief)"
        }],
    }],

};

window.survey = new Survey.Model(surveyJSON);

survey
    .onComplete
    .add(function(survey) {

        var totalScore = 0;
        var cat1 = 0;
        var cat2 = 0;
        var cat3 = 0;
        var cat4 = 0;
        var data = survey.data;
        var randomlist = [];

        Object.keys(data).forEach(function(qName) {
            var question = survey.getQuestionByName(qName);
            var qValue = data[qName];
            randomlist.push(qValue)

            if (question.choices) {
                question.choices.forEach(function(choice) {
                    if (choice.value === qValue || qValue.includes(choice.value)) {
                        totalScore += +choice.score;
                        if (choice.score === 1) {
                            cat1 += 1;
                        } else if (choice.score === 2) {
                            cat2 += 1;
                        } else if (choice.score === 3) {
                            cat3 += 1;
                        } else if (choice.score === 4) {
                            cat4 += 1;
                        }
                    }
                });
            }
        });

        // var idk = categorizeAnswers(randomlist)

        var dictcats = {
            "cat1": cat1,
            "cat2": cat2,
            "cat3": cat3,
            "cat4": cat4
        };
        document
            .querySelector('#surveyResult')
            .innerHTML = "Results: " + JSON.stringify(survey.data);

        document
            .querySelector('#surveyScore')
            .innerHTML = "Category scores: " + JSON.stringify(dictcats);

    });

survey.onValidateQuestion.add(function(survey, options) {
    //the checkbox question 5
    if (options.name === "question5") {
        if (options.value && options.value.length < 3) {
            //Set the error
            options.error = "Please select a minimum of three values";
        }
    }
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
