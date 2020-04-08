export const placeData = [
    // == Bjørvika ==
    // - Mat og drikke
    {
        id: 1,
        boroughId: 1,
        name: 'Maaemo',
        image: 'maaemo.jpg',
        address: 'Dronning Eufemias gate 23, 0194 Oslo',
        categoryId: 1,
        website: 'https://maaemo.no',
        reviews: {
            environment: 5,
            selection: 5,
            service: 5,
            value: 5,
            amountOfReviwes: 49
        },
        pricepoint: 'Høyt',
        bio: 'Maaemo er godt forankret i det som er ærlig, ekte og naturlig, og serverer kun mat basert på økologiske råvarer og naturlige ingredienser. Her får man det aller beste av kjøtt, fisk og fugl, grønnsaker, bær og urter fra norske produsenter, satt sammen av et innovativt kjøkken og ansatte som får sette sitt personlige preg på maten, drikken og opplevelsen.',
        types: ['Gourmet', 'Michelin'],
        tags: ['Formelt', 'Romantisk', 'Business', 'Lunsj']
    },
    {
        id: 2,
        boroughId: 1,
        name: 'Nodee Barcode',
        image: 'nodee-barcode.jpg',
        address: 'Dronning Eufemias gate 28, 0191 Oslo',
        categoryId: 1,
        website: 'https://nodee.no',
        reviews: {
            environment: 5,
            selection: 5,
            service: 4,
            value: 5,
            amountOfReviwes: 33
        },
        pricepoint: 'Middels',
        bio: 'Asiatisk fusion- og sushirestaurant med stor vinkjeller, høyt under taket og åpent kjøkken med robatagrill. Nodee byr på alt fra sushi og dim sum til peking-and, japansk grillmat og vegetarretter, og alt er lagt opp til å deles rundt bordet. Kjøkkenet setter også sammen en seksretters som gir dere muligheten til å smake på alt det beste fra menyen.',
        types: ['Gourmet', 'Michelin'],
        tags: ['Formelt', 'Romantisk', 'God utsikt', 'Lunsj']
    },
    {
        id: 3,
        boroughId: 1,
        name: 'Døgnvill Burger',
        image: 'dognvill.jpg',
        address: 'Operagata 6, 0150 Oslo',
        categoryId: 1,
        website: 'https://dognvillburger.no',
        reviews: {
            environment: 5,
            selection: 4,
            service: 3,
            value: 3,
            amountOfReviwes: 14
        },
        pricepoint: 'Middels',
        bio: 'På menyen finnes det alt fra en klassisk cheddar & bacon-burger til originale varianter som er laget med inspirasjon fra andre land og kulturer. I tillegg finner du et stort utvalg av spennende tilbehør. Døgnvill Burger tilbyr også et bredt spekter av både lokale og kjente drikkevarer, samt tjukke, amerikansk-inspirerte milkshakes laget på norsk fløteis.',
        types: ['Burger'],
        tags: ['Barnevennlig', 'Take-away', 'Uteservering', 'Lunsj']
    },
    // - Shopping
    {
        id: 4,
        boroughId: 1,
        name: 'Foto.no',
        image: 'foto.jpg',
        address: 'Dronning Eufemias gate 12, 0191 Oslo',
        categoryId: 2,
        website: 'https://butikk.foto.no',
        reviews: {
            environment: 3,
            selection: 3,
            service: 3,
            value: 4,
            amountOfReviwes: 10
        },
        pricepoint: 'Høyt',
        bio: 'Fotobutikk i Barcode med alt av foto- og videoutstyr, fra eksklusive toppmodeller til pent brukte kameraer og tilbehøt. Mange av de beste kameraene og linsene står utstilt slik at du kan teste dem i butikken.',
        types: ['Foto'],
        tags: ['Rullestolvennlig', 'Formelt']
    },
    {
        id: 5,
        boroughId: 1,
        name: 'Oslo City',
        image: 'oslo-city.jpg',
        address: 'Stenersgata 1, 0050 Oslo',
        categoryId: 2,
        website: 'https://oslocity.no',
        reviews: {
            environment: 3,
            selection: 3,
            service: 3,
            value: 2,
            amountOfReviwes: 83
        },
        pricepoint: 'Middels',
        bio: 'Norges mest besøkte kjøpesenter inneholder over 90 forskjellige butikker og spisesteder fordelt på fem etasjer.',
        types: ['Shopping senter'],
        tags: ['Rullestolvennlig', 'Uformelt', 'Barnevennlig']
    },
    {
        id: 6,
        boroughId: 1,
        name: 'Byporten',
        image: 'byporten.jpg',
        address: 'Jernbanetoget 6, 0154 Oslo',
        categoryId: 2,
        website: 'https://byporten.no',
        reviews: {
            environment: 3,
            selection: 3,
            service: 3,
            value: 2,
            amountOfReviwes: 64
        },
        pricepoint: 'Middels',
        bio: 'Kjøpesenter med over 60 butikker og 12 spisesteder på Oslos mest sentrale beliggenhet, vegg i vegg med Oslo Sentralstasjon.',
        types: ['Shopping senter'],
        tags: ['Rullestolvennlig', 'Uformelt', 'Barnevennlig']
    },
    // - Aktiviteter
    {
        id: 7,
        boroughId: 1,
        name: 'Kunsthall Oslo',
        image: 'kunsthall-oslo.jpg',
        address: 'Rostockgata 2-4, 0191 Oslo',
        categoryId: 3,
        website: 'https://kunsthalloslo.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 3,
            value: 2,
            amountOfReviwes: 51
        },
        pricepoint: 'Middels',
        bio: 'Et ikke-kommersielt rom for kunst i Bjørvika som viser internasjonal samtidskunst, med hovedvekt på nye produksjoner.',
        types: ['Kunst'],
        tags: ['Rullestolvennlig', 'Formelt']
    },
    {
        id: 8,
        boroughId: 1,
        name: 'Den Norske Opera',
        image: 'norske-opera.jpg',
        address: 'Kirsten Flagstads plass 1, 0106 Oslo',
        categoryId: 3,
        website: 'https://operaen.no',
        reviews: {
            environment: 5,
            selection: 5,
            service: 5,
            value: 4,
            amountOfReviwes: 92
        },
        pricepoint: 'Høyt',
        bio: 'Oslos operahus ligger rett ved fjorden, og minner om et isfjell der det reiser seg skrått opp fra vannkanten. Besøkende inviteres til å gå en tur på taket og nyte panoramautsikt over Oslo og Oslofjorden, året rundt.',
        types: ['Opera', 'Ballett'],
        tags: ['Rullestolvennlig', 'Formelt']
    },
    {
        id: 9,
        boroughId: 1,
        name: 'SALT',
        image: 'salt.jpg',
        address: 'Langkaia 1, 0150 Oslo',
        categoryId: 3,
        website: 'https://salted.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 4,
            value: 4,
            amountOfReviwes: 23
        },
        pricepoint: 'Middels',
        bio: 'SALT er et nomadisk kunstprosjekt på Langkaia i Oslo, med utsikt not Operaen. Prosjektet samler kunst, musikk, mat og arkitektur i flere spektakulære trekonstruksjoner designet av Sami Rintala (Rintala Eggertsson Architects). Salt har en av Oslos største uteserveringer, som er åpen hele året. Her kan du slappe av i den forfriskende brisen på kaikanten på sommeren og kose deg ved båltønner på vinteren.',
        types: ['Kunst', 'Bar'],
        tags: ['Rullestolvennlig', 'Vinter', 'Sommer']
    },
    // == Grünerløkka ==
    // - Mat og drikke
    {
        id: 10,
        boroughId: 2,
        name: 'SüdØst',
        image: 'sudost.jpg',
        address: 'Trondheimsveien 5, 0560 Oslo',
        categoryId: 1,
        website: 'https://sudost.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 5,
            value: 5,
            amountOfReviwes: 47
        },
        pricepoint: 'Middels',
        bio: 'På SüdØst smeltes asiatiske og europeiske matkulturer sammen til konseptet Asian Crossover. På menyen er det stort utvalg av sushi og asiatiske småretter, samt en rekke grillretter og pasta.',
        types: ['Fusion', 'Gourmet'],
        tags: ['Romantisk', 'Business', 'Rullestolvennlig']
    },
    {
        id: 11,
        boroughId: 2,
        name: 'Mathallen Oslo',
        image: 'mathallen.jpg',
        address: 'Vulkan 5, 0178 Oslo',
        categoryId: 1,
        website: 'https://mathallenoslo.no',
        reviews: {
            environment: 3,
            selection: 5,
            service: 4,
            value: 4,
            amountOfReviwes: 32
        },
        pricepoint: 'Middels',
        bio: 'Mathallen på Vulkan er et foodie-paradis med mer enn 30 spesialbutikker, kafeer og spisesteder med mat og drikke av høy kvalitet. Her får du varer som du ikke finner andre steder i byen, og du treffer flinke fagfolk som gjerne gir gode råd og tips.',
        types: ['Mathall'],
        tags: ['Take-away', 'Business', 'Rullestolvennlig', 'Barnevennlig', 'Lunsj']
    },
    {
        id: 12,
        boroughId: 2,
        name: 'Freddy Fuego',
        image: 'freddy-fuego.jpg',
        address: 'Hausmanns gate 31A, 0182 Oslo',
        categoryId: 1,
        website: 'https://freddyfuego.no',
        reviews: {
            environment: 3,
            selection: 3,
            service: 3,
            value: 3,
            amountOfReviwes: 86
        },
        pricepoint: 'Lavt',
        bio: 'Nylagde burritos med ferskt fyll som du velger selv - på Freddy Fuego er det ingenting som fryses eller stekes. Her lages autentiske regionale salsaer hver dag, og kjøttet marineres i en hemmelig chiliblanding før det varmes langsomt for å bli ekstra mørt og velsmakende.',
        types: ['Burito', 'Meksikansk'],
        tags: ['Take-away', 'Rullestolvennlig', 'Barnevennlig', 'Lunsj']
    },
    // - Shopping
    {
        id: 13,
        boroughId: 2,
        name: 'Sykkelpikene',
        image: 'sykkelpikene.jpg',
        address: 'Thorvald Meyers gate 54, 0552 Oslo',
        categoryId: 2,
        website: 'https://sykkelpikene.no',
        reviews: {
            environment: 5,
            selection: 2,
            service: 4,
            value: 4,
            amountOfReviwes: 63
        },
        pricepoint: 'Lavt',
        bio: 'Sykler og tilbehør til folk i alle aldre som "sykler med stil"! Sykkelpikene på Grünerløkka har som ønske å gjøre dine sykkelturer bedre, og tilbyr både elsykler, bysykler, hjelmer, sykkelvesker og masse annet sykkelutstyr.',
        types: ['Sykkel'],
        tags: ['Rullestolvennlig', 'Barnevennlig', 'Sommer']
    },
    {
        id: 14,
        boroughId: 2,
        name: 'Schous Bøker',
        image: 'schous-boker.jpg',
        address: 'Schous Plass 7A, 0552 Oslo',
        categoryId: 2,
        website: 'https://schousboker.no',
        reviews: {
            environment: 3,
            selection: 2,
            service: 5,
            value: 4,
            amountOfReviwes: 12
        },
        pricepoint: 'Lavt',
        bio: 'Uavhengig bruktbokhandel på Grünerløkka som rommer utgivelser i nesten alle sjangere, med spesielt godt utvalg av moderne klassikere, barnebøker og tegneserier. Butikken har også gode lenestoler, hyggelig atmosfære og kaffe på trakteren!',
        types: ['Bøker'],
        tags: ['Rullestolvennlig', 'Barnevennlig']
    },
    {
        id: 15,
        boroughId: 2,
        name: 'Robot',
        image: 'robot.jpg',
        address: 'Korsgata 22, 0551 Oslo',
        categoryId: 2,
        website: '#',
        reviews: {
            environment: 3,
            selection: 2,
            service: 5,
            value: 2,
            amountOfReviwes: 11
        },
        pricepoint: 'Lavt',
        bio: 'Importerte vintage- og retroklær til en overkommelig pris. Robot tilbyr også personlige stylingtips.',
        types: ['Klær'],
        tags: ['Rullestolvennlig', 'Barnevennlig']
    },
    // - Aktiviteter
    {
        id: 16,
        boroughId: 2,
        name: 'Ølakadamiet',
        image: 'olakademiet.jpg',
        address: 'Thorvald Meyers gate 71A, 0552 Oslo',
        categoryId: 3,
        website: 'https://ol-akademiet.no',
        reviews: {
            environment: 5,
            selection: 4,
            service: 5,
            value: 5,
            amountOfReviwes: 19
        },
        pricepoint: 'Middels',
        bio: 'Norges ledende kurs- og aktivitetsleverandør på fagfeltet øl er et uavhengig selskap stiftet av og for ølinteresserte. Ølakademiets ansatte formidler ølkunnskap og ølkultur gjennom kursing, aktiviteter og turer, med vekt på kunnskap, engasjement, gjestfrihet og humor.',
        types: ['Bar'],
        tags: ['Romantisk', 'Uformelt']
    },
    {
        id: 17,
        boroughId: 2,
        name: 'Mad Goats Paddling',
        image: 'mad-goats-paddling.jpg',
        address: 'Nordre gate 2, 0551 Oslo',
        categoryId: 3,
        website: 'https://madgoats.no',
        reviews: {
            environment: 5,
            selection: 5,
            service: 5,
            value: 5,
            amountOfReviwes: 63
        },
        pricepoint: 'Middels',
        bio: 'Mad Goats tilbyr kajakk- og SUP(stand up-paddling)-turer på Akerselva og kurs på havet. Tilbudet retter seg både mot nybegynnere og deg med erfaring i kajakk og på SUP.',
        types: ['Vannsport'],
        tags: ['Romantisk', 'Uformelt']
    },
    {
        id: 18,
        boroughId: 2,
        name: 'Vulkan Klatresenter',
        image: 'vulkan-klatresenter.jpg',
        address: 'Maridalsveien 17, 0175 Oslo',
        categoryId: 3,
        website: 'https://kolsaas.no',
        reviews: {
            environment: 3,
            selection: 4,
            service: 4,
            value: 4,
            amountOfReviwes: 38
        },
        pricepoint: 'Middels',
        bio: 'Klatresenter med både klatrevegg og buldrevegger. Stedet drives av Kolsås klatreklubb, som også arrangerer klatrekurs og klatreturer rundt Oslo, til fjells og på bre.',
        types: ['Klatring'],
        tags: ['Uformelt']
    },
    // == Oslofjorden ==
    // - Mat og drikke
    {
        id: 19,
        boroughId: 3,
        name: 'Gressholmen Kro',
        image: 'gressholmen-kro.jpg',
        address: 'Gressholmen, 0150 Oslo',
        categoryId: 1,
        website: 'https://gressholmenkro.no',
        reviews: {
            environment: 5,
            selection: 3,
            service: 4,
            value: 3,
            amountOfReviwes: 27
        },
        pricepoint: 'Middels',
        bio: 'Tradisjonsrik, sommeråpen kafé og restaurant på øya Gressholmen i Oslofjorden med solrik uteservering. Her kan du nyte godt drikke og god mat basert på kortreiste råvarer, i fredelige omgivelser en kort båttur fra Oslo sentrum. ',
        types: ['Sjømat', 'Kortreist'],
        tags: ['Uformelt', 'Utsikt', 'Sommer']
    },
    {
        id: 20,
        boroughId: 3,
        name: 'Skur 33',
        image: 'skur33.jpg',
        address: 'Akershusstranda 11, 0150 Oslo',
        categoryId: 1,
        website: 'https://skur33.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 3,
            value: 4,
            amountOfReviwes: 46
        },
        pricepoint: 'Høyt',
        bio: 'Italiensk sjømatrestaurant på Akershusstranda med utsikt mot Oslofjorden, Aker Brygge og Tjuvholmen.',
        types: ['Sjømat', 'Italiensk'],
        tags: ['Uformelt', 'Utsikt', 'Sommer']
    },
    {
        id: 21,
        boroughId: 3,
        name: 'Revierhavnen Kro',
        image: 'revierhavnen-kro.jpg',
        address: 'Hovedøya, 0160 Oslo',
        categoryId: 1,
        website: 'https://revierhavnenkro.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 3,
            value: 4,
            amountOfReviwes: 31
        },
        pricepoint: 'Middels',
        bio: 'À la carte-restaurant på Hovedøya i Oslofjorden, åpen fra påske til oktober. Menyen varierer med årstidene, men blant gjengangere er fiskesuppe, blåskjell, hamburgere, skalldyrtallerken, biff og  dagens husmannskost. I tillegg serveres småretter, smørbrød og salater.',
        types: ['Sjømat', 'Grill'],
        tags: ['Uformelt', 'Sommer']
    },
    // - Shopping -  NB! Ikke satt for dette stedet

    // - Aktiviteter
    {
        id: 22,
        boroughId: 3,
        name: 'Sørenga Sjøbad',
        image: 'sørenga-sjøbad.jpg',
        address: 'Sørengkaia, 0194 Oslo',
        categoryId: 3,
        website: 'https://sorenga.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 3,
            value: 4,
            amountOfReviwes: 29
        },
        pricepoint: 'Lavt',
        bio: 'Stort sjøbad med åpent basseng, strand, barnebasseng, stupetårn og et stort rekreasjonsområde hvor det vrimler av folk på varme dager.',
        types: ['Bading'],
        tags: ['Sommer']
    },
    {
        id: 23,
        boroughId: 3,
        name: 'Green Boats',
        image: 'green-boats.jpg',
        address: 'Stranden 30, 0250 Oslo',
        categoryId: 3,
        website: 'https://greenboats.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 4,
            value: 4,
            amountOfReviwes: 36
        },
        pricepoint: 'Middels',
        bio: 'Bli kaptein på Oslofjorden og lei en elektrisk båt fra GreenBoats på Aker Brygge. GreenBoats finner gamle båter som skal skrotes, renoverer dem, utstyrer dem med elektriske motorer og gir dem et nytt liv.',
        types: ['Båtleie'],
        tags: ['Sommer', 'Miljøvennlig']
    },
    {
        id: 24,
        boroughId: 3,
        name: 'Øyhopping',
        image: 'øyhopping.jpg',
        address: 'Rådhusbrygge 4, 0160 Oslo',
        categoryId: 3,
        website: 'https://oslo.kommune.no/natur-kultur-og-fritid/tur-og-friluftsliv/badeplasser-og-temperaturer/',
        reviews: {
            environment: 4,
            selection: 5,
            service: 3,
            value: 4,
            amountOfReviwes: 29
        },
        pricepoint: 'Middels',
        bio: 'Ta rutebåten mellom øyene og opplev livet i Oslofjorden! Med en vanlig billett fra Ruter eller med Oslo Pass kan du hoppe av og på båtene som går mellom Aker brygge og Hovedøya, Lindøya, Nakholmen, Bleikøya, Gressholmen og Langøyene.',
        types: ['Utforskning'],
        tags: ['Sommer', 'God utsikt', 'Miljøvennlig']
    },
    // == Bygdøy ==
    // - Mat og drikke
    {
        id: 25,
        boroughId: 4,
        name: 'Kafé Villa Grande',
        image: 'kafe-villa-grande.jpg',
        address: 'Huk aveny 56, 0287 Oslo',
        categoryId: 1,
        website: 'https://sult.no/villa-grande',
        reviews: {
            environment: 4,
            selection: 4,
            service: 3,
            value: 4,
            amountOfReviwes: 10
        },
        pricepoint: 'Middels',
        bio: 'Herregårdskafé og selskapslokaler i et fredet rom med utsikt over hagen på Villa Grande. Kafeen er et hyggelig møtested for både turgåere og HL-senterets besøkende, og serverer enkle retter, salater, smørbrød og kaker.',
        types: ['Grill', 'Internasjonal'],
        tags: ['Uteservering', 'Lunch', 'Catering']
    },
    {
        id: 26,
        boroughId: 4,
        name: 'Lanternen Restaurant',
        image: 'lanternen-restaurant.jpg',
        address: 'Huk aveny 2, 0287 Oslo',
        categoryId: 1,
        website: 'https://restaurantlanternen.no',
        reviews: {
            environment: 5,
            selection: 4,
            service: 3,
            value: 3,
            amountOfReviwes: 34
        },
        pricepoint: 'Middels',
        bio: 'Spisested og selskapslokaler som ligger omkranset av et maritimt miljø på Bygdøy med utsikt over indre Oslofjord og Dronningen småbåthavn.',
        types: ['Sjømat', 'Norsk mat'],
        tags: ['Uteservering', 'Lunch', 'God utsikt', 'Parkeringsplass']
    },
    {
        id: 27,
        boroughId: 4,
        name: 'Hjemme hos svigers',
        image: 'cafe-svigers.jpg',
        address: 'Fredriksborgveien 16, 0286 Oslo',
        categoryId: 1,
        website: 'https://cafehjemmehossvigers.no',
        reviews: {
            environment: 5,
            selection: 5,
            service: 5,
            value: 5,
            amountOfReviwes: 53
        },
        pricepoint: 'Middels',
        bio: 'Familiedrevet kafé og antikvitetsbutikk i det gamle postkontoret på Bygdøy. Her kan du også kjøpe både bordene, stolene og serviset du bruker i kafeen. Hjemme hos svigers serverer hjemmelagd mat laget fra bunnen: supper, sandwicher, salater, desserter og et stort utvalg forskjellige hamburgere. Rettene kan også lages gluten- og laktosefrie.',
        types: ['Hjemmelaget'],
        tags: ['Uteservering', 'Lunch', 'Internasjonal']
    },
    // - Shopping NB! Ikke satt for dette stedet

    // - Aktiviteter
    {
        id: 28,
        boroughId: 4,
        name: 'Frammuseet',
        image: 'frammuseet.jpg',
        address: 'Bygdøynesveien 36, 0286 Oslo',
        categoryId: 3,
        website: 'https://frammuseum.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 3,
            value: 3,
            amountOfReviwes: 37
        },
        pricepoint: 'Middels',
        bio: 'Fram er verdens sterkeste skute av tre, og er det skip som har vært lengst nord og lengst syd. På Frammuseet kan du gå om bord for å se hvordan mannskap og hunder levde på verdens kaldeste og farligste steder – Arktis og Antarktis.',
        types: ['Museum'],
        tags: ['Uformelt']
    },
    {
        id: 29,
        boroughId: 4,
        name: 'Vikingskipshuset',
        image: 'vikingskipshuset.jpg',
        address: 'Huk Aveny 35, 0287 Oslo',
        categoryId: 3,
        website: 'https://khm.uio.no/english',
        reviews: {
            environment: 4,
            selection: 4,
            service: 3,
            value: 3,
            amountOfReviwes: 25
        },
        pricepoint: 'Middels',
        bio: 'Museum på Bygdøy med verdens best bevarte vikingskip og mange spennende funn fra vikingtiden i Norge. Den nye opplevelsesfilmen Vikingtiden lever vises hele dagen i taket og på veggen inne på museet.',
        types: ['Museum'],
        tags: ['Uformelt']
    },
    {
        id: 30,
        boroughId: 4,
        name: 'Norsk Folkemuseum',
        image: 'norsk-folkemuseum.jpg',
        address: 'Museumsveien 10, 0287 Oslo',
        categoryId: 3,
        website: 'https://norskfolkemuseum.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 3,
            value: 4,
            amountOfReviwes: 23
        },
        pricepoint: 'Middels',
        bio: 'Et av verdens eldste og største friluftsmuseer, med 155 historiske bygninger, egen gamleby og en stavkirke fra ca. år 1200. Innendørsutstillingene viser folkekunst, folkedrakter, samisk kultur, våpen, leketøy, farmasihistorie, tannlegeutstyr og skiftende utstillinger.',
        types: ['Museum'],
        tags: ['Uformelt']
    },
    // == Aker Brygge ==
    // - Mat og drikke
    {
        id: 31,
        boroughId: 5,
        name: 'Bølgen & Moi',
        image: 'bølgen-moi.jpg',
        address: 'Tjuvholmen allé 5, 0252 Oslo',
        categoryId: 1,
        website: 'https://bolgenogmoi.no',
        reviews: {
            environment: 3,
            selection: 4,
            service: 4,
            value: 4,
            amountOfReviwes: 65
        },
        pricepoint: 'Høy',
        bio: 'Restaurant og bar på Tjuvholmens solside med stor uteservering og en variert meny med mye godt fra havet. Bølgen & Mois restauranter er kjente for god mat og drikke i samspill med kunst og kreativitet, og det gjelder på Tjuvholmen også; her kan du la deg fascinere av alt fra oppdekkingen av bordene til de berømte Per Fronth-kunstverkene på veggene.',
        types: ['Sjømat', 'Kjøtt', 'Norsk'],
        tags: ['Uformelt', 'Lunch', 'Middag']
    },
    {
        id: 32,
        boroughId: 5,
        name: 'Ling Ling Oslo',
        image: 'lingling.jpg',
        address: 'Stranden 30, 0250 Oslo',
        categoryId: 1,
        website: 'https://lingling.hakkasan.com/nb/oslo',
        reviews: {
            environment: 4,
            selection: 5,
            service: 4,
            value: 4,
            amountOfReviwes: 56
        },
        pricepoint: 'Høy',
        bio: 'Hakkasans første restaurant i Skandinavia henter inspirasjon fra Izakaya, et asiatisk konsept hvor det er like stor fokus på drikke som på maten. Restauranten har uteservering og bar på taket med flott utsikt over Aker Brygge og Oslofjorden.',
        types: ['Fusion', 'Asiatisk', 'Norsk'],
        tags: ['Formelt', 'Uteservering', 'God utsikt', 'Business']
    },
    {
        id: 33,
        boroughId: 5,
        name: 'Olivia Aker Brygge',
        image: 'olivia-aker-brygge.jpg',
        address: 'Stranden 3, 0250 Oslo',
        categoryId: 1,
        website: 'https://oliviarestauranter.no',
        reviews: {
            environment: 4,
            selection: 3,
            service: 4,
            value: 4,
            amountOfReviwes: 47
        },
        pricepoint: 'Middels',
        bio: 'Italiensk restaurant i de gamle Verkstedhallene, med gedigen takhøyde, røffe mursteinsvegger, koselige peiser, levende lys og sør-italiensk stemning.',
        types: ['Italiensk', 'Pizza'],
        tags: ['Formelt', 'Uteservering', 'Lunch']
    },
    // - Shopping
    {
        id: 34,
        boroughId: 5,
        name: 'Fiskebutikken',
        image: 'fiskebutikken.jpg',
        address: 'Tjuvholmen allé 14, 0252 Oslo',
        categoryId: 2,
        website: 'https://sjomagasinet.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 3,
            value: 4,
            amountOfReviwes: 32
        },
        pricepoint: 'Middels',
        bio: 'Fiskebutikken på Tjuvholmen Sjømagasin får inn ferske råvarer hver dag, og byr på et variert og rikt utvalg av fisk og skalldyr. I disken finner du også spennende tilbehør fra inn- og utland, og personalet hjelper gjerne til med anbefalinger og tilberedningstips.',
        types: ['Fiskebutikk'],
        tags: ['Formelt', 'Marked']
    },
    {
        id: 35,
        boroughId: 5,
        name: 'Aker Brygge Shopping',
        image: 'aker-brygge-shopping.jpg',
        address: 'Bryggegata, 0250 Oslo',
        categoryId: 2,
        website: 'https://akerbrygge.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 3,
            value: 4,
            amountOfReviwes: 33
        },
        pricepoint: 'Middels',
        bio: 'På Aker Brygge finner du mer enn butikker – de fleste med mote og design, men området har også spesialistforretninger med blomster, sko, ur, optikk, dagligvarer, bøker, smykker og gaveartikler.',
        types: ['Klær', 'Smykker'],
        tags: ['Formelt']
    },
    {
        id: 36,
        boroughId: 5,
        name: 'Mark+Brandy',
        image: 'markbrandy.jpg',
        address: 'Grundingen 4, 0250 Oslo',
        categoryId: 2,
        website: 'https://markandbrandy.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 4,
            value: 3,
            amountOfReviwes: 28
        },
        pricepoint: 'Middels',
        bio: 'Mark+Brandy er en multibrand-butikk på Aker Brygge med høy trendfaktor. Her får du designplagg til dame og herre fra merker som Ganni, Totême, Ulla Johnson, Acne Studios, Max Mara, Polo Ralph Lauren, Swims, Canada Goose og Wolford.',
        types: ['Klær'],
        tags: ['Formelt']
    },
    // - Aktiviteter
    {
        id: 37,
        boroughId: 5,
        name: 'Astrup Fearnley Mus.',
        image: 'astrup-fearnley.jpg',
        address: 'Strandpromenaden 2, 0252 Oslo',
        categoryId: 3,
        website: 'https://afmuseet.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 4,
            value: 5,
            amountOfReviwes: 61
        },
        pricepoint: 'Middels',
        bio: 'Astrup Fearnley-samlingen er en av Nord-Europas viktigste samlinger av moderne kunst og samtidskunst. I tillegg har museet skiftende utstillinger med ledende samtidskunstnere.',
        types: ['Museum'],
        tags: ['Formelt']
    },
    {
        id: 38,
        boroughId: 5,
        name: 'Tjuvtitten',
        image: 'tjuvtitten.jpg',
        address: 'Albert Nordengens plass, 0252 Oslo',
        categoryId: 3,
        website: 'https://tjuvholmen.no',
        reviews: {
            environment: 4,
            selection: 3,
            service: 4,
            value: 3,
            amountOfReviwes: 32
        },
        pricepoint: 'Middels',
        bio: 'Utkikkstårn på Tjuvholmen med en glassheis som tar deg 54 meter over bakken. Fra utkikkspunktet på toppen kan du se byen, fjorden, båtene og åsene fra en helt ny vinkel.',
        types: ['Utkikkstårn'],
        tags: ['Sommer', 'God utsikt']
    },
    {
        id: 39,
        boroughId: 5,
        name: 'Tjuvholmen skulpturpark',
        image: 'tjuvholmen-skulpturpark.jpg',
        address: 'Tjuvholmen, 0252 Oslo',
        categoryId: 3,
        website: 'https://tjuvholmen.no',
        reviews: {
            environment: 4,
            selection: 3,
            service: 4,
            value: 3,
            amountOfReviwes: 35
        },
        pricepoint: 'Middels',
        bio: 'Skulpturpark ved Astrup Fearnley Museet ytterst på Tjuvholmen. Både parken og museet er designet av den verdenskjente arkitekten Renzo Piano.',
        types: ['Park'],
        tags: ['Sommer', 'Kunst']
    },
    // == Oslo øst ==
    // - Mat og drikke
    {
        id: 40,
        boroughId: 6,
        name: 'Nodee Sky',
        image: 'nodee-sky.jpg',
        address: 'Dronning Eufemias gate 28, 0191 Oslo',
        categoryId: 1,
        website: 'https://nodee.no/sky',
        reviews: {
            environment: 5,
            selection: 4,
            service: 4,
            value: 3,
            amountOfReviwes: 38
        },
        pricepoint: 'Høyt',
        bio: 'Nodee Sky serverer moderne japanske retter i elegante omgivelser med en helt unik atmosfære. Restauranten ligger i 13. og 14. etasje i Barcode og byr på flott panoramautsikt over byen og fjorden.',
        types: ['Japansk', 'Sushi'],
        tags: ['Uteservering', 'Solterrasse', 'Vinkart', 'Business']
    },
    {
        id: 41,
        boroughId: 6,
        name: 'Dattera til Hagen',
        image: 'dattera-til-hagen.jpg',
        address: 'Grønland 10, 0188 Oslo',
        categoryId: 1,
        website: 'https://dattera.no',
        reviews: {
            environment: 3,
            selection: 4,
            service: 4,
            value: 4,
            amountOfReviwes: 32
        },
        pricepoint: 'Middels',
        bio: 'Fargerik bar, kafé og klubb i to etasjer med en av byens koseligste bakgårder. Både på dagtid og utover kvelden kan du få godt drikke, sandwicher, tapas, salater og burgere her, og i helgene er det djs i begge etasjer. Musikkprofilen har trykk på elektronika i ulike former, samt reggae, disco, funk, pop, folk, jazz og soul.',
        types: ['Bar', 'Kafé', 'Klubb'],
        tags: ['Uteservering', 'Tapas', 'Lunch']
    },
    {
        id: 42,
        boroughId: 6,
        name: 'Code',
        image: 'code.jpg',
        address: 'Dronning Eufemias gate 18, 0188 Oslo',
        categoryId: 1,
        website: 'https://coderestaurant.no',
        reviews: {
            environment: 5,
            selection: 5,
            service: 5,
            value: 5,
            amountOfReviwes: 36
        },
        pricepoint: 'Høyt',
        bio: 'Code er en moderne kontinental restaurant. Folkene bak er meget erfarne - og både lever og ånder for å lage den perfekte restaurantopplevelse. Restauranten holder til i MAD-bygget på Barcode i Oslo som har blitt tildelt flere internasjonale priser for sin unike design. Code ligger også i samme nabolag som operaen, Munch-museet og nasjonalbibloteket. Fra restauranten kan du nyte utsikten til Oslos mest spennende område med kreativ arkitektur.',
        types: ['Sjømat', 'Fusion', 'Kjøtt'],
        tags: ['Formelt', 'Rullestolvennlig', 'Business', 'God utsikt']
    },
    // - Shopping
    {
        id: 43,
        boroughId: 6,
        name: 'Gunerius senter',
        image: 'gunerius.jpg',
        address: 'Storgata 32, 0184 Oslo',
        categoryId: 2,
        website: 'https://gunerius.no',
        reviews: {
            environment: 4,
            selection: 2,
            service: 3,
            value: 3,
            amountOfReviwes: 36
        },
        pricepoint: 'Middels',
        bio: 'Gunerius Shoppingsenter er et av de største kjøpesentrene i Oslo sentrum, med ca. 18 000 besøkende om dagen - 5,5 millioner i året. Det første kjøpesenteret på dette stedet ble åpnet i 1852 av Gunerius Pettersen.',
        types: ['Shopping'],
        tags: ['Uformelt', 'Barnevennlig', 'Sentralt']
    },
    {
        id: 44,
        boroughId: 6,
        name: 'Byporten Shopping',
        image: 'byporten.jpg',
        address: 'Jernbanetorget 6, 0154 Oslo',
        categoryId: 2,
        website: 'https://byporten.no',
        reviews: {
            environment: 4,
            selection: 2,
            service: 4,
            value: 3,
            amountOfReviwes: 54
        },
        pricepoint: 'Middels',
        bio: 'Byporten er navnet på et kjøpesenter, med noe annet kontorareal, knyttet til Oslo sentralstasjon. Det eies av KLP Eiendom AS. Senteret har adresse til Jernbanetorget 6 og ligger på hjørnet til Biskop Gunnerus gate.',
        types: ['Shopping'],
        tags: ['Uformelt', 'Barnevennlig', 'Sentralt']
    },
    {
        id: 45,
        boroughId: 6,
        name: 'Oslo City',
        image: 'oslo-city.jpg',
        address: 'Stenersgata 1, 0050 Oslo',
        categoryId: 2,
        website: 'https://oslo-city.steenstrom.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 4,
            value: 3,
            amountOfReviwes: 49
        },
        pricepoint: 'Middels',
        bio: 'Oslo City er et norsk kjøpesenter som ligger på Vaterland i Oslo, like ved Oslo S og Oslo Plaza. Det er et av Norges største kjøpesentre, både når det gjelder areal og omsetning.',
        types: ['Shopping'],
        tags: ['Uformelt', 'Barnevennlig', 'Sentralt']
    },
    // - Aktiviteter
    {
        id: 46,
        boroughId: 6,
        name: 'Ekeberg Minigolf Park',
        image: 'ekeberg-minigolf-park.jpg',
        address: 'Ekebergveien 103, 1178 Oslo',
        categoryId: 3,
        website: 'https://minigolf.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 4,
            value: 3,
            amountOfReviwes: 32
        },
        pricepoint: 'Middels',
        bio: 'Minigolfpark på Ekeberg med to morsomme 18-hullsbaner med fossefall, elver, broer og mange utfordrende hindere.',
        types: ['Minigolf'],
        tags: ['Sport', 'Barnevennlig', 'Friluft']
    },
    {
        id: 47,
        boroughId: 6,
        name: 'EKT Rideskole',
        image: 'ekt.jpg',
        address: 'Ekebergveien 99, 1181 Oslo',
        categoryId: 3,
        website: 'https://rideskole.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 4,
            value: 4,
            amountOfReviwes: 37
        },
        pricepoint: 'Middels',
        bio: 'Besøksgård der dyrene går løse, åpen hver dag hele året. Parken har lekeapparater og rasteplasser for medbrakt mat, og tilbyr ponniridning for barn for 40 kroner per runde. Selvbetjent kafé og varmestue åpen hver dag. Kiosksalg i helgene.',
        types: ['Besøksgård'],
        tags: ['Ridning', 'Barnevennlig', 'Friluft', 'Dyreliv']
    },
    {
        id: 48,
        boroughId: 6,
        name: 'Best of You',
        image: 'best-of-you.jpg',
        address: 'Dronning Eufemias gate 18, 0191 Oslo',
        categoryId: 3,
        website: 'https://bestofyou.no',
        reviews: {
            environment: 4,
            selection: 3,
            service: 5,
            value: 4,
            amountOfReviwes: 34
        },
        pricepoint: 'Middels',
        bio: 'Eksklusiv velværeklinikk som tilbyr en rekke ulike skjønnhets- og helsebehandlinger: voksing, vipper og bryn, fotpleie, håndpleie, massasje, laserbehandling, hudpleie og MediSpa. Behandlingene kan bestilles individuelt eller som pakker.',
        types: ['Spa', 'Velvære'],
        tags: ['Velværeklinikk', 'Avslapning', 'Skjønnhet og velvære']
    },
    // == Oslo vest ==
    // - Mat og drikke
    {
        id: 49,
        boroughId: 7,
        name: 'Campo de Fiori',
        image: 'campo-de-fiori.jpg',
        address: 'Josefines gate 23, 0351 Oslo',
        categoryId: 1,
        website: 'https://campo.no',
        reviews: {
            environment: 5,
            selection: 4,
            service: 5,
            value: 4,
            amountOfReviwes: 54
        },
        pricepoint: 'Middels',
        bio: 'Italiensk restaurant inspirert av Campo de Fiori i Roma og maten man får servert der. Utenfor er det en koselig uteservering med varmelamper og heldekkende pergola. Hovedrettene kommer rett fra kjøkkenets kullgrill, men restauranten har også pasta og pizza på menyen.',
        types: ['Italiensk', 'Pizza', 'Pasta'],
        tags: ['Uteservering', 'Uformelt', 'Internasjonal']
    },
    {
        id: 50,
        boroughId: 7,
        name: 'Tatakii Asian',
        image: 'tatakii.jpg',
        address: 'Middelthuns gate 25, 0368 Oslo',
        categoryId: 1,
        website: 'https://campo.no',
        reviews: {
            environment: 5,
            selection: 4,
            service: 5,
            value: 4,
            amountOfReviwes: 28
        },
        pricepoint: 'Middels',
        bio: 'Izakaya-restaurant som serverer kreativ asiatisk tapas i stilige lokaler på Majorstuen. Izakaya er et japansk fenomen, men henter også inspirasjon fra andre kjøkken – spesielt de koreanske og kinesiske.',
        types: ['Izakaya', 'Asiatisk', 'Fusion'],
        tags: ['Formelt', 'Internasjonal', 'Business']
    },
    {
        id: 51,
        boroughId: 7,
        name: 'Ett Bord',
        image: 'ett-bord.jpg',
        address: 'Ruseløkkveien 3, 0251 Oslo',
        categoryId: 1,
        website: 'https://ettbord.no',
        reviews: {
            environment: 5,
            selection: 4,
            service: 4,
            value: 4,
            amountOfReviwes: 54
        },
        pricepoint: 'Middels',
        bio: 'Hjemmekoselig restaurant i Vikaterrassen med ett eneste langbord med plass til 24 gjester som alle spiser den samme maten. Her er det rom for gode samtaler med både gamle og nye venner!',
        types: ['Kortreist', 'Ferske råvarer'],
        tags: ['Uformelt', 'Internasjonal', 'Økologisk']
    },
    // - Shopping
    {
        id: 52,
        boroughId: 7,
        name: 'Maschmanns',
        image: 'maschmanns.jpg',
        address: 'Karenslyst allé 51, 0278 Oslo',
        categoryId: 2,
        website: 'https://maschmanns.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 5,
            value: 3,
            amountOfReviwes: 35
        },
        pricepoint: 'Middels',
        bio: 'Ferskvaremarked på Skøyen med betjente avdelinger for kjøtt, sjømat og ost, pluss et stort utvalg tørrvarer og kondimenter fra kvalitetsprodusenter i Norge og Europa.',
        types: ['Matmarked'],
        tags: ['Uformelt', 'Internasjonal', 'Økologisk']
    },
    {
        id: 53,
        boroughId: 7,
        name: 'Tatler',
        image: 'tatler.jpg',
        address: 'Karenslyst allé 51, 0278 Oslo',
        categoryId: 2,
        website: 'https://tatler.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 3,
            value: 4,
            amountOfReviwes: 32
        },
        pricepoint: 'Middels',
        bio: 'Veletablert klesbutikk i Bogstadveien, med fokus på sporty classics og contemporary fashion til dame og herre. Tatler fører kjente merkevarer fra blant annet Acne, Ralph Lauren, Marc by Marc Jacobs, FWSS, Michael Kors og Alexander Wang.',
        types: ['Klær'],
        tags: ['Kjente merkevarer', 'Eksklusivt']
    },
    {
        id: 54,
        boroughId: 7,
        name: 'Damms Antikvariat',
        image: 'damms-antikvariat.jpg',
        address: 'Frederik Stangs gate 46, 0264 Oslo',
        categoryId: 2,
        website: 'https://damms.no',
        reviews: {
            environment: 4,
            selection: 3,
            service: 5,
            value: 4,
            amountOfReviwes: 25
        },
        pricepoint: 'Middels',
        bio: 'Damms Antikvariat ble grunnlagt i 1843 og er Skandinavias eldste antikvariat. I tillegg til et bredt spekter av bøker innen ulike emner, har Damms Antikvariat et svært stort utvalg i gamle kart og trykk.',
        types: ['Antikviteter'],
        tags: ['Eksklusivt', 'Uformelt']
    },
    // - Aktiviteter
    {
        id: 55,
        boroughId: 7,
        name: 'Solli Bowling',
        image: 'solli-bowling.jpg',
        address: 'Henrik Ibsens gate 100, 0255 Oslo',
        categoryId: 3,
        website: 'https://sollibowling.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 3,
            value: 4,
            amountOfReviwes: 21
        },
        pricepoint: 'Middels',
        bio: 'Bowlinghall med 11 baner, air hockey og biljard. Gratis veiledning til de som ønsker det. I overetasjen er det en Peppes Pizza, hvis man skulle bli sulten etter noen runder med bowling.',
        types: ['Bowling'],
        tags: ['Familievennlig', 'Uformelt', 'Sport']
    },
    {
        id: 56,
        boroughId: 7,
        name: 'Frognerbadet',
        image: 'frognerbadet.jpg',
        address: 'Middelthuns gate 28, 0368 Oslo',
        categoryId: 3,
        website: 'https://oslo.kommune.no/natur-kultur-og-fritid/svommehaller/frognerbadet',
        reviews: {
            environment: 5,
            selection: 4,
            service: 3,
            value: 4,
            amountOfReviwes: 29
        },
        pricepoint: 'Middels',
        bio: 'Stort og meget populært utendørsbad med to 50-metersbasseng, plaskebasseng, sklie og stupetårn. Frognerbadet ligger i enden av Frognerparken, og helt siden åpningen i 1956 har dette anlegget hatt en spesiell plass og betydning hos byens innbyggere.',
        types: ['Badepark'],
        tags: ['Familievennlig', 'Uformelt', 'Sommer', 'Bading']
    },
    {
        id: 57,
        boroughId: 7,
        name: 'Gimle Kino',
        image: 'gimle-kino.jpg',
        address: 'Bygdøy allé 39, 0262 Oslo',
        categoryId: 3,
        website: 'https://nfkino.no/oslo',
        reviews: {
            environment: 5,
            selection: 3,
            service: 5,
            value: 4,
            amountOfReviwes: 31
        },
        pricepoint: 'Middels',
        bio: 'Kino på Frogner med én sal med 260 plasser. Øl- og vinservering i foajeen.',
        types: ['Kino'],
        tags: ['Uformelt', 'Film', 'Kultur']
    },
    // == Oslo sentrum ==
    // - Mat og drikke
    {
        id: 58,
        boroughId: 8,
        name: 'Oslo Street Food',
        image: 'oslo-street-food.jpg',
        address: 'Torggata 16, 0187 Oslo',
        categoryId: 1,
        website: 'https://oslo-streetfood.no',
        reviews: {
            environment: 5,
            selection: 5,
            service: 3,
            value: 5,
            amountOfReviwes: 54
        },
        pricepoint: 'Middels',
        bio: 'Oslo Street Food er en stor mathall midt i Oslo sentrum. Her kan du velge mellom 16 autentiske matboder med spennende smaker fra alle verdenshjørner. På Oslo Street Food finner du også kulturopplevelser, fellesskap og et rikt program i et kreativt miljø som er i stadig endring.',
        types: ['Mathall', 'Variert'],
        tags: ['Uformelt', 'Uteservering', 'Sosialt']
    },
    {
        id: 59,
        boroughId: 8,
        name: 'Grand Café',
        image: 'grand-cafe.jpg',
        address: 'Karl Johans gate 31, 0159 Oslo',
        categoryId: 1,
        website: 'https://grandcafeoslo.no',
        reviews: {
            environment: 4,
            selection: 3,
            service: 3,
            value: 2,
            amountOfReviwes: 32
        },
        pricepoint: 'Høyt',
        bio: 'Nyoppusset spisested på Oslos hovedgate med tradisjoner helt tilbake til 1874. På nye Grand Café er den unike historien og kunsten fortsatt godt synlig, men stedet har fått mange nye interiørdetaljer og et åpent, nyskapende kjøkken.',
        types: ['A la carte', 'Julebord'],
        tags: ['Formelt', 'Business', 'Lunch']
    },
    {
        id: 60,
        boroughId: 8,
        name: 'Bar Boman',
        image: 'bar-boman.jpg',
        address: 'Stortingsgaten 24/26, 0161 Oslo',
        categoryId: 1,
        website: 'https://hotelcontinental.no/restauranter-barer/bar-boman',
        reviews: {
            environment: 4,
            selection: 4,
            service: 5,
            value: 3,
            amountOfReviwes: 36
        },
        pricepoint: 'Høyt',
        bio: 'Hotel Continentals lobbybar er en attraktiv lounge for hotellets gjester og et levende møtested for Oslos befolkning og besøkende. Bar Boman serverer cocktails, mineralvann, kaffe/te og lettere lunsj- og middagsretter, tasty bites.',
        types: ['Cocktails', 'Bar'],
        tags: ['Formelt', 'Business', 'Lunch']
    },
    // - Shopping
    {
        id: 61,
        boroughId: 8,
        name: 'Paleet',
        image: 'paleet.jpg',
        address: 'Karl Johans gate 37-43, 0162 Oslo',
        categoryId: 2,
        website: 'https://paleet.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 3,
            value: 3,
            amountOfReviwes: 38
        },
        pricepoint: 'Middels',
        bio: 'Et av Oslos mest ærverdige motevarehus, med beliggenhet midt på paradegaten Karl Johan mellom Stortinget og Slottet.',
        types: ['Klær', 'Smykker'],
        tags: ['Uformelt', 'Sosialt', 'Mote']
    },
    {
        id: 62,
        boroughId: 8,
        name: 'EGER',
        image: 'eger.jpg',
        address: 'Karl Johans gate 23 B, 0159 Oslo',
        categoryId: 2,
        website: 'https://egeroslo.no',
        reviews: {
            environment: 4,
            selection: 4,
            service: 4,
            value: 2,
            amountOfReviwes: 41
        },
        pricepoint: 'Høyt',
        bio: 'Norges største high-end-motehus EGER ligger på Egertorget midt i Oslo sentrum og tilbyr over 400 internasjonale merkevarer innen mote, skjønnhet og livsstil, samt flere spisesteder.',
        types: ['Klær', 'High-end'],
        tags: ['Uformelt', 'Sosialt', 'Mote']
    },
    {
        id: 63,
        boroughId: 8,
        name: 'GlasMagasinet',
        image: 'glasmagasinet.jpg',
        address: 'Stortorvet 9, 0155 Oslo',
        categoryId: 2,
        website: 'https://glasmagasinet.no',
        reviews: {
            environment: 5,
            selection: 3,
            service: 4,
            value: 4,
            amountOfReviwes: 26
        },
        pricepoint: 'Middels',
        bio: 'Tradisjonsrikt varemagasin ved Stortorvet, der det har historie helt tilbake til 1899. GlasMagasinet har lange tradisjoner med design og interiør, og inneholder butikker som bl.a. Illums Bolighus, Magnor Brandstore, Bellas Hus, Heimen Husfliden og By Norwegians.',
        types: ['Varemagasin'],
        tags: ['Uformelt', 'Kafeer']
    },
    // - Aktiviteter
    {
        id: 64,
        boroughId: 8,
        name: 'Nobels Fredssenter',
        image: 'nobels-fredsenter.jpg',
        address: 'Brynjulf Bulls plass 1, 0250 Oslo',
        categoryId: 3,
        website: 'https://nobelpeacecenter.org',
        reviews: {
            environment: 5,
            selection: 3,
            service: 5,
            value: 4,
            amountOfReviwes: 37
        },
        pricepoint: 'Lavt',
        bio: 'Nobels Fredssenter er et opplevelsessenter hvor du blir kjent med Nobels Fredspris og fredsprisvinnerne og deres engasjerende og viktige arbeid. Opplev vakre Nobels hage, hvor alle fredsprisvinnerne presenteres på hver sin skjerm, omgitt av tusen små lys, og den magiske boken om Alfred Nobels liv og arbeid.',
        types: ['Museum'],
        tags: ['Uformelt', 'Kultur']
    },
    {
        id: 65,
        boroughId: 8,
        name: 'Oslo Bar og Bowling',
        image: 'oslo-bar-og-bowling.jpg',
        address: 'Torggata 16, 0181 Oslo',
        categoryId: 3,
        website: 'https://oslobowling.no',
        reviews: {
            environment: 5,
            selection: 4,
            service: 5,
            value: 4,
            amountOfReviwes: 32
        },
        pricepoint: 'Middels',
        bio: 'Bowlinghall i moderne lokaler med bar, lounge, biljard og 12 bowlingbaner. Oslo Bowling har både drop-in og forhåndsbestilling, og det er rabatt på hverdager før kl. 16.',
        types: ['Bowling', 'Bar'],
        tags: ['Uformelt', 'Sport', 'Sosialt']
    },
    {
        id: 66,
        boroughId: 8,
        name: 'Sauna på SALT',
        image: 'salt.jpg',
        address: 'Langkaia 1, 0150 Oslo',
        categoryId: 3,
        website: 'https://salted.no',
        reviews: {
            environment: 5,
            selection: 3,
            service: 4,
            value: 4,
            amountOfReviwes: 34
        },
        pricepoint: 'Middels',
        bio: 'På bryggekanten vis á vis Operaen kan du både bade og ta sauna på SALT. Området er et kunstprosjekt som samler kunst, musikk, mat og arkitektur med spektakulære trekonstruksjoner inspirert av tradisjonelle norske fiskehjeller.',
        types: ['Bading', 'Badstue', 'Kultur'],
        tags: ['Uformelt', 'God utsikt', 'Sosialt', 'Kunst']
    },
    // == Holmenkollen ==
    // - Mat og drikke
    {
        id: 67,
        boroughId: 9,
        name: 'Restaurant Finstua',
        image: 'finstua.jpg',
        address: 'Holmenkollveien 200, 0791 Oslo',
        categoryId: 1,
        website: 'https://frognerseteren.no',
        reviews: {
            environment: 5,
            selection: 4,
            service: 5,
            value: 4,
            amountOfReviwes: 38
        },
        pricepoint: 'Høyt',
        bio: 'Restaurant på toppen av Holmenkollen med storslagen utsikt over Oslo by og fjord. Den eldste delen av huset stod ferdig i 1891, og restaurantens mattradisjoner strekker seg tilbake til denne tiden.',
        types: ['Norsk mat', 'Vinkart'],
        tags: ['Uformelt', 'Fjordutsikt', 'Peis/ovn', 'Uteservering']
    },
    {
        id: 68,
        boroughId: 9,
        name: 'De Fem Stuer',
        image: 'de-fem-stuer.jpg',
        address: 'Kongeveien 26, 0712 Oslo',
        categoryId: 1,
        website: 'https://scandichotels.no/hotell/norge/oslo/scandic-holmenkollen-park/restaurant-bar/de-fem-stuer',
        reviews: {
            environment: 3,
            selection: 4,
            service: 4,
            value: 4,
            amountOfReviwes: 21
        },
        pricepoint: 'Høyt',
        bio: 'Restaurant på Holmenkollen Park Hotel med et internasjonalt kjøkken kombinert med et tydelig norsk preg og ferske norske råvarer. Kombinasjonen av historiske lokaler, spesiell beliggenhet og kunst på veggene setter en flott ramme rundt ethvert måltid her.',
        types: ['Buffet', 'Norsk mat'],
        tags: ['Uformelt', 'Lunch', 'Internasjonal']
    },
    {
        id: 69,
        boroughId: 9,
        name: 'Lysebu Restaurant',
        image: 'lysebu.jpg',
        address: 'Lysebuveien 12, 0790 Oslo',
        categoryId: 1,
        website: 'https://lysebu.no',
        reviews: {
            environment: 5,
            selection: 4,
            service: 4,
            value: 4,
            amountOfReviwes: 23
        },
        pricepoint: 'Høyt',
        bio: 'Restaurant og selskapslokaler i naturskjønne omgivelser med fantastisk utsikt over Sørkedalen. Hver uke setter kjøkkensjefen opp en femretters meny med de beste råvarene årstiden kan by på. Fra den kan du velge tre, fire eller fem retter som kan nytes med en vinmeny hentet fra en av Oslos beste vinkjellere.',
        types: ['Norsk mat', 'Satt meny'],
        tags: ['Uformelt', 'Internasjonal', 'Catering']
    },
    // - Shopping - NB! ikke for dette stedet

    // - Aktiviteter
    {
        id: 70,
        boroughId: 9,
        name: 'Oslo Sommerpark',
        image: 'oslo-sommerpark.jpg',
        address: 'Tryvannsveien 64, 0791 Oslo',
        categoryId: 3,
        website: 'https://oslosommerpark.no',
        reviews: {
            environment: 5,
            selection: 3,
            service: 4,
            value: 3,
            amountOfReviwes: 13
        },
        pricepoint: 'Middels',
        bio: 'En av Skandinavias største og flotteste klatreparker, kun 30 minutter fra Oslo sentrum. Oslo Sommerpark har 200 elementer i trærne fordelt på 12 forskjellige løyper med ulik vanskelighetsgrad. Velg mellom miniløyper, familieløyper og tøffe løyper opptil 20 meter over bakken.',
        types: ['Klatrepark'],
        tags: ['Sommer', 'Sport', 'Terreng']
    },
    {
        id: 71,
        boroughId: 9,
        name: 'Oslo Vinterpark',
        image: 'oslo-vinterpark.jpg',
        address: 'Tryvannsveien 64, 0791 Oslo',
        categoryId: 3,
        website: 'https://oslovinterpark.no',
        reviews: {
            environment: 5,
            selection: 3,
            service: 4,
            value: 3,
            amountOfReviwes: 17
        },
        pricepoint: 'Middels',
        bio: 'Det største skianlegget i Oslo-området, kun 30 minutter fra Oslo sentrum. Oslo Vinterpark har 11 heiser, 18 nedfarter og en fallhøyde på 381 meter, og samtlige nedfarter er flombelyst fem kvelder i uken.',
        types: ['Alpinanlegg'],
        tags: ['Vinter', 'Sport', 'Terreng']
    },
    {
        id: 72,
        boroughId: 9,
        name: 'Bogstad Besøksgård',
        image: 'bogstad-besøksgård.jpg',
        address: 'Sørkedalsveien 450, 0758 Oslo',
        categoryId: 3,
        website: 'https://bogstad.no',
        reviews: {
            environment: 4,
            selection: 5,
            service: 4,
            value: 3,
            amountOfReviwes: 24
        },
        pricepoint: 'Middels',
        bio: 'Besøksgård på Bogstad med kuer, sauer, griser, geiter, høns og kaniner, åpen i perioden medio oktober–medio mai.',
        types: ['Gård'],
        tags: ['Friluftsliv', 'Dyr']
    },
]