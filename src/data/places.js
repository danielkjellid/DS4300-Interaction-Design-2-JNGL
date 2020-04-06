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
    // - Shopping
    // - Aktiviteter
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