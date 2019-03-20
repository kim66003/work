"pages": [
    {
        "elements": [
            {
                "type": "panel",
                "elements": [
                    {
                        "type": "html",
                        "name": "diversity_intro",
                        "html": "<article class='intro'>    <h2 class='intro__heading intro__heading--income title'> Culturele Diversiteit Online Tool </h2>    <div class='intro__body wysiwyg'>       <p>Deze tool geeft u inzicht in de kansen die culturele diversiteit biedt voor uw werkeenheid. <br> Daarbij reikt de tool u concrete handvatten aan om in uw werkomgeving verder aan de slag te gaan met culturele diversiteit.</p>       <p>Dit is een try-out versie die aan de hand van uw input verder wordt ontwikkeld tot een gevalideerd instrument. <br> Alvast hartelijk dank voor uw medewerking. </p></div> </article>"
                    }
                ],
                "name": "panel1"
            }
        ],
        "name": "page0"
    }, {
        "elements": [
            {
                "type": "panel",
                "elements": [
                    {
                        "type": "radiogroup",
                        "choices": [
                            "Onderdeel 1", "Onderdeel 2", "Onderdeel 3"
                        ],
                        "name": "organisatieonderdeel",
                        "title": "Bij welk organisatieonderdeel bent u werkzaam?"
                    }
                ],
                "name": "panel13",
                "title": "Onderdeel 1: Algemene vragen"
            }
        ],
        "name": "page1"
    }, {
        "elements": [
            {
                "type": "panel",
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Yes"
                                    }, {
                                        "value": "0",
                                        "text": "No"
                                    }
                                ],
                                "colCount": 2,
                                "isRequired": true,
                                "name": "member_receives_income_from_employment",
                                "title": " "
                            }, {
                                "type": "checkbox",
                                "name": "member_type_of_employment",
                                "visible": false,
                                "visibleIf": "{member_receives_income_from_employment} =1",
                                "title": "  ",
                                "isRequired": true,
                                "choices": ["Self employment", "All other types of employment"]
                            }
                        ],
                        "name": "panel2",
                        "title": "You"
                    }, {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Yes"
                                    }, {
                                        "value": "0",
                                        "text": "No"
                                    }
                                ],
                                "colCount": 2,
                                "isRequired": true,
                                "name": "partner_receives_income_from_employment",
                                "title": " "
                            }, {
                                "type": "checkbox",
                                "name": "partner_type_of_employment",
                                "visible": false,
                                "visibleIf": "{partner_receives_income_from_employment} =1",
                                "title": " ",
                                "isRequired": true,
                                "choices": ["Self employment", "All other types of employment"]
                            }
                        ],
                        "name": "panel1",
                        "startWithNewLine": false,
                        "title": "Your Partner",
                        "visible": false,
                        "visibleIf": "{organisatieonderdeel} = 'Married' or {organisatieonderdeel} = 'In a registered relationship' or {organisatieonderdeel} = 'Living with my partner'"
                    }
                ],
                "name": "panel5",
                "title": "Do you and/or your partner currently receive income from employment?"
            }
        ],
        "name": "page2"
    }, {
        "elements": [
            {
                "type": "panel",
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "paneldynamic",
                                "minPanelCount": 1,
                                "name": "member_arrray_employer_names",
                                "valueName": "member_arrray_employer",
                                "title": "Please enter all your employers",
                                "panelAddText": "Add another employer",
                                "panelCount": 1,
                                "templateElements": [
                                    {
                                        "type": "text",
                                        "name": "member_employer_name",
                                        "valueName": "name",
                                        "title": "Name of employer"
                                    }
                                ]
                            }
                        ],
                        "name": "panel2",
                        "title": "You",
                        "visible": false,
                        "visibleIf": "{member_type_of_employment} contains 'All other types of employment'"
                    }, {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "paneldynamic",
                                "minPanelCount": 1,
                                "name": "partner_arrray_employer_names",
                                "valueName": "partner_arrray_employer",
                                "title": "Please enter all your partner employers",
                                "panelAddText": "Add another employer",
                                "panelCount": 1,
                                "templateElements": [
                                    {
                                        "type": "text",
                                        "name": "partner_employer_name",
                                        "valueName": "name",
                                        "title": "Name of employer"
                                    }
                                ]
                            }
                        ],
                        "name": "panel8",
                        "startWithNewLine": false,
                        "title": "Your Partner",
                        "visible": false,
                        "visibleIf": "{partner_type_of_employment} contains 'All other types of employment'"
                    }
                ],
                "name": "panel6",
                "title": "Who are you employed by?"
            }
        ],
        "name": "page3.1",
        "visible": false,
        "visibleIf": "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
    }, {
        "elements": [
            {
                "type": "panel",
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "paneldynamic",
                                "renderMode": "progressTop",
                                "allowAddPanel": false,
                                "allowRemovePanel": false,
                                "name": "member_arrray_employer_info",
                                "title": "Your employers",
                                "valueName": "member_arrray_employer",
                                "panelCount": 1,
                                "templateElements": [
                                    {
                                        "type": "panel",
                                        "name": "panel_member_employer_address",
                                        "title": "Address",
                                        "elements": [
                                            {
                                                "type": "text",
                                                "name": "member_employer_address",
                                                "valueName": "address",
                                                "title": "Address"
                                            }, {
                                                "type": "text",
                                                "name": "member_employer_phone",
                                                "valueName": "phone",
                                                "title": "Phone number:"
                                            }, {
                                                "type": "text",
                                                "name": "member_employer_abn",
                                                "valueName": "abn",
                                                "title": "ABN"
                                            }
                                        ]
                                    }, {
                                        "type": "panel",
                                        "name": "panel_member_employer_role",
                                        "title": "What is your role?",
                                        "elements": [
                                            {
                                                "type": "radiogroup",
                                                "choices": [
                                                    "Full time", "Part time", "Casual", "Seasonal"
                                                ],
                                                "name": "member_employer_role",
                                                "title": "Your role",
                                                "valueName": "role"
                                            }
                                        ]
                                    }, {
                                        "type": "panel",
                                        "name": "panel_member_employer_hours_work",
                                        "title": "What hours do you work?",
                                        "elements": [
                                            {
                                                "type": "text",
                                                "inputType": "number",
                                                "name": "member_employer_hours_worked",
                                                "valueName": "hours_worked",
                                                "title": "Hours:"
                                            }, {
                                                "type": "dropdown",
                                                "name": "member_employer_hours_worked_frequency",
                                                "title": "Worked Frequency:",
                                                "valueName": "hours_worked_frequency",
                                                "startWithNewLine": false,
                                                "defaultValue": "Year",
                                                "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                                            }
                                        ]
                                    }, {
                                        "type": "panel",
                                        "name": "panel_member_employer_income",
                                        "title": "What income do you receive?",
                                        "elements": [
                                            {
                                                "type": "text",
                                                "inputType": "number",
                                                "name": "member_employer_income",
                                                "valueName": "income",
                                                "title": "Income:"
                                            }, {
                                                "type": "dropdown",
                                                "name": "member_employer_income_frequency",
                                                "title": "Income Frequency",
                                                "valueName": "income_frequency",
                                                "startWithNewLine": false,
                                                "defaultValue": "Year",
                                                "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                                            }
                                        ]
                                    }
                                ],
                                "templateTitle": "Employer name: {panel.name}"
                            }
                        ],
                        "name": "panel17",
                        "title": "You",
                        "visibleIf": "{member_type_of_employment} contains 'All other types of employment'"
                    }, {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "paneldynamic",
                                "renderMode": "progressTop",
                                "allowAddPanel": false,
                                "allowRemovePanel": false,
                                "name": "partner_arrray_employer_info",
                                "title": "Your partner employers",
                                "valueName": "partner_arrray_employer",
                                "panelCount": 1,
                                "templateElements": [
                                    {
                                        "type": "panel",
                                        "name": "panel_partner_employer_address",
                                        "title": "Address",
                                        "elements": [
                                            {
                                                "type": "text",
                                                "name": "partner_employer_address",
                                                "valueName": "address",
                                                "title": "Address:"
                                            }, {
                                                "type": "text",
                                                "name": "partner_employer_phone",
                                                "valueName": "phone",
                                                "title": "Phone number"
                                            }, {
                                                "type": "text",
                                                "name": "partner_employer_abn",
                                                "valueName": "abn",
                                                "title": "ABN"
                                            }
                                        ]
                                    }, {
                                        "type": "panel",
                                        "name": "panel_partner_employer_role",
                                        "title": "What is your role?",
                                        "elements": [
                                            {
                                                "type": "radiogroup",
                                                "choices": [
                                                    "Full time", "Part time", "Casual", "Seasonal"
                                                ],
                                                "name": "partner_employer_role",
                                                "title": "Your role",
                                                "valueName": "role"
                                            }
                                        ]
                                    }, {
                                        "type": "panel",
                                        "name": "panel_partner_employer_hours_work",
                                        "title": "What hours do you work?",
                                        "elements": [
                                            {
                                                "type": "text",
                                                "inputType": "number",
                                                "name": "partner_employer_hours_worked",
                                                "valueName": "hours_worked",
                                                "title": "Hours"
                                            }, {
                                                "type": "dropdown",
                                                "name": "partner_employer_hours_worked_frequency",
                                                "valueName": "hours_worked_frequency",
                                                "title": "Worked Frequency:",
                                                "startWithNewLine": false,
                                                "defaultValue": "Year",
                                                "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                                            }
                                        ]
                                    }, {
                                        "type": "panel",
                                        "name": "panel_partner_employer_income",
                                        "title": "What income do you receive?",
                                        "elements": [
                                            {
                                                "type": "text",
                                                "inputType": "number",
                                                "name": "partner_employer_income",
                                                "valueName": "income",
                                                "title": "Income:"
                                            }, {
                                                "type": "dropdown",
                                                "name": "partner_employer_income_frequency",
                                                "valueName": "income_frequency",
                                                "title": "Income frequency:",
                                                "startWithNewLine": false,
                                                "defaultValue": "Year",
                                                "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                                            }
                                        ]
                                    }
                                ],
                                "templateTitle": "Employer name: {panel.name}"
                            }
                        ],
                        "name": "panel18",
                        "startWithNewLine": false,
                        "title": "You partner",
                        "visibleIf": "{partner_type_of_employment} contains 'All other types of employment'"
                    }
                ],
                "name": "panel16",
                "title": "Tells us about your employer(s)"
            }
        ],
        "name": "page3.2",
        "visibleIf": "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
    }, {
        "elements": [
            {
                "type": "panel",
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Yes"
                                    }, {
                                        "value": "0",
                                        "text": "No"
                                    }
                                ],
                                "colCount": 2,
                                "isRequired": true,
                                "name": "member_receive_fringe_benefits",
                                "title": " "
                            }, {
                                "type": "panel",
                                "elements": [
                                    {
                                        "type": "text",
                                        "name": "member_fringe_benefits_type"
                                    }, {
                                        "type": "text",
                                        "name": "member_fringe_benefits_value"
                                    }, {
                                        "type": "radiogroup",
                                        "choices": [
                                            "Grossed up", "Not grossed up"
                                        ],
                                        "name": "member_fringe_benefits_grossing"
                                    }
                                ],
                                "name": "panel11",
                                "visible": false,
                                "visibleIf": "{member_receive_fringe_benefits} = 1"
                            }
                        ],
                        "name": "panel2",
                        "title": "You",
                        "visible": false,
                        "visibleIf": "{member_type_of_employment} contains 'All other types of employment'"
                    }, {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Yes"
                                    }, {
                                        "value": "0",
                                        "text": "No"
                                    }
                                ],
                                "colCount": 2,
                                "isRequired": true,
                                "name": "partner_receive_fringe_benefits",
                                "title": " "
                            }, {
                                "type": "panel",
                                "elements": [
                                    {
                                        "type": "text",
                                        "name": "partner_fringe_benefits_type"
                                    }, {
                                        "type": "text",
                                        "name": "partner_fringe_benefits_value"
                                    }, {
                                        "type": "radiogroup",
                                        "choices": [
                                            "Grossed up", "Not grossed up"
                                        ],
                                        "name": "partner_fringe_benefits_grossing"
                                    }
                                ],
                                "name": "panel12",
                                "visible": false,
                                "visibleIf": "{partner_receive_fringe_benefits} = 1"
                            }
                        ],
                        "name": "panel1",
                        "startWithNewLine": false,
                        "title": "Your Partner",
                        "visible": false,
                        "visibleIf": "{partner_type_of_employment} contains 'All other types of employment'"
                    }
                ],
                "name": "panel9",
                "title": "Do any of your employers provide you with fringe benefits?"
            }
        ],
        "name": "page4",
        "visible": false,
        "visibleIf": "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
    }, {
        "elements": [
            {
                "type": "panel",
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Yes"
                                    }, {
                                        "value": "0",
                                        "text": "No"
                                    }
                                ],
                                "colCount": 2,
                                "isRequired": true,
                                "name": "member_seasonal_intermittent_or_contract_work",
                                "title": " "
                            }
                        ],
                        "name": "panel2",
                        "title": "You",
                        "visible": false,
                        "visibleIf": "{member_receives_income_from_employment} = 1"
                    }, {
                        "type": "panel",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    {
                                        "value": "1",
                                        "text": "Yes"
                                    }, {
                                        "value": "0",
                                        "text": "No"
                                    }
                                ],
                                "colCount": 2,
                                "isRequired": true,
                                "name": "partner_seasonal_intermittent_or_contract_work",
                                "title": " "
                            }
                        ],
                        "name": "panel1",
                        "startWithNewLine": false,
                        "title": "Your Partner",
                        "visible": false,
                        "visibleIf": "{partner_receives_income_from_employment} =1 "
                    }
                ],
                "name": "panel10",
                "title": "In the last 6 months, have you done any seasonal, intermittent or contract work?"
            }
        ],
        "name": "page5",
        "visible": false,
        "visibleIf": "{member_receives_income_from_employment} = 1 or {partner_receives_income_from_employment} =1 "
    }
],



