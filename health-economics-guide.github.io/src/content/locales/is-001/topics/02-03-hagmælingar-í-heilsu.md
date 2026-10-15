# Viðfangsefni 2.3 — Hagmælingar í heilsu

**Hagmælingar í heilsu eru sú fræðigrein að draga áreiðanlega orsaka- og afleiðingarfullyrðingu úr ruglingslegum raunheimagögnum um heilsu, svo að þegar einhver segir þér að inngrip hafi virkað getir þú dæmt hvort gögnin þoli þunga þess orðs.**

## Hvers vegna þetta skiptir máli í heilsuhagfræði

Nánast sérhver ákvörðun sem heilbrigðisleiðtogi tekur hvílir á orsakafullyrðingu: þetta lyf lækkar dánartíðni, þessi heilsugæslustöð fækkaði innlögnum, þessi greiðsluumbót stytti biðtíma. Fullyrðingin er auðveld að setja fram og erfið að vinna sér inn. Tveir hópar sjúklinga eru ólíkir í niðurstöðu, en þeir voru líka ólíkir áður en nokkur greip inn í – veikara fólk leitar meiri umönnunar, ríkari svæði taka upp ný verkefni fyrst, áhugasamar stofur bjóða sig fram í tilraunir. Kjarnavandamálið er að við sjáum aldrei hvað hefði gerst fyrir meðhöndlaða hópinn hefði hann verið ómeðhöndlaður. Allt í þessu viðfangsefni snýst um að nálgast þann vantandi samanburð af heiðarleika.

Hagsmunirnir eru opinbert fé og mannslíf. Sjálfsörugg en röng orsakafullyrðing sendir fjárlög til inngrips sem gerir ekkert, eða dregur til baka eitt sem hljóðlega bjargaði lífum; hvort tveggja er greitt fyrir í árangri, ekki bara gjaldmiðli. Þegar landsbundinn greiðandi ákveður að innleiða áætlun á landsvísu á grundvelli svæðisbundins mats er gæði orsakarökstuðnings þess mats munurinn á að skala árangur og að skala blekkingu. Leiðtogar keyra sjaldan greininguna sjálfir, en þeir panta hana, fjármagna hana og bregðast við henni – sem þýðir að matshæfnin er þeirra að eiga.

Þetta viðfangsefni er vísvitandi ekki tölfræðikennslubók (sjá umfangsmörk bókarinnar). Það mun ekki leiða út matsfall eða mæla með hugbúnaði. Verk þess er að segja þér til hvers hver aðferð er *ætluð*, hvenær orsakafullyrðing verðskuldar traust þitt og hvernig á að panta og meta hagmælingarvinnu svo að þú sért hvorki blekktur af fáguðu líkani né afneitandi góðra sönnunargagna. Þar sem greiningin nærir ákvörðunargreiningarlíkan sem framreiknar umfram gögnin tilheyrir sá vélbúnaður Viðfangsefni 2.2 — Líkanagerð; hér höldum við okkur við matið sjálft og hvort það sé orsakalegt.

## Lykilhugtök

