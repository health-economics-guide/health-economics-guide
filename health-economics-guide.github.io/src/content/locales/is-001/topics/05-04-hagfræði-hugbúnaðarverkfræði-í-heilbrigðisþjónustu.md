# Viðfangsefni 5.4 — Hagfræði hugbúnaðarverkfræði í heilbrigðisþjónustu

**Heilbrigðiskerfi ganga nú á hugbúnaði sem þau verða að smíða, kaupa, samþætta og viðhalda í áratugi – svo hagfræði verkfræðivals (tæknileg skuld, innilokun, samvirkni, áreiðanleiki) er heilsuhagfræði, og kerfi sem verðleggur aðeins kaupin mun greiða fyrir vanræksluna í bilunum, endurvinnslu og klínískum skaða.**

## Hvers vegna þetta skiptir máli í heilsuhagfræði

Sérhver nútíma heilbrigðisstofnun er, hvort sem hún viðurkennir það eða ekki, hugbúnaðarrekandi. Sjúkraskrár, lyfjaávísanir, tímaskipulag, rannsóknaniðurstöður, greiðslukröfur og þýðiseftirlit ganga öll á kóða – keyptum af söluaðilum, smíðuðum innanhúss, erfðum frá forverum eða saumuðum saman úr öllu þrennu. Féð er mikið og endurtekið: landsbundnar rafrænar sjúkraskrááætlanir hafa étið upp milljarða dollara opinbers fjár, og rekstrarkostnaður heilbrigðishugbúnaðar – viðhald, samþætting, uppfærslur, öryggi – dvergar yfirleitt verðið sem birtist í upphaflegu viðskiptarökunum. Samt segir mest heilsuhagfræðiþjálfun ekkert um hvernig hugbúnaður hegðar sér sem hagfræðileg eign, og mest hugbúnaðarverkfræðiþjálfun segir ekkert um fórnarkostnað í kerfi sem kaupir líka hjúkrunarfræðinga og lyf.

Bilið skiptir máli því hugbúnaður bregst hagfræðilega á einkennandi hátt sem venjuleg innkaupaviðbrögð grípa ekki. Kerfi er keypt á kaupverði og kynningareiginleikum; samþætting, gagnaflutningur og viðhaldsbyrði berast síðar, gegn fjárlögum sem aldrei var leitað til. Söluaðilasamband harðnar í háð, svo hver endurnýjun er samin úr veikleika. Flýtileiðir teknar undir tímapressu safnast ósýnilega upp þar til kerfið sem rekur sjúkrahúsið getur ekki lengur verið breytt örugglega – og þá stendur skipulagsheildin frammi fyrir nútímavæðingarreikningi sem hún áætlaði aldrei og getur ekki frestað, því hugbúnaðurinn ber nú klíníska áhættu. Saga stórra heilbrigðisupplýsingatækniáætlana, þar á meðal National Programme for IT í Bretlandi (leyst upp 2011 eftir áætlaðan kostnað upp á um 10 milljarða punda), er saga þessara gangverka á landsvísu.

Fyrir stjórnanda eru hagsmunirnir þrefaldir. Fyrst, fé: hugbúnaður er ævilöng skuldbinding, og ódýri valkosturinn við kaup er reglulega dýri valkosturinn yfir áratug. Annað, öryggi: í klínísku umhverfi er bilun, gagnavilla eða óviðhaldanlegt kerfi ekki óþægindi heldur hætta, með kostnaði sem lendir í Viðfangsefni 3.11 — Hagfræði gæða og öryggis. Þriðja, fullveldi: valið milli þess að smíða og kaupa, milli séreignar- og opinna kerfa og milli staðlaðra og sérsniðinna tengiviðmóta ræður hversu mikið frelsi skipulagsheildin mun hafa til að bregðast við eftir fimm ár – og athafnafrelsi, eins og þessi bók heldur fram í gegn, er hagfræðileg eign.

## Lykilhugtök

[Hugbúnaðarverkfræði](https://en.wikipedia.org/wiki/Software_engineering) er agaða hönnunin, smíðin og viðhald hugbúnaðar – og orðið *viðhald* ber mest af hagfræðinni. Ólíkt byggingu er hugbúnaður aldrei fullgerður: kröfur breytast, reglur breytast, tengingar eldast og öryggisógnir þróast. [Hugbúnaðarviðhald](https://en.wikipedia.org/wiki/Software_maintenance) – leiðréttandi, aðlögunar- og fyrirbyggjandi vinna á kerfi í notkun – gleypir yfirleitt meirihluta líftímakostnaðar kerfis. Greiningareining hagfræðinnar er því aldrei kaupin; hún er [heildareignarhaldskostnaður](https://en.wikipedia.org/wiki/Total_cost_of_ownership): kaup auk samþættingar, gagnaflutnings, þjálfunar, hýsingar, stuðnings, uppfærslna, öryggis og endanlegrar niðurlagningar, yfir raunsæjan líftíma kerfisins.

Annað hugtakið er [tæknileg skuld](https://en.wikipedia.org/wiki/Technical_debt) (technical debt): hinn óbeini framtíðarkostnaður þess að velja hentuga hönnun núna í stað traustrar. Líkingin er nógu nákvæm til að nota á fjármálafundi. Skuld er ekki í eðli sínu slæm – vísvitandi flýtileið sem kemur nauðsynlegri getu fyrr á markað getur verið skynsamlegt lán – en hún safnar vöxtum: hver framtíðarbreyting á kerfinu kostar meira vegna hennar, og óstýrð skuld hleðst upp þar til breyting verður óheyrilega dýr eða hættuleg. Heilbrigðisskipulagsheild sem sér ekki tæknilega skuld sína ber óbókfærða skuldbindingu, nákvæmlega eins og hún hefði óskráðar lántökur.

Þriðja, [arfakerfið](https://en.wikipedia.org/wiki/Legacy_system) (legacy system): hugbúnaður sem er áfram í notkun framhjá þeim punkti þar sem hægt er að viðhalda honum hagkvæmt – oft því hann virkar, allir reiða sig á hann og að skipta honum út er skelfilegt. Arfakerfi er tæknileg skuld á skipulagsstigi, og það setur fram ósvikinn matsvanda: kostnaður við að halda því (hækkandi viðhald, öryggisberskjöldun, starfsfólk sem ekki er lengur hægt að ráða, hindraðar umbætur annars staðar) er dreifður og hægfara, á meðan kostnaður við skiptin er þéttur, sýnilegur og pólitískt áhættusamur. Heilbrigðiskerfi um allan heim reka mikilvæga þjónustu á hugbúnaði áratuga gömlum einmitt af þessari ástæðu.

Fjórða, háð. [Innilokun hjá söluaðila](https://en.wikipedia.org/wiki/Vendor_lock-in) (vendor lock-in) er ástandið þar sem að skipta frá birgi kostar svo mikið – í gagnaflutningi, endurþjálfun, endursamþættingu og klínískri röskun – að kaupandinn hefur misst raunverulegt samningsvald. Í heilbrigðismálum er það versnað af gögnum: áratugur sjúkraskráa í séreignarsniði er gísl. Innilokun er ekki slys; hún er verðlagningarstefna, og tíminn til að verðleggja hana er fyrir undirritun, ekki við endurnýjun. Mótvægin eru samningsleg (gagnaútflutningsréttur, vörsluskjal, útgönguaðstoð) og byggingarleg – umfram allt, staðlar.

Fimmta, [samvirkni](https://en.wikipedia.org/wiki/Interoperability) (interoperability): geta kerfa til að skiptast á upplýsingum og nota það sem skipst er á. Hagfræði hennar er hagfræði [netáhrifa](https://en.wikipedia.org/wiki/Network_effect) – hvert kerfi sem talar sameiginlegan staðal hækkar virði hvers annars kerfis sem gerir það – og þess vegna er samvirkni langvarandi vanveitt af mörkuðum: ávinningurinn fellur á kerfið í heild á meðan kostnaðurinn fellur á hvern söluaðila og kaupanda, og rótgróinn aðili getur grætt á að *ekki* vera samvirkur. Staðlar eins og [Fast Healthcare Interoperability Resources](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources) (FHIR), [HL7](https://en.wikipedia.org/wiki/Health_Level_7) fjölskyldan sem hann tilheyrir og openEHR eru til að lækka þennan skiptakostnað, og eftirlitsaðilar – til dæmis Bandaríkin gegnum upplýsingahindrunarreglur 21st Century Cures Act og Evrópusambandið gegnum Evrópska heilbrigðisgagnarýmið – hafa byrjað að skylda það sem markaðurinn skilaði ekki.

Sjötta, smíða-eða-kaupa litrófið, þar með talið [opinn hugbúnaður](https://en.wikipedia.org/wiki/Open-source_software) – hugbúnaður þar sem frumkóðinn er frjálst nothæfur og breytanlegur. Opinn hugbúnaður er ekki ókeypis: leyfiskostnaðurinn hverfur, en innleiðing, hýsing og ráðsmennska eru eftir, og einhver verður að viðhalda kóðanum. Hagfræðilegt sérkenni hans er annað – hann fjarlægir innilokunarálagið og breytir hugbúnaðinum í sameiginlegt gæði sem margir kaupendur geta samfjármagnað, sem er ástæða þess að vettvangar eins og DHIS2 og OpenMRS bera mikið af heilbrigðisupplýsingabyrðinni í lág- og meðaltekjuríkjum. Smíða-á-móti-kaupa ákvörðunin er sömuleiðis ekki tæknival heldur safnspurning: smíðaðu þar sem getan er aðgreinandi og skipulagsheildin getur haldið uppi verkfræðiteymi; keyptu þar sem þörfin er hrávara; og smíðaðu aldrei það sem þú getur ekki viðhaldið.

Loks, áreiðanleiki sem hagfræðilegt magn. Klínískur hugbúnaður rekur þjónustu þar sem niðritími hefur heilsukostnað, svo verkfræðigreinarnar sem halda kerfum áreiðanlegum – þar með talin [áreiðanleikaverkfræði vefsvæða](https://en.wikipedia.org/wiki/Site_reliability_engineering) (site reliability engineering), sem stýrir áreiðanleika gegn skýrum markmiðum og fjárlagar fyrir ásættanlega bilun – skiljast best sem kaup á tryggingu þar sem iðgjaldið er verkfræðivinna. Áreiðanleiki umfram það sem klínískt umhverfi þarfnast er sóun; undir því er skorturinn greiddur í atvikum. Matsvélbúnaðurinn fyrir allt þetta er áfram Viðfangsefni 2.1 — Hagfræðilegt mat og viðráðanleikaaginn í Viðfangsefni 2.5 — Fjárlagaáhrif og viðráðanleiki; þetta viðfangsefni leggur til hugbúnaðarsértæku kostnaðarbygginguna sem þessar aðferðir verða að fá sem fóður. Að meta stafrænt tæki sem *heilbrigðisinngrip* – bætir forritið eða fjarheilbrigðisþjónustan niðurstöður á ásættanlegum kostnaði – tilheyrir Viðfangsefni 5.2 — Hagfræði stafrænnar heilbrigðisþjónustu; hagfræði gervigreindarlíkana sérstaklega Viðfangsefni 5.3 — Hagfræði gervigreindar í heilbrigðisþjónustu.

## Bestu starfsvenjur

1. **Metðu heildareignarhaldskostnað yfir raunsæjan líftíma kerfisins, aldrei kaupverðið.** Krefstu þess að hver hugbúnaðarviðskiptarök kostnaðarmeti kaup, samþættingu, gagnaflutning, þjálfun, hýsingu, stuðning, öryggi, uppfærslur og niðurlagningu yfir tilgreint tímahorf – yfirleitt áratug eða meira – og nefni hvaða fjárlög bera hverja endurtekna línu. Leyfisgjald borið saman við ekkert er ekki viðskiptarök; það er sýnilegur oddur skuldbindingar.

2. **Settu tæknilega skuld í bækurnar.** Láttu verkfræðileiðtoga halda skrá yfir mikilvægar flýtileiðir og öldrandi íhluti í eigninni, með heiðarlegu mati á vöxtunum sem hver rukkar – hægari breytingar, meiri atvikaáhætta, hindraðar umbætur. Yfirfarðu hana af sömu alvöru og fjárhagsskuldbindingu, og fjárlagaðu fastan hluta verkfræðigetu (yfirleitt fimmtung til þriðjung) til að greiða hana niður, því frestuð skuldaþjónusta er hlaðin skuld.

3. **Fjármagnaðu viðhald sem rekstrarkostnað frá fyrsta degi.** Hugbúnaður sem er „fullgerður“ er hugbúnaður sem er að rotna: tengingar eldast, ógnir þróast, reglur breytast. Byggðu viðhaldsstrauminn inn í upphaflega matið og endurtekin fjárlög, og meðhöndlaðu tillögu án viðhaldslínu sem ófullkomna – féð verður eytt hvort sem er, og eina spurningin er hvort það var skipulagt eða kreist út af kreppu.

4. **Verðleggðu innilokun fyrir undirritun, ekki við endurnýjun.** Fyrir hver stór kaup, kostnaðarmettu útgönguna meðan þú hefur enn valkosti: hver á gögnin, í hvaða sniði má flytja þau út, hvaða útgönguaðstoð söluaðilinn verður að veita og hvað flutningur myndi trúlega kosta. Semdu um gagnaútflutningsrétt og opin tengiviðmót inn í samninginn, og líttu á mótstöðu söluaðila við þeim sem upplýsingar um endurnýjunarviðræðurnar sem koma.

5. **Kauptu samvirkni vísvitandi, því markaðurinn vanveitir hana.** Krefstu stuðnings við opna staðla – FHIR og skylda – sem kaupskilyrði, staðfestu fullyrta fylgni gegn raunverulegum gagnaflæðum þínum frekar en bæklingi og hafnaðu sérsniðnum tengiviðmótum þar sem staðlað er til. Sérhvert séreignartengiviðmót sem þú þiggur er skiptikostnaður sem þú hefur gefið söluaðilanum og skattur á hverja framtíðarsamþættingu.

6. **Ákveddu smíða-á-móti-kaupa sem safn, samræmt verkfræðigetu þinni.** Smíðaðu aðeins þar sem getan aðgreinir þjónustu þína og þú getur raunsætt ráðið, haldið og fjármagnað teymi til að viðhalda því sem þú smíðar – innanhússkerfi án viðvarandi teymis er arfakerfi með aukaskrefum. Keyptu hrávöruþarfir; íhugaðu opna vettvanga þar sem samfélag eða opinbert bandalag heldur þeim uppi; og skrifaðu viðhaldsáætlunina inn í ákvörðunina, hvora leiðina sem er.

7. **Meðhöndlaðu opinn hugbúnað sem innkaupavalkost með eigin kostnaðarbyggingu, ekki sem ókeypis.** Berðu hann saman á heildareignarhaldskostnaði: ekkert leyfisgjald, en raunveruleg innleiðing, hýsing, stuðningur og ráðsmennska, hvort sem borin innanhúss eða gegnum stuðningsbirgi. Vegðu sérstæða ávinninga hans – ekkert innilokunarálag, skoðanlegur kóði, geta til að samfjármagna sameiginlegt gæði með öðrum heilbrigðisstofnunum – og sérstæða skyldu hans: ef þú treystir á hann, leggðu þitt af mörkum til að viðhalda honum.

8. **Settu áreiðanleikamarkmið út frá klínískri afleiðingu, og eyddu að markmiðinu.** Ákveddu, þjónustu fyrir þjónustu, hvað klukkustund af niðritíma kostar í raun – í seinkuðri umönnun, óöruggum krókaleiðum og glötuðu trausti – og settu framboðs- og endurheimtumarkmið í samræmi. Haltu síðan verkfræðiútgjöldum við markmiðið frá báðum hliðum: að greiða fyrir minni áreiðanleika en stofan þarfnast kaupir atvik, og að greiða fyrir meira en hún þarfnast kaupir gullhúðun.

9. **Skipuleggðu arfakerfisskipti áður en þau verða þvinguð.** Yfirfarðu aldur og viðhaldshæfni mikilvægra kerfa í lotu, og byrjaðu skiptin meðan sitjandi kerfið virkar enn – flutningur framkvæmdur undir bilun er sú dýrasta tegund. Veldu stigvaxandi flutning (að kyrkja gamla kerfið tengiviðmót fyrir tengiviðmót) fram yfir allt-í-einu skiptingar, þar sem bilunarháttur í heilbrigðismálum er mældur í aflýstum stofum og glötuðum skrám.

10. **Gerðu gagnaflutning að fyrsta flokks línu í hverju mati.** Sjúklingagögn lifa lengur en hvert kerfi sem heldur þeim, og að flytja þau – hreint, fullkomlega, með klínísku öryggi tryggðu – er reglulega meðal stærsta og mest vanmetna kostnaðar sérhverra umskipta. Kostnaðarmettu það skýrt, prófaðu það snemma með raunverulegum skrám og haltu vörslu gagna þinna í útflutningshæfu formi allan líftíma kerfis svo flutningurinn sé aldrei gísl fráfarandi söluaðila.

11. **Haltu klínískri öryggisverkfræði innan hagfræðinnar.** Heilbrigðishugbúnaður er öryggisvarðandi hugbúnaður: breytingar þarfnast prófana, útgáfur þarfnast afturköllunarleiða, atvik þarfnast rannsóknar og lögsagnarumdæmi leggja í vaxandi mæli formlega klíníska áhættustaðla á heilbrigðisupplýsingatækni. Þessar greinar kosta verkfræðitíma og tilheyra viðskiptarökunum – „ódýrari“ afhending sem sleppir þeim færir kostnað á sjúklinga sem áhættu (kostnaður skaða er Viðfangsefni 3.11 — Hagfræði gæða og öryggis).

12. **Beindu hugbúnaðarákvörðunum gegnum sömu virðisrýni og hverja aðra heilbrigðisfjárfestingu.** Hugbúnaðaráætlun keppir um sömu afmörkuðu fjárlög og lyf og starfsfólk, svo hún skuldar sama aga: yfirlýstan ávinning, raunverulegan samanburð (þar með talið „bætum það sem við höfum“), viðráðanleikasnið yfir tíma og eftirinnleiðingarrýni gegn loforðunum sem gefin voru (vélbúnaðurinn er Viðfangsefni 2.1 — Hagfræðilegt mat og Viðfangsefni 2.5 — Fjárlagaáhrif og viðráðanleiki, og innkaupahandverkið er Viðfangsefni 3.10 — Stefnumótandi innkaup og þjónustukaup).

## Spurningar til að ræða með teyminu

1. **Hvað kostar hugbúnaðareign okkar í raun á ári, og hvaða hluta af því skipulögðum við?**
   Flestar skipulagsheildir geta nefnt leyfisgjöld sín en ekki samþættingar-, viðhalds-, öryggis- og krókaleiðakostnað, sem felst í rekstrarfjárlögum og starfsmannatíma um alla skipulagsheildina. Biðjið teymið að setja saman sanna ársfjárhæð fyrir efstu handfylli kerfa og bera hana saman við það sem upphaflegu viðskiptarökin lofuðu. Spennan er að dreifði kostnaðurinn á engan einn eiganda, svo enginn ber ábyrgð á vexti hans, og fólkið sem samþykkti kaupin er sjaldan fólkið sem greiðir viðhaldið. Heiðarlegt svar framleiðir ævitölu, nefnir hvaða fjárlög bera hana og viðurkennir hvar útgjöld eru óskipulögð – því kostnaður sem þú uppgötvar árlega eftir á er kostnaður sem þú getur ekki stýrt.

2. **Hvar er tæknilega skuldin okkar, og hvaða vexti erum við að greiða af henni?**
   Verkfræðiteymi vita yfirleitt nákvæmlega hvar skuldin er – einingin sem enginn þorir að snerta, tengiviðmótið haldið saman af handvirkum skrefum, vettvangurinn tveimur útgáfum á eftir í öryggisstuðningi – en þekkingin nær sjaldan til stjórnarinnar á hagfræðilegu máli. Biðjið um skrána: mikilvægu skuldirnar, hvað hver hægir á eða stofnar í hættu og hvað niðurgreiðsla hennar myndi kosta. Spennan er að niðurgreiðsla skuldar keppir við sýnilega nýja eiginleika og tapar alltaf á útliti, sem er einmitt hvernig skuld hleðst upp. Heiðarlegt svar magngreinir vextina (hægari afhending, atvikaberskjöldun, hindruð verkefni), skuldbindur fastan hluta afkastagetu til minnkunar og viðurkennir að sumt skuld er skynsamlegt að bera – að því gefnu að hún sé borin vitandi.

3. **Ef við þyrftum að yfirgefa aðalkerfissöluaðila okkar eftir þrjú ár, gætum við það – og hvað myndi það kosta?**
   Þessi spurning dregur innilokun fram meðan enn er tími til að minnka hana. Kannið hver á gögnin og í hvaða sniði þau geta farið, hvað samningurinn segir um útgönguaðstoð, hversu mörg sérsniðin tengiviðmót þyrfti að endurbyggja og hvaða endurþjálfun og klíníska röskun flutningur myndi leggja á. Spennan er að allir vona að þurfa aldrei að nýta útgönguna, svo enginn vill greiða fyrir að halda henni opinni – en útganga sem er ómöguleg er endurnýjunarsamningur sem þegar er tapaður. Heiðarlegt svar verðleggur útgönguna, greinir tvær eða þrjár aðgerðir sem myndu gera hana ódýrari (gagnaútflutningsrétt, stöðluð tengiviðmót, skjölun) og meðhöndlar það verð sem samningsstöðu sem skipulagsheildin heldur virkt við.

4. **Hvaða kerfi ættum við að smíða, hvaða kaupa, og samsvarar verkfræðigeta okkar því svari?**
   Smíða-á-móti-kaupa skiptingin er safnákvörðun sem margar skipulagsheildir taka með uppsöfnun frekar en vali, og enda á að smíða hrávörur og kaupa það sem aðgreinir þær. Spyrjið hvaða kerfi ykkar fela raunverulega í sér eitthvað sérstakt við þjónustu ykkar og hver eru hrávöruþarfir sem markaður eða opinn hugbúnaðarsamfélag þjónar þegar. Prófið svo getufullyrðinguna: fyrir allt sem smíðað er innanhúss, er til fjármagnað, ráðanlegt teymi skuldbundið til að viðhalda því allan líftíma þess – ekki bara verkefnið sem skapaði það? Spennan er að smíði smjaðrar metnaði og kaup smjaðra varkárni, og hvorugt eðlishvötin er greining. Heiðarlegt svar nefnir aðgreinendurna, viðurkennir hvar eldri smíðar ætti að leggja niður eða skipta út fyrir staðlaðar vörur og neitar að hefja nokkra smíði þar sem viðhald er ófjármagnað.

5. **Hvað kostar klukkustund af niðritíma í mikilvægasta kerfi okkar í raun, og er áreiðanleikaútgjöldum okkar samræmt við það?**
   Áreiðanleikaákvarðanir eru oft teknar af verkfræðingum án klínískra kostnaðarupplýsinga, eða af stjórnum án verkfræðikostnaðarupplýsinga, svo útgjöldin eru samræmd vana frekar en afleiðingu. Gangið gegnum áþreifanlega sviðsmynd: rafræna skráin er niðri yfir annasaman dag – hvað seinkar, hvaða óöruggu krókaleiðir birtast, hvaða skaði fylgir trúlega, hvað kostar endurheimt? Berið það svo saman við það sem þið eyðið í seiglu, öryggisafrit, yfirtöku og atvikaviðbrögð. Spennan gengur í báðar áttir: vanútgjöld kaupa atvik, en gullhúðun lágáhættukerfis sóar fé sem önnur þjónusta þarfnast. Heiðarlegt svar setur skýrt framboðs- og endurheimtumarkmið fyrir hverja mikilvæga þjónustu, leitt af klínískri afleiðingu, og getur sýnt verkfræðiútgjöldin sem mæta því – hvorki meira né minna.

6. **Hver er áætlun okkar fyrir arfakerfin sem allir eru hræddir við að snerta?**
   Sérhver þroskuð heilbrigðisstofnun hefur þau: kerfi framhjá hagkvæmu viðhaldi, haldið á lífi því þau virka og skiptin eru skelfileg. Nefnið ykkar. Spyrjið hvað hvert þeirra hindrar – samþættingar sem ekki eru smíðaðar, umbætur sem ekki eru gerðar, öryggisberskjöldun sem borin er – og hver skiptileiðin er: stigvaxandi flutningur, heildarskipti eða vísvitandi, skipulögð varðveisla með innilokaðri áhættu. Spennan er tímabundin: kostnaður við að halda arfakerfi er dreifður og árlegur á meðan kostnaður við að skipta því er þéttur og sýnilegur ferli, svo skynsamlega-útlítandi frestun er sjálfgefið þar til bilun knýr málið á verstu hugsanlegu verði. Heiðarlegt svar tímasetur skiptin meðan sitjandi kerfið virkar enn, velur kyrkingar-stíls stigvaxandi flutning fram yfir allt-í-einu skiptingu og meðhöndlar „við ákveðum næsta ár“ sem ákvörðunina sem það er í raun.

## Í reynd: dæmi úr heilsuhagfræði

Heilbrigðisráðuneyti skáldaðs austur-afrísks lands stendur frammi fyrir endurnýjunarákvörðun. Í níu ár hafa svæðisbundnu sjúkrahús þess rekið séreignarsjúkrahúsupplýsingakerfi frá erlendum söluaðila. Kerfið virkar, en endurnýjunartilboðið hefur hækkað skarpt, hvert nýtt tengiviðmót – við landstryggingakerfið, við rannsóknanetið – er sérsniðið, söluaðilaverðlagt verkefni og samningurinn er þögull um gagnaútflutning. Á meðan reka héraðsheilbrigðisskrifstofur ráðuneytisins þegar DHIS2, opna vettvanginn sem notaður er fyrir landsbundna heilbrigðistölfræði, og nágrannaland hefur innleitt opinn sjúkraskrárvettvang með svæðisbundnu stuðningsbandalagi.

Heilsuhagfræðieining ráðuneytisins endurrammar ákvörðunina úr „endurnýja eða ekki“ í ævisamanburð þriggja valkosta yfir tíu ár: endurnýja sitjandi kerfið, endurnýja til skamms tíma meðan útgönguréttur er byggður upp, eða flytja stigvaxandi á opna vettvanginn. Kostnaðarmat valkostanna afhjúpar raunverulega hagfræði. Leyfi sitjandi kerfisins er aðeins þriðjungur sanns ársreksturskostnaðar þess þegar sérsniðin tengiviðmót, skyldubundin uppfærsluverkefni og erlendar stuðningsferðir eru talin. Opni valkosturinn ber ekkert leyfi en krefst þess að ráðuneytið fjármagni landsbundið stuðningsteymi, svæðishýsingu og framlag til samfélags vettvangsins – raunverulegt, endurtekið fé sem „ókeypis hugbúnaðar“ mælskan hafði falið. Úrslitalínan er þó hvorug: hún er gagnaflutningur. Níu ára sjúklingaskrár sitja í séreignarskema, og verð söluaðilans fyrir útdráttaraðstoð er í reynd verðið fyrir að fara.

Einingin verðleggur útgönguna samt, og talan breytir samningaviðræðunum. Vopnað kostnaðarmetnum valkosti semur ráðuneytið um tveggja ára endurnýjun á lægra verði sem inniheldur samningsbundinn gagnaútflutning í skjalfestu sniði og FHIR-tengiviðmót við tryggingakerfið og rannsóknanetið – keypt, hagfræðilega, sem valréttur á ódýrari framtíðarútgöngu, metið eins og Viðfangsefni 3.12 — Hagfræði heimsfaraldurs og neyðarviðbúnaðar metur hvaða valrétt sem er á framtíðarathafnafrelsi. Þessi tvö ár flytur tilraunaverkefni þrjú héraðssjúkrahús á opna vettvanginn, prófandi stuðningsbandalagið, gagnaflutningsverkfærin og – mikilvægt – hvort ráðuneytið geti ráðið og haldið verkfræðingunum sem vettvangurinn þarfnast, sótt í vinnuaflshagfræði Viðfangsefnis 3.6 — Heilbrigðisvinnuafl og vinnumarkaðir.

Tilraunaverkefnið heppnast á tveimur sjúkrahúsum og á í erfiðleikum á því þriðja, þar sem mönnunarbil breyta hverju atviki í kreppu – viðvörun um afkastagetu, ekki hugbúnað. Ráðuneytið heldur áfram með þrepaskiptan landsflutning yfir fimm ár, sjúkrahús fyrir sjúkrahús, og heldur sitjandi kerfinu gangandi samhliða þar til gögn hvers staðar eru staðfest. Lokamatið gerir lærdóminn skýran: sigurhreyfingin var ekki að velja opinn hugbúnað fram yfir séreign, heldur að verðleggja allan líftíma hvers valkosts, kaupa útgönguréttindi áður en háð harðnaði enn frekar og samræma verkfræðiskuldbindinguna því sem ráðuneytið gat í raun staðið undir.

## Fjögur geirasjónarhorn

### Sprotafyrirtæki

Heilbrigðishugbúnaðarsprotafyrirtæki lifir hagfræði þessa viðfangsefnis frá söluhliðinni: verðmat þess umbunar afhendingarhraða, sem er einmitt hvernig tæknileg skuld safnast, og tekjulíkan þess gæti hljóðlega byggt á innilokuninni sem viðskiptavinir þess ættu að standast. Aginn er að taka skuld vísvitandi – flýtileið sem vinnur lykilviðskiptavin getur verið skynsamleg – meðan skrá og niðurgreiðsluáætlun er haldin, því kóðagrunnur sem ekki er hægt að breyta er fyrirtæki sem getur ekki snúið við. Samvirkni er stefna, ekki reglufylgni: stöðluð tengiviðmót (FHIR umfram allt) eru hvernig lítil vara vinnur sér stað innan eigna sem rótgrónir aðilar ráða. Og klínísk öryggisverkfræði er ekki skriffinnska til að fresta þar til umfang kemur; ein gagnaheildaratvik í klínísku umhverfi getur bundið enda á ungt fyrirtæki.

### Lítil fyrirtæki

Lítill en rótgróinn veitandi – heilsugæsluhópur, apótekakeðja, greiningarrannsóknastofa – kaupir nánast allan hugbúnað sinn og hefur ekkert verkfræðistarfsfólk til að bæta upp slæm kaup, svo hagfræði hans er hagfræði háðar. Heildareignarhaldskostnaður og útgönguréttur skipta meira máli hér en nokkurs staðar, því misverðlagt kerfi er hlutfallslega stærri hluti fjárlaganna og misheppnaður flutningur getur stöðvað reksturinn. Skynsamleg afstaða er stöðlun: almennar vörur, opin staðlatengiviðmót, hýst þjónusta frekar en sjálfrekin netþjónar og samningar lesnir fyrir gagnaútflutningsákvæði á undan verði. Sérstæð áhætta hans er hljóðlátt arfakerfi – stofustjórnunarkerfið sem eldist á sínum stað þar til birgir þess hrynur – svo jafnvel lítill kaupandi ætti að vita, hvert ár, hvað það myndi kosta að fara frá hverju kerfi sem hann reiðir sig á.

### Stórfyrirtæki

Stór sjúkrahúsasamsteypa eða tryggingafélag rekur hundruð kerfa, svo vandi þess er safnið: skarast vörur keyptar af ólíkum deildum, samþættingarvefur sem enginn kortleggur til fulls og tæknileg skuld dreifð yfir eign of stóra til að eitt teymi sjái. Þroskað stórfyrirtæki stýrir eigninni eins og það stýrir fjárfestingasafni – skrá yfir kerfi með eigendum, ævikostnaði, skulda- og áhættueinkunnum og skipulögðum skiptihorfum – og fjármagnar fasta verkfræðigetu fyrir samþættingu, áreiðanleika og niðurgreiðslu frekar en að meðhöndla hverja umbót sem verkefni til að bjóða í. Umfang gefur því líka kaupmátt sem minni kaupandinn skortir: það getur krafist staðlaðra tengiviðmóta, gagnaútflutningsréttar og vörsluskjals sem inngönguskilyrða, og byggingarval þess aga söluaðila þess frekar en öfugt.

### Hið opinbera

Ráðuneyti eða landsbundinn greiðandi mótar þessa hagfræði fyrir alla aðra. Það setur samvirknireglurnar sem ákvarða hvort markaðurinn umbunar eða refsar opnun – eins og Bandaríkin gerðu með upplýsingahindrunarákvæðum 21st Century Cures Act og Evrópusambandið með Evrópska heilbrigðisgagnarýminu – og eigin innkaup þess kenna söluaðilum hvað kaupendur munu þola. Sérstæður bilunarháttur þess er landsmegaáætlunin: miðstýrð, allt-í-einu, pólitískt tímasett hugbúnaðarafhending þar sem hrun er mælt í milljörðum, eins og National Programme for IT í Bretlandi sýndi. Aginn er öfug afstaða – staðlar og vettvangar miðlægt, afhending stigvaxandi, með opnum og staðbundið viðhaldanlegum valkostum vegnum alvarlega þar sem viðskiptamarkaðir eru þunnir (stefnuvélbúnaðurinn er Viðfangsefni 3.2 — Heilbrigðisstefna, og innkaupahandverkið Viðfangsefni 3.10 — Stefnumótandi innkaup og þjónustukaup).

## Algeng mistök

- **Að kaupa leyfið, ekki lífið.** Að samþykkja hugbúnað á kaupverði meðan samþætting, flutningur, viðhald og útganga er ókostnaðarmetin. Lagfæring: krefstu ævi-heildareignarhaldskostnaðar, með nafngreindum fjárlögum fyrir hverja endurtekna línu, í hverjum viðskiptarökum.

- **Ósýnileg skuld þar til hún hleðst upp.** Að láta tæknilega skuld safnast óskráða þar til ekki er hægt að breyta eigninni örugglega. Lagfæring: haltu skuldaskrá, skýrðu frá henni í hagfræðilegum skilmálum og skuldbindu fasta afkastagetu til niðurgreiðslu.

- **Að ganga í svefni inn í innilokun.** Að þiggja séreignarsnið og sérsniðin tengiviðmót þar til útganga er óviðráðanleg og endurnýjanir eru skipaðar. Lagfæring: semdu um gagnaútflutningsrétt og stöðluð tengiviðmót við kaup og verðleggðu útgönguna árlega.

- **Að smíða það sem þú getur ekki viðhaldið.** Að panta innanhússkerfi án fjármagnaðs teymis fyrir allan líftíma þeirra. Lagfæring: engin smíði án viðhaldsáætlunar; keyptu eða taktu upp opna vettvanga þar sem geta er þunn.

- **Að meðhöndla opinn hugbúnað sem ókeypis.** Að taka upp samfélagsvettvanga án þess að fjármagna hýsingu, stuðning og ráðsmennsku. Lagfæring: metið opinn hugbúnað á heildareignarhaldskostnaði og fjárlagið viðhaldið sem hann þarfnast.

- **Áreiðanleiki af von.** Að skilja framboðsmarkmið ósett þar til bilun leiðir klínískan kostnað niðritíma í ljós. Lagfæring: settu framboðs- og endurheimtumarkmið fyrir hverja mikilvæga þjónustu út frá klínískri afleiðingu og eyddu að markmiðinu.

- **Allt-í-einu arfakerfisskipti undir þvingun.** Að fresta nútímavæðingu þar til bilun knýr fram hraðaða, algjöra skiptingu. Lagfæring: skipuleggðu skiptin meðan sitjandi kerfið virkar og fluttu stigvaxandi með samhliðarekstri og staðfestum gögnum.

- **Hugbúnaður utan virðisagans.** Að leyfa upplýsingatækniáætlunum að sleppa rýninni sem beitt er á lyf og þjónustu. Lagfæring: sömu reglur – yfirlýstur ávinningur, raunverulegur samanburður, viðráðanleikasnið, eftirinnleiðingarrýni.

## Þroskalíkan

| Vídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Ævikostnaðarmat | Hugbúnaður keyptur á leyfisverði; rekstrarkostnaður uppgötvaður eftir á | Stór kaup kostnaðarmetin yfir nokkur ár; endurteknar línur að hluta greindar | Heildareignarhaldskostnaður yfir líftíma kerfis krafist í hverjum viðskiptarökum, með nafngreindum fjárlögum | Kostnaður yfir eignina rakinn gegn spá, frávik rannsökuð, spár endurkvarðaðar | Ævihagfræði stýrir safninu: fjárfestingar, endurnýjanir og afnám endurjafnað stöðugt |
| Tæknileg skuld | Ósýnileg; uppgötvuð gegnum atvik | Þekkt óformlega af verkfræðingum; engin sameiginleg skrá | Skuldaskrá haldin og skýrð í hagfræðilegum skilmálum; föst niðurgreiðslugeta | Skuldaþróun stýrt með mörkum og forgangi; vextir mældir í afhendingarhraða og atvikaberskjöldun | Skuld tekin og greidd upp vísvitandi sem stefna, verðlögð inn í hverja afhendingarákvörðun |
| Söluaðili og útganga | Skilmálar þegnir eins og boðnir; útganga óverðlögð | Innilokun viðurkennd; einhverra útflutningsákvæða leitað | Gagnaútflutningsréttur og stöðluð tengiviðmót samningsbundin sem regla; útgöngur kostnaðarmetnar við kaup | Útgönguafstöður viðhaldið og æfðar; endurnýjanir samdar gegn lifandi valkosti | Birgjasafn mótað yfir tíma; háð valin, verðlögð afstaða, aldrei slys |
| Samvirkni | Sérsniðin tengiviðmót safnast eftir tilfellum | Opnir staðlar valdir þar sem þægilegt | Staðlafylgni (t.d. FHIR) staðfest kaupskilyrði | Samþættingareign kortlögð og stýrt; séreignartengiviðmót lögð niður samkvæmt áætlun | Skipulagsheildin mótar staðlaupptöku yfir samstarfsaðila og markað sinn |
| Áreiðanleiki og öryggi | Kostnaður niðritíma óþekktur; endurheimt spunnin | Öryggisafrit og atvikaviðbrögð til; markmið óbein | Framboðs- og endurheimtumarkmið sett fyrir hverja mikilvæga þjónustu út frá klínískri afleiðingu | Áreiðanleiki verkfræðilega gerður og mældur gegn markmiðum; atvik rannsökuð hagfræðilega | Seigla samhæfð yfir eignina og birgja, æfð og stöðugt bætt |

## Gátlisti

- [ ] Metðu hverja hugbúnaðarákvörðun á heildareignarhaldskostnaði yfir raunsæjan líftíma hennar, með nafngreindum fjárlögum fyrir hverja endurtekna línu.
- [ ] Haltu skrá yfir tæknilega skuld, skýrðu frá henni í hagfræðilegum skilmálum og skuldbindu fasta verkfræðigetu til niðurgreiðslu.
- [ ] Fjármagnaðu viðhald sem skipulagðan rekstrarkostnað frá upphaflegu viðskiptarökunum og áfram.
- [ ] Semdu um gagnaútflutningsrétt, stöðluð tengiviðmót og útgönguaðstoð inn í samninga við kaup.
- [ ] Verðleggðu útgönguna frá hverju stóru kerfi árlega, og haltu kostnaðarmetnum valkosti lifandi fyrir endurnýjanir.
- [ ] Krefstu staðfestrar fylgni við opna staðla (t.d. FHIR) sem kaupskilyrðis.
- [ ] Ákveddu smíða-á-móti-kaupa sem safn, og hefja enga smíði án fjármagnaðrar ævi-viðhaldsáætlunar.
- [ ] Metðu opna hugbúnaðarvalkosti á heildareignarhaldskostnaði, og fjárlagaðu hýsingu, stuðning og ráðsmennsku.
- [ ] Settu framboðs- og endurheimtumarkmið fyrir hverja mikilvæga þjónustu út frá klínískri afleiðingu, og samræmdu útgjöld við þau.
- [ ] Tímasettu arfakerfisskipti meðan sitjandi kerfi virka enn, og veldu stigvaxandi flutning fram yfir allt-í-einu skiptingu.
- [ ] Kostnaðarmettu og prófaðu gagnaflutning snemma, og haltu sjúklingagögnum útflutningshæfum allan líftíma hvers kerfis.
- [ ] Beindu hugbúnaðaráætlunum gegnum sömu virðisrýni og hverja aðra heilbrigðisfjárfestingu, með eftirinnleiðingarrýni.

## Helstu heimildir

- WHO, *Global Strategy on Digital Health 2020–2025* — rammi Alþjóðaheilbrigðismálastofnunarinnar fyrir stafræna heilbrigðisfjárfestingu, þar á meðal sjálfbærni- og samvirkniforsendur.
- HL7 International — FHIR (Fast Healthcare Interoperability Resources) staðallinn, ríkjandi opni staðallinn fyrir heilbrigðisgagnaskipti.
- openEHR, DHIS2 og OpenMRS — opnir heilbrigðisupplýsingavettvangar og forskriftir í víðtækri notkun um heim allan, fyrirmyndir samfélagsviðhaldins heilbrigðishugbúnaðar.
- U.S. Office of the National Coordinator for Health IT (nú ASTP) — upplýsingahindrunar- og samvirknireglur 21st Century Cures Act, reglugerðarviðbrögð við vanveittri samvirkni.
- DORA, *Accelerate State of DevOps* skýrslur — langvarandi rannsóknir sem tengja hugbúnaðarafhendingar- og áreiðanleikavenjur við frammistöðu skipulagsheilda.
- UK National Audit Office — skýrslur um National Programme for IT í NHS, hin kanóníska tilviksrannsókn á bresti stórrar heilbrigðisupplýsingatækniáætlunar.

## Tilvísanir

1. Software engineering — Wikipedia — https://en.wikipedia.org/wiki/Software_engineering
2. Software maintenance — Wikipedia — https://en.wikipedia.org/wiki/Software_maintenance
3. Total cost of ownership — Wikipedia — https://en.wikipedia.org/wiki/Total_cost_of_ownership
4. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
5. Legacy system — Wikipedia — https://en.wikipedia.org/wiki/Legacy_system
6. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
7. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
8. Network effect — Wikipedia — https://en.wikipedia.org/wiki/Network_effect
9. Fast Healthcare Interoperability Resources — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
10. Health Level 7 — Wikipedia — https://en.wikipedia.org/wiki/Health_Level_7
11. Open-source software — Wikipedia — https://en.wikipedia.org/wiki/Open-source_software
12. Site reliability engineering — Wikipedia — https://en.wikipedia.org/wiki/Site_reliability_engineering
13. World Health Organization — *Global Strategy on Digital Health 2020–2025* — https://www.who.int/publications/i/item/9789240020924
14. HL7 International — FHIR specification — https://hl7.org/fhir/
15. National Audit Office — *The National Programme for IT in the NHS: an update on the delivery of detailed care records systems* — https://www.nao.org.uk/reports/the-national-programme-for-it-in-the-nhs-an-update-on-the-delivery-of-detailed-care-records-systems/
16. National Programme for IT — Wikipedia — https://en.wikipedia.org/wiki/National_Programme_for_IT
