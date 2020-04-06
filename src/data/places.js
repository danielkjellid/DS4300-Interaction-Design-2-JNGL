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
    // - Shopping
    // - Aktiviteter
    // == Bygdøy ==
    // - Mat og drikke
    // - Shopping
    // - Aktiviteter
    // == Aker Brygge ==
    // - Mat og drikke
    // - Shopping
    // - Aktiviteter
    // == Oslo øst ==
    // - Mat og drikke
    // - Shopping
    // - Aktiviteter
    // == Oslo vest ==
    // - Mat og drikke
    // - Shopping
    // - Aktiviteter
    // == Oslo sentrum ==
    // - Mat og drikke
    // - Shopping
    // - Aktiviteter
    // == Holmenkollen ==
    // - Mat og drikke
    // - Shopping
    // - Aktiviteter
]