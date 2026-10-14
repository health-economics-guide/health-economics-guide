# Ämne 2.3 — Hälsoekonometri

**Hälsoekonometri är disciplinen att utvinna ett tillförlitligt orsak–verkan-påstående ur stökiga verkliga hälsodata, så att du, när någon säger att en insats fungerade, kan bedöma om datan kan bära vikten av det ordet.**

## Varför detta är viktigt inom hälsoekonomi

Nästan varje beslut en hälsoledare fattar vilar på ett kausalt påstående: det här läkemedlet sänker dödligheten, den där kliniken minskade inläggningarna, den här betalningsreformen kortade väntetiderna. Påståendet är lätt att uttala och svårt att förtjäna. Två grupper patienter skiljer sig i ett utfall, men de skilde sig också innan någon ingrep – sjukare människor söker mer vård, rikare regioner inför nya program först, motiverade kliniker anmäler sig frivilligt till pilotprojekt. Kärnproblemet är att vi aldrig observerar vad som hade hänt med den behandlade gruppen om den förblivit obehandlad. Allt i detta ämne handlar om att ärligt approximera den saknade jämförelsen.

Insatserna är offentliga medel och liv. Ett självsäkert men felaktigt kausalt påstående skickar en budget mot en insats som inte gör något, eller drar tillbaka en som i det tysta räddade liv; båda misstagen betalas i utfall, inte bara i valuta. När en nationell betalare avgör att rulla ut ett program över hela landet på grundval av en regional utvärdering är kvaliteten på den utvärderingens kausala resonemang skillnaden mellan att skala en framgång och att skala en illusion. Ledare kör sällan analysen själva, men de beställer den, finansierar den och agerar på den – vilket innebär att granskningskompetensen är deras att äga.

Detta ämne är medvetet ingen lärobok i statistik (se bokens omfattningsgränser). Det kommer inte att härleda en skattare eller rekommendera programvara. Dess uppgift är att tala om vad varje metod är *till för*, när ett kausalt påstående förtjänar ditt förtroende och hur du beställer och granskar ekonometriskt arbete så att du varken luras av en sofistikerad modell eller är avvisande mot god evidens. Där analysen matar en beslutsanalytisk modell som extrapolerar bortom datan hör det maskineriet hemma i Ämne 2.2 — Modellering; här stannar vi vid själva skattningen och huruvida den är kausal.

## Grundläggande begrepp