var surveyJSON = {
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
            "type":"html",
            "name":"question4",
            "html":"<h5>Waarom vindt u het belangrijk om culturele diversiteit* in uw werkomgeving na te streven?<br>*met culturele diversiteit bedoelen wij de verscheidenheid aan nationale en etnische achtergronden van medewerkers</h5>"
          },
          {
            "type":"comment",
            "name":"question3",
            "title": "hoi",
            "description": "doeidoei"
          }
        ],
        "title":"Onderdeel 2: Diagnose (hoe kijk ik naar culturele diversiteit?)"
      }
    ]
  }
]
}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});


var surveyJSON = {
  pages:[
    {name:"page1",
    elements:[
      {type:"panel",
      name:"panel1",
      elements:[
        {type:"html",
        name:"question1",
        html:"<article class='intro'>    \n<h2 class='intro_heading'> Culturele Diversiteit Online Tool </h2>    \n<div class='intro__body'>\n<p>Deze tool geeft u inzicht in de kansen die culturele diversiteit biedt voor uw werkeenheid. <br> Daarbij reikt de tool u concrete handvatten aan om in uw werkomgeving verder aan de slag te gaan met culturele diversiteit.</p>\n<p>Dit is een try-out versie die aan de hand van uw input verder wordt ontwikkeld tot een gevalideerd instrument. <br> Alvast hartelijk dank voor uw medewerking. </p>\n</div>\n</article>"}]}],
        navigationButtonsVisibility:"show"
      },{
        name:"page2",
        elements:[
          {type:"panel",
          name:"panel2",
          elements:[
            {type:"radiogroup",
            name:"question2",
            title:"Bij welk organisatieonderdeel bent u werkzaam?",
            isRequired:true,
            choices:[
              {value:"onderdeel1",
              text:"Onderdeel 1"
            },{
              value:"onderdeel2",
              text:"Onderdeel 2"
            },{
              value:"onderdeel3",
              text:"Onderdeel 3"}]}],
              title:"Onderdeel 1: Algemene vragen"}]
            },{
              name:"page3",
              elements:[
                {type:"panel",
                name:"panel3",
                elements:[
                  {type:"html",
                  name:"question4",
                  html:"<h5>Waarom vindt u het belangrijk om culturele diversiteit* in uw werkomgeving na te streven?<br>*met culturele diversiteit bedoelen wij de verscheidenheid aan nationale en etnische achtergronden van medewerkers</h5>"
                },{
                  type:"comment",
                  name:"question3",
                  isRequired:true}],
                  title:"Onderdeel 2: Diagnose (hoe kijk ik naar culturele diversiteit?)"}]
                },{
                  name:"page4",
                  elements:[
                    {
                      type:"panel",
                      name:"panel4",
                      elements:[
                        {
                          type:"matrix",
                          name:"question5",
                          title:"U krijgt nu telkens twee stellingen te zien. Geef bij elke stelling aan in hoeverre u het hier mee eens bent en kies vervolgens met welke stelling u het meest eens bent.",isRequired:true,columns:[{value:"1",text:"Helemaal niet mee eens"},{value:"2",text:"Niet mee eens"},{value:"3",text:"Niet eens, niet oneens"},{value:"4",text:"Mee eens"},{value:"5",text:"Helemaal mee eens"}],rows:[{value:"1",text:"Stelling 1"},{value:"2",text:"Stelling 2"
                        }
                      ],
                      isAllRowRequired:true
                    }
                  ],
                  title:"Onderdeel 2: Diagnose (vragenlijst)"}
                ]
              }
