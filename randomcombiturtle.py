import random

cat_1 = ["1...omdat het onze sociale verantwoordelijkheid is om een afspiegeling te zijn van de maatschappij", "1...als kwaliteitsdoelen maar eerst gewaarborgd zijn", "1...omdat wij als organisatie moeten inspelen op het diverser worden van de markt", "1...omdat teamleden met verschillende culturele achtergronden elkaar versterken", "1...omdat onze klantengroepen ook steeds diverser worden", "1...zolang het maar niet ten koste gaat van het maximaliseren van onze prestaties"]
cat_2 = ["2...omdat het ons helpt als organisatie innovatief te zijn ", "2...omdat wij als organisatie rechtvaardig moeten zijn", "2...omdat het helpt medewerkers te laten reflecteren op het eigen handelen", "2...omdat iemands culturele achtergrond er niet toe doet in het werk, het zijn kwalificaties die tellen", "2...omdat het matchen van medewerkers met klanten/leveranciers op basis van culturele achtergrond ons marktaandeel kan vergroten", "2...omdat wij als organisatie iedereen gelijke kansen moeten bieden"]
cat_3 = ["3...omdat wij medewerkers met een achterstandspositie extra moeten ondersteunen", "3...omdat wij geen onderscheid moeten maken op basis van culturele achtergrond", "3...omdat het ons helpt om tunnelvisie in teams tegen te gaan", "3...omdat kennis en ervaring uit een bepaalde cultuur ons helpt om producten en services af te stemmen op klanten met die cultuur", "3...omdat beoordeling objectief moet zijn, iemands culturele achtergrond speelt hierin geen rol", "3...omdat het ons toegang geeft tot een grotere visvijver aan talent"]
cat_4 = ["4...omdat het ons helpt nieuwe ideeën op de werkvloer te stimuleren", "4...omdat wij culturele minderheden in de organisatie vooruit moeten helpen in hun loopbaan", "4...omdat het ons helpt om vastgeroeste processen te doorbreken", "4...omdat het uiteindelijk gaat om de beste kandidaat, ongeacht iemands culturele achtergrond", "4...omdat wij achterstandsgroepen in de samenleving een kans moeten bieden op werk", "4...omdat het ons een aantrekkelijkere werkgever maakt"]

cat_list = [cat_1, cat_2, cat_3, cat_4]

def randomcombi(statements, nr_combis):
    return_list = list()
    used = list()
    for i in range(nr_combis):
        temp_list = list()
        while len(temp_list) != 2:
            rnd_index = random.randint(0,len(statements)-1)
            rand_stats = [random.choice(inner_list) for inner_list in statements[rnd_index:]]
            chosen = random.choice(rand_stats)
            if chosen not in used:
                temp_list.append(chosen)
                used.append(chosen)
        return_list.append(temp_list)
        print(temp_list)
    # print(rand_stats)
    # return return_list

randomcombi(cat_list,12)