[Hagmælingar í heilsu](https://en.wikipedia.org/wiki/Econometrics) eru beiting tölfræðiaðferða á heilbrigðis- og heilbrigðisþjónustugögn til að mæla tengsl og, umfram allt, til að styðja [orsakaályktun](https://en.wikipedia.org/wiki/Causal_inference) – tilraunina til að staðfesta að breyting á einu *valdi* breytingu á öðru, frekar en aðeins fylgi henni. Fræðigreinin er til því fylgni í heilbrigðisgögnum er mikil og villandi, og því hrein tilraun sem myndi útkljá spurninguna er oft ómöguleg, siðferðilega óásættanleg eða óviðráðanleg.

Aðalhindrunin er [truflunarþáttur](https://en.wikipedia.org/wiki/Confounding): þriðji þáttur sem hefur áhrif á bæði hver fær inngrip og hvaða niðurstöðu hann upplifir, og skapar tengsl sem eru ekki orsakatengsl. Sjúklingar á nýju blóðþynningarlyfi kunna að blæða minna en þeir á gamla lyfinu ekki því lyfið sé öruggara heldur því varkárir ávísendur gáfu það sjúklingum í minni áhættu. Aldur, skortur, alvarleiki sjúkdóms og dómgreind lækna eru miskunnarlausir truflunarþættir í heilbrigðisgögnum, og þeir sem þú getur mælt eru sjaldan þeir sem skipta mestu máli.

Náskylt er [valskekkja](https://en.wikipedia.org/wiki/Selection_bias): fólkið í meðhöndluðum hópi og samanburðarhópi var flokkað í þá af ferli – sjálfsval, klínísk forgangsröðun, landafræði, stjórnsýsluleg hæfi – sem er sjálft tengt niðurstöðunni. Fjarheilbrigðisþjónusta notuð af hinum stafrænt sjálfsörugga mun sýna góðan árangur að hluta því notendur hennar voru heilbrigðari og skipulagðari frá upphafi. Val er ekki óþægindi til að þurrka af gögnunum; það er oft öll sagan, og verk aðferðarinnar er að gera það óskaðlegt.

Gullstaðallinn til þess er [slembiröðuð samanburðarrannsókn](https://en.wikipedia.org/wiki/Randomized_controlled_trial) (RCT), þar sem þátttakendum er úthlutað í meðferð eða samanburð af tilviljun. Slembiröðun virkar því að meðaltali jafnar hún bæði truflunarþættina sem þér datt í hug og þá sem þér datt ekki í hug, svo hvaða munur sem er á niðurstöðu má eigna inngripinu. Agarnir sem vernda rannsókn – að greina sjúklinga í hópnum sem þeim var slembiraðað í, þekkt sem [ásetningsgreining](https://en.wikipedia.org/wiki/Intention-to-treat_analysis) (intention-to-treat), og að forskrá niðurstöðuna – eru til að koma í veg fyrir að valvandinn læðist aftur inn um hliðardyrnar.

Rannsóknir eru ekki alltaf framkvæmanlegar, svo mikið af hagmælingum í heilsu vinnur með athugunargögn og fær trúverðugleika að láni frá [náttúrutilraun](https://en.wikipedia.org/wiki/Natural_experiment) – aðstæðum þar sem eitthvað utan stjórnar þátttakenda (innleiðing stefnu, hæfisregla, happdrætti, skyndileg verðbreyting) líkir eftir slembiúthlutun. Fjórar hálftilraunahönnun koma ítrekað fyrir:

- [Mismunur-í-mismun](https://en.wikipedia.org/wiki/Difference_in_differences) (difference-in-differences) ber saman *breytinguna* á niðurstöðum fyrir hóp sem verður fyrir inngripi við *breytinguna* fyrir óútsettan samanburðarhóp yfir sama tímabil. Trúverðugleiki hans hvílir á „samsíða þróun“ forsendunni: að án inngripsins hefðu niðurstöður hópanna tveggja hreyfst í takt.
- [Tækjabreytumat](https://en.wikipedia.org/wiki/Instrumental_variables_estimation) (instrumental variables) notar breytu sem hefur áhrif á hver fær meðferð en hefur engin bein áhrif á niðurstöðuna nema gegnum meðferðina – fjarlægð frá heilsugæslustöð, happdrættisnúmer, slembiúthlutaður rýnir – til að einangra breytileika í meðferð sem er laus við truflunarþætti. Gilt tæki er í raun erfitt að finna og ómögulegt að prófa til fulls.
- [Samfellurof í aðhvarfi](https://en.wikipedia.org/wiki/Regression_discontinuity_design) (regression discontinuity) nýtir skarpt viðmið – áhættustig, aldur, tekjumörk – sem ákvarðar hæfi. Fólk rétt fyrir ofan og rétt fyrir neðan línuna er nánast eins nema hvað varðar aðgang að inngripinu, svo að bera það saman nálgast staðbundna tilraun.
- [Raðgagnaaðferðir](https://en.wikipedia.org/wiki/Panel_data) (panel data) fylgja sömu einingum (sjúklingum, sjúkrahúsum, svæðum) yfir tíma, sem leyfir greinandanum að stýra fyrir öllu föstu um einingu sem breytist aldrei, og fjarlægir þannig stóran flokk truflunarþátta sem einn þverskurður getur ekki.

Að lokum liggja [vantandi gögn](https://en.wikipedia.org/wiki/Missing_data) undir öllum þessum. Sjúklingar falla frá, skrár eru ófullkomnar og – mikilvægt – ástæðan fyrir því að gögn vantar er oft tengd niðurstöðunni, svo að henda ófullkomnum skrám kemur hljóðlega aftur á valskekkju. Hvernig farið var með vöntun er ein fyrsta spurningin sem spyrja skal um sérhverja rannsókn.

## Bestu starfsvenjur

1. **Byrjaðu á mótstaðreyndinni, ekki aðferðinni.** Áður en nokkur velur matsfall skaltu knýja fram spurninguna: hver er samanburðurinn og hvers vegna ættum við að trúa að hann segi okkur hvað hefði gerst án inngripsins? Trúverðugleiki sérhverrar niðurstöðu flæðir frá þeim samanburði, ekki frá fágun tölfræðinnar ofan á honum. Ef svarið er óljóst bjargar engin tækni því.

2. **Pantaðu hönnunina áður en gögnin eru safnað, ekki eftir.** Sterkustu orsakafullyrðingarnar koma frá hönnun sem er skipulögð fyrirfram – slembiröðuð innleiðing, forskráð greining, samþykktur samanburðarhópur – því að laga aðferð að fyrirliggjandi gögnum býður greinandanum að halda áfram að leita þar til smjaðrandi niðurstaða birtist. Þegar þú fjármagnar mat skaltu fjármagna hönnunarstigið og krefjast skriflegrar greiningaráætlunar áður en niðurstöður eru til.

3. **Veldu slembiröðun þar sem hún er siðferðilega ásættanleg og framkvæmanleg, þar með talin þrepaskipt innleiðing.** Ef áætlun nær ekki til allra í einu skaltu úthluta röð aðgangs með happdrætti eða slembiraða hvaða staðir fara fyrst. Þetta breytir rekstrarskorðu í trúverðuga tilraun fyrir lítinn aukakostnað, og er oft verjanlegra en að neita nokkrum um meðferð. Margar af traustustu stefnumatsrannsóknum eru einfaldlega innleiðingar sem var slembiraðað frekar en valdar.

4. **Líttu á sérhverja hálftilraunahönnun sem búnt af forsendum, og láttu hana segja sínar.** Mismunur-í-mismun lifir eða deyr á samsíða þróun; tækjabreytur á tæki sem er bæði viðeigandi og ytra; samfellurof á að fólk hagræði ekki hvorum megin viðmiðsins það lendir. Góður greinandi nefnir forsenduna sem niðurstaða hans veltur á og sýnir sönnunargögn fyrir henni; veikur felur hana. Spyrðu skýrt: „hvað þarf að vera satt til að þetta sé orsakalegt, og hvernig veistu að það er?“

5. **Krefstu fölsunarprófanna, ekki bara fyrirsagnarmatsins.** Trúverðug orsakavinna reynir að brjóta eigin fullyrðingu: teikna þróun fyrir inngrip til að athuga að hún var samsíða, prófa stökk við fölsk viðmið þar sem engin ættu að vera, sýna að tækið spáir ekki fyrir um niðurstöður sem það ætti ekki að snerta. Nærvera þessara athugana er merki um heiðarlega vinnu; fjarvera þeirra er viðvörun hversu stór eða velkomin sem áhrifin eru.

6. **Krefstu þess að vita hvernig vantandi gögn og brottfall voru meðhöndluð.** Spyrðu hvaða hluti þátttakenda tapaðist, hvort þeir sem vantar séu ólíkir þeim sem sjást og hvaða forsendu greiningin gerði um þá. „Heiltilfellagreining“ – að sleppa hljóðlega öllum með eyðu – er algengasta leiðin sem valskekkja kemur aftur inn í rannsókn sem leit hrein út. Áttin sem vantandi gögn myndu ýta niðurstöðunni er oft þekkjanleg jafnvel þegar gögnin eru það ekki.

7. **Samræmdu líkanið við lögun heilbrigðisgagna.** Kostnaður er skakkur af fáum mjög dýrum sjúklingum, nýting er talning sem getur ekki orðið neikvæð og lifunargögn eru hægri-ritskoðuð þegar eftirfylgni lýkur. Hefðbundnar línulegar aðferðir passa illa og geta villt um fyrir; sérhæfð líkön eru til fyrir hvert. Þú þarft ekki að kunna stærðfræðina, en þú ættir að vita nóg til að spyrja „hentar þessi aðferð kostnaðargögnum?“ og búast við raunverulegu svari.

8. **Aðgreindu áhrifin á þá sem eru meðhöndlaðir frá áhrifunum sem þú gætir skalað.** Margar hálftilraunaaðferðir meta *staðbundin* áhrif – áhrifin á fólk nálægt viðmiði, eða á þá sem tæki hreyfði af tilviljun – sem eru kannski ekki jöfn áhrifum þess að innleiða inngripið til allra. Samfellurof í kringum aldur 65 segir þér um 65 ára, ekki 40 ára. Áður en þú alhæfir tölu skaltu spyrja hvers áhrif hún eru í raun.

9. **Aðgreindu tölfræðilega marktækni frá ákvörðunarmikilvægi.** Nákvæmlega metin lítil áhrif geta verið tölfræðilega marktæk og hagfræðilega léttvæg; mikil áhrif geta verið óviss en samt þess virði að bregðast við miðað við hagsmuni. Biddu um áhrifastærðina, öryggisbil hennar og hvað hún þýðir á mælikvarða fjárlaga þinna og þýðis – ekki aðeins hvort p-gildi náði viðmiði. Ákvörðunin snýst um stærð og óvissu saman.

10. **Dæmdu ytra gildi jafn vandlega og innra gildi.** Rannsókn getur verið gallalaus um orsakasamband í eigin umhverfi en samt óviðkomandi þínu ef þýði, heilbrigðiskerfi eða grunnáhætta eru ólík. Tæki sem virkaði á bandarískum tryggingamarkaði eða hönnun staðfest í skandinavískri skrá flyst ef til vill ekki til lágtekjuumhverfis með önnur gögn og hvata. Spyrðu „myndu þessi áhrif haldast í kerfinu mínu?“ sem aðskilda spurningu frá „eru þessi áhrif raunveruleg?“

11. **Þríhyrningsmældu frekar en að treysta einni rannsókn.** Þegar nokkrar aðferðir með ólíkar forsendur – rannsókn, mismunur-í-mismun, tækjabreytumat – benda í sömu átt er traust áunnið; þegar þær víkja er ósamræmið upplýsing um hvaða forsendur bregðast. Pantaðu eða leitaðu meira en einnar línu sönnunargagna fyrir sérhverja ákvörðun nógu stóra til að skipta máli, og meðhöndlaðu einstaka sláandi niðurstöðu sem tilgátu, ekki niðurstöðu.

12. **Skrifaðu matið niður og geymdu það með ákvörðuninni.** Skráðu hvaða orsakafullyrðingu þú reiddir þig á, hvaða hönnun framleiddi hana, á hvaða forsendu hún hvíldi og hvað myndi breyta skoðun þinni. Þetta verndar skipulagsheildina þegar niðurstöður eru síðar véfengdar, og það knýr fram agann að segja óvissu fyrir, ekki eftir að árangur er þekktur. Mat þar sem rökstuðningur er óskjalfestur er skoðun með línuriti.

## Spurningar til að ræða með teyminu

1. **Fyrir síðustu stóru ákvörðunina sem við réttlættum með sönnunargögnum, hver var samanburðarhópurinn – og hefði hann í raun gert það sama án inngripsins?** Þessi spurning fer beint að mótstaðreyndinni, þar sem flest veik sönnunargögn fela sig. Þrýstu handan fyrirsagnartölunnar að byggingunni: hver var borinn saman við hvern, hvernig voru þeir flokkaðir í þá hópa og hvað hefði gerst fyrir meðhöndlaða hópinn hefði ekkert breyst. Heiðarlegu spennurnar eru að þægilegasti samanburðurinn – fyrir-og-eftir í sama hópi, eða sjálfboðaliðar gegn ekki-sjálfboðaliðum – er yfirleitt sá mest truflaði, og að fólkið sem valdi eða var valið fyrir inngrip er nánast alltaf ólíkt þeim sem voru það ekki. Góð umræða nefnir sértæku truflunarþættina í spilinu (alvarleika, skort, hvatningu, val lækna) og spyr hvort hönnunin gerði þá óskaðlega eða hunsaði þá aðeins. Svarið sem þú leitar að er ekki „rannsóknin var ritrýnd“ heldur skýr frásögn af hvers vegna samanburðurinn er trúverðugur – eða viðurkenning á að hann er það ekki, og að ákvörðunin hvíldi á dómgreind klæddri sem sönnunargögn.

2. **Þegar við pöntum mat, erum við að kaupa hönnun eða bara skýrslu?** Flestar skipulagsheildir festa kaup á mati sem afurð sem kemur eftir að áætlunin er í gangi, sem er einmitt þegar sterkustu orsakahönnunin eru þegar orðin ómöguleg. Spennan er milli rekstrarlegs brýnleika – ræstu núna, mældu síðar – og sönnunargæða, sem velta á ákvörðunum teknum áður en fyrsti sjúklingurinn er skráður: slembiröðuð innleiðingarröð, samþykkt samanburðarsvæði, forskráð niðurstaða og greiningaráætlun. Ræðið hvort pöntunarferli ykkar býður greinendum inn nógu snemma til að móta hönnunina, eða aðeins nógu seint til að réttlæta niðurstöðuna. Heiðarlegt svar horfist í augu við að ódýrt afturvirkt mat getur verið verra en ekkert ef það lánar falskt traust, og skoðar hvort samningar og tímalínur gera góða hönnun byggingarlega mögulega eða byggingarlega ómögulega í skipulagsheild ykkar.

3. **Hvaða fullyrðingu myndum við neita að bregðast við, og hvaða sönnunargögn myndu breyta skoðun okkar?** Þessi spurning prófar hvort teymið meðhöndlar sönnunargögn sem raunverulegt inntak eða sem skraut fyrir ákvörðun sem þegar er tekin. Að nefna fyrirfram sönnunarstaðalinn sem fullyrðing verður að uppfylla – og niðurstöðuna sem myndi láta ykkur snúa við – er sterkasta vörnin gegn staðfestingarskekkju og gegn sértæku áhuganum sem mætir niðurstöðum sem við kunnum að meta. Raunverulega spennan er að hagsmunaaðilar leggja sjaldan uppáhaldsáætlanir og óvinsælar á sömu sönnunarstikuna; ástsælt framtak fær vafann, ógnandi er tætt í sundur. Heiðarleg umræða leiðir í ljós hvar þessi tvöföldu viðmið búa í skipulagsheild ykkar, samþykkir hvað „nógu gott til að bregðast við“ merkir fyrir ákvarðanir af ólíkri stærð og viðurkennir að að skuldbinda sig fyrirfram til þess sem myndi breyta skoðun ykkar er óþægilegt einmitt því það gæti gert það.

4. **Þegar við fáum sláandi niðurstöðu að láni úr öðru kerfi, hverju gerum við ráð fyrir að flytjist með henni?** Rannsókn getur verið gallalaus um orsakasamband í eigin umhverfi og samt villt um fyrir þér, því þýðið, heilbrigðiskerfið, grunnáhættan og hvatarnir sem framleiddu áhrif hennar geta verið ólíkir þínum. Spennan er að áhrifamestu sönnunargögnin koma yfirleitt annars staðar frá – bandarískum tryggingamarkaði, skandinavískri skrá, vel búnum rannsóknarstað – og nákvæmni þeirra freistar þín til að flytja tölunni inn frekar en að yfirheyra hvernig hún passar. Ræðið hvað þyrfti að vera satt um þýði ykkar og kerfi til að áhrifin endurtakist: er grunnáhættan sambærileg, hefur starfsfólk ykkar getuna sem inngripið gerði ráð fyrir, standa sjúklingar ykkar frammi fyrir sömu skorðum? Heiðarlegt svar meðhöndlar ytra gildi sem aðskilda spurningu frá innra gildi, stenst viðbragðið að afskrifa fjarlæga rannsókn einfaldlega því hún er fjarlæg og nefnir hvaða einkenni upprunalega umhverfisins vinna verkið. Versta niðurstaðan er að skala áhrif sem voru raunveruleg þar og fjarverandi hér, og kenna svo inngripinu um frekar en flutningnum.

5. **Hversu mikið af gögnum okkar vantar, og erum við viss um að eyðurnar séu saklausar?** Sérhvert raunverulegt heilbrigðisgagnasafn hefur göt – sjúklingar falla frá, skrár eru ófullkomnar, eftirfylgni lýkur – og hættulega tilfellið er þegar ástæðan fyrir að gögn vantar er sjálf tengd niðurstöðunni, svo að að sleppa ófullkomnum skrám smyglar hljóðlega valskekkju aftur inn í rannsókn sem leit hrein út. Spennan er milli þæginda „heiltilfella“ greiningar, sem er sjálfgefin í flestum tólum og fljótasta leiðin að niðurstöðu, og heiðarleika þess að spyrja hvort fólkið sem hvarf sé kerfisbundið ólíkt þeim sem urðu eftir. Ræðið hvaða hluti þátttakenda tapaðist, hvort þeir sem vantar líta út fyrir að vera veikari, fátækari eða minna tengdir en þeir sem sjást og hvað greiningin gerði ráð fyrir um þá. Gott svar getur oft sagt í hvaða átt vantandi gögn myndu ýta matinu jafnvel þegar gildin sjálf eru óendurheimtanleg, og meðhöndlar hátt eða óútskýrt brottfall sem ógn við alla fullyrðinguna frekar en neðanmálsgrein. Bilunin sem vert er að nefna er teymi sem greinir frá eftirlifendunum eins og þeir væru allt þýðið.

6. **Bregðumst við nokkurn tímann við einni rannsókn, og hvað myndi láta okkur bíða eftir annarri línu sönnunargagna?** Traust á orsakafullyrðingu ætti að koma frá samkomulagi milli aðferða sem bregðast á ólíkan hátt – rannsókn, mismunur-í-mismun, tækjabreytumat sem benda í sömu átt – ekki frá einni sláandi niðurstöðu hversu vel sem hún er framkvæmd. Spennan er að þríhyrningsmæling kostar tíma og fé sem skipulagsheildin vill sjaldan eyða, og ein áhrifamikil niðurstaða skapar þrýsting að bregðast við áður en önnur lína getur verið pöntuð. Ræðið hvaða ákvarðanir eru nógu stórar til að krefjast meira en einnar línu sönnunargagna, og hvað þið gerið þegar aðferðir eru ósammála – því ósamræmi er ekki suð sem á að meðaltalsleggja heldur upplýsing um hvaða forsendur bregðast. Heiðarlegt svar aðgreinir tilgátu sem vert er að prófa frá niðurstöðu sem vert er að bregðast við, og stenst skriðþungann sem breytir einu mati í staðfasta staðreynd einfaldlega því það kom fyrst og sagði það sem fólk vonaði.

## Í reynd: dæmi úr heilsuhagfræði

Heilbrigðisráðuneyti Solveníu, skálduðs efri-meðaltekjuríkis í Mið-Evrópu með félagstryggingakerfi, vill vita hvort ný samfélagsáætlun gegn hjartabilun – hjúkrunarfræðingastýrðar stofur sem fylgjast með sjúklingum eftir útskrift – dragi úr kostnaðarsömum endurinnlögnum á bráðadeild. Tólf svæði hafa þegar tekið hana upp; átta ekki. Snemmbúin innanhússskýrsla bar saman endurinnlagnatíðni í svæðum sem tóku upp og svæðum sem ekki gerðu það, fann hana 18 prósentum lægri hjá þeim sem tóku upp og mælti með landsútbreiðslu. Heilsuhagfræðingur ráðuneytisins er beðin að athuga fullyrðinguna áður en hundruð milljóna króna eru skuldbundnar.

Fyrsta spurning hennar er mótstaðreyndin. Svæðin sem tóku upp voru ekki valin af handahófi: þau voru ríkari, höfðu betur skipulagða frumheilsugæslu og lægri endurinnlagnatíðni *áður* en áætlunin hófst. Hrái samanburðurinn truflar því áhrif áætlunarinnar með forskot fyrir innleiðingui svæðanna sem gátu tekið hana upp – hefðbundinn valvandi. Einfaldur mismunur milli þeirra sem tóku upp og þeirra sem ekki gerðu það getur ekki aðgreint þetta tvennt, og 18 prósenta talan er óskiljanleg sem orsakaáhrif.

Hún leggur í staðinn til mismunur-í-mismun hönnun, með nokkurra ára svæðisbundnum endurinnlagnagögnum fyrir og eftir upptökudag hvers svæðis. Þetta ber saman *breytinguna* á endurinnlögnum í svæðum sem tóku upp við *breytinguna* í svæðum sem tóku ekki upp, og dregur út hvers kyns fast svæðisbundið forskot. Mikilvægt er að hún teiknar fyrst þróun fyrir upptöku: ef svæðin sem tóku upp voru þegar að batna hraðar en hin áður en áætlunin hófst bregst samsíða þróunar forsendan og hönnunin er ógild. Þróunin er nálæg en ekki eins, svo hún greinir frá matinu með þeim fyrirvara sýnilegum frekar en grafinn.

Þar sem upptökudagsetningar voru þrepaskiptar yfir svæði nýtir hún líka raðgagnabygginguna, stýrir fyrir öllu föstu um hvert svæði og fyrir landsvísum áföllum eins og slæmum inflúensuvetri sem lenti á öllum svæðum í einu. Mismunur-í-mismun matið kemur út sem 7 prósenta lækkun á endurinnlögnum – raunveruleg og þess virði að hafa, en vel innan við helmingur fyrirsagnartölunnar, því mest af upprunalegu 18 prósentunum var forskot fyrir innleiðingu svæðanna, ekki áætlunin. Hún athugar síðan vantandi gögn: tvö svæði höfðu ófullkomna kóðun í umskiptaárinu, og hún sýnir að niðurstaðan heldur hvort sem þessi svæðisár eru tekin með eða útilokuð.

Hún er hreinskilin um hvað matið er og er ekki. Það eru meðaláhrifin á svæðum með frumheilsugæslugetuna til að reka hjúkrunarfræðingastofur; svæðin átta sem tóku ekki upp eru fátækari og þunnmannaðri, svo áhrifin þar gætu verið minni eða gætu krafist fjárfestingar sem líkanið verðleggur ekki. Það er spurning um ytra gildi, og hún merkir hana skýrt frekar en að gera ráð fyrir að 7 prósentin flytjist. Tillaga hennar til ráðuneytisins er hvorki „innleiðið á landsvísu“ né „hættið við“, heldur „fjármagnið hana þar sem frumheilsugæslugetan er til staðar, og slembiraðið innleiðingarröð í svæðunum sem eftir eru svo að næsta mat geti útkljáð flutningsspurninguna sem þetta getur ekki.“ Kostnaðarhagkvæmni 7 prósenta lækkunarinnar er síðan afhent ákvörðunarlíkani (Viðfangsefni 2.2 — Líkanagerð) sem breytir orsakamatinu í kostnað á hvern árangur sem greiðandinn getur brugðist við.

## Fjögur geirasjónarhorn

### Sprotafyrirtæki

Stafrænt heilbrigðissprotafyrirtæki mætir yfirleitt hagmælingum í heilsu sem sönnunarkröfu frá kaupanda eða eftirlitsaðila: sannaðu að forritið þitt breyti í raun árangri, ekki bara að áhugasamir notendur standi sig vel. Freistingin er fyrir-og-eftir línurit af áhugasömum snemmbúnum notendum, sem er nánast hrein valskekkja – þeir notendur hefðu batnað hvort sem var. Trúverðuga, viðráðanlega hreyfingin er lítil slembiröðuð tilraun eða þrepaskipt innleiðing yfir staði, hönnuð fyrir ræsingu, sem einangrar áhrif vörunnar frá hvatningu fólksins sem valdi hana. Stofnendur sem byggja hreinan samanburð inn í fyrstu innleiðinguna bera langtum meira vægi hjá greiðendum en þeir sem laga smjaðrandi greiningu síðar.

### Lítil fyrirtæki

Rótgróinn lítill veitandi – hópstofa, ein heilsugæslustöð, samfélagsapótek, lítill tækjabirgi – hefur raunveruleg rekstrargögn en hvorki magnið né greiningarteymið til að keyra eigin hálftilraunarannsóknir, og engan ræsingarpunkt til að slembiraða í kringum. Hagmælingaverk hans er aðallega mat: að lesa sönnunargögnin sem framleiðandi, þjónustukaupandi eða fagfélag leggur fyrir hann og dæma hvort fullyrt áhrif myndu haldast í sjúklingahópi eins og hans eigin. Stöðugasta hreyfingin er að spyrja ytra gildis spurningarinnar fast – var þetta sýnt í þýði, mönnunarstigi og kerfi sem líkist mínu? – frekar en að reyna orsakagreiningu sem hann getur ekki fjármagnað. Þar sem hann framleiðir sönnunargögn er þrepaskipt breyting yfir eigin staði eða lækna, eða einföld fyrir-og-eftir lesning gegn sambærilegri nágrannastofu lesin heiðarlega, trúverðugri en smjaðrandi innanhússlínurit. Ólíkt sprotafyrirtæki sem eltist við sönnunarstiku greiðanda er hvati hans að forðast að taka upp eitthvað sem hljóðlega sóar af skornum skammti tíma og fé á sjúklingahóp sem aldrei passaði við rannsóknina.

### Stórfyrirtæki

Stór veitandi eða tryggingafélag situr á ríkulegum langtímagögnum – kröfum, skrám, skrárgagnasöfnum – og yfirburðir þess eru geta til að keyra raðgagna- og hálftilraunagreiningar í stórum stíl. Áhættan er að taka gagnamagn fyrir orsakaskýrleika: milljón truflaðar skrár geta enn ekki sagt þér hvort umönnunarstýringaráætlun virkaði, og vel búið greiningarteymi getur framleitt fáguð líkön sem þvo valskekkju í sýnileg áhrif. Þroskað stórfyrirtæki aðgreinir innri frammistöðuskýrslugjöf frá orsakamati, heldur hvoru tveggja við ólík viðmið og byggir slembiraðaða eða þrepaskipta hönnun inn í eigin rekstrarinnleiðingar svo að venjubundin breyting framleiði áreiðanleg sönnunargögn frekar en bara mælaborð.

### Hið opinbera

Ráðuneyti eða landsbundinn greiðandi tekur orsakaákvarðanir með hæstu hagsmunum – að skala áætlun á landsvísu, fjármagna eða draga til baka bætur – og hefur oft stefnutæki sem skapa náttúrutilraunir: hæfismörk, þrepaskiptar innleiðingar, svæðisbundnar tilraunir. Agi þess ætti að vera að hanna þær innleiðingar sem mat frá upphafi, svo að óhjákvæmileg þrepaskipting skili mismunur-í-mismun eða samfellurofi frekar en óskiljanlegum samanburði. Ríkisvald ber líka skyldu sem aðrir geirar bera ekki: að verjast pólitísku ósamhverfunni þar sem uppáhaldsáætlanir sleppa við rýni og ógnandi niðurstöður eru véfengdar, með því að skuldbinda sig fyrirfram til matsstaðla og birta niðurstöður hvort sem þær smjaðra stefnunni eða ekki.

## Algeng mistök

- **Að rugla fylgni saman við orsakasamband.** Að greina frá því að meðhöndlaðir sjúklingar stóðu sig betur án þess að taka á hvers vegna þeir voru meðhöndlaðir. Lagfæring: byrjaðu á mótstaðreyndinni og nefndu truflunarþættina áður en munur er túlkaður.

- **Að velja á niðurstöðunni.** Að bera saman sjálfboðaliða og ekki-sjálfboðaliða, fullnægjendur og brottfallendur, eða þá sem tóku upp og þá sem ekki tóku upp eins og hóparnir væru skiptanlegir. Lagfæring: notaðu hönnun (slembiröðun, mismunur-í-mismun, tækjabreytur, samfellurof) sem tekur á hvernig fólk var flokkað í hópa.

- **Þögul heiltilfellagreining.** Að sleppa öllum með vantandi gögn og greina frá afgangnum eins og hann væri allt þýðið. Lagfæring: greindu frá umfangi og mynstri vöntunar og prófaðu hvort niðurstöður lifa af ólíkar forsendur um hana.

- **Að gera ráð fyrir án þess að prófa.** Að setja fram mismunur-í-mismun án þess að athuga samsíða þróun, eða tæki án þess að rökræða ytra eðli þess. Lagfæring: krefstu fölsunarprófanna og meðhöndlaðu fjarveru þeirra sem galla.

- **Að alhæfa staðbundin áhrif.** Að beita viðmiðsbyggðu eða tækjabyggðu mati á þýði sem það lýsti aldrei. Lagfæring: segðu hvers áhrif talan eru og metðu ytra gildi aðskilið frá innra gildi.

- **Tölfræðileg marktækni sem leikhús.** Að meðhöndla p-gildi sem ákvörðunina, hunsa áhrifastærð og óvissu. Lagfæring: krefstu stærða og öryggisbila römmuð gegn raunverulegum fjárlögum og þýði.

- **Að laga greininguna eftirá.** Að leita í fyrirliggjandi gagnasafni þar til þægileg niðurstaða birtist, og setja hana síðan fram eins og hún hafi verið skipulögð fyrirfram. Lagfæring: forskráðu hönnunina og greiningaráætlunina áður en gögnin eru séð.

## Þroskalíkan

| Vídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Orsakahugsun | Fylgni greind frá sem áhrif; „tölurnar hækkuðu“ meðhöndlað sem sönnun | Truflunarþættir viðurkenndir; einhver leiðrétting reynd eftir tilfellum | Mótstaðreynd sett fram skýrt og viðurkennd hönnun valin fyrir hverja fullyrðingu | Forsendur nefndar og fölsunarprófaðar; áhrif skilin sem staðbundin eða almenn | Margar hönnun þríhyrningsmældar yfir skipulagsheildina; ósamræmi grafið upp til að sjá hvaða forsendur bregðast |
| Rannsóknarhönnun og pöntun | Mat keypt sem afturvirk skýrsla eftir innleiðingu | Samanburðarhópar valdir en ekki skipulagðir fyrirfram | Hönnun skipulögð fyrir gagnasöfnun með forskráðum greiningaráætlunum | Slembiraðaðar eða þrepaskiptar innleiðingar pantaðar sem sjálfgefið fyrir marktæka breytingu | Sérhver rekstrarinnleiðing hönnuð sem mat; reksturinn er fast sönnunargagnavél |
| Gögn og vöntun | Ófullkomnar skrár hunsaðar þögult; lögun gagna hunsuð | Vöntun nefnd; einhver viðeigandi líkön fyrir kostnað og talningar | Meðferð vantandi gagna sögð og prófuð, og líkön samræmd gagnalögun | Næmi fyrir vöntun og skilgreiningu greint frá sem staðlað | Gagnagæði og vöntun stýrð ofar í ferlinu svo mat byrji frá áreiðanlegum inntökum |
| Matshæfni | Niðurstöður samþykktar á valdi eða ritrýnimerki | Sumt starfsfólk getur véfengt fyrirsagnarmat | Teymið spyr reglulega hvað þarf að vera satt til að fullyrðing sé orsakaleg | Óháð mat innbyggt og sönnunarstaðlar samþykktir fyrir ákvarðanir | Matshæfni deilt með samstarfsaðilum og birgjum; allt kerfið rökræðir orsakalega |
| Notkun í ákvörðunum | Sönnunargögn notuð sértækt til að styðja valda leið | Sönnunargögn vegin en tvöföld viðmið óstýrð | Sönnunarstaðall og ytra gildi íhuguð fyrir aðgerð | Fyrirfram skuldbundnir sönnunarstaðlar beittir; niðurstöður birtar óháð stefnu | Sönnunarstaðlar stýra safninu; ákvarðanir og orsakagrunnur þeirra skráð og endurskoðuð |

## Gátlisti

- [ ] Segðu mótstaðreyndina: hver er samanburðarhópurinn og hvers vegna myndi hann sýna hvað meðhöndlaði hópurinn hefði gert án inngripsins?
- [ ] Greindu líklega truflunarþætti og valkerfi, og nefndu hönnunina sem tekur á þeim.
- [ ] Staðfestu að hönnunin var skipulögð áður en gögnin voru safnað, með skriflegri greiningaráætlun.
- [ ] Fyrir valda aðferð, nefndu lykilforsenduna (samsíða þróun, ytra eðli tækis, engin viðmiðshagræðing) og athugaðu sönnunargögnin fyrir henni.
- [ ] Krefstu fölsunarprófana, ekki bara fyrirsagnarmatsins.
- [ ] Spyrðu hversu mikið af gögnum vantaði, hvort þeir sem vantar eru ólíkir þeim sem sjást og hvernig vöntun var meðhöndluð.
- [ ] Athugaðu að líkanið passi við lögun gagnanna (skakkan kostnað, talningar, ritskoðaða lifun).
- [ ] Staðfestu hvers áhrif matið eru (staðbundin eða almenn) áður en þú alhæfir það.
- [ ] Lestu áhrifastærðina og öryggisbilið gegn fjárlögum þínum og þýði, ekki aðeins p-gildið.
- [ ] Metðu ytra gildi – myndi þetta halda í kerfinu mínu? – aðskilið frá innra gildi.
- [ ] Leitaðu annarrar línu sönnunargagna fyrir sérhverja ákvörðun nógu stóra til að skipta máli.
- [ ] Skráðu orsakafullyrðinguna, hönnunina, lykilforsendu hennar og hvað myndi breyta skoðun þinni.

## Helstu heimildir

- Andrew Jones, „Health Econometrics“ — í Culyer & Newhouse (ritstj.), *Handbook of Health Economics* — hefðbundna yfirlitið yfir aðferðir fyrir heilbrigðisgögn og gildrur þeirra.
- Jeffrey Wooldridge, *Econometric Analysis of Cross Section and Panel Data* — grundvallarritið um raðgagna- og hálftilraunaaðferðir.
- Joshua Angrist & Jörn-Steffen Pischke, *Mostly Harmless Econometrics* — aðgengileg umfjöllun um orsakaályktun, náttúrutilraunir og hönnunirnar fjórar.
- CONSORT Statement — skýrslugjafarstaðlar fyrir slembiraðaðar samanburðarrannsóknir, gagnlegir sem matsgátlisti.
- Economics Network, *Health Economics for Teachers* — eining um hagmælingar — https://economicsnetwork.ac.uk/health/teachers
- OECD, *Health at a Glance*, og rit Alþjóðaheilbrigðismálastofnunarinnar um heilbrigðiskerfi — heimildir hinna venjubundnu heilbrigðisgagna sem mikið af hagmælingum í heilsu byggir á.

## Tilvísanir

1. Econometrics — Wikipedia — https://en.wikipedia.org/wiki/Econometrics
2. Causal inference — Wikipedia — https://en.wikipedia.org/wiki/Causal_inference
3. Confounding — Wikipedia — https://en.wikipedia.org/wiki/Confounding
4. Selection bias — Wikipedia — https://en.wikipedia.org/wiki/Selection_bias
5. Randomized controlled trial — Wikipedia — https://en.wikipedia.org/wiki/Randomized_controlled_trial
6. Intention-to-treat analysis — Wikipedia — https://en.wikipedia.org/wiki/Intention-to-treat_analysis
7. Natural experiment — Wikipedia — https://en.wikipedia.org/wiki/Natural_experiment
8. Difference in differences — Wikipedia — https://en.wikipedia.org/wiki/Difference_in_differences
9. Instrumental variables estimation — Wikipedia — https://en.wikipedia.org/wiki/Instrumental_variables_estimation
10. Regression discontinuity design — Wikipedia — https://en.wikipedia.org/wiki/Regression_discontinuity_design
11. Panel data — Wikipedia — https://en.wikipedia.org/wiki/Panel_data
12. Missing data — Wikipedia — https://en.wikipedia.org/wiki/Missing_data
13. Economics Network — Health Economics for Teachers — https://economicsnetwork.ac.uk/health/teachers
14. Health economics — Wikipedia — https://en.wikipedia.org/wiki/Health_economics
