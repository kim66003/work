// function to remove by value from array
Array.prototype.remove = function() {
  var what, a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

// shuffle order of array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// make dictionary with text and value (1-4)
function make_dict(list) {
  var dict = [];
  var count = 0;
  list.forEach(function(cat) {
    temp_cat = [];
    cat.forEach(function(item) {
      count += 1;
      temp = {
        text: item,
        value: Number(item[0]),
        number: count,
      }
      temp_cat.push(temp)
    });
    dict.push(temp_cat)
  });
  return dict
}

function makeStatements() {
  // arrays of statements from 4 categories
  const quality = ["1.1 Het moet in het werk in de eerste plaats gaan om kwaliteit, niet om culturele diversiteit", "1.2 Ik ben van mening dat actief sturen op culturele diversiteit ingaat tegen onze kwaliteitsdoelen", "1.3 Ik sta open voor culturele diversiteit, maar dit is ondergeschikt aan maximale prestaties", "1.4 Ons streven moet zijn de beste mensen te vinden; culturele diversiteit is secundair", "1.5 Bij ons op het werk zou iemands culturele achtergrond er niet toe moeten doen", "1.6 Beoordeling moet objectief zijn; iemands culturele achtergrond zou hierin geen rol moeten spelen", "1.7 Ik ben van mening dat culturele achtergrond niet van belang is bij het selecteren van de beste kandidaat", "1.8 Naar mijn mening is iedereen welkom hier, zolang je maar minstens even goed presteert als de rest"];
  const justice = ["2.1 Het is onze sociale verantwoordelijkheid een afspiegeling te zijn van de maatschappij", "2.2 Culturele diversiteit is belangrijk omdat wij als organisatie rechtvaardig moeten zijn", "2.3 Culturele diversiteit zie ik als onderdeel van onze doelstellingen in de sfeer van maatschappelijk verantwoord ondernemen", "2.4 Ik beschouw bevordering van culturele diversiteit als maatschappelijke plicht van onze organisatie", "2.5 Wij zouden als organisatie moeten inzetten op gelijke kansen voor culturele minderheden", "2.6 Het is belangrijk dat wij culturele minderheden een kans bieden op werk", "2.7 Wij zouden culturele minderheden in de organisatie extra ondersteuning moeten bieden", "2.8 Ik beschouw het als onze taak culturele minderheden vooruit te helpen in hun loopbaan"];
  const access = ["3.1 Culturele diversiteit kan ons helpen alle klantengroepen te bereiken ", "3.2 Onze klanten/afnemers kunnen het beste bediend worden door medewerkers met dezelfde culturele achtergrond", "3.3 Culturele diversiteit kan ons helpen producten en dienstverlening af te stemmen op specifieke doelgroepen", "3.4 Culturele diversiteit kan ons helpen toegang te krijgen tot diverse groepen in de samenleving", "3.5 Culturele diversiteit kan ons helpen geloofwaardig te zijn in de ogen van klanten en andere belanghebbenden", "3.6 Culturele diversiteit is belangrijk omdat het ons een aantrekkelijkere werkgever kan maken", "3.7 Culturele diversiteit kan ons helpen draagvlak te creëren in de samenleving", "3.8 Culturele diversiteit in onze organisatie is nodig om relevant te blijven voor de markt"];
  const learning = ["4.1 Verschillende culturen op de werkvloer kan ons helpen om onderling leren te stimuleren", "4.2 Culturele diversiteit kan ons helpen om als organisatie innovatief te zijn", "4.3 Culturele diversiteit is voor ons van belang omdat teamleden met verschillende achtergronden elkaar kunnen versterken", "4.4 Culturele diversiteit kan ons helpen om vernieuwende ideeën te genereren", "4.5 Culturele diversiteit kan ons helpen om gemakkelijk in te kunnen spelen op veranderingen", "4.6 De aanwezigheid van diverse culturen kan ons helpen verschillende soorten talent beter te herkennen", "4.7 Culturele diversiteit kan ons helpen om tunnelvisie tegen te gaan", "4.8 Ik vind culturele diversiteit belangrijk omdat het kan aanzetten tot reflectie op ons handelen"];

  var length_cat = quality.length // integer length of array category
  var cat_list = [quality, justice, access, learning]; // list of 4 categories with statements
  var listdict = make_dict(cat_list) // make dictionary of statements and corresponding values (1-4)

  return [listdict, length_cat]
}

// make all possible combinations of two categories from 1-4
function answercombinations(statements, length) {
  var combi_list = [] // return array of category pairs
  var index = [
    [
      [0, 1],
      [2, 3]
    ],
    [
      [0, 2],
      [1, 3]
    ],
    [
      [0, 3],
      [1, 2]
    ],
    [
      [2, 1],
      [3, 0]
    ],
    [
      [3, 1],
      [2, 0]
    ],
    [
      [3, 2],
      [1, 0]
    ],
    [
      [0, 1],
      [2, 3]
    ],
    [
      [0, 2],
      [1, 3]
    ]
  ] // all possible combinations
  for (i = 0; i < length; i++) {
    var rand_stats = [] // list with 4 random statements from 4 categories
    for (j = 0; j < statements.length; j++) {
      rand_stats.push(statements[j][Math.floor(Math.random() * statements[j].length)]) // pick random statement from every category
      statements[j].remove(rand_stats[j]) // remove that statement from original array
    }
    var combi = [rand_stats[index[i][0][0]], rand_stats[index[i][0][1]]] // make combi based on index array
    combi_list.push(combi)
    var combi = [rand_stats[index[i][1][0]], rand_stats[index[i][1][1]]] // make combi based on index array
    combi_list.push(combi)
  }
  shuffle(combi_list) // shuffle list of combi statements
  console.log(combi_list)
  return combi_list // return list of combi statements
}