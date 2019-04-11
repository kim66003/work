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

var cat_1 = ["1...omdat het onze sociale verantwoordelijkheid is om een afspiegeling te zijn van de maatschappij", "1...als kwaliteitsdoelen maar eerst gewaarborgd zijn", "1...omdat wij als organisatie moeten inspelen op het diverser worden van de markt", "1...omdat teamleden met verschillende culturele achtergronden elkaar versterken", "1...omdat onze klantengroepen ook steeds diverser worden", "1...zolang het maar niet ten koste gaat van het maximaliseren van onze prestaties"]
var cat_2 = ["2...omdat het ons helpt als organisatie innovatief te zijn ", "2...omdat wij als organisatie rechtvaardig moeten zijn", "2...omdat het helpt medewerkers te laten reflecteren op het eigen handelen", "2...omdat iemands culturele achtergrond er niet toe doet in het werk, het zijn kwalificaties die tellen", "2...omdat het matchen van medewerkers met klanten/leveranciers op basis van culturele achtergrond ons marktaandeel kan vergroten", "2...omdat wij als organisatie iedereen gelijke kansen moeten bieden"]
var cat_3 = ["3...omdat wij medewerkers met een achterstandspositie extra moeten ondersteunen", "3...omdat wij geen onderscheid moeten maken op basis van culturele achtergrond", "3...omdat het ons helpt om tunnelvisie in teams tegen te gaan", "3...omdat kennis en ervaring uit een bepaalde cultuur ons helpt om producten en services af te stemmen op klanten met die cultuur", "3...omdat beoordeling objectief moet zijn, iemands culturele achtergrond speelt hierin geen rol", "3...omdat het ons toegang geeft tot een grotere visvijver aan talent"]
var cat_4 = ["4...omdat het ons helpt nieuwe ideeën op de werkvloer te stimuleren", "4...omdat wij culturele minderheden in de organisatie vooruit moeten helpen in hun loopbaan", "4...omdat het ons helpt om vastgeroeste processen te doorbreken", "4...omdat het uiteindelijk gaat om de beste kandidaat, ongeacht iemands culturele achtergrond", "4...omdat wij achterstandsgroepen in de samenleving een kans moeten bieden op werk", "4...omdat het ons een aantrekkelijkere werkgever maakt"]

var cat_list = [cat_1, cat_2, cat_3, cat_4]

function answercombinations(cat_list) {
    var combi_list = []

    for (i = 0; i < 6; i++) {
        var rand_stats = [cat_list[0][Math.floor(Math.random() * cat_list[0].length)], cat_list[1][Math.floor(Math.random() * cat_list[1].length)], cat_list[2][Math.floor(Math.random() * cat_list[2].length)], cat_list[3][Math.floor(Math.random() * cat_list[3].length)]]
        cat_list[0].remove(rand_stats[0])
        cat_list[1].remove(rand_stats[1])
        cat_list[2].remove(rand_stats[2])
        cat_list[3].remove(rand_stats[3])
        var stat1 = rand_stats[Math.floor(Math.random() * rand_stats.length)]
        rand_stats.remove(stat1)
        var stat2 = rand_stats[Math.floor(Math.random() * rand_stats.length)]
        rand_stats.remove(stat2)
        var stat3 = rand_stats[Math.floor(Math.random() * rand_stats.length)]
        rand_stats.remove(stat3)
        var stat4 = rand_stats[0]
        var combi1 = [stat1, stat2]
        var combi2 = [stat3, stat4]
        combi_list.push(combi1)
        combi_list.push(combi2)
    }
    return combi_list
}