[Hälsoekonometri](https://en.wikipedia.org/wiki/Econometrics) är tillämpningen av statistiska metoder på hälso- och sjukvårdsdata för att mäta samband och, framför allt, stödja [kausal inferens](https://en.wikipedia.org/wiki/Causal_inference) – försöket att fastställa att en förändring i en sak *orsakar* en förändring i en annan, snarare än att bara röra sig med den. Disciplinen finns därför att korrelation i hälsodata är riklig och vilseledande, och därför att det rena experiment som skulle avgöra frågan ofta är omöjligt, oetiskt eller oöverkomligt dyrt.

Det centrala hindret är [confounding](https://en.wikipedia.org/wiki/Confounding): en tredje faktor som påverkar både vem som får en insats och vilket utfall de upplever, och skapar ett samband som inte är kausalt. Patienter på ett nytt blodförtunnande läkemedel kan blöda mindre än de på det gamla, inte därför att läkemedlet är säkrare utan därför att försiktiga förskrivare gav det till lågriskpatienter. Ålder, deprivation, sjukdomens svårighetsgrad och kliniskt omdöme är obönhörliga confounders i hälsodata, och de ni kan mäta är sällan de som spelar mest roll.

Nära besläktat är [selektionsbias](https://en.wikipedia.org/wiki/Selection_bias): människorna i era behandlade och jämförelsegrupper sorterades in i dem genom en process – självselektion, klinisk triage, geografi, administrativ behörighet – som i sig är relaterad till utfallet. En telehälsotjänst som används av de digitalt säkra kommer att visa goda resultat delvis därför att dess användare var friskare och mer organiserade från början. Selektion är inget besvär att damma bort ur datan; det är ofta hela historien, och metodens uppgift är att neutralisera den.

Guldstandarden för att göra det är den [randomiserade kontrollerade prövningen](https://en.wikipedia.org/wiki/Randomized_controlled_trial) (RCT), där deltagare fördelas till behandling eller kontroll genom slumpen. Randomisering fungerar eftersom den i genomsnitt balanserar både de confounders ni tänkte på och de ni inte tänkte på, så att varje skillnad i utfall kan tillskrivas insatsen. De discipliner som skyddar en prövning – att analysera patienter i den grupp de randomiserades till, känt som [intention-to-treat](https://en.wikipedia.org/wiki/Intention-to-treat_analysis)-analys, och att förregistrera utfallet – finns för att hindra selektionsproblemet från att smyga tillbaka genom bakdörren.

Prövningar är inte alltid genomförbara, så mycket av hälsoekonometrin arbetar med observationsdata och lånar trovärdighet från ett [naturligt experiment](https://en.wikipedia.org/wiki/Natural_experiment) – en situation där något utanför deltagarnas kontroll (en utrullning av policy, en behörighetsregel, ett lotteri, en plötslig prisförändring) efterliknar slumpmässig fördelning. Fyra kvasiexperimentella designer återkommer:

- [Difference-in-differences](https://en.wikipedia.org/wiki/Difference_in_differences) jämför *förändringen* i utfall för en grupp utsatt för en insats mot *förändringen* för en oexponerad jämförelsegrupp under samma period. Dess trovärdighet vilar på antagandet om ”parallella trender”: att, i frånvaro av insatsen, de två gruppernas utfall skulle ha rört sig i takt.
- [Instrumentvariabler](https://en.wikipedia.org/wiki/Instrumental_variables_estimation) använder en variabel som påverkar vem som får behandling men inte har någon direkt effekt på utfallet utom genom behandlingen – avstånd till en klinik, ett lotterinummer, en slumpmässigt tilldelad granskare – för att isolera variation i behandling som är fri från confounding. Ett giltigt instrument är genuint svårt att hitta och omöjligt att fullt ut testa.
- [Regressionsdiskontinuitet](https://en.wikipedia.org/wiki/Regression_discontinuity_design) utnyttjar ett skarpt tröskelvärde – en riskpoäng, en ålder, en inkomstgräns – som avgör behörighet. Människor strax över och strax under linjen är praktiskt taget identiska utom i tillgång till insatsen, så att jämföra dem approximerar ett lokalt experiment.
- Metoder för [paneldata](https://en.wikipedia.org/wiki/Panel_data) följer samma enheter (patienter, sjukhus, regioner) över tid, vilket låter analytikern kontrollera för allt stabilt hos en enhet som aldrig förändras, och därmed ta bort en stor klass av confounders som ett enda tvärsnitt inte kan.

Slutligen ligger [saknade data](https://en.wikipedia.org/wiki/Missing_data) under alla dessa. Patienter hoppar av, journaler är ofullständiga och – avgörande – skälet till att data saknas är ofta relaterat till utfallet, så att kassera ofullständiga poster i det tysta återinför selektionsbias. Hur bortfall hanterades är en av de första frågorna att ställa om varje studie.

## Bästa praxis

1. **Börja från kontrafaktum, inte metoden.** Innan någon väljer en skattare, tvinga fram frågan: vad är jämförelsen, och varför ska vi tro att den säger oss vad som hade hänt utan insatsen? Trovärdigheten i varje resultat flödar från den jämförelsen, inte från sofistikeringen hos statistiken ovanpå. Om svaret är vagt kan ingen teknik rädda det.

2. **Beställ designen innan data samlas in, inte efter.** De starkaste kausala påståendena kommer från designer planerade i förväg – en randomiserad utrullning, en förregistrerad analys, en överenskommen jämförelsegrupp – eftersom att i efterhand anpassa en metod till befintliga data inbjuder analytikern att fortsätta söka tills ett smickrande resultat dyker upp. När ni finansierar en utvärdering, finansiera designfasen och insistera på en skriftlig analysplan innan resultat finns.

3. **Föredra randomisering där det är etiskt och genomförbart, inklusive stegvis utrullning.** Om ett program inte kan nå alla på en gång, fördela ordningen för tillgång genom lotteri eller randomisera vilka platser som går först. Det förvandlar en operativ begränsning till ett trovärdigt experiment till liten extra kostnad, och det är ofta mer försvarbart än att neka någon behandling. Många av de mest betrodda policyutvärderingarna är helt enkelt utrullningar som randomiserats snarare än valts.

4. **Behandla varje kvasiexperimentell design som ett knippe antaganden, och få den att ange sina.** Difference-in-differences lever eller dör på parallella trender; instrumentvariabler på ett instrument som är både relevant och exogent; regressionsdiskontinuitet på att människor inte manipulerar vilken sida av tröskeln de hamnar på. En bra analytiker namnger det antagande resultatet beror på och visar evidens för det; en svag döljer det. Fråga uttryckligen: ”vad måste vara sant för att detta ska vara kausalt, och hur vet du att det är det?”

5. **Kräv falsifieringstesten, inte bara rubrikskattningen.** Trovärdigt kausalt arbete försöker bryta sitt eget påstående: att plotta trender före insatsen för att kontrollera att de var parallella, att testa för hopp vid falska tröskelvärden där inga borde finnas, att visa att instrumentet inte förutsäger utfall det inte borde beröra. Närvaron av dessa kontroller signalerar ärligt arbete; deras frånvaro är en varning oavsett hur stor eller välkommen effekten är.

6. **Insistera på att veta hur saknade data och bortfall hanterades.** Fråga hur stor andel av deltagarna som förlorades, om de saknade skiljer sig från de observerade och vilket antagande analysen gjorde om dem. ”Complete-case-analys” – att i det tysta kasta alla med ett glapp – är det vanligaste sättet selektionsbias återinträder i en studie som såg ren ut. Åt vilket håll de saknade datan skulle skjuta resultatet går ofta att veta även när datan inte gör det.

7. **Anpassa modellen till hälsodatans form.** Kostnader är skeva på grund av några få mycket dyra patienter, utnyttjande är ett antal som inte kan bli negativt och överlevnadsdata är censurerade när uppföljningen slutar. Vanliga linjära metoder passar dem dåligt och kan vilseleda; specialiserade modeller finns för var och en. Du behöver inte kunna matematiken, men du bör veta nog för att fråga ”är den här metoden lämplig för kostnadsdata?” och förvänta dig ett riktigt svar.

8. **Skilj effekten på de behandlade från den effekt ni kan skala.** Många kvasiexperimentella metoder skattar en *lokal* effekt – påverkan på människor nära ett tröskelvärde, eller på dem ett instrument råkade flytta – som kanske inte är lika med effekten av att rulla ut insatsen till alla. En regressionsdiskontinuitet kring 65 års ålder talar om 65-åringar, inte 40-åringar. Innan ni generaliserar ett tal, fråga vems effekt det faktiskt är.

9. **Skilj statistisk signifikans från beslutsrelevans.** En precist skattad liten effekt kan vara statistiskt signifikant och ekonomiskt trivial; en stor effekt kan vara osäker men ändå värd att agera på med tanke på insatserna. Be om effektstorleken, dess konfidensintervall och vad den betyder i skalan av er budget och befolkning – inte bara om ett p-värde passerade ett tröskelvärde. Beslutet hänger på storlek och osäkerhet tillsammans.

10. **Bedöm extern validitet lika noggrant som intern validitet.** En studie kan vara oklanderlig om kausalitet i sin egen miljö och ändå irrelevant för er om populationen, hälso- och sjukvårdssystemet eller baslinjerisken skiljer sig. Ett instrument som fungerade på en amerikansk försäkringsmarknad eller en design validerad i ett skandinaviskt register kanske inte överförs till en låginkomstmiljö med andra data och incitament. Fråga ”skulle denna effekt hålla i mitt system?” som en separat fråga från ”är denna effekt verklig?”

11. **Triangulera i stället för att lita på en enda studie.** När flera metoder med olika antaganden – en prövning, en difference-in-differences, en instrumentvariabelskattning – pekar åt samma håll är tilltro förtjänad; när de divergerar är oenigheten information om vilka antaganden som sviker. Beställ eller sök mer än en evidenslinje för varje beslut stort nog att spela roll, och behandla ett enda slående resultat som en hypotes, inte en slutsats.

12. **Skriv ned bedömningen och förvara den med beslutet.** Anteckna vilket kausalt påstående ni förlitade er på, vilken design som producerade det, vilket antagande det vilade på och vad som skulle få er att ändra uppfattning. Det skyddar organisationen när resultat senare ifrågasätts, och det tvingar fram disciplinen att ange osäkerhet före, inte efter, att utfallet är känt. En utvärdering vars resonemang är odokumenterat är en åsikt med ett diagram.

## Frågor att diskutera med ditt team

1. **För det senaste stora beslut vi motiverade med evidens, vad var jämförelsegruppen – och skulle den verkligen ha gjort samma sak utan insatsen?** Frågan går rakt på kontrafaktum, där det mesta av den svaga evidensen gömmer sig. Tryck förbi rubriktalet till strukturen: vem jämfördes med vem, hur sorterades de in i dessa grupper och vad hade hänt med den behandlade gruppen om inget förändrats. De ärliga spänningarna är att den mest bekväma jämförelsen – före och efter i samma grupp, eller frivilliga kontra icke-frivilliga – vanligen är den mest confoundade, och att de som valde eller valdes ut för en insats nästan alltid skiljer sig från dem som inte gjorde det. En bra diskussion namnger de särskilda confounders som är i spel (svårighetsgrad, deprivation, motivation, kliniskt urval) och frågar om designen neutraliserade dem eller bara ignorerade dem. Det svar ni letar efter är inte ”studien var peer-reviewad” utan en tydlig redogörelse för varför jämförelsen är trovärdig – eller ett erkännande att den inte är det, och att beslutet vilade på omdöme förklätt till evidens.

2. **När vi beställer en utvärdering, köper vi en design eller bara en rapport?** De flesta organisationer upphandlar utvärdering som en leverans som anländer efter att programmet redan körs, vilket är precis när de starkaste kausala designerna redan blivit omöjliga. Spänningen ligger mellan operativ brådska – lansera nu, mät senare – och evidenskvalitet, som beror på beslut fattade innan den första patienten är inskriven: en randomiserad utrullningsordning, en överenskommen jämförelseregion, ett förregistrerat utfall och en analysplan. Diskutera om er beställningsprocess bjuder in analytiker tillräckligt tidigt för att forma designen, eller bara tillräckligt sent för att rationalisera resultatet. Ett ärligt svar konfronterar det faktum att en billig retrospektiv utvärdering kan vara sämre än ingen om den ger falsk tillförsikt, och undersöker om avtal och tidsplaner gör god design strukturellt möjlig eller strukturellt omöjlig i er organisation.

3. **Vilket påstående skulle vi vägra agera på, och vilken evidens skulle få oss att ändra uppfattning?** Frågan prövar om teamet behandlar evidens som en genuin insats eller som dekoration för ett redan fattat beslut. Att i förväg namnge den bevisstandard ett påstående måste uppfylla – och det fynd som skulle få er att vända – är det starkaste skyddet mot bekräftelsebias och mot den selektiva entusiasm som möter resultat vi gillar. Den verkliga spänningen är att intressenter sällan håller gynnade och ogynnade program till samma evidensnivå; ett älskat initiativ får tvivlets fördel, ett hotande plockas isär. En ärlig diskussion lyfter fram var dessa dubbla måttstockar finns i er organisation, kommer överens om vad ”tillräckligt bra för att agera på” betyder för beslut av olika storlek och accepterar att det är obekvämt att på förhand förbinda sig vid vad som skulle få en att ändra uppfattning just därför att det kan göra det.

4. **När vi lånar ett slående resultat från ett annat system, vad antar vi överförs med det?** En studie kan vara oklanderlig om kausalitet i sin egen miljö och ändå vilseleda er, eftersom den population, det hälso- och sjukvårdssystem, den baslinjerisk och de incitament som producerade dess effekt kan vara helt olika era. Spänningen är att den mest imponerande evidensen vanligen kommer från någon annanstans – en amerikansk försäkringsmarknad, ett skandinaviskt register, en välresurssatt prövningsplats – och dess stringens frestar er att importera talet snarare än förhöra dess passform. Diskutera vad som skulle behöva vara sant om er population och ert system för att effekten ska reproduceras: är baslinjerisken jämförbar, har er arbetsstyrka den kapacitet insatsen förutsatte, möter era patienter samma begränsningar? Ett ärligt svar behandlar extern validitet som en separat fråga från intern validitet, motstår reflexen att avfärda en avlägsen studie bara därför att den är avlägsen och namnger vilka drag i den ursprungliga miljön som gör jobbet. Det värsta utfallet är att skala en effekt som var verklig där och frånvarande här, och sedan skylla på insatsen snarare än överföringen.

5. **Hur mycket av vår data saknas, och är vi säkra på att glappen är oskyldiga?** Varje verkligt hälsodataset har hål – patienter hoppar av, journaler är ofullständiga, uppföljningen tar slut – och det farliga fallet är när skälet till att data saknas i sig är relaterat till utfallet, så att kasta ofullständiga poster i det tysta smugglar tillbaka selektionsbias i en studie som såg ren ut. Spänningen ligger mellan bekvämligheten med ”complete-case”-analys, som är standard i de flesta verktyg och den snabbaste vägen till ett resultat, och ärligheten i att fråga om de som försvann systematiskt skiljer sig från dem som stannade. Diskutera hur stor andel av deltagarna som förlorades, om de saknade ser sjukare, fattigare eller mindre engagerade ut än de observerade och vad analysen antog om dem. Ett bra svar kan ofta säga åt vilket håll de saknade datan skulle skjuta skattningen även när själva värdena inte går att återvinna, och behandlar en hög eller oförklarad bortfallsandel som ett hot mot hela påståendet snarare än en fotnot. Felet att namnge är ett team som redovisar de överlevande som om de vore hela populationen.

6. **Agerar vi någonsin på en enda studie, och vad skulle få oss att vänta på en andra evidenslinje?** Tilltro till ett kausalt påstående bör komma från samstämmighet mellan metoder som sviker på olika sätt – en prövning, en difference-in-differences, en instrumentvariabelskattning som pekar åt samma håll – inte från ett enda slående resultat hur väl utfört det än är. Spänningen är att triangulering kostar tid och pengar som organisationen sällan vill spendera, och ett enda imponerande fynd skapar tryck att agera innan en andra linje kan beställas. Diskutera vilka beslut som är stora nog att kräva mer än en evidenslinje, och vad ni gör när metoder är oeniga – eftersom divergens inte är brus att medelvärdesbilda bort utan information om vilka antaganden som sviker. Ett ärligt svar skiljer en hypotes värd att pröva från en slutsats värd att agera på, och motstår den dynamik som förvandlar en enda utvärdering till slagen fast sak bara därför att den kom först och sade vad folk hoppades.

## I praktiken: ett hälsoekonomiskt exempel

Hälsoministeriet i Solvenia, ett fiktivt övre medelinkomstland i Centraleuropa med ett socialförsäkringssystem, vill veta om ett nytt samhällsbaserat hjärtsviktsprogram – sjuksköterskeledda kliniker som följer upp patienter efter utskrivning – minskar kostsamma akuta återinläggningar. Tolv regioner har redan antagit det; åtta har inte. En tidig intern rapport jämförde återinläggningsgrader i antagande kontra icke-antagande regioner, fann dem 18 procent lägre hos de antagande och rekommenderade nationell utrullning. Ministeriets hälsoekonom ombeds kontrollera påståendet innan hundratals miljoner koruna förbinds.

Hennes första fråga gäller kontrafaktum. De antagande regionerna valdes inte slumpmässigt: de var rikare, hade bättre organiserad primärvård och hade lägre återinläggningsgrader *innan* programmet började. Den naiva jämförelsen blandar därför ihop programmets effekt med det förutvarande försprånget hos de regioner som kunde anta det – ett läroboksmässigt selektionsproblem. En enkel skillnad mellan antagande och icke-antagande kan inte skilja de två åt, och siffran 18 procent är oläsbar som en kausal effekt.

Hon föreslår i stället en difference-in-differences-design, med flera års regionala återinläggningsdata före och efter varje regions antagandedatum. Den jämför *förändringen* i återinläggningar i antagande regioner mot *förändringen* i icke-antagande regioner och differentierar bort varje fast regionalt försprång. Avgörande plottar hon först trenderna före antagandet: om de antagande redan förbättrades snabbare än de icke-antagande före programmet sviker antagandet om parallella trender och designen är ogiltig. Trenderna är nära men inte identiska, så hon redovisar skattningen med den reservationen synlig snarare än begravd.

Eftersom antagandedatumen var förskjutna över regioner utnyttjar hon också panelstrukturen och kontrollerar för allt stabilt hos varje region och för nationella chocker som en dålig influensavinter som drabbade varje region på en gång. Difference-in-differences-skattningen landar på en minskning av återinläggningar med 7 procent – verklig och värd att ha, men långt under hälften av rubrikfiguren, eftersom det mesta av de ursprungliga 18 procenten var regionernas förutvarande försprång, inte programmet. Hon kontrollerar sedan saknade data: två regioner hade ofullständig kodning under övergångsåret, och hon visar att resultatet håller oavsett om dessa regionår inkluderas eller utesluts.

Hon är uppriktig med vad skattningen är och inte är. Den är den genomsnittliga effekten i regioner med den primärvårdskapacitet som krävs för att driva sjuksköterskeledda kliniker; de åtta icke-antagande regionerna är fattigare och har tunnare bemanning, så effekten där kunde vara mindre eller kunde kräva investeringar som modellen inte prissätter. Det är en fråga om extern validitet, och hon pekar uttryckligen ut den i stället för att anta att de 7 procenten kommer att överföras. Hennes rekommendation till ministeriet är varken ”rulla ut nationellt” eller ”överge det” utan ”finansiera det där primärvårdskapaciteten finns, och randomisera utrullningsordningen i de återstående regionerna så att nästa utvärdering kan avgöra den överföringsfråga som denna inte kan.” Kostnadseffektiviteten av minskningen på 7 procent överlämnas sedan till en beslutsmodell (Ämne 2.2 — Modellering) som förvandlar den kausala skattningen till en kostnad per utfall som betalaren kan agera på.

## Fyra sektorperspektiv

### Startup-företag

Ett digitalt hälsoföretag i startfasen möter vanligen hälsoekonometri som ett evidenskrav från en köpare eller tillsynsmyndighet: bevisa att din app faktiskt förändrar utfall, inte bara att engagerade användare mår bra. Frestelsen är ett före-och-efter-diagram över entusiastiska tidiga användare, vilket är nästan ren selektionsbias – de användarna hade förbättrats ändå. Det trovärdiga, överkomliga greppet är en liten randomiserad pilot eller en stegvis utrullning över platser, utformad före lansering, som isolerar produktens effekt från motivationen hos de människor som valde den. Grundare som bygger in en ren jämförelse i den första driftsättningen väger långt tyngre hos betalare än de som i efterhand anpassar en smickrande analys.

### Småföretag

En etablerad liten vårdgivare – en gruppmottagning, en enskild klinik, ett samhällsapotek, en liten produktleverantör – har verkliga driftdata men varken volymen eller analysteamet för att köra egna kvasiexperimentella studier, och inget lanseringsögonblick att randomisera kring. Dess ekonometriska uppgift är mestadels granskning: att läsa den evidens en tillverkare, beställare eller yrkesorganisation lägger fram och bedöma om en påstådd effekt skulle hålla i en patientgrupp som dess egen. Det stadigaste greppet är att ställa frågan om extern validitet hårt – visades detta i en population, bemanningsnivå och ett system som liknar mitt? – snarare än att försöka kausal analys den inte kan resurssätta. Där den genererar evidens är en stegvis förändring över sina egna platser eller kliniker, eller en enkel före-och-efter-läsning ärligt jämförd mot en jämförbar grannpraktik, mer trovärdig än ett smickrande internt diagram. Till skillnad från ett startup-företag som jagar en betalares evidensribba är dess incitament att undvika att anta något som i det tysta slösar knappa tid och pengar på en patientgrupp som aldrig motsvarade studien.

### Storföretag

En stor vårdgivare eller försäkrare sitter på rika longitudinella data – anspråk, journaler, register – och dess fördel är förmågan att köra panel- och kvasiexperimentella analyser i stor skala. Risken är att förväxla datamängd med kausal klarhet: en miljon confoundade poster kan fortfarande inte tala om huruvida ett vårdhanteringsprogram fungerade, och ett välresurssatt analysteam kan producera sofistikerade modeller som tvättar selektionsbias till skenbar effekt. Det mogna storföretaget skiljer intern prestationsrapportering från kausal utvärdering, håller de två till olika standarder och bygger in randomiserade eller stegvisa designer i sina egna operativa utrullningar så att rutinförändring genererar pålitlig evidens snarare än bara instrumentpaneler.

### Staten

Ett ministerium eller en nationell betalare fattar de mest högriskfyllda kausala besluten – att skala ett program nationellt, att finansiera eller dra tillbaka en förmån – och har ofta policyspakar som skapar naturliga experiment: behörighetströsklar, fasade utrullningar, regionala pilotprojekt. Dess disciplin bör vara att utforma dessa utrullningar som utvärderingar från början, så att den oundvikliga fasningen ger en difference-in-differences eller en regressionsdiskontinuitet snarare än en oläsbar jämförelse. Staten bär också en plikt som de andra sektorerna inte gör: att skydda mot den politiska asymmetri där gynnade program undgår granskning och hotande fynd bestrids, genom att på förhand förbinda sig vid utvärderingsstandarder och publicera resultat oavsett om de smickrar politiken.

## Vanliga felmönster

- **Att förväxla korrelation med kausalitet.** Att redovisa att behandlade patienter mådde bättre utan att ta itu med varför de behandlades. Åtgärd: börja från kontrafaktum och namnge confounders innan någon skillnad tolkas.

- **Att selektera på utfallet.** Att jämföra frivilliga med icke-frivilliga, fullföljare med avhoppare eller antagare med icke-antagare som om grupperna vore utbytbara. Åtgärd: använd en design (randomisering, difference-in-differences, instrumentvariabler, regressionsdiskontinuitet) som tar itu med hur människor sorterades in i grupper.

- **Tyst complete-case-analys.** Att kasta alla med saknade data och redovisa resten som om det vore helheten. Åtgärd: redovisa omfattningen och mönstret av bortfall och pröva om slutsatserna överlever olika antaganden om det.

- **Att anta utan att pröva.** Att presentera en difference-in-differences utan att kontrollera parallella trender, eller ett instrument utan att argumentera för dess exogenitet. Åtgärd: kräv falsifieringstesten och behandla deras frånvaro som en defekt.

- **Att generalisera en lokal effekt.** Att tillämpa en tröskel- eller instrumentbaserad skattning på en population den aldrig beskrev. Åtgärd: ange vems effekt talet är och bedöm extern validitet separat från intern validitet.

- **Signifikansteater.** Att behandla ett p-värde som beslutet och ignorera effektstorlek och osäkerhet. Åtgärd: kräv storlekar och konfidensintervall ramade mot den faktiska budgeten och befolkningen.

- **Att anpassa analysen i efterhand.** Att söka i ett befintligt dataset tills ett behagligt resultat dyker upp och sedan presentera det som om det vore förplanerat. Åtgärd: förregistrera design och analysplan innan datan ses.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Kausalt resonerande | Korrelationer redovisas som effekter; ”talen gick upp” behandlas som bevis | Confounding erkänns; viss justering försöks fall för fall | Kontrafaktum anges uttryckligen och en erkänd design väljs för varje påstående | Antaganden namnges och falsifieringstestas; effekter förstås som lokala eller generella | Flera designer trianguleras över organisationen; oenighet bryts ned för att se vilka antaganden som sviker |
| Studiedesign och beställning | Utvärdering köps som en retrospektiv rapport efter utrullning | Jämförelsegrupper väljs men planeras inte i förväg | Designer planeras före datainsamling med förregistrerade analysplaner | Randomiserade eller stegvisa utrullningar beställs som standard för väsentlig förändring | Varje operativ utrullning utformas som en utvärdering; beståndet är en stående evidensmotor |
| Data och bortfall | Ofullständiga poster kastas tyst; dataformen ignoreras | Bortfall noteras; vissa lämpliga modeller för kostnader och antal | Hantering av saknade data anges och prövas, och modeller anpassas till dataformen | Känslighet för bortfall och specifikation redovisas som standard | Datakvalitet och bortfall hanteras uppströms så att utvärderingar startar från pålitliga indata |
| Granskningsförmåga | Resultat accepteras på auktoritet eller peer review-etikett | Vissa medarbetare kan ifrågasätta en rubrikskattning | Teamet frågar rutinmässigt vad som måste vara sant för att ett påstående ska vara kausalt | Oberoende granskning inbäddad och bevisstandarder överenskomna före beslut | Granskningsförmåga delas med partner och leverantörer; hela systemet resonerar kausalt |
| Användning i beslut | Evidens används selektivt för att stödja vald kurs | Evidens vägs men dubbla måttstockar är okontrollerade | Bevisstandard och extern validitet beaktas före handling | Förhandsbundna evidensstandarder tillämpas; resultat publiceras oavsett riktning | Evidensstandarder styr portföljen; beslut och deras kausala grund registreras och ses över |

## Checklista

- [ ] Ange kontrafaktum: vad är jämförelsegruppen, och varför skulle den visa vad den behandlade gruppen skulle ha gjort utan insatsen?
- [ ] Identifiera de sannolika confounders och selektionsmekanismerna, och namnge den design som tar itu med dem.
- [ ] Bekräfta att designen planerades innan data samlades in, med en skriftlig analysplan.
- [ ] För den valda metoden, namnge det centrala antagandet (parallella trender, instrumentets exogenitet, ingen tröskelmanipulation) och kontrollera evidensen för det.
- [ ] Kräv falsifieringstesten, inte bara rubrikskattningen.
- [ ] Fråga hur mycket data som saknades, om de saknade skiljer sig från de observerade och hur bortfall hanterades.
- [ ] Kontrollera att modellen passar datans form (skeva kostnader, antal, censurerad överlevnad).
- [ ] Fastställ vems effekt skattningen är (lokal eller generell) innan den generaliseras.
- [ ] Läs effektstorlek och konfidensintervall mot er budget och befolkning, inte bara p-värdet.
- [ ] Bedöm extern validitet – skulle detta hålla i mitt system? – separat från intern validitet.
- [ ] Sök en andra evidenslinje för varje beslut stort nog att spela roll.
- [ ] Anteckna det kausala påståendet, designen, dess centrala antagande och vad som skulle få er att ändra uppfattning.

## Viktiga källor

- Andrew Jones, ”Health Econometrics” — i Culyer & Newhouse (red.), *Handbook of Health Economics* — standardöversikten av metoder för hälsodata och deras fallgropar.
- Jeffrey Wooldridge, *Econometric Analysis of Cross Section and Panel Data* — referenstexten för panel- och kvasiexperimentella metoder.
- Joshua Angrist & Jörn-Steffen Pischke, *Mostly Harmless Econometrics* — en lättillgänglig behandling av kausal inferens, naturliga experiment och de fyra kvasiexperimentella designerna.
- CONSORT-uttalandet — rapporteringsstandarder för randomiserade kontrollerade prövningar, användbart som granskningschecklista.
- Economics Network, *Health Economics for Teachers* — modulen om ekonometri — https://economicsnetwork.ac.uk/health/teachers
- OECD, *Health at a Glance*, och WHO:s publikationer om hälso- och sjukvårdssystem — källor till de rutinmässiga hälsodata som mycket av hälsoekonometrin bedrivs på.

## Referenser

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
