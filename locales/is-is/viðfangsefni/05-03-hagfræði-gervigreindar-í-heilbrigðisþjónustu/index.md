# Viðfangsefni 5.3 — Hagfræði gervigreindar í heilbrigðisþjónustu

**Gervigreind breytir því hvað heilbrigðistækni er – vara sem lærir, rýrnar og getur hljóðlega endurdreift umönnun – svo að meta hana vel þýðir að verðleggja ekki aðeins nákvæmni hennar heldur viðhald hennar, áhrif á vinnuafl og jafnræðið sem hún gefur eða tekur.**

## Hvers vegna þetta skiptir máli í heilsuhagfræði

Gervigreind (AI) hefur færst frá sýningu til útfærslu í heilbrigðiskerfum um allan heim, og féð fylgir henni nú: greiðendur, ráðuneyti og veitendasamsteypur eru beðin að kaupa greiningaralgrím, flokkunartæki og ákvörðunarstuðningskerfi á loforði um að þau skeri kostnað eða bæti niðurstöður. Loforðið er oft raunverulegt, en sönnunargögnin sem styðja það eru oft þynnri en fyrir lyf eða tæki, og hagfræðin hegðar sér öðruvísi. Upptekinn stjórnandi sem beitir eðlisviðbrögðum venjulegra kaupa – fast verð, föst frammistaða, einskiptismat – mun misverðleggja þessa tækni með hætti sem kemur aðeins fram síðar, sem viðhaldsreikningar, vinnuaflsdeilur eða jafnræðishneyksli.

Hagsmunirnir eru venjulegir hagsmunir heilsuhagfræði, skerptir. Opinberu fé er varið í tæki þar sem ávinningur veltur á hvernig klínískt starfsfólk notar þau í raun, ekki hvernig þau standa sig í birtri rannsókn. Öryggi veltur á frammistöðu sem getur hljóðlega rýrnað eftir því sem þýði og starfsvenjur breytast. Og jafnræði er berskjaldað á sérstakan nýjan hátt: algrím þjálfað á einu þýði getur kerfisbundið vanþjónað öðru, sem breytir innkaupaákvörðun í dreifingarákvörðun. Frá miðjum þriðja áratug aldarinnar hafa eftirlitsaðilar eins og bandaríska Matvæla- og lyfjastofnunin (FDA) og Evrópusambandið byrjað að byggja ramma fyrir þessar vörur, en endurgreiðslu- og matsvenjur dragast aftur úr tækninni og skilja ákvarðanatakendur eftir að spinna.

Þetta viðfangsefni snýst um það bil. Það endurkennir ekki hagfræðilegt mat – kostnaðarhagkvæmnivélbúnaðurinn býr í Viðfangsefni 2.1 — Hagfræðilegt mat, og líkanagerð óvissu í Viðfangsefni 2.2 — Líkanagerð – né nær það aftur yfir almenn stafræn tæki eins og forrit og fjarheilbrigði, sem tilheyra Viðfangsefni 5.2 — Hagfræði stafrænnar heilbrigðisþjónustu. Það á hagfræðina sem er sértæk fyrir gervigreind: að meta tæki sem læra, að verðmeta staðgengd eða aukningu klínískrar vinnu og að meðhöndla algrímaskekkju sem kostnað sem fellur á raunverulegt fólk (jafnræðishugtökin sjálf eru Viðfangsefni 3.4 — Jafnræði).

## Lykilhugtök

