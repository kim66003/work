Survey
    .StylesManager
    .applyTheme("bootstrap")

Survey
    .surveyLocalization
    .locales["my"] = dutchStrings;

Survey
    .JsonObject
    .metaData
    .addProperty("question", {
        name: "score:number"
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
                    text: "...omdat het onze sociale verantwoordelijkheid is om een afspiegeling te zijn van de maatschappij",
                    score: 1,
                }, {
                    value: "2",
                    text: "...als kwaliteitsdoelen maar eerst gewaarborgd zijn",
                    score: 2,
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
            "title": "Onderdeel 1: Vragenlijst"
        }]
    }, {
        "name": "page5",
        "elements": [{
            "type": "panel",
            "name": "panel5",
            "elements": [{
              type: "html",
              name: "question21",
              html: "<p>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' style='width:500px;'><p>Scoor je hoog op Kwaliteit?</p><p>Dan sta je open voor culturele diversiteit, maar uiteindelijk gaat het om kwaliteit. Iedereen is welkom in de organisatie, als ze maar de juiste capaciteiten meebrengen. Het waarborgen van kwaliteit is zeker belangrijk voor een organisatie. Daarnaast is het mooi dat je iedereen gelijk behandelt en mensen niet in hokjes plaatst op basis van hun culturele achtergrond.</p><p>Er zit echter ook een keerzijde aan het kwaliteitsperspectief. Vaak zie je bij een focus op kwaliteit dat er uiteindelijk weinig van culturele diversiteit terecht komt.</p><p>Een voorbeeld is de huidige samenstelling van ons kabinet. Mark Rutte is iemand met het kwaliteitsperspectief. Zijn reactie op het geringe aantal vrouwen in het kabinet:</p><p><q>Ik had graag meer willen hebben, maar uiteindelijk geldt: we gaan voor de beste mensen. Het is wat het is.</q></p><p>Betekent dit dat er simpelweg niet voldoende gekwalificeerde kandidaten met een migratieachtergrond zijn? Onderzoek suggereert iets anders. Het blijkt dat het kwaliteitsperspectief ongelijkheid in een organisatie juist kan vergroten. Door geen aandacht te schenken aan het bestaan van culturele verschillen, worden vooroordelen vaak juist versterkt in plaats van weggenomen. <i>(lees meer: artikel)</i></p><p>Daarnaast is er een sterke nadruk op objectieve selectie- en beoordelingscriteria. Echter, door iedereen op precies dezelfde manier te beoordelen, is er weinig ruimte voor de inbreng van unieke eigenschappen. Dit zorgt ervoor dat medewerkers druk voelen om zich aan te passen. Daarbij wordt de potentiële meerwaarde van diversiteit niet benut.</p><p>>> Nieuwsgierig naar de andere perspectieven? Klik dan door.</p>"
            }],
            "title": "Onderdeel 2: Score en uitleg (jouw perspectief)"
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
