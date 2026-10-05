// questions.js faýlynyň doly kody (30 sany sorag)
const quizQuestions = [
    {
        "question": "Psihologiýa ylmynyň esasy öwrenýän ugry näme?",
        "options": [
            "Adamyň anatomiki gurluşy",
            "Psihika, onuň emele gelşi we ösüşi",
            "Jemgyýetiň ykdysady gurluşy",
            "Ösümlik dünýäsi"
        ],
        "answer": 1
    },
    {
        "question": "Haýsy temperament görnüşi çalt, emosional taýdan durnuksyz we gyzgyn ganlylygy bilen tapawutlanýar?",
        "options": [
            "Sanguinik",
            "Flegmatik",
            "Melanholik",
            "Holerik"
        ],
        "answer": 3
    },
    {
        "question": "Adamyň daşky gurşawy aňlamak we duýmak ukybynyň ilkinji basgançagy näme?",
        "options": [
            "Duýgy (Oşuş)",
            "Gabylet",
            "Garaýyş",
            "Häsiýet"
        ],
        "answer": 0
    },
    {
        "question": "Duýgy organlaryna gysga wagtlaýyn täsir edýän gyjaklandyryjylaryň yzyny saklamak haýsy ýat ugruna degişli?",
        "options": [
            "Gysga möhletli ýat",
            "Uzak möhletli ýat",
            "Sensor ýat",
            "Operatiw ýat"
        ],
        "answer": 2
    },
    {
        "question": "Adamyň öz-özüni dolandyrmak, maksada okly bolmak ukyby haýsy psihiki prosese degişli?",
        "options": [
            "Ermek",
            "Erk",
            "Duýgy",
            "Gabylet"
        ],
        "answer": 1
    },
    {
        "question": "Zorlukly, gaty güýçli we gysga wagtly emosional ýagdaýa näme diýilýär?",
        "options": [
            "Affekt",
            "Stress",
            "Frustrasiýa",
            "Depressiýa"
        ],
        "answer": 0
    },
    {
        "question": "Haýsy temperament görnüşi gowşak, gaty duýgur we çalt öýkeläp bilýänligi bilen häsiýetlendirilýär?",
        "options": [
            "Flegmatik",
            "Sanguinik",
            "Melanholik",
            "Holerik"
        ],
        "answer": 2
    },
    {
        "question": "Garaýyşlaryň, endikleriň we häsiýetleriň durnukly birleşmesine näme diýilýär?",
        "options": [
            "Şahsyýet",
            "Temperament",
            "Instinkt",
            "Refleks"
        ],
        "answer": 0
    },
    {
        "question": "Adamyň daşky dünýäni bütewi görnüşde kabul etmegine näme diýilýär?",
        "options": [
            "Kabul ediş (Persepsiýa)",
            "Duýgy",
            "Ýat",
            "Pikirlenme"
        ],
        "answer": 0
    },
    {
        "question": "Psihologiýada 'introwert' diňe kimleri aňladýar?",
        "options": [
            "Daşky dünýä gönükdirilen adamy",
            "Içki dünýäsine we öz oylaryna gönükdirilen adamy",
            "Gaty gaharjaň adamy",
            "Topbaryň liderini"
        ],
        "answer": 1
    },
    {
        "question": "Täze, öň bolmadyk obrazlary ýaratmak prosesi näme diýlip atlandyrylýar?",
        "options": [
            "Gabylet",
            "Duýgy",
            "Göz öňüne getirme (Fantaziýa)",
            "Ýat"
        ],
        "answer": 2
    },
    {
        "question": "Adamyň akyl ukybynyň umumy görkezijisine näme diýilýär?",
        "options": [
            "Emosional intellekt",
            "Intellekt (IQ)",
            "Kreatiwlyk",
            "Temperament"
        ],
        "answer": 1
    },
    {
        "question": "Ünsüň bir obýektden başga bir obýekte çalt geçip bilmek ukybyna näme diýilýär?",
        "options": [
            "Ünsüň durnuklylygy",
            "Ünsüň paýlanmagy",
            "Ünsüň geçijiligi (pereklyuçeniýe)",
            "Ünsüň gölemi"
        ],
        "answer": 2
    },
    {
        "question": "Haýsy temperament görnüşi parahat, çydamly, sabyrly we haýal hereket edýänligi bilen tapawutlanýar?",
        "options": [
            "Holerik",
            "Melanholik",
            "Sanguinik",
            "Flegmatik"
        ],
        "answer": 3
    },
    {
        "question": "Psihologiýada ylmy synag geçirmek usulyna näme diýilýär?",
        "options": [
            "Eksperiment",
            "Gözegçilik",
            "Anketirleme",
            "Söhbetdeşlik"
        ],
        "answer": 0
    },
    {
        "question": "Adamyň köpçülige uýgunlaşmak, beýlekileriň pikirini göni kabul etmek häsiýeti nähili atlandyrylýar?",
        "options": [
            "Konformizm",
            "Individualizm",
            "Egoizm",
            "Altruizm"
        ],
        "answer": 0
    },
    {
        "question": "Pikirlenmäň iň ýokary we abstrakt görnüşi näme?",
        "options": [
            "Görkezme-hereketli",
            "Obrazly",
            "Logiki (Söz-logiki)",
            "Intuitiw"
        ],
        "answer": 2
    },
    {
        "question": "Başga adamyň emosiýalaryny we duýgularyny düşünek hem-de bile duýmak ukybyna näme diýilýär?",
        "options": [
            "Simpatiýa",
            "Empatiýa",
            "Antipatiýa",
            "Apatiýa"
        ],
        "answer": 1
    },
    {
        "question": "Psihanaliz teoriýasynyň esaslandyryjysy kim?",
        "options": [
            "Iwan Pawlow",
            "Zigmund Freýd",
            "Žan Piaže",
            "Wilgelm Wundt"
        ],
        "answer": 1
    },
    {
        "question": "Haýsy temperament görnüşi şadyýan, işjeň, çalt uýgunlaşýan we durnukly diýlip häsiýetlendirilýär?",
        "options": [
            "Sanguinik",
            "Flegmatik",
            "Holerik",
            "Melanholik"
        ],
        "answer": 0
    },
    {
        "question": "Adamyň jemgyýetde öz ornyny tapmagy we medeniýeti özleşdirmegi haýsy proses?",
        "options": [
            "Sosializasiýa",
            "Ewolyusiýa",
            "Degradasiýa",
            "Adaptasiýa"
        ],
        "answer": 0
    },
    {
        "question": "Çaganyň kognitiw (akyl) ösüş basgançaklaryny öwrenen meşhur psiholog kim?",
        "options": [
            "Žan Piaže",
            "B.F. Skinner",
            "Karl Rodžers",
            "Abraham Maslow"
        ],
        "answer": 0
    },
    {
        "question": "Adamyň hajatlarynyň ierarhiýasyny (piramidasyny) döreden alymdyň ady näme?",
        "options": [
            "Zigmund Freýd",
            "Abraham Maslow",
            "Albert Bandura",
            "Lew Wygotski"
        ],
        "answer": 1
    },
    {
        "question": "Ýetginjeklik döwri esasan haýsy ýaş aralygyny öz içine alýar?",
        "options": [
            "3-6 ýaş",
            "7-11 ýaş",
            "11-15 ýaş",
            "20-25 ýaş"
        ],
        "answer": 2
    },
    {
        "question": "Haýsy stress görnüşi adam üçin peýdaly we ony işe höweslendiriji hasaplanýar?",
        "options": [
            "Distress",
            "Eustress",
            "Hroniki stress",
            "Depressiýa"
        ],
        "answer": 1
    },
    {
        "question": "Adamyň gorkularyny, basylyp goýlan duýgularyny öwrenýän psihologiýanyň ugruna näme diýilýär?",
        "options": [
            "Kliniki psihologiýa",
            "Pedagogik psihologiýa",
            "Zähmet psihologiýasy",
            "Ýaş psihologiýasy"
        ],
        "answer": 0
    },
    {
        "question": "Garşydaşyňyň garaýyşlaryny bütinleý inkär edip, öz pikiriňi zor bilen kabul etdirmek haýsy konflikt strategiýasydyr?",
        "options": [
            "Uýgunlaşma",
            "Bäsdeşlik (Garaşsyzlyk)",
            "Kompromis",
            "Gaçmak"
        ],
        "answer": 1
    },
    {
        "question": "Meseleleri täzeçe, galyplardan daşary we özboluşly çözmek ukybyna näme diýilýär?",
        "options": [
            "Logika",
            "Kreatiwlyk",
            "Ýatkeşlik",
            "Sabyrlylyk"
        ],
        "answer": 1
    },
    {
        "question": "Adamyň daşky gurşawdaky obýektleri ýoýup, ýalňyş kabul etmegine näme diýilýär?",
        "options": [
            "Gallyusinasiýa",
            "Illýuziýa",
            "Deluziýa",
            "Apatiýa"
        ],
        "answer": 1
    },
    {
        "question": "Ilkinji psihologik laboratoriýany açan we ylmy psihologiýanyň esasy ugruny başlan kim?",
        "options": [
            "Wilgelm Wundt",
            "William Jeýms",
            "Jon Watson",
            "Iwan Setçenow"
        ],
        "answer": 0
    }
];