[Gervigreind í heilbrigðisþjónustu](https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare) vísar til notkunar reiknikerfa – mest afdrifaríkt þeirra sem byggð eru með [vélnámi](https://en.wikipedia.org/wiki/Machine_learning), þar sem líkön eru þjálfuð á gögnum frekar en forrituð beint – til að sinna verkefnum sem annars krefðust klínísks mats. Fjölskyldurnar tvær sem skipta mestu hagfræðilega eru gervigreindar**greiningar** (algrím sem les skönnun, sýnisgler eða merki og skilar niðurstöðu) og [klínískt ákvörðunarstuðningskerfi](https://en.wikipedia.org/wiki/Clinical_decision_support_system) (tæki sem mælir með, raðar eða merkir fyrir mannlegan ákvarðanataka). Bæði eru venjulega regluð sem [lækningahugbúnaður](https://en.wikipedia.org/wiki/Medical_software) – hugbúnaður ætlaður í læknisfræðilegum tilgangi – sem FDA og aðrir kalla „hugbúnað sem lækningatæki“.

Fyrsta hugtakið sem endurmótar hagfræðina er að gervigreindarvara er oft ekki föst. Hefðbundið tæki skilar sama árangri daginn sem þú tekur það úr notkun og daginn sem þú settir það upp; lærandi líkan getur breyst, annaðhvort því söluaðilinn endurþjálfar það eða því heimurinn í kringum það hreyfist. [Hugtakareki](https://en.wikipedia.org/wiki/Concept_drift) (concept drift) – og skylda vandamálið gagnasafnsfærsla, þar sem þýðið sem líkanið mætir í notkun víkur frá þýðinu sem það var þjálfað á – þýðir að frammistaða getur rýrnað hljóðlega. Tækni sem verður að vera vöktuð, endursannreynd og endurþjálfuð reglulega ber straum viðvarandi kostnaðar og áhættu sem einskiptismat missir af.

Annað hugtakið er vinnuhagfræði [sjálfvirknivæðingar](https://en.wikipedia.org/wiki/Automation). Gervigreind getur **komið í stað** klínískrar vinnu (komið í stað verkefnis sem manneskja vann) eða **aukið** hana (gert manneskju hraðari eða betri). Greinarmunurinn er hagfræðilegur, ekki mælskulegur: staðgengd lofar vinnuaflssparnaði en þéttir hann, endurdreifir vinnu og getur [afhæft](https://en.wikipedia.org/wiki/Deskilling) (deskill) starfsgrein; aukning lofar gæða- eða afkastaaukningu en bætir oft við kostnað frekar en að fjarlægja hann. Hvort þú ert að kaupa ræður hvaðan virðið kemur – og hvort viðskiptarökin hvíla á sparnaði sem má innleysa en kemur kannski aldrei fram ef losaði tíminn er einfaldlega endurtekinn upp.

Þriðja hugtakið er [sjálfvirknisskekkja](https://en.wikipedia.org/wiki/Automation_bias) (automation bias): mannleg tilhneiging til að ofreiða sig á niðurstöðu vélar, þiggja ranga tillögu því hún kom frá tölvu. Þetta skiptir máli fyrir mat því raunverulegt árangursríki ákvörðunarstuðningstækis veltur á mann-véla teyminu, ekki algríminu einu. Tæki sem er nákvæmt í einangrun en framkallar sjálfvirknisskekkju, eða er hunsað vegna viðvörunarþreytu, mun ekki skila líkönuðum ávinningi sínum.

Fjórða hugtakið er [algrímaskekkja](https://en.wikipedia.org/wiki/Algorithmic_bias) sem **jafnræðiskostnaður**. Þegar líkan stendur sig verr fyrir undirhóp – því sá hópur var vanfulltrúaður í þjálfunargögnum, eða því skekkt staðgengilsmerki var notað sem flokkun – getur það kerfisbundið neitað þeim hópi um ávinninginn sem aðrir fá, eða afhjúpað þá fyrir skaða. Hagfræðilega er þetta dreifingartap sem höfuðtala meðalárangurs felur algjörlega; tæki getur verið kostnaðarhagkvæmt að meðaltali meðan það gerir hina verst settu verr setta. Að nefna og mæla það tap er kjarni þess að meta gervigreind heiðarlega (mælivélbúnaður jafnræðis er Viðfangsefni 3.4 — Jafnræði).

Matsramminn er áfram [heilbrigðistæknimat](https://en.wikipedia.org/wiki/Health_technology_assessment) (HTA) – kerfisbundið mat á kostnaði, ávinningi og víðtækari afleiðingum tækni – en gervigreind teygir hann. Stofnanir eins og enska National Institute for Health and Care Excellence (NICE), þýska IQWiG og kanadíska CDA-AMC eru að aðlaga aðferðir sínar að tækni sem uppfærist, og [gervigreindarlög ESB](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) (samþykkt 2024) flokka mörg lækningagervigreindarkerfi sem hááhættu, sem bætir við lagi af reglufylgnikostnaði sem viðskiptarökin verða að bera.

## Bestu starfsvenjur

1. **Ákveddu fyrst hvort þú ert að kaupa staðgengd eða aukningu, því virðið kemur frá ólíkum stöðum.** Staðgengdarmál hvílir á sparnaði sem má innleysa – færri lestrarklukkustundir, lokaðar lotur, endurdreift starfsfólk – sem aðeins telst ef losuð afkastageta er í raun fjarlægð eða endurnýtt, ekki hljóðlega endurtekin upp. Aukningarmál hvílir á betri niðurstöðum eða meiri afköstum, yfirleitt á auknum kostnaði. Segðu hvort þú fullyrðir, og haltu viðskiptarökunum við sönnunargögnin sem styðja þá tilteknu fullyrðingu frekar en blöndu af báðum.

2. **Kostnaðarmettu allan líftímann, ekki leyfið.** Kaupverð lækningaralgríms er oft minnsti línuliðurinn. Bættu við samþættingu við klínísk kerfi, þjálfun klínísks starfsfólks, mannlega yfirsjón sem vinnuflæðið krefst nú, áframhaldandi frammistöðuvöktun, reglulega endursannreyningu og endurþjálfun, atvikarannsókn og reglufylgnibyrðina frá kerfum eins og gervigreindarlögum ESB. Tæki sem lítur ódýrt út gegn launum röntgenlæknis getur litið dýrt út þegar sannur heildareignarhaldskostnaður er kominn á blaðið.

3. **Metðu mann-véla teymið, ekki algrímið.** Sjálfstæð næmni og sértæki líkans eru inntök, ekki svarið. Það sem ræður raunverulegu virði er hvernig klínískt starfsfólk bregst við niðurstöðum þess – hvort það ofreiðir sig á það (sjálfvirknisskekkja), hunsar það (viðvörunarþreyta) eða notar það vel. Krefstu sönnunargagna úr fyrirhuguðu vinnuflæði og vinnuafli, og meðhöndlaðu áhrifamikla in-silico nákvæmni sem aldrei hefur verið prófuð í notkun sem ósannaða fullyrðingu.

4. **Meðhöndlaðu algrímaskekkju sem mælanlegan kostnað, ekki reglufylgni neðanmálsgrein.** Krefstu þess að frammistaða sé skýrð skipt eftir hópunum sem þýði þitt inniheldur í raun – aldur, kyn, þjóðerni, húðlit, fylgisjúkdóma, tungumál, félagshagfræðilega stöðu – ekki bara í heild. Tæki sem hækkar meðalniðurstöður meðan það víkkar bil milli hópa hefur jafnræðiskostnað sem tilheyrir matinu; gerðu hann sýnilegan og vegðu hann, því meðaltal sem felur skaðaðan undirhóp er ekki nógu gott fyrir opinbera þjónustu (sjá Viðfangsefni 3.4 — Jafnræði).

5. **Verðleggðu viðhald lærandi tækni, og semdu um það.** Þar sem frammistaða getur rekið skaltu fjárlaga fyrir stöðuga vöktun og endursannreyningu sem rekstrarkostnað frá fyrsta degi, og skrifaðu viðhaldsskyldurnar inn í samninginn. Festu fyrir kaup hver ber ábyrgð þegar líkanið rýrnar, hversu oft það verður endursannreynt og hvað kallar á afturköllun – svo „hver vaktar líkanið“ sé svarað með hönnun frekar en uppgötvað eftir atvik.

6. **Krefstu breytingastjórnunaráætlunar fyrir líkön sem uppfærast.** Tækni sem breytist eftir innkaup brýtur forsenduna að mat sé einskiptisatburður. Veldu fyrirkomulag þar sem umfang framtíðarbreytinga er fyrirfram tilgreint og stýrt – nálgunin að baki „predetermined change control plan“ FDA fyrir aðlögunarhæfan hugbúnað – svo þú vitir hvað söluaðilinn má breyta án endursamþykkis og hvað myndi krefjast nýs mats. Að kaupa ótakmarkaðan rétt til að breyta líkaninu er að kaupa óverðlagða áhættu.

7. **Krefstu raunverulegs samanburðar og varastu stökkið frá nákvæmni til niðurstöðu.** Viðeigandi spurningin er sjaldan „er gervigreindin nákvæm?“ heldur „slær hún núverandi starfshætti á niðurstöðum og kostnaði?“ – og hærri greiningarnákvæmni breytist ekki sjálfkrafa í betri heilsu eða lægri útgjöld. Fleiri niðurstöður geta þýtt meiri eftirfylgni, meiri ofgreiningu og meiri kostnað án ávinnings. Krefstu sönnunargagna sem tengja tækið við niðurstreymisniðurstöður og nettó auðlindanotkun gegn raunverulegum umönnunarstaðli, ekki strámanni (orsakaályktunarstaðlarnir eru Viðfangsefni 2.3 — Hagmælingar í heilsu).

8. **Samræmdu strangleika matsins við hagsmuni og afturkræfni ákvörðunarinnar.** Lágáhættu aukningartæki sem klínískur starfsmaður getur hnekkt ódýrt verðskuldar léttara mat en sjálfstætt greiningartæki sem ákvarðar hver er kallaður inn aftur. Skalaðu sönnunargögnin sem þú krefst – og vöktunina sem þú skuldbindur þig til – að afleiðingum þess að tækið hafi rangt fyrir sér og erfiðleikum við að afturkalla það, frekar en að beita einu sniðmáti á allt (þetta er forgangsröðunaragi; sjá Viðfangsefni 3.3 — Forgangsröðun og skömmtun).

9. **Líkanaðu mótstaðreyndarvinnuaflið heiðarlega.** Ef málið veltur á starfsmannasparnaði, vertu skýr um hvað þetta starfsfólk myndi annars gera og hvort sparnaðurinn er raunverulegur. Í kerfi með vinnuaflsskort er „losaður“ tími klínísks starfsfólks yfirleitt endurtekinn upp af óuppfylltri eftirspurn, svo ávinningurinn er meiri umönnun veitt, ekki fé sparað – ósvikinn ávinningur, en annar, sem breytir því hver í skipulagsheild þinni ætti að undirrita viðskiptarökin.

10. **Staðfærðu sönnunargögnin áður en þú treystir þeim.** Líkan sannreynt í einu landi, hjá einum greiðanda eða sjúklingablöndu getur staðið sig öðruvísi hjá þér því þýðið, algengi sjúkdóma, myndgreiningarbúnaðurinn eða kóðunarvenjurnar eru ólíkar. Krefstu sannreyningar á gögnum sem eru dæmigerð fyrir eigið þýði fyrir útfærslu, og meðhöndlaðu höfuðtölur söluaðila annars staðar frá sem tilgátu til að prófa á staðnum, ekki niðurstöðu til að leggja inn.

11. **Skipuleggðu útgönguna við innkomuna.** Lærandi tæki bresta, reka, missa eftirlitsstöðu eða eru leyst af hólmi, og klínísk þjónusta verður að halda áfram þegar þau gera það. Fyrir útfærslu skaltu staðfesta að starfsfólk haldi færninni og afkastagetunni til að starfa án tækisins, að gögn og vinnuflæði séu ekki svo samtvinnuð einum söluaðila að það sé óyfirstíganlegt að fara og að afturköllun skaði ekki sjálf sjúklinga – afhæfing er hægur kostnaður sem birtist aðeins þegar þú reynir að stöðva.

12. **Haltu mati gervigreindar innan núverandi HTA og stjórnarhátta ykkar, framlengdu – ekki sérstakri hraðbraut.** Þrýstingurinn að meðhöndla gervigreind sem sérstaka getur orðið afsökun til að sniðganga rýnina sem beitt er á hverja aðra heilbrigðistækni. Beindu þessum ákvörðunum gegnum sama hagfræðilega mat, öryggis- og jafnræðisstjórnarhætti og þú notar annars staðar, með því að bæta við gervigreindarsértæku spurningunum um rek, skekkju og mannþáttafræði frekar en að skipta aganum út fyrir hrifningu söluaðila.

## Spurningar til að ræða með teyminu

1. **Erum við að kaupa þetta tæki til að koma í stað klínískrar vinnu eða bæta hana – og samsvara viðskiptarök okkar því svari heiðarlega?**
   Þessi spurning knýr fram val sem flest viðskiptarök gruggja, fullyrðandi vinnuaflssparnað og gæðaávinning í einu en sannandi hvorugt. Ef fullyrðingin er staðgengd, þrýstið á hvort sparnaðurinn má innleysa: munu stöður raunverulega lokast, eða mun losaður tími gleypast af biðlistanum, sem gerir sanna ávinninginn „meiri umönnun“ frekar en „minni kostnaður“? Ef fullyrðingin er aukning, þrýstið á hvort bætt gæði réttlæta aukinn kostnað, því aukning bætir nánast alltaf við útgjöld. Heiðarlegt svar nefnir eina aðaluppsprettu virðis, segir hver í skipulagsheildinni ber ábyrgð á að raungera hana og viðurkennir hvaða sparnaður er getgáta. Teymi sem getur ekki sagt hreint út hvað það er að kaupa er ekki tilbúið að kaupa.

2. **Hverja gæti þetta algrím vanþjónað, og myndum við taka eftir því áður en það olli skaða?**
   Algrímaskekkja er sjaldan sýnileg í höfuðniðurstöðunni; hún felst inni í meðaltali sem lítur vel út. Spyrjið hvaða hópar í þýði ykkar voru þunnir eða fjarverandi í þjálfunargögnum, hvort merkið sem líkanið lærði er sanngjarnt staðgengilsmerki eða skekkt og hvort þið hafið gögnin skipt nógu fínt til að greina bil eftir þjóðerni, kyni, húðlit, tungumáli eða skerðingu. Spennan er að að safna og vakta undirhópaframmistöðu kostar fé og fyrirhöfn sem undir álagi stödd útfærsla mun vilja sleppa. Heiðarlegt svar tilgreinir undirhópana sem þið munuð vakta, þröskuldinn þar sem bil kallar á aðgerð og hreinskilna viðurkenningu á hópunum sem þið getið núna ekki séð – því jafnræðisskaði sem þið getið ekki mælt er sá sem þið munuð uppgötva gegnum kvartanir.

3. **Hver er áætlun okkar fyrir daginn sem þetta líkan rýrnar, breytist eða verður að vera slökkt á því?**
   Ólíkt hefðbundnu tæki getur lærandi tækni rekið hljóðlega, verið endurþjálfuð af söluaðila sínum, misst eftirlitsstöðu eða einfaldlega bilað – og þjónustan verður að halda áfram. Ræðið hver ber ábyrgð á að fylgjast með frammistöðu í notkun, hversu oft líkanið er endursannreynt og hvaða sjáanlega útleysi myndi láta ykkur afturkalla það. Kannið hvort klínískt starfsfólk ykkar væri enn hæft til að starfa án þess eftir tveggja ára reiðu, og hvort gögn og vinnuflæði ykkar eru svo samtvinnuð einum birgi að það er óviðráðanlegt að fara. Heiðarlega svarið er nafngreindur eigandi, vöktunartaktur, afturköllunarútleysi og varðveitt varageta – ekki von um að söluaðilinn haldi hlutunum gangandi.

4. **Höfum við kostnaðarmetið allan líftíma þessa tækis, eða aðeins kaupverð þess?**
   Leyfið er yfirleitt minnsti línuliðurinn í lækninga-gervigreindarfjárlögum, en það er talan sem ræður viðskiptarökunum sem berast stjórninni. Þrýstið á teymið að nefna sérhvern niðurstreymiskostnað sem tækið skapar: samþættingu við klínísk kerfi, þjálfun starfsfólks, fasta mannlega yfirsjón sem vinnuflæðið krefst nú, stöðuga frammistöðuvöktun, reglulega endursannreyningu og endurþjálfun, atvikarannsókn og reglufylgnibyrðina frá kerfum eins og gervigreindarlögum ESB. Spennan er að margir þessara kostnaðarliða eru endurteknir og dreifðir, svo þeir falla á rekstrarfjárlög sem aldrei var leitað til, á meðan sparnaðurinn er bókaður miðlægt og fyrirfram. Heiðarlegt svar setur heildareignarhaldskostnað yfir raunsæjan líftíma tækisins gegn ávinningnum, nefnir hvaða fjárlög bera hverja endurtekna línu og stenst eðlishvöt söluaðilans að bera saman leyfisgjald við laun klínísks starfsmanns eins og ekkert annað breyttist.

5. **Erum við að kaupa algrímið, eða hvernig klínískt starfsfólk okkar mun í raun nota það?**
   Sjálfstæð næmni og sértæki líkans lýsa tækinu á borði, ekki mann-véla teyminu sem mun veita umönnun, og bilið milli þessa tveggja er þar sem líkanaður ávinningur hverfur hljóðlega. Ræðið hvort klínískt starfsfólk ykkar muni líklega ofreiða sig á niðurstöðuna (sjálfvirknisskekkja), hunsa hana innan um flóð viðvarana (viðvörunarþreyta) eða fella hana skynsamlega inn í mat – og hvað í vinnuflæði, þjálfun og menningu ykkar ýtir í átt að hverju. Óþægilegi punkturinn er að sama algrímið getur hjálpað í einni þjónustu og skaðað í annarri eingöngu vegna þess hvernig fólk í kringum það hegðar sér, svo sönnunargögn úr útfærslu einhvers annars eru tilgáta um ykkar, ekki niðurstaða. Heiðarlegt svar krefst sönnunargagna úr fyrirhuguðu vinnuflæði og vinnuafli, skipuleggur mannþátta- og breytingastjórnunarvinnu sem hluta kaupanna og meðhöndlar áhrifamikla in-silico nákvæmni sem aldrei hefur verið prófuð í notkun sem ósannaða fullyrðingu.

6. **Slær þetta tæki í raun núverandi starfshætti á niðurstöðum og kostnaði, gegn raunverulegum samanburði?**
   Freistandi spurningin er „er gervigreindin nákvæm?“; ákvörðunarviðeigandi spurningin er „gerir hún betur en það sem við gerum nú, á því sem skiptir máli, þegar allt er talið?“ Kannið hvort samanburðurinn er gegn raunverulegum umönnunarstaðli ykkar eða veiktum strámanni, og hvort hærri greiningarnákvæmni hefur verið sýnt að breytast í betri heilsu fremur en einfaldlega fleiri niðurstöður, meiri eftirfylgni, meiri ofgreiningu og meiri kostnað. Spennan er að nákvæmni er auðvelt að sýna fram á og ódýrt að markaðssetja, á meðan niðurstreymisniðurstöðu- og nettó-auðlindasönnunargögn eru hæg, dýr og oft fjarverandi – svo þrýstingurinn er að þiggja hið fyrra sem staðgengil hins síðara. Heiðarlegt svar nefnir raunverulega samanburðinn, krefst sönnunargagna sem tengja tækið við niðurstreymisniðurstöður og nettó auðlindanotkun og er fús til að segja „ekki sannað enn“ þegar keðjan frá nákvæmni til ávinnings hefur ekki verið sýnd (orsakaályktunarstaðlarnir eru Viðfangsefni 2.3 — Hagmælingar í heilsu).

## Í reynd: dæmi úr heilsuhagfræði

Prairie Health Authority, skáldað eins-greiðanda svæðisheilbrigðisþjónusta í vesturhluta Kanada, er að íhuga gervigreindarkerfi til að skima fyrir [sykursýkisaugnbotnasjúkdómi](https://en.wikipedia.org/wiki/Diabetic_retinopathy) – leiðandi orsök afstýranlegrar blindu hjá fólki með sykursýki. Í dag eru sjónhimnuljósmyndir frá samfélagsstofum lesnar af litlum hópi augnlækna og þjálfaðra metenda, og svæðið heldur ekki í við: dreifbýlis- og frumbyggjasamfélög sérstaklega standa frammi fyrir löngum biðum, og sumir sjúklingar tapast í eftirfylgni áður en myndir þeirra eru nokkru sinni lesnar. Söluaðili býður algrím sem les myndirnar sjálfvirkt og vísar aðeins jákvæðum eða ómetanlegum tilfellum til manneskju. Höfuðsölutilboðið er vinnuaflssparnaður og hraðari niðurstöður.

Heilsuhagfræðingar yfirvaldsins byrja á að negla niður hvað er verið að kaupa. Söluaðilinn rammar það sem staðgengd – algrímið kemur í stað tíma metenda – en í kerfi með skimunarbiðlista verður losuð afkastageta metenda gleypt af óprófaða biðlistanum, ekki innleyst. Hinn sanni ávinningur, álykta þeir, er aukning afkastagetu: fleiri skimaðir, fyrr, sérstaklega í vanþjónuðum samfélögum, með trúverðuga minnkun afstýranlegrar blindu neðar í ferlinu. Sú endurskilgreining breytir öllu málinu. Sparnaðurinn er ekki lína í launafjárlögunum; hann er heilsuávinningur og jafnræðisávinningur, og verður að verðmetast sem slíkur, með kostnaður-á-gæðaleiðrétt-lífár vélbúnaðinum úr Viðfangsefni 2.1 — Hagfræðilegt mat frekar en einfaldri starfsmannafrádrætti.

Þeir yfirheyra síðan jafnræðisvíddina beint. Líkanið var þjálfað að mestu á sjónhimnumyndum frá þéttbýlisþýðum í öðru landi; birt nákvæmni þess er sterk í heild en hefur ekki verið prófuð á frumbyggja- og dreifbýlissjúklingum yfirvaldsins, þar sem sykursýkialgengi er hátt og myndgreining er oft gerð á eldri myndavélum í breytilegu ljósi. Teymið neitar að þiggja höfuðtölur söluaðilans sem yfirfæranlegar. Það pantar staðbundna sannreyningu á dæmigerðu úrtaki og krefst þess að frammistaða sé skýrð eftir samfélagi, myndavélargerð og myndgæðum – því tæki sem stendur sig verr nákvæmlega þar sem þörfin er mest myndi breyta skimunaráætlun sem ætlað er að minnka ójöfnuð í eina sem víkkar hann, algrímaskekkjukostnaður sem myndi dverga leyfisgjaldið bæði í skaða og orðspori.

Heildarlífskostnaðarmatið kemur fjármálastjóranum á óvart. Handan leyfisins verður málið að bera samþættingu við myndgreiningarkerfin, þjálfun fyrir stofustarfsfólk, fast fyrirkomulag fyrir mannlega yfirlestur ómetanlegra mynda og – mikilvægt – stöðuga vöktun fyrir hugtakarek eftir því sem myndavélar, þýði og sykursýkismeðferð breytast yfir árin. Teymið skrifar viðhalds- og endursannreyningarskyldurnar inn í samninginn, tilgreinir fyrirfram ákveðið umfang líkanauppfærslna og nefnir ábyrgan klínískan eiganda fyrir frammistöðu í notkun. Það krefst líka varaleiðar: nægri mannlegri metendageta er haldið til að afturköllun tækisins myndi ekki blinda þjónustuna.

Yfirvaldið samþykkir þrepaskipta útfærslu: staðbundna sannreyningu fyrst, svo vaktað útrásarverkefni sem byrjar í þörfustu samfélögunum, með undirhópaframmistöðumælaborðum yfirfarin ársfjórðungslega og fyrirfram samþykktu nákvæmnisgólfi sem kallar á rannsókn eða afturköllun. Hagfræðin er metin hagstæð – tækið útvíkkar takmarkaða sérfræðigetu til fólks sem áður var misst – en matið gerir ljóst að virðið veltur á vöktuninni og jafnræðisvörnunum, ekki algríminu einu. Lærdómurinn sem stjórnin tekur er að gervigreindarkaup eru viðvarandi skuldbinding, ekki einskiptiskaup, og að jafnræðisspurningin var ekki neðanmálsgrein heldur miðja málsins.

## Fjögur geirasjónarhorn

### Sprotafyrirtæki

Gervigreindarsprotafyrirtæki í heilbrigðismálum hefur yfirleitt sterk sönnunargögn um algrímanákvæmni og veik sönnunargögn um hagfræðilegt virði eða raunheimsáhrif, og lifun þess veltur á endurgreiðsluleið sem er kannski ekki til enn. Freistingin er að selja nákvæmni eins og hún væri niðurstaða, og að vanverðleggja viðhaldið, vöktunina og jafnræðisvinnuna sem kaupendur munu að lokum krefjast. Stofnendur sem hanna fyrir matshæfni frá upphafi – fyrirfram tilgreina undirhópaframmistöðu, byggja vöktun inn og sannreyna á dæmigerðum þýðum – byggja eitthvað sem greiðandi getur í raun keypt. Trúverðuga framsetningin er ekki besta flatarmál undir ferli á viðmiðunarprófi; hún er verjanleg fullyrðing um niðurstöður, kostnað og hver nýtur góðs, prófuð í raunverulegu vinnuflæði.

### Lítil fyrirtæki

Lítill en rótgróinn veitandi – röntgenstofa, einstaklingsrekin stofa, sérhæfð rannsóknastofa eða sérhæfður hugbúnaðarbirgi – kaupir gervigreind sem settleg viðskiptaákvörðun frekar en veðmál á lifun, og takmörk hans eru öfug við sprotafyrirtækis: takmörkuð geta til að meta, samþætta og vakta lærandi tæki, ekki takmörkuð vara. Slíkur kaupandi hefur sjaldan gagnavísindateymi til að keyra staðbundna sannreyningu eða stjórnarhátta fall til að fylgjast með reki, svo hann er óvenjulega berskjaldaður fyrir höfuðtölum söluaðila og fyrir endurteknum kostnaði – yfirsjón, endursannreyningu, reglufylgni – sem varir lengur en salan. Skynsamleg afstaða er að styðjast við sameiginlega eða ytri tryggingu þar sem hún er til – mat fagfélags, landsbundinn HTA-úrskurð, hópinnkaupafyrirkomulag – frekar en að reyna rýni sem hann getur ekki mannað einn. Sérstæð áhætta hans er hljóðlát innilokun og afhæfing: lítil stofa sem endurmótar vinnuflæði sitt í kringum eitt tæki getur komist að því að það að fara, eða vinna án þess, er ekki lengur viðráðanlegt, svo að varðveita varaleið og lesa útgönguskilmála samningsins skiptir meira máli hér en leyfisverðið.

### Stórfyrirtæki

Stór sjúkrahúsasamsteypa eða tryggingafélag kaupir gervigreind sem safn og lifir við rekstrarveruleikann sem söluaðilar hylja: samþættingu, upptöku klínísks starfsfólks, viðvörunarþreytu, vöktun í stórum stíl og afhæfingaráhættu þess að reiða sig á tæki yfir marga staði. Á þessum kvarða er staðgengdar-á-móti-aukningar spurningin vinnuaflsstefnuspurning með vinnumarkaðstengslaafleiðingum, og klúðruð „vinnusparandi“ útfærsla getur kostað meira í deilum og endurvinnslu en hún sparaði nokkru sinni. Stórfyrirtæki eru líka þar sem algrímaskekkja verður kerfislæg skuldbinding frekar en stakt tilfelli, svo hin þroskaðri byggja föst stjórnarhætti – líkanaskrár, frammistöðumælaborð, endursannreyningaráætlanir – og meðhöndla gervigreindaryfirsjón sem varanlega aðgerð, ekki verkefni.

### Hið opinbera

Ráðuneyti eða landsbundinn greiðandi setur reglurnar sem allir aðrir spila eftir, gegnum regluverk, HTA-aðferðir og endurgreiðsluhönnun, og það ber bresti sem markaðurinn mun ekki verðleggja – skekkju sem fellur á verndaða hópa, rek sem skaðar öryggi og vinnuaflsafleiðingar sjálfvirknivæðingar yfir heilt kerfi. Tæki þess eru þau víðustu: að flokka lækninga-gervigreind eftir áhættu (eins og gervigreindarlög ESB gera), að krefjast dæmigerðrar sannreyningar og eftirmarkaðsvöktunar og að ákveða hvort og hvernig lærandi tækni er greidd fyrir. Agi þess verður að vera víðastur líka, því hraðbraut sem veifar gervigreind í gegn á nákvæmnifullyrðingum söluaðila, eða endurgreiðslureglu sem greiðir fyrir magn algrímalestra, mun útbreiða mistök yfir alla veitendur í einu. Sérstæð verk ríkisvalds er að gera mat, jafnræði og vöktun að sjálfgefnum inngönguskilyrðum frekar en valfrjálsum aukahlutum (stefnuvélbúnaðurinn er Viðfangsefni 3.2 — Heilbrigðisstefna).

## Algeng mistök

- **Að selja nákvæmni sem niðurstöðu.** Að meðhöndla háa greiningarnákvæmnitölu sem sönnun heilsu- eða kostnaðarávinnings. Lagfæring: krefstu sönnunargagna sem tengja tækið við niðurstreymisniðurstöður og nettó auðlindanotkun gegn raunverulegum núverandi starfsháttum.

- **Að bóka sparnað sem innleysist aldrei.** Að fullyrða vinnuaflssparnað sem er hljóðlega endurtekinn upp af óuppfylltri eftirspurn. Lagfæring: segðu hvort stöður loka í raun; ef losaður tími er endurnýttur, verðmetið málið sem meiri umönnun veitt, ekki fé sparað.

- **Að hunsa manneskjuna í ferlinu.** Að meta algrímið eitt og missa af sjálfvirknisskekkju og viðvörunarþreytu. Lagfæring: metið mann-véla teymið í fyrirhuguðu vinnuflæði og vinnuafli.

- **Að meðaltala burt jafnræðisskaða.** Að skýra aðeins frá heildarframmistöðu og missa af undirhópi sem tækið vanþjónar. Lagfæring: krefstu og vaktaðu frammistöðu skipta eftir hópunum sem þýði þitt inniheldur, með aðgerðaþröskuldi.

- **Einskiptismat lærandi tækis.** Að meðhöndla aðlögunarhæft líkan eins og fast tæki og endursannreyna það aldrei. Lagfæring: fjárlagaðu og semdu um stöðuga vöktun, endursannreyningu og breytingastjórnunaráætlun.

- **Innilokun og afhæfing af vanrækslu.** Að verða svo háð einu tæki og söluaðila að afturköllun er ómöguleg og starfsfólk getur ekki lengur starfað án þess. Lagfæring: varðveittu varageta og skipuleggðu útgönguna við innkomuna.

- **Sérstök hraðbraut fyrir gervigreind.** Að sniðganga venjulegt HTA, öryggis- og jafnræðisrýni því tæknin er spennandi. Lagfæring: beindu gervigreind gegnum núverandi stjórnarhætti, framlengda með spurningum um rek, skekkju og mannþáttafræði.

## Þroskalíkan

| Vídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Virðismál | Keypt á algrímanákvæmni og fullyrðingum söluaðila | Staðgengd á móti aukningu nefnd; einhver kostnaðargögn safnað | Heildarlífskostnaður og raunverulegur samanburður metin gegnum HTA sem staðall | Virði rakið í notkun gegn niðurstöðum og nettó kostnaði, með frávikum brugðist við | Virði stöðugt endurprófað og endurjafnað yfir safnið, með tæki niðurskorin þegar þau hætta að borga sig |
| Jafnræði | Aðeins heildarframmistaða séð; skekkja órannsökuð | Undirhópaáhætta viðurkennd; tilfallandi athuganir | Dæmigerð sannreyning og undirhópaskýrslugjöf krafist fyrir útfærslu | Undirhópaframmistaða vöktuð í beinni með aðgerðaþröskuldum og birt | Jafnræðisniðurstöðum stýrt yfir tæki og samfélög, með niðurstöðum fært aftur í innkaup og hönnun |
| Viðhald lærandi tækis | Metið einu sinni og gleymt; rek óvaktað | Vöktun rædd en ekki mönnuð | Vöktun, endursannreyning og breytingastjórnun fjárlöguð og samin | Sjálfvirk reksgreining, fyrirfram tilgreindar uppfærslur og afturköllunarútleysi í gildi | Viðhaldi samhæft yfir eignina og söluaðila, með sameiginlegri vöktun og samræmdum endursannreyningalotum |
| Vinnuafl | Vinnusparnaður gert ráð fyrir; starfsfólk ekki haft samráð við | Staðgengdaráhrif kortlögð; þjálfun skipulögð | Mótstaðreyndarvinnuafl líkanað; afhæfing og varaleið tekin á | Aukning hönnuð með starfsfólki; afkastagetuávinningi og færni virkt stýrt | Vinnuaflsstefna og gervigreind skipulögð saman yfir þjónustur, með færni og hlutverkum þróað vísvitandi yfir tíma |
| Stjórnarhættir | Engin gervigreindarsértæk yfirsjón | Samþykki eftir tilfellum | Gervigreind felld inn í fast HTA, öryggis- og jafnræðisstjórnarhætti | Líkanaskrá og varanleg yfirsjónaraðgerð með stöðugri úttekt | Stjórnarhættir framlengdir yfir samstarfsaðila og aðfangakeðju, mótandi staðla og ábyrgð handan skipulagsheildarinnar |

## Gátlisti

- [ ] Segðu skýrt hvort tækið kemur í stað eða eykur klíníska vinnu, og samræmdu viðskiptarökin þeirri fullyrðingu.
- [ ] Kostnaðarmettu allan líftímann – samþættingu, þjálfun, yfirsjón, vöktun, endursannreyningu, endurþjálfun og reglufylgni – ekki bara leyfið.
- [ ] Krefstu sönnunargagna úr fyrirhuguðu mann-véla vinnuflæði, ekki sjálfstæðri algrímanákvæmni.
- [ ] Krefstu þess að frammistaða sé skýrð eftir undirhópunum sem þýði þitt inniheldur, með aðgerðaþröskuldi fyrir hvert jafnræðisbil.
- [ ] Sannreyndu líkanið á gögnum dæmigerðum fyrir eigið þýði fyrir útfærslu.
- [ ] Staðfestu raunverulegan samanburð og sönnunargögn um að nákvæmni breytist í niðurstöður og nettó auðlindanotkun.
- [ ] Fjárlagaðu og semdu um stöðuga vöktun, endursannreyningu og fyrirfram ákveðna breytingastjórnunaráætlun.
- [ ] Nefndu ábyrgan eiganda fyrir frammistöðu í notkun og útleysi fyrir rannsókn eða afturköllun.
- [ ] Líkanaðu mótstaðreyndarvinnuaflið heiðarlega, þar með talið hvort sparnaður má innleysa eða er endurtekinn upp.
- [ ] Varðveittu varageta og skipuleggðu útgönguna, gættu þín á afhæfingu og innilokun söluaðila.
- [ ] Beindu ákvörðuninni gegnum núverandi HTA, öryggis- og jafnræðisstjórnarhætti, framlengda með gervigreindarsértækum spurningum.

## Helstu heimildir

- WHO, *Ethics and Governance of Artificial Intelligence for Health* — leiðbeiningar Alþjóðaheilbrigðismálastofnunarinnar um gervigreind í heilbrigðismálum, þar á meðal jafnræðis- og stjórnarháttareglur.
- U.S. Food and Drug Administration — leiðbeiningar um hugbúnað sem lækningatæki (SaMD) og fyrirfram ákveðnar breytingastjórnunaráætlanir fyrir aðlögunarhæf gervigreindar-/vélnámstæki.
- Evrópusambandið — gervigreindarlögin (Artificial Intelligence Act, 2024), sem flokka mörg lækningagervigreindarkerfi sem hááhættu.
- NICE — Evidence Standards Framework for Digital Health Technologies, og þróandi aðferðir til að meta gervigreind og gagnadrifna tækni (frá miðjum þriðja áratugnum).
- OECD — *Health at a Glance* og vinna OECD um gervigreind í heilbrigðiskerfum, fyrir samhengi milli landa.
- ISPOR — góðrar-starfsvenju leiðbeiningar um hagfræðilegt mat heilbrigðistækni, beitt á gervigreindarstudda umönnun.

## Tilvísanir

1. Artificial intelligence in healthcare — Wikipedia — https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare
2. Machine learning — Wikipedia — https://en.wikipedia.org/wiki/Machine_learning
3. Clinical decision support system — Wikipedia — https://en.wikipedia.org/wiki/Clinical_decision_support_system
4. Medical software — Wikipedia — https://en.wikipedia.org/wiki/Medical_software
5. Concept drift — Wikipedia — https://en.wikipedia.org/wiki/Concept_drift
6. Automation — Wikipedia — https://en.wikipedia.org/wiki/Automation
7. Deskilling — Wikipedia — https://en.wikipedia.org/wiki/Deskilling
8. Automation bias — Wikipedia — https://en.wikipedia.org/wiki/Automation_bias
9. Algorithmic bias — Wikipedia — https://en.wikipedia.org/wiki/Algorithmic_bias
10. Health technology assessment — Wikipedia — https://en.wikipedia.org/wiki/Health_technology_assessment
11. Artificial Intelligence Act — Wikipedia — https://en.wikipedia.org/wiki/Artificial_Intelligence_Act
12. Diabetic retinopathy — Wikipedia — https://en.wikipedia.org/wiki/Diabetic_retinopathy
13. World Health Organization — *Ethics and Governance of Artificial Intelligence for Health* — https://www.who.int/publications/i/item/9789240029200
14. U.S. Food and Drug Administration — Artificial Intelligence and Machine Learning in Software as a Medical Device — https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device
15. NICE — Evidence Standards Framework for Digital Health Technologies — https://www.nice.org.uk/corporate/ecd7
