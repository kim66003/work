import random

cat1 = ["...omdat het onze sociale verantwoordelijkheid is om een afspiegeling te zijn van de maatschappij", "...als kwaliteitsdoelen maar eerst gewaarborgd zijn", "...omdat wij als organisatie moeten inspelen op het diverser worden van de markt", "...omdat teamleden met verschillende culturele achtergronden elkaar versterken", "...omdat onze klantengroepen ook steeds diverser worden", "...zolang het maar niet ten koste gaat van het maximaliseren van onze prestaties"]
cat2 = ["...omdat het ons helpt als organisatie innovatief te zijn ", "...omdat wij als organisatie rechtvaardig moeten zijn", "...omdat het helpt medewerkers te laten reflecteren op het eigen handelen", "...omdat iemands culturele achtergrond er niet toe doet in het werk, het zijn kwalificaties die tellen", "...omdat het matchen van medewerkers met klanten/leveranciers op basis van culturele achtergrond ons marktaandeel kan vergroten", "...omdat wij als organisatie iedereen gelijke kansen moeten bieden"]
cat3 = ["...omdat wij medewerkers met een achterstandspositie extra moeten ondersteunen", "...omdat wij geen onderscheid moeten maken op basis van culturele achtergrond", "...omdat het ons helpt om tunnelvisie in teams tegen te gaan", "...omdat kennis en ervaring uit een bepaalde cultuur ons helpt om producten en services af te stemmen op klanten met die cultuur", "...omdat beoordeling objectief moet zijn, iemands culturele achtergrond speelt hierin geen rol", "...omdat het ons toegang geeft tot een grotere visvijver aan talent"]
cat4 = ["...omdat het ons helpt nieuwe ideeën op de werkvloer te stimuleren", "...omdat wij culturele minderheden in de organisatie vooruit moeten helpen in hun loopbaan", "...omdat het ons helpt om vastgeroeste processen te doorbreken", "...omdat het uiteindelijk gaat om de beste kandidaat, ongeacht iemands culturele achtergrond", "...omdat wij achterstandsgroepen in de samenleving een kans moeten bieden op werk", "...omdat het ons een aantrekkelijkere werkgever maakt"]

cat_list = [cat1, cat2, cat3, cat4]

def randomcombi(cat_list):
    combi_list = []
    for i in range(6):
        rand_stats = [random.choice(cat_list[0]), random.choice(cat_list[1]), random.choice(cat_list[2]), random.choice(cat_list[3])]
        for i in range(4):
            cat_list[i].remove(rand_stats[i])
        stat1 = random.choice(rand_stats)
        rand_stats.remove(stat1)
        stat2 = random.choice(rand_stats)
        rand_stats.remove(stat2)
        stat3 = random.choice(rand_stats)
        rand_stats.remove(stat3)
        stat4 = rand_stats[0]
        combi1 = [stat1, stat2]
        combi2 = [stat3, stat4]
        combi_list.append(combi1)
        combi_list.append(combi2)
    return combi_list

if __name__ == '__main__':
    randomcombi(cat_list)
