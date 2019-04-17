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
    dict = []
    list.forEach(function(cat) {
      temp_cat = [];
      cat.forEach(function(item) {
        temp = {
          text: item,
          value: Number(item[0])
        }
        temp_cat.push(temp)
      });
      dict.push(temp_cat)
    });
    return dict
}

var cat_1 = ["1...omdat het onze sociale verantwoordelijkheid is om een afspiegeling te zijn van de maatschappij", "1...als kwaliteitsdoelen maar eerst gewaarborgd zijn", "1...omdat wij als organisatie moeten inspelen op het diverser worden van de markt", "1...omdat teamleden met verschillende culturele achtergronden elkaar versterken", "1...omdat onze klantengroepen ook steeds diverser worden", "1...zolang het maar niet ten koste gaat van het maximaliseren van onze prestaties"]
var cat_2 = ["2...omdat het ons helpt als organisatie innovatief te zijn ", "2...omdat wij als organisatie rechtvaardig moeten zijn", "2...omdat het helpt medewerkers te laten reflecteren op het eigen handelen", "2...omdat iemands culturele achtergrond er niet toe doet in het werk, het zijn kwalificaties die tellen", "2...omdat het matchen van medewerkers met klanten/leveranciers op basis van culturele achtergrond ons marktaandeel kan vergroten", "2...omdat wij als organisatie iedereen gelijke kansen moeten bieden"]
var cat_3 = ["3...omdat wij medewerkers met een achterstandspositie extra moeten ondersteunen", "3...omdat wij geen onderscheid moeten maken op basis van culturele achtergrond", "3...omdat het ons helpt om tunnelvisie in teams tegen te gaan", "3...omdat kennis en ervaring uit een bepaalde cultuur ons helpt om producten en services af te stemmen op klanten met die cultuur", "3...omdat beoordeling objectief moet zijn, iemands culturele achtergrond speelt hierin geen rol", "3...omdat het ons toegang geeft tot een grotere visvijver aan talent"]
var cat_4 = ["4...omdat het ons helpt nieuwe ideeën op de werkvloer te stimuleren", "4...omdat wij culturele minderheden in de organisatie vooruit moeten helpen in hun loopbaan", "4...omdat het ons helpt om vastgeroeste processen te doorbreken", "4...omdat het uiteindelijk gaat om de beste kandidaat, ongeacht iemands culturele achtergrond", "4...omdat wij achterstandsgroepen in de samenleving een kans moeten bieden op werk", "4...omdat het ons een aantrekkelijkere werkgever maakt"]
var length_cat = cat_1.length
var cat_list = [cat_1, cat_2, cat_3, cat_4];

var listdict = make_dict(cat_list)

function answercombinations(statements, length) {
    var combi_list = []
    var index = [[[0, 1], [2, 3]], [[0, 2], [1, 3]], [[0, 3], [1, 2]], [[2, 1], [3, 0]], [[3, 1], [2, 0]], [[3, 2], [1, 0]]]
    for (i = 0; i < length; i++) {
        var rand_stats = []
        for (j = 0; j < statements.length; j++) {
            rand_stats.push(statements[j][Math.floor(Math.random() * statements[j].length)])
            statements[j].remove(rand_stats[j])
        }
        var combi = [rand_stats[index[i][0][0]], rand_stats[index[i][0][1]]]
        combi_list.push(combi)
        var combi = [rand_stats[index[i][1][0]], rand_stats[index[i][1][1]]]
        combi_list.push(combi)
    }
    shuffle(combi_list)
    return combi_list
}
