var answers = answercombinations(listdict, length_cat)

Survey
    .FunctionFactory
    .Instance
    .register("categorizeAnswers", categorizeAnswers);

Survey
    .FunctionFactory
    .Instance
    .register("showText", showText);

Survey
    .FunctionFactory
    .Instance
    .register("showInitialText", showInitialText);

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
                "name": "html1",
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
                "name": "question1",
                "title": "Vind je het belangrijk om met culturele diversiteit* in jouw werkomgeving aan de slag te gaan?",
                "description": "*met culturele diversiteit bedoelen wij de verscheidenheid aan nationale en etnische achtergronden van medewerkers",
                // "isRequired": true,
                "choices": [{
                  "value": 1,
                  "text": "Ja",
                }, {
                  "value": 2,
                  "text": "Nee",
                }],
            }, {
                "type": "comment",
                "name": "question2",
                "visible": false,
                "visibleIf": "{question1} = 1",
                "title": "Waarom?",
                // "isRequired": true,
                "validators": [{
                    "type": "text",
                    // "minLength": 20,
                }],
            }, {
                "type": "comment",
                "name": "question3",
                "visible": false,
                "visibleIf": "{question1} = 2",
                "title": "Waarom niet?",
                // "isRequired": true,
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
                "name": "question4",
                "title": "In jouw organisatie hebben wij medewerkers geïnterviewd over hun ervaringen met culturele diversiteit op de werkvloer. De volgende uitspraken kwamen uit de interviews naar voren:",
                // "isRequired": true,
                "choices": [{
                    "value": 1,
                    "text": "Objectieve beoordeling",
                    "score": 1,
                }, {
                    "value": 2,
                    "text": "Creatieve oplossingen en innovatieve ideeën",
                    "score": 2,
                }, {
                    "value": 3,
                    "text": "Culturele diversiteit zou niet de focus moeten zijn",
                    "score": 3,
                }, {
                    "value": 4,
                    "text": "Legitimiteit (je geloofwaardigheid als organisatie)",
                    "score": 4,
                }, {
                    "value": 5,
                    "text": "Inzetten op maximale prestaties",
                    "score": 1,
                }, {
                    "value": 6,
                    "text": "Matching met de klant",
                    "score": 2,
                }, {
                    "value": 7,
                    "text": "Leren van elkaars invalshoeken",
                    "score": 3,
                }, {
                    "value": 8,
                    "text": "Aansluiting bij hoe de samenleving zich ontwikkelt",
                    "score": 4,
                }, {
                    "value": 9,
                    "text": "Voorkomen van discriminatie",
                    "score": 1,
                }, {
                    "value": 10,
                    "text": "Het gaat om kwaliteit",
                    "score": 2,
                }, {
                    "value": 11,
                    "text": "Gelijke kansen voor iedereen",
                    "score": 3,
                }, {
                    "value": 12,
                    "text": "Verbeteren van de toegang tot verschillende doelgroepen",
                    "score": 4,
                }, {
                    "value": 13,
                    "text": "Verbinding houden met groeiende visvijver van talent",
                    "score": 1,
                }, {
                    "value": 14,
                    "text": "Vooruithelpen van achterstandsgroepen",
                    "score": 2,
                }],
            }, {
                "type": "html",
                "name": "html2",
                "html": "<p>Wellicht heb je na het lezen van bovenstaande uitspraken nieuwe ideeën opgedaan over het belang van culturele diversiteit in jouw organisatie of helpt het om je eigen visie aan te scherpen.</p>"
            }, {
                "type": "comment",
                "name": "question5",
                // "isRequired": true,
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
                name: "html3",
                html: "<p>Je krijgt nu telkens twee stellingen te zien die gaan over redenen om culturele diversiteit na te streven. Kies telkens de stelling waar je het het meest mee eens bent.</p>"
            }, {
                type: "radiogroup",
                name: "question6",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[0][0].number,
                    text: answers[0][0].text,
                    score: answers[0][0].value,
                }, {
                    value: answers[0][1].number,
                    text: answers[0][1].text,
                    score: answers[0][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question7",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[1][0].number,
                    text: answers[1][0].text,
                    score: answers[1][0].value,
                }, {
                    value: answers[1][1].number,
                    text: answers[1][1].text,
                    score: answers[1][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question8",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[2][0].number,
                    text: answers[2][0].text,
                    score: answers[2][0].value,
                }, {
                    value: answers[2][1].number,
                    text: answers[2][1].text,
                    score: answers[2][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question9",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[3][0].number,
                    text: answers[3][0].text,
                    score: answers[3][0].value,
                }, {
                    value: answers[3][1].number,
                    text: answers[3][1].text,
                    score: answers[3][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question10",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[4][0].number,
                    text: answers[4][0].text,
                    score: answers[4][0].value,
                }, {
                    value: answers[4][1].number,
                    text: answers[4][1].text,
                    score: answers[4][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question11",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[5][0].number,
                    text: answers[5][0].text,
                    score: answers[5][0].value,
                }, {
                    value: answers[5][1].number,
                    text: answers[5][1].text,
                    score: answers[5][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question12",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[6][0].number,
                    text: answers[6][0].text,
                    score: answers[6][0].value,
                }, {
                    value: answers[6][1].number,
                    text: answers[6][1].text,
                    score: answers[6][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question13",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[7][0].number,
                    text: answers[7][0].text,
                    score: answers[7][0].value,
                }, {
                    value: answers[7][1].number,
                    text: answers[7][1].text,
                    score: answers[7][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question14",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[8][0].number,
                    text: answers[8][0].text,
                    score: answers[8][0].value,
                }, {
                    value: answers[8][1].number,
                    text: answers[8][1].text,
                    score: answers[8][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question15",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[9][0].number,
                    text: answers[9][0].text,
                    score: answers[9][0].value,
                }, {
                    value: answers[9][1].number,
                    text: answers[9][1].text,
                    score: answers[9][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question16",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[10][0].number,
                    text: answers[10][0].text,
                    score: answers[10][0].value,
                }, {
                    value: answers[10][1].number,
                    text: answers[10][1].text,
                    score: answers[10][1].value,
                }]
            }, {
                type: "radiogroup",
                name: "question17",
                title: "Ik steun culturele diversiteit in onze organisatie...",
                // isRequired: true,
                choices: [{
                    value: answers[11][0].number,
                    text: answers[11][0].text,
                    score: answers[11][0].value,
                }, {
                    value: answers[11][1].number,
                    text: answers[11][1].text,
                    score: answers[11][1].value,
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
              type: "html",
              name: "html4",
              html: "<p>Je krijgt nu telkens twee stellingen te zien die gaan over redenen om culturele diversiteit na te streven. Kies telkens de stelling waar je het het meest mee eens bent.</p>"
          }, {
            type: "matrix",
            name: "question18",
            title: "Ik steun culturele diversiteit in onze organisatie...",
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
                    value: answers[0][0].number,
                    text: answers[0][0].text,
                    score: answers[0][0].value
                }, {
                    value: answers[0][1].number,
                    text: answers[0][1].text,
                    score: answers[0][1].value
                }, {
                    value: answers[1][0].number,
                    text: answers[1][0].text,
                    score: answers[1][0].value
                }, {
                    value: answers[1][1].number,
                    text: answers[1][1].text,
                    score: answers[1][1].value
                }, {
                    value: answers[2][0].number,
                    text: answers[2][0].text,
                    score: answers[2][0].value
                }, {
                    value: answers[2][1].number,
                    text: answers[2][1].text,
                    score: answers[2][1].value
                }
            ]
          }, {
            type: "matrix",
            name: "question19",
            title: "Ik steun culturele diversiteit in onze organisatie...",
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
                    value: answers[3][0].number,
                    text: answers[3][0].text,
                    score: answers[3][0].value
                }, {
                    value: answers[3][1].number,
                    text: answers[3][1].text,
                    score: answers[3][1].value
                }, {
                    value: answers[4][0].number,
                    text: answers[4][0].text,
                    score: answers[4][0].value
                }, {
                    value: answers[4][1].number,
                    text: answers[4][1].text,
                    score: answers[4][1].value
                }, {
                    value: answers[5][0].number,
                    text: answers[5][0].text,
                    score: answers[5][0].value
                }, {
                    value: answers[5][1].number,
                    text: answers[5][1].text,
                    score: answers[5][1].text
                }
            ]
          }, {
            type: "matrix",
            name: "question20",
            title: "Ik steun culturele diversiteit in onze organisatie...",
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
                    value: answers[6][0].number,
                    text: answers[6][0].text,
                    score: answers[6][0].value
                }, {
                    value: answers[6][1].number,
                    text: answers[6][1].text,
                    score: answers[6][1].value
                }, {
                    value: answers[7][0].number,
                    text: answers[7][0].text,
                    score: answers[7][0].value
                }, {
                    value: answers[7][1].number,
                    text: answers[7][1].text,
                    score: answers[7][1].value
                }, {
                    value: answers[8][0].number,
                    text: answers[8][0].text,
                    score: answers[8][0].value
                }, {
                    value: answers[8][1].number,
                    text: answers[8][1].text,
                    score: answers[8][1].value
                }
            ]
          }, {
            type: "matrix",
            name: "question21",
            title: "Ik steun culturele diversiteit in onze organisatie...",
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
                    value: answers[9][0].number,
                    text: answers[9][0].text,
                    score: answers[9][0].value
                }, {
                    value: answers[9][1].number,
                    text: answers[9][1].text,
                    score: answers[9][1].value
                }, {
                    value: answers[10][0].number,
                    text: answers[10][0].text,
                    score: answers[10][0].value
                }, {
                    value: answers[10][1].number,
                    text: answers[10][1].text,
                    score: answers[10][1].value
                }, {
                    value: answers[11][0].number,
                    text: answers[11][0].text,
                    score: answers[11][0].value
                }, {
                    value: answers[11][1].number,
                    text: answers[11][1].text,
                    score: answers[11][1].value
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
                name: "html5",
                // visibleIf: "categorizeAnswers(0) == 1",
                html: "<script>showInitialText(['kwaliteit', 'rechtvaardigheid', 'toegang', 'leren'])</script><p class='kwaliteit'>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p class='kwaliteit'>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' class='kwaliteit' style='width:500px;'><p class='kwaliteit'>Scoor je hoog op Kwaliteit?</p><p class='kwaliteit'> Dan sta je open voor culturele diversiteit, maar vind je het vooral belangrijk dat de organisatie streeft naar kwaliteit. Iedereen is welkom in de organisatie, als ze maar de juiste capaciteiten meebrengen. Kwaliteit staat voorop. Daarnaast is het mooi meegenomen dat iedereen in de organisatie gelijk behandeld wordt en dat mensen niet in hokjes geplaatst worden op basis van hun culturele achtergrond.</p><p class='kwaliteit'>Wat is het effect van dit vertrekpunt? Vaak zie je bij een focus op kwaliteit dat er op de werkvloer uiteindelijk weinig van culturele diversiteit terecht komt.</p><p class='kwaliteit'>Een voorbeeld is de huidige samenstelling van ons kabinet. Mark Rutte is iemand met het kwaliteitsperspectief. Zijn reactie op het geringe aantal vrouwen in het kabinet:</p><blockquote><p class='kwaliteit'>Ik had graag meer willen hebben, maar uiteindelijk geldt: we gaan voor de beste mensen. Het is wat het is.</p></blockquote><img src='img/rutte.png' alt='graph' class='kwaliteit' style='width:300px;'><p class='kwaliteit'>Ben jij ook van mening dat een gebrek aan culturele diversiteit wordt veroorzaakt doordat er niet voldoende gekwalificeerde kandidaten met een migratieachtergrond zijn? Het SCP stelt dat dit niet helemaal juist is. Onder culturele minderheden is er sprake van een stijgend opleidingsniveau, verbeterde onderwijsprestaties en een betere beheersing van de Nederlandse taal. Dit wordt echter niet vertaalt naar hun positie op de arbeidsmarkt. Wat is hier de reden voor?</p><p class='kwaliteit'>Wat zijn de uitdagingen van een focus op Kwaliteit?</p><p class='kwaliteit'>1: Het kwaliteitsperspectief legt een sterke nadruk op objectieve selectie- en beoordelingscriteria. Echter, door er naar te streven iedereen op dezelfde manier te beoordelen, is er weinig ruimte voor de inbreng van unieke eigenschappen van medewerkers. Door een focus op kwaliteit zet je impliciet in op overeenkomsten tussen medewerkers in je team. Deze nadruk op homogeniteit kan ervoor zorgen dat culturele minderheden de druk voelen om zich aan te passen aan de dominante normen en waarden in jouw werkomgeving.</p><p class='kwaliteit'>2: Uit onderzoek blijkt dat het ‘geen onderscheid maken’ ongelijkheid in een organisatie juist kan vergroten. Door geen aandacht te schenken aan het bestaan van culturele verschillen, worden vooroordelen vaak juist versterkt in plaats van weggenomen.</p><p class='kwaliteit'>Wat is de oplossing? Juist door onderscheid te maken en verschillen te (h)erkennen, waarderen en benutten, kan de kwaliteit van de organisatie worden verhoogd en kunnen vooroordelen worden tegengegaan. Meer lezen hierover? Perspectieven <button type='button' onclick='showText(&quot;rechtvaardigheid&quot;)'>Rechtvaardigheid</button> <button type='button' onclick='showText(&quot;toegang&quot;)'>Toegang</button> <button type='button' onclick='showText(&quot;leren&quot;)'>Leren</button> <p class='rechtvaardigheid'>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p class='rechtvaardigheid'>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' class='rechtvaardigheid' style='width:500px;'><p class='rechtvaardigheid'>Scoor je hoog op Rechtvaardigheid?</p><p class='rechtvaardigheid'>Dan vind je dat de organisatie een maatschappelijke verantwoordelijkheid heeft om zich in te zetten voor culturele diversiteit. Het is belangrijk om discriminatie tegen te gaan en achterstandsgroepen in de samenleving vooruit te helpen. Je vindt dat ieder mens gelijke kansen moet krijgen en dat de organisatie een afspiegeling zou moeten zijn van de samenleving.</p><p class='rechtvaardigheid'>Wat is het effect van dit perspectief? Rechtvaardigheid is een nobel uitgangspunt. Vaak zie je bij een focus op rechtvaardigheid dat er uiteindelijk weinig binnen de organisatie verandert. Denk bijvoorbeeld aan de beste bedoelingen van missionarissen om mensen in ontwikkelingslanden ‘vooruit te helpen’. Onderzoek naar het effect van deze werkwijze laat echter zien dat dit geen efficiënte manier is om met mensen samen te werken.</p><p class='rechtvaardigheid'>Voor een omstreden voorbeeld van het ‘vooruit helpen’ van culturele minderheden, zie de documentaire ‘Curaçao’ (2010). In deze documentaire is te zien hoe een manager van de lokale Albert Heijn-vestiging zijn zwarte personeel en het witte management op een cursus stuurt met als motto <q>Waarom wil een Antilliaan geen leiding geven?</q> In deze cursus manager probeert de manager de lokale werknemers de Nederlandse supermarktcultuur over te brengen door hun uit te leggen hoe zij handen dienen te schudden en mensen dienen aan te kijken.</p><img src='img/hands.png' alt='img' class='rechtvaardigheid' style='width:400px;'><p class='rechtvaardigheid'>Wat zijn de uitdagingen wanneer jouw vertrekpunt gericht is op Rechtvaardigheid?</p><p class='rechtvaardigheid'>1: Bij een focus op rechtvaardigheid in de organisatie wordt er vaak alsnog gedacht in termen van achterstand. Het voorbeeld van de Albert Heijn in Curaçao laat zien dat van culturele minderheden wordt verwacht dat zij zich aanpassen aan de dominante Westerse norm. Dit idee gaat voorbij aan de potentiële waarde die culturele verschillen in een werkomgeving kunnen bijdragen. Als organisaties ‘diversiteitbeleid’ blijven zien als Maatschappelijk Verantwoord Ondernemen en het slechts gebruiken als PR instrument, wordt de meerwaarde van culturele verschillen in de werkomgeving niet benut. </p><p class='rechtvaardigheid'>2: Het Rechtvaardigheid perspectief kan snel leiden tot weerstand in organisaties. Positieve discriminatie betekent dat achtergestelde groepen in de organisatie extra aandacht krijgen met het  doel om feitelijk bestaande ongelijkheden op te heffen. Het idee van positieve discriminatie wordt bij zowel de culturele meerderheid als culturele minderheden meestal niet positief ontvangen. De culturele meerderheid kan het idee hebben achtergesteld te worden ten opzichte van de culturele minderheid doordat zij zelf geen kansen krijgen binnen de organisatie. Anderzijds kunnen culturele minderheden het gevoel krijgen dat zij niet op basis van hun capaciteiten zijn geselecteerd maar dat zij enkel op basis van hun culturele achtergrond kansen in de organisatie krijgen. </p><p class='rechtvaardigheid'>Zou je de culturele verschillen in jouw werkomgeving beter willen waarderen en benutten? Lees dan meer over het Kwaliteit, Toegang en Leren perspectief. Perspectieven <button type='button' onclick='showText(&quot;kwaliteit&quot;)'>Kwaliteit</button> <button type='button' onclick='showText(&quot;toegang&quot;)'>Toegang</button> <button type='button' onclick='showText(&quot;leren&quot;)'>Leren</button></p> <p class='toegang'>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p class='toegang'>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' class='toegang' style='width:500px;'><p class='toegang'>Scoor je hoog op Toegang?</p><p class='toegang'>Dan zie je culturele diversiteit als een commerciële asset voor de organisatie. Het is noodzakelijk om verbinding te houden met een steeds diverser wordende samenleving en een groeiende visvijver van talent. Je bent ervan overtuigd dat culturele diversiteit zorgt voor een verscheidenheid aan netwerken en kennis in de organisatie. Daarbij helpt het ook bij klantenbinding: een gezamenlijke culturele achtergrond zorgt al snel voor meer vertrouwen en een gemakkelijkere communicatie.</p><p class='toegang'>Wat is het effect van dit perspectief? Voor een organisatie is het essentieel om de mogelijkheden voor toegang tot markten, personeel en producten te verkennen en uit te breiden. Culturele diversiteit kan worden ingezet als een manier om het marktaandeel te vergroten en heeft een positieve invloed op de geloofwaardigheid van een organisatie. Het is mooi dat jij deze meerwaarde ziet en dat wilt benutten. Vaak zie je echter bij een focus op toegang dat diversiteit toeneemt in de lagere segmenten, maar dat de culturele diversiteit in de hogere segmenten van de organisatie achterblijft. Dit kan leiden tot segregatie in de organisatie.</p><p class='toegang'>In cultureel diverse wijken nemen organisaties actief vrouwen aan met een hoofddoek zodat zij de klanten met een islamitische achtergrond beter kunnen bedienen. De vraag is echter: Is diversiteit alleen nuttig op posities die direct in contact staan met de samenleving?</p><img src='img/supermarkt.png' alt='graph' class='toegang' style='width:300px;'><p class='toegang'>Wat zijn de uitdagingen van een focus op Toegang?</p><p class='toegang'>1. Door een focus op toegang tot externe markten is de inzet van culturele diversiteit slechts beperkt. Hierdoor vindt er intern in de organisatie vaak weinig uitwisseling plaats tussen medewerkers met verschillende culturele achtergronden. Dit kan leiden tot een scheiding tussen verschillende culturele groepen. Ook zorgt dit ervoor dat de meerwaarde van culturele verschillen in jouw werkomgeving niet worden benut omdat er voor medewerkers geen ruimte is voor afwijkende creatieve ideeën en om van elkaars perspectieven te leren.</p><p class='toegang'>2. Een selectieve focus op de commerciële voordelen van culturele diversiteit kan leiden tot weerstand: Medewerkers uit minderheidsgroepen kunnen het gevoel krijgen dat zij enkel worden aangenomen op basis van hun culturele achtergrond. Daarnaast is hun stem vaak niet vertegenwoordigd in de rest van de organisatie. Zo is er weinig culturele diversiteit in de hogere segmenten in de organisatie en de onderdelen waar besluitvorming plaatsvindt. Verder kunnen medewerkers uit de meerderheidsgroep het gevoel krijgen buitengesloten te worden. Ook kunnen zij onzeker worden over hun kwalificaties, wanneer er specifiek wordt ingezet op het werven van culturele minderheden voor bepaalde posities.</p><p class='toegang'>Om toegangsdoelen te bereiken is het belangrijk om meer te leren over het effectief inzetten van culturele verschillen in jouw werkomgeving. Je lees hier meer over bij het perspectief Leren. Je zou dit perspectief als middel kunnen gebruiken om de commerciële voordelen van culturele diversiteit in jouw werkomgeving optimaal te benutten. Klik hier om meer te lezen over de andere perspectieven: <button type='button' onclick='showText(&quot;kwaliteit&quot;)'>Kwaliteit</button> <button type='button' onclick='showText(&quot;rechtvaardigheid&quot;)'>Rechtvaardigheid</button> <button type='button' onclick='showText(&quot;leren&quot;)'>Leren</button></p> <p class='leren'>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p class='leren'>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' class='leren' style='width:500px;'><p class='leren'>Scoor je hoog op Leren?</p><p class='leren'>Dan zie je culturele diversiteit als een bron van leren en innovatie voor de organisatie. Medewerkers met diverse culturele achtergronden brengen een verscheidenheid aan perspectieven met zich mee. In teamverband stimuleert dit creativiteit, vernieuwing en een betere besluitvorming. Verschillende invalshoeken in jouw team zetten je aan het denken. Dit is leerzaam en leidt op de lange termijn ook tot betere resultaten.</p><p class='leren'>Wat is het effect van dit perspectief? Leren van elkaars perspectief is belangrijk voor het voortbestaan van een organisatie. Het is mooi dat je meerwaarde ziet in het belang van culturele verschillen en deze wilt benutten. Culturele diversiteit kan worden ingezet als een manier om leren te stimuleren, creativiteit en innovatie te vergroten, en de kwaliteit van besluitvorming te verbeteren. Onderzoek wijst uit dat het leerperspectief samengaat met de meest positieve uitkomsten van culturele diversiteit voor de organisatie en haar medewerkers. Vaak zie je bij een focus op leren dat de organisatie in alle lagen cultureel divers en inclusief is en trots is op haar diversiteit.</p><p class='leren'>Benieuwd hoe Apple dit aanpakt? In dit filmpje laat Apple zien hoe ze de diverse achtergronden van medewerkers inzetten om o.a. innovatieve producten te ontwikkelen.</p><iframe class='leren' width='560' height='315' src='https://www.youtube.com/embed/cvb49-Csq1o' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><p class='leren'>Wat zijn de uitdagingen van een focus op Leren?</p><p class='leren'> 1. Het vertrekpunt gericht op het Leren van culture verschillen en perspectieven kan ten koste gaan van snel handelen en (korte-termijn) productiviteit. Hoe meer mensen zich ergens mee bemoeien, hoe beter het uiteindelijke resultaat zal zijn, maar des te langer het proces.</p><p class='leren'>2. Een streven naar ‘leren van elkaars verschillen’ kan te abstract zijn voor medewerkers om concreet mee aan de slag te gaan in de werkomgeving. Koppel daarom dit uitgangspunt aan concrete doelen zoals bijvoorbeeld het verbeteren van de toegang tot klanten, personeel of producten. </p><p class='leren'> Nieuwsgierig naar de andere perspectieven? <button type='button' onclick='showText(&quot;kwaliteit&quot;)'>Kwaliteit</button> <button type='button' onclick='showText(&quot;rechtvaardigheid&quot;)'>Rechtvaardigheid</button> <button type='button' onclick='showText(&quot;toegang&quot;)'>Toegang</button></p>",
            }
            // {
            //     type: "html",
            //     name: "html6",
            //     visibleIf: "categorizeAnswers(0) == 2",
            //     html: "<p class='rechtvaardigheid'>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p class='rechtvaardigheid'>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' style='width:500px;'><p class='rechtvaardigheid'>Scoor je hoog op Rechtvaardigheid?</p><p class='rechtvaardigheid'>Dan vind je dat de organisatie een maatschappelijke verantwoordelijkheid heeft om zich in te zetten voor culturele diversiteit. Het is belangrijk om discriminatie tegen te gaan en achterstandsgroepen in de samenleving vooruit te helpen. Je vindt dat ieder mens gelijke kansen moet krijgen en dat de organisatie een afspiegeling zou moeten zijn van de samenleving.</p><p class='rechtvaardigheid'>Wat is het effect van dit perspectief? Rechtvaardigheid is een nobel uitgangspunt. Vaak zie je bij een focus op rechtvaardigheid dat er uiteindelijk weinig binnen de organisatie verandert. Denk bijvoorbeeld aan de beste bedoelingen van missionarissen om mensen in ontwikkelingslanden ‘vooruit te helpen’. Onderzoek naar het effect van deze werkwijze laat echter zien dat dit geen efficiënte manier is om met mensen samen te werken.</p><p class='rechtvaardigheid'>Voor een omstreden voorbeeld van het ‘vooruit helpen’ van culturele minderheden, zie de documentaire ‘Curaçao’ (2010). In deze documentaire is te zien hoe een manager van de lokale Albert Heijn-vestiging zijn zwarte personeel en het witte management op een cursus stuurt met als motto <q>Waarom wil een Antilliaan geen leiding geven?</q> In deze cursus manager probeert de manager de lokale werknemers de Nederlandse supermarktcultuur over te brengen door hun uit te leggen hoe zij handen dienen te schudden en mensen dienen aan te kijken.</p><img src='img/hands.png' alt='img' style='width:400px;'><p class='rechtvaardigheid'>Wat zijn de uitdagingen wanneer jouw vertrekpunt gericht is op Rechtvaardigheid?</p><p class='rechtvaardigheid'>1: Bij een focus op rechtvaardigheid in de organisatie wordt er vaak alsnog gedacht in termen van achterstand. Het voorbeeld van de Albert Heijn in Curaçao laat zien dat van culturele minderheden wordt verwacht dat zij zich aanpassen aan de dominante Westerse norm. Dit idee gaat voorbij aan de potentiële waarde die culturele verschillen in een werkomgeving kunnen bijdragen. Als organisaties ‘diversiteitbeleid’ blijven zien als Maatschappelijk Verantwoord Ondernemen en het slechts gebruiken als PR instrument, wordt de meerwaarde van culturele verschillen in de werkomgeving niet benut. </p><p class='rechtvaardigheid'>2: Het Rechtvaardigheid perspectief kan snel leiden tot weerstand in organisaties. Positieve discriminatie betekent dat achtergestelde groepen in de organisatie extra aandacht krijgen met het  doel om feitelijk bestaande ongelijkheden op te heffen. Het idee van positieve discriminatie wordt bij zowel de culturele meerderheid als culturele minderheden meestal niet positief ontvangen. De culturele meerderheid kan het idee hebben achtergesteld te worden ten opzichte van de culturele minderheid doordat zij zelf geen kansen krijgen binnen de organisatie. Anderzijds kunnen culturele minderheden het gevoel krijgen dat zij niet op basis van hun capaciteiten zijn geselecteerd maar dat zij enkel op basis van hun culturele achtergrond kansen in de organisatie krijgen. </p><p class='rechtvaardigheid'>Zou je de culturele verschillen in jouw werkomgeving beter willen waarderen en benutten? Lees dan meer over het Kwaliteit, Toegang en Leren perspectief. Perspectieven <button type='button' onclick='showText2('kwaliteit')'>Kwaliteit</button> <button type='button' onclick='showText2('toegang')'>Toegang</button> <button type='button' onclick='showText2('leren')'>Leren</button></p>"
            // },
            // {
            //     type: "html",
            //     name: "html7",
            //     visibleIf: "categorizeAnswers(0) == 3",
            //     html: "<p class='toegang'>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p class='toegang'>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' style='width:500px;'><p class='toegang'>Scoor je hoog op Toegang?</p><p class='toegang'>Dan zie je culturele diversiteit als een commerciële asset voor de organisatie. Het is noodzakelijk om verbinding te houden met een steeds diverser wordende samenleving en een groeiende visvijver van talent. Je bent ervan overtuigd dat culturele diversiteit zorgt voor een verscheidenheid aan netwerken en kennis in de organisatie. Daarbij helpt het ook bij klantenbinding: een gezamenlijke culturele achtergrond zorgt al snel voor meer vertrouwen en een gemakkelijkere communicatie.</p><p class='toegang'>Inzetten op toegang is zeer belangrijk voor een business organisatie. Het is mooi dat je een meerwaarde ziet in culturele diversiteit en dat wil benutten. Culturele diversiteit kan worden ingezet als een manier om het marktaandeel te vergroten en de geloofwaardigheid als organisatie te behouden.</p><p class='toegang'>Aandachtspunten bij het toegangsperspectief:</p><p class='toegang'>- Inzet op culturele diversiteit is afhankelijk van de samenstelling van de markt. Vaak zie je dat culturele diversiteit alleen in lagere segmenten van de organisatie aanwezig is. Medewerkers uit minderheidsgroepen kunnen het gevoel krijgen dat hun stem niet vertegenwoordigd is in de rest van de organisatie of dat zij enkel worden aangenomen op basis van hun culturele achtergrond.</p><p class='toegang'>- Door de focus op toegang tot externe markten, is er intern in de organisatie vaak weinig uitwisseling tussen medewerkers met verschillende culturele achtergronden. Dit kan leiden tot een scheiding tussen verschillende culturele groepen. Dit is niet goed voor de sociale samenhang. Daarnaast blijft de meerwaarde van culturele diversiteit beperkt.</p><p class='toegang'> Meer lezen over andere perspectieven? Klik op een van de andere perspectieven: <button type='button' onclick='showText2('kwaliteit')'>Kwaliteit</button>, <button type='button' onclick='showText2('rechtvaardigheid')'>Rechtvaardigheid</button> en <button type='button' onclick='showText2('leren')'>Leren</button></p>"
            // },
            // {
            //     type: "html",
            //     name: "html8",
            //     visibleIf: "categorizeAnswers(0) == 4",
            //     html: "<p class='leren'>Er zijn vier verschillende uitgangspunten om aan de slag te gaan met culturele diversiteit in jouw werkomgeving.</p><p class='leren'>Jouw profiel:</p><img src='img/graph.PNG' alt='graph' style='width:500px;'><p class='leren'>Scoor je hoog op Leren?</p><p class='leren'>Dan zie je culturele diversiteit als een bron van leren en innovatie voor de organisatie. Medewerkers met diverse culturele achtergronden brengen een verscheidenheid aan perspectieven met zich mee. In teamverband stimuleert dit creativiteit, vernieuwing en een betere besluitvorming. Verschillende invalshoeken in jouw team zetten je aan het denken. Dit is leerzaam en leidt op de lange termijn ook tot betere resultaten.</p><p class='leren'>Het leerperspectief komt uit onderzoek naar voren als het perspectief dat samengaat met de meest positieve uitkomsten van culturele diversiteit. Leren en innovatie is belangrijk voor het voortbestaan van een organisatie. Het is mooi dat je inziet dat culturele diversiteit hierbij kan helpen.</p><p class='leren'>Aandachtspunten bij Leren:</p><p class='leren'>- Je waardeert de aanwezigheid van verschillende perspectieven in de werkomgeving. Meerdere perspectieven kunnen echter ook leiden tot conflict. Wanneer dit conflict negatief geladen is, kan het ervoor zorgen dat er geen positieve uitkomsten van culturele diversiteit meer behaald worden.</p><p class='leren'>- Je ziet culturele diversiteit als een verrijking van de organisatie. Door een sterke focus op de meerwaarde van culturele verschillen kan het echter zijn dat de culturele meerderheid zich buitengesloten voelt en twijfelt over zijn/haar eigen positie.</p><p class='leren'>>> Nieuwsgierig naar de andere perspectieven? <button type='button' onclick='showText2('kwaliteit')'>Kwaliteit</button>, <button type='button' onclick='showText2('rechtvaardigheid')'>Rechtvaardigheid</button> en <button type='button' onclick='showText2('toegang')'>Toegang</button></p>"
            // }
          ],
            "title": "Onderdeel 2: Score en uitleg (jouw perspectief)"
        }],
    }, {
      "name": "page7",
      "elements": [{
          "type": "panel",
          "name": "panel7",
          "elements": [{
              "type": "html",
              "name": "html9",
              "html": "<p>Waarom vindt PostNL het belangrijk om in te zetten op culturele diversiteit?</p><p><b>Oorsprong</b></p><p>Door een krappe arbeidsmarkt zet PostNL de afgelopen jaren steeds meer in op het aantrekken van multicultureel talent. Anderzijds geven medewerkers aan dat ze het fijn zouden vinden als er ook meer diversiteit is op het hoofdkantoor. De huidige culturele verschillen tussen medewerkers op het hoofdkantoor en de bezorgers en subcontractors zorgt in de praktijk voor diversiteitsgerelateerde problemen zoals miscommunicatie, vooroordelen en conflict. Vooral cultureel diverse teams in lagere segmenten in de organisatie hebben de afgelopen jaren te maken gehad met spanningen.</p><blockquote><p>Met een diverse samenstelling van onze medewerkerspopulatie willen wij een afspiegeling zijn van de samenleving. PostNL is een bedrijf waar een ieder zich veilig en geaccepteerd kan voelen binnen alle lagen van ons bedrijf.</p></blockquote><p>In de praktijk leidt dit streven echter ook tot negatieve opmerkingen naar culturele minderheden:</p><blockquote><p>Jij bent aangenomen op basis van je achtergrond</p></blockquote><blockquote><p>Iemand zit alleen op die positie door zijn kleur</p></blockquote><blockquote><p>Ze hebben mij niet genomen omdat ik de beste ben, maar omdat ik een vrouw ben</p></blockquote><img src='img/brievenbus.png' alt='graph' style='width:500px;'><p><b>Streven</b></p><p>Doordat PostNL geen monopolie positie meer heeft in de markt, is het voor PostNL vandaag de dag nog belangrijker geworden om nieuwe klanten te bereiken.</p><blockquote><p>Door het creëren van een inclusieve werkomgeving kunnen wij de wensen en behoeften van onze klanten en andere belanghebbenden beter begrijpen, waardoor onze wendbaarheid en innovatiekracht toeneemt. D&I is daarmee van groot belang voor een duurzame toekomst van PostNL.</p></blockquote><p>Door een diverse samenstelling van de medewerkerspopulatie is de organisatie beter in staat haar klanten in de wijk te bedienen. PostNL loopt momenteel nog een grote doelgroep mis doordat er bijvoorbeeld geen verbinding is met klanten uit de Turkse gemeenschap. Hier kan in de toekomst nog meer op worden ingespeeld. Door de ontwikkeling van nieuwe producten en diensten is PostNL beter in staat nieuwe klanten te bereiken.</p><p>Uit interviews blijkt dat PostNL graag meer culturele diversiteit wil zien in hogere segmenten in de organisatie. Dit streven wordt ook in de top breed gedragen:</p><blockquote><p>Wij zijn nooit klaar en voelen altijd de urgentie tot verbetering. Om te werken aan onze ambities, zetten wij met name in op bewustwording, toerusting, kennisdeling en een positieve benaderingswijze. Onze acties zijn er op gericht om de intrinsieke motivatie te vergroten waardoor het gevoel van inclusiviteit en acceptatie stijgt en een verder toenemende diversiteit zal ontstaan.</p></blockquote><img src='img/boardroom.png' alt='graph' style='width:500px;'><p>Sinds 5 jaar wordt er meer gekeken naar een betere in- en doorstroom van culturele minderheden in de organisatie. Wel wordt er nog door procesmanagers gesteld dat er eigenlijk te weinig <q>tijd voor de mens</q> is om veel aandacht te kunnen besteden aan diversiteit in de werkomgeving.</p><p>De organisatie cultuur binnen PostNL wordt omschreven als een erg <q>hollandse cultuur</q>. Dit maakt dat medewerkers afkomstig uit diverse culturele groepen uit de samenleving soms moeite hebben om zich te verhouden naar de dominante <q>hollandse</q> normen en waarden in de organisatie. Als gevolg is het voor culturele minderheden niet altijd makkelijk om door te groeien in de organisatie. Tegelijkertijd is er momenteel een tekort aan goede leidinggevenden die in staat zijn cultureel diverse teams aan te sturen. Deze moeten vaak extern gehaald worden.</p>",
        }],
        "title": "Onderdeel 3: Organisatieperspectief (jouw perspectief in relatie tot het organisatieperspectief)",
      }],
    }, {
      "name": "page8",
      "elements": [{
          "type": "panel",
          "name": "panel8",
          "elements": [{
            "type": "radiogroup",
            "name": "question22",
            "title": "Herken jij bovenstaande motivatie van PostNL om in te zetten op culturele diversiteit ook in jouw werkomgeving?",
            "choices": [{
              value: 1,
              text: "Ja",
            }, {
              value: 2,
              text: "Nee",
            }],
          }, {
              "type": "comment",
              "name": "question23",
              "visible": false,
              "visibleIf": "{question22} = 1",
              "title": "Indien je je herkent in de motivatie van PostNL om aan de slag te gaan met culturele diversiteit in je werkomgeving, schrijf dan op waarom.",
              // "isRequired": true,
              "validators": [{
                  "type": "text",
                  // "minLength": 20,
              }],
          }, {
              "type": "comment",
              "name": "question24",
              "visible": false,
              "visibleIf": "{question22} = 2",
              "title": "Indien je je niet herkent in de motivatie van PostNL om aan de slag te gaan met culturele diversiteit in je werkomgeving, schrijf dan op waarom niet.",
              // "isRequired": true,
              "validators": [{
                  "type": "text",
                  // "minLength": 20,
              }],
          }],
        }],
      }, {
        "name": "page9",
        "elements": [{
            "type": "panel",
            "name": "panel9",
            "elements": [{
              "type": "radiogroup",
              "name": "question25",
              "title": "Nu je meer te weten bent gekomen over de motivatie van jouw organisatie om in te zetten op culturele diversiteit, is je motivatie om met culturele diversiteit aan de slag te gaan veranderd?",
              "choices": [{
                value: 1,
                text: "Ja",
              }, {
                value: 2,
                text: "Nee",
              }],
            }, {
                "type": "comment",
                "name": "question26",
                "visible": false,
                "visibleIf": "{question25} = 1",
                "title": "Beschrijf nogmaals jouw motivatie om aan de slag te gaan met culturele diversiteit in je werkomgeving.",
                // "isRequired": true,
                "validators": [{
                    "type": "text",
                    // "minLength": 20,
                }],
            }],
          }],
      }, {
        "name": "page10",
        "elements": [{
          "type": "panel",
          "name": "panel10",
          "elements": [{
            "type": "html",
            "name": "html10",
            "html": "<p>Case 1: Het gaat om kwaliteit!<br>Om te polsen hoeveel draagvlak er is voor diversiteitsbeleid spreek je met verschillende collega’s op de afdeling. Van verschillende kanten krijg je de opmerking: <q>Het is belangrijk dat we primair inzetten op kwaliteit, niet perse op diversiteit. We zijn niet tegen diversiteit, maar het mag niet ten koste gaan van diversiteit?</q> Welke reactie zou hier het meest effectief zijn om draagvlak te creëren voor je eigen beleid?</p><img src='img/case1.png' alt='graph' style='width:400px;'>",
          }]
        }]
      }, {
        "name": "page11",
        "elements": [{
          "type": "panel",
          "name": "panel11",
          "elements": [{
            "type": "html",
            "name": "html11",
            "html": "<p>Case 2: <q>We hebben de plicht minderheden vooruit te helpen</q><br>Je bent al enige tijd bezig om interventies te implementeren waarbij je actief in wilt zetten op de diversiteit in een van de teams om zo een aantal producten uit de dienstverlening te verbeteren. Een van de leidinggevenden van deze teams heeft kritiek op de wijze waarop je diversiteit aanvliegt. Zij vindt zij het onzin om te proberen de waarde van diversiteit te verzilveren. Zij voelt de maatschappelijke verantwoordelijkheid om culturele minderheden die werkzaam zijn op de afdeling op te nemen en actief te ondersteunen. Het is duidelijk dat zij minder kansen hebben en het diversiteitsbeleid zou juist daarop gericht moeten zijn.</p><img src='img/case2.png' alt='graph' style='width:400px;'>",
          }]
        }]
      }, {
        "name": "page12",
        "elements": [{
          "type": "panel",
          "name": "panel12",
          "elements": [{
            "type": "html",
            "name": "html12",
            "html": "<p>Case 3: <q>De Turkse medewerkers naar de Turkse klant</q><br>De teams die onder jouw verantwoordelijkheid vallen moeten regelmatig klussen doen voor klanten met een Turkse of Marokkaanse achtergrond. De leidinggevenden van de teams hebben de ervaring dat het het beste werkt om Turks-Nederlandse collega’s naar deze klanten te sturen. Een gezamenlijke culturele achtergrond van de klant en de medewerker zorgt immers al snel voor meer vertrouwen en een gemakkelijkere communicatie. Zij geven wel aan dat sommige Turks-Nederlandse collega’s moeite hebben met het feit dat ze steeds naar Turkse klanten gestuurd worden. Wat zou jouw opdracht aan de leidinggevenden zijn in deze situatie?</p><img src='img/case3.png' alt='graph' style='width:400px;'>",
          }]
        }]
      }, {
        "name": "page13",
        "elements": [{
          "type": "panel",
          "name": "panel13",
          "elements": [{
            "type": "html",
            "name": "html13",
            "html": "<p>Case 4: De leergoeroes<br>Binnen de dienst HR zijn er een aantal medewerkers die bepleiten dat diversiteit gaat helpen om als organisatie innovatiever te worden. Zij zijn geïnspireerd geraakt door werk van een Amerikaanse hoogleraar die onderzoek gedaan heeft waaruit dit blijkt. Op de werkvloer slaat dit idee nog niet echt aan. Medewerkers ervaren niet echt dat diverse teams innovatiever zijn. Sterker nog, in de diverse teams treden regelmatig conflicten op door het verschil in visie. Leidinggevenden weten niet goed hoe ze het idee van <q>diversiteit = innovatie</q> handen en voeten zouden moeten geven. Het antwoord van HR is vooral om de hoogleraar te citeren en zijn publicaties rond te sturen. Daar schiet je nog niet zoveel mee op. Wat zou je hen adviseren?</p><img src='img/case4.png' alt='graph' style='width:400px;'>"
          }]
        }]
      }, {
        "name": "page14",
        "elements": [{
          "type": "panel",
          "name": "panel14",
          "elements": [{
            "type": "html",
            "name": "actions",
            "html": "<img src='img/actions.png' alt='graph' id='actions' onclick='showText(&quot;verbinding&quot;)' style='width:800px;'><p class='verbinding'>Meer verbinding met klanten</p><p class='resources'>Het beter benutten van interne resources</p><p class='doorstroom'>In- en doorstroom van personeel bevorderen</p>"
          }],
        }]
      }, {
        "name": "page15",
        "elements": [{
          "type": "panel",
          "name": "panel15",
          "elements": [{
            "type": "html",
            "name": "html14",
            "html": "<p><u>Interne resources</u></p><p>Het actief benutten van verschillende perspectieven van medewerkers kan op gestructureerde wijze gebeuren, bijvoorbeeld in de context van vergaderingen, heisessies of projectgroepen.</p><p>1. Vergadering<br>Tijdens vergaderingen zijn er twee fenomenen die maken dat unieke ideeën van medewerkers onbenut blijven:<ul><li>extreme invloed van dominante groepsleden: voor leiders is het vaak bekend wie er het eerste het woord zullen nemen. Omdat we vaak zelf ook een belang hebben bij een agendapunt doen we niet altijd de moeite om alle aanwezigen uitgebreid te bevragen een reactie te geven. Het is ook tijdrovend om iedereen het woord te geven.</li><li>zelfs wanneer iedereen het woord krijgt zijn teamleden vaak geneigd standpunten en perspectieven in te brengen waarvan zij weten dat die gedeeld worden binnen het team. Dat helpt om aardig gevonden  worden in het team en voor binding tussen teamleden. De druk om geen afwijkende standpunten in te brengen is vaak nog groter in diverse teams omdat die vaak minder cohesief zijn. Conflict ligt op de vloer.</li></ul><br></p><p>Als voorzitter is het van belang te  bewaken dat de cohesie tussen de teamleden groot genoeg is. Anders is het zaak de vergadering te beginnen met iets informeels zoals een lunch en te starten met agendapunten waarvan je verwacht dat mensen het wel redelijk eens zullen zijn.<br>Vervolgens is het de kunst voor die agendapunten waarop je graag creatieve input wilt of het belangrijk is dat iedereen echt betrokken raakt om mensen actief uit te nodigen met unieke input te komen. Dat bijvoorbeeld kan door ideeen op post-its te laten schrijven en de postits vervolgens te laten delen met de groep of op flapovers te plakken. Wanneer tijd een issue is kan dat ook door alle teamleden van te voren input te vragen. Nog een andere aanpak is om die leden van de vergadering waarvan je verwacht dat ze een andere opvatting hebben te vragen of zij hun perspectief willen presenteren aan de vergadering. Als voorzitter is het zaak om geventileerde opvatting positief te ontvangen, zelfs wanneer je het er zelf mee oneens bent.</p><img src='img/vergadering.png' alt='graph' style='width:500px;'><p>2.  Projectgroep<br>Een projectgroep is een geschikt middel om de diversiteit in een team te benutten om creatieve oplossingen te genereren of besluitvorming te optimaliseren. Deze kleinschalige samenwerkingsvorm met een kortdurend karakter maakt dat gedrag van mensen meer doelgericht is en minder gestuurd wordt door macht, commitment aan de belangen van specifieke organisatieonderdelen en competitie. Kleinschaligheid stimuleert, weten we uit onderzoek, ook empathie, door de mogelijkheid tot informele en persoonlijke interactie. De diversiteit van het team wordt idealiter zo gekozen dat mensen op verschillende dimensies van elkaar verschillen, zoals geslacht, discipline, organisatieonderdeel, leeftijd en culturele achtergrond. Daarbij is het belangrijk dat verschillen op dimensies niet met elkaar samenhangen, bijvoorbeeld dat alle culturele minderheidsleden jong en vrouw zijn, tegenover een culturele meerderheid van oudere mannen. Dat geeft sterke scheidslijnen waardoor verschillen niet benut willen omdat er te weinig interactie ontstaat over groepsgrenzen. Door in projectgroepen agile te werken kunnen de effecten van diversiteit op innovatie verder versterkt worden. Dit garandeert dat alle groepsleden niet alleen inhoudelijk, maar ook procesmatig bijdragen.</p><img src='img/projectgroep.png' alt='graph' style='width:500px;'><p>3. Heisessie<br>Belangrijke veranderingen in de organisatie, bijvoorbeeld in haar strategie zijn doorgaans het onderwerp van een ‘heisessies’. Buiten de normale werksfeer zijn medewerkers vaak minder gebonden aan rollen en is de openheid voor anderen en andere perspectieven groter. Dat wordt versterkt door de informele kanten van een dagje samen zijn buiten de dagelijkse hectiek. Net als tijdens vergaderingen is het van belang dat de sessieleider bewaakt dat de cohesie tussen de teamleden groot genoeg is. Anders is van belang te starten met een onderdeel dat de gemeenschappelijkheid benadrukt of wederzijds begrip versterkt. Een gevoel van gemeenschappelijkheid ontstaat door samen iets te doen zoals het maken van een spannende wandeling, luisteren naar een optreden of het ophalen van herinneringen om trots op te zijn. Wederzijds begrip ontstaat bijvoorbeeld door ieder groepslid te vragen iets te zeggen over vanuit welke drive of welke waarde hij of zij dit werk doet. Dit wordt versterkt door als groep deze waarden te representeren door middel van een mood board.<br>Wanneer er voldoende onderlinge verbinding is onder de deelnemers is het tijd  om mensen actief uit te nodigen met unieke input te komen. Net als tijdens vergaderingen kan dat door ideeen op post-its te laten schrijven en de postits vervolgens te laten delen met de groep of op flapovers te plakken. Voor de sessieleider is het ook hier zaak om geventileerde opvatting positief te ontvangen.</p><img src='img/heisessie.png' alt='graph' style='width:500px;'>",
          }, {
            "type": "checkbox",
            "name": "perspectieven",
            "title": "Vink aan op welke wijze jij de verschillende perspectieven van je medewerkers beter wilt gaan benutten.",
            // "isRequired": true,
            "choices": [{
              value: 1,
              text: "1. Vergadering",
            }, {
              value: 2,
              text: "2. Projectgroep",
            }, {
              value: 3,
              text: "3. Heisessie",
            }],
          }]
        }]
      }],

};

window.survey = new Survey.Model(surveyJSON);

survey
    .onComplete
    .add(function(survey) {

        // Object.keys(data).forEach(function(qName) {
        //     var question = survey.getQuestionByName(qName);
        //     var qValue = data[qName];
        //     randomlist.push(qValue)
        //
        //     if (question.choices) {
        //         question.choices.forEach(function(choice) {
        //             if (choice.value === qValue || qValue.includes(choice.value)) {
        //                 totalScore += +choice.score;
        //                 if (choice.score === 1) {
        //                     cat1 += 1;
        //                 } else if (choice.score === 2) {
        //                     cat2 += 1;
        //                 } else if (choice.score === 3) {
        //                     cat3 += 1;
        //                 } else if (choice.score === 4) {
        //                     cat4 += 1;
        //                 }
        //             }
        //         });
        //     }
        // });

        document
            .querySelector('#surveyResult')
            .innerHTML = "Results: " + JSON.stringify(survey.data);

        var dictcats = categorizeAnswers(1)

        document
            .querySelector('#surveyScore')
            .innerHTML = "Category scores: " + JSON.stringify(dictcats);

    });

survey.onValidateQuestion.add(function(survey, options) {
    //the checkbox question 4
    if (options.name === "question4") {
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
