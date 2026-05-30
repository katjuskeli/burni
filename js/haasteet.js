/* jshint esversion: 6 */

const currentPoints = 0;

const challenges = [
  {
    number: "001",
    points: 1,
    title: "KARHU KEVENNYS",
    description: "Otetaan juhlan kunniaksi yksi juoma.",
    status: ""
  },
  {
    number: "015",
    points: 15,
    title: "ASIA ON PIHVI, EIKU PIZZA",
    description: "Pyöräytetääs murkinaa juontajalle ruletin avulla.",
    status: ""
  },
  {
    number: "030",
    points: 30,
    title: "LEVYT CHÄTIN RAADISSA",
    description: "Nyt kaivelemaan parhaat biisit ja osallistumaan legendaariseen levyraatiin.",
    status: ""
  },
  {
    number: "045",
    points: 45,
    title: "AAMUJOOGA",
    description: "Aamu joogat ja venyttelyt kaikille Subathonin aamuille.",
    status: ""
  },
  {
    number: "060",
    points: 60,
    title: "BURNI-TÄDIN ILTASADUT",
    description: "Burni kuvittaa iltasadut koko Subathonin ajan.",
    status: ""
  },
  {
    number: "075",
    points: 75,
    title: "YHDEN TÄHDEN ILLALLINEN",
    description: "Huippukokki on keksinyt Burnille kokattavaksi 3-ruokalajin menun.",
    status: ""
  },
  {
    number: "100",
    points: 100,
    title: "OSTOS-TV",
    description: "Toiveidenne Merch-store aukeaa.",
    status: ""
  },
  {
    number: "125",
    points: 125,
    title: "KÄSITYÖNURKKA",
    description: "Riittääkö sorminäppäryys ja hermot, kun pitää koota miniatyyri kasvihuone?",
    status: ""
  },
  {
    number: "150",
    points: 150,
    title: "BUMTSIKIBUM",
    description: "Luuletko olevasi kova musatietäjä? <br> Burni ainakin luulee, joten testaan kuinka hyvin hän oikeasti tunnistaa biisit chätin kanssa.",
    status: ""
  },
  {
    number: "200",
    points: 200,
    title: "EI MENNY KU STRÖMSÖSSÄ",
    description: "Virkkaus ei ollut Burnin juttu joten nyt aika <br> iskeä kädet saveen ja antaa luovuuden kukkia.",
    status: ""
  },
  {
    number: "250",
    points: 250,
    title: "AVARA CHÄTINLUONTO",
    description: "Kuka on chätin ketterin kettu, nopein norppa tai ovelin orava? <br> Nyt se selviää kun kisataan taas kuumasta palkinnosta! <br> Voittajalle lähtee 'B' -logomuki.",
    status: ""
  },
  {
    number: "300",
    points: 300,
    title: "HUVILA ILMAN HUUSSIA",
    description: "Ei rakenneta sitä huussia, mutta katsotaan onko Burni viherpeukalo.",
    status: ""
  },
  {
    number: "350",
    points: 350,
    title: "GRWM",
    description: "Eli meille boomereille suomennettuna: <br> valmistaudutaan uuteen Subathon päivään yhdessä.",
    status: ""
  },
  {
    number: "400",
    points: 400,
    title: "KUKA HALUAA MILJONÄÄRIKSI?",
    description: "Nyt on mahdollisuus päästä kisaamaan miljoonasta pisteestä, <br> maineesta ja kunniasta.",
    status: ""
  },
  {
    number: "460",
    points: 460,
    title: "TODENNÄKÖISESTI PITÄÄ OLLA HUOLISSAAN",
    description: "Onko asia, joka painaa mieltä? <br>Ei hätää, arvoisat panelistimme vastaavat huolenaiheisiinne.",
    status: ""
  },
  {
    number: "520",
    points: 520,
    title: "SPORTTIVARTTI JOS TOINENKIN",
    description: "Kuinka Burni selviää 77 kilometrin pyöräilystä <br> kahden huippu-urheilijan kanssa?",
    status: ""
  },
  {
    number: "580",
    points: 580,
    title: "BURNITHON GRAND PRIX",
    description: "Nyt lappua lattiaan ja hanaa chätti!  <br> Kisan voittajalle lähtee Arozzin käsinojapehmusteet. <br> Sponsored by Arozzi",
    status: ""
  },
  {
    number: "640",
    points: 640,
    title: "PELKOA KERTOIMELLA",
    description: "Säikäyttääkö peli vai Väiski juontiksen?",
    status: ""
  },
  {
    number: "720",
    points: 720,
    title: "OTA RAHAT JA PYÖRI",
    description: "Onko kuulat kiilotettu - nyt on aika pyöriä voitoon muita nopeammin. <br> 50€ K-Ryhmän lahjakortti lähtee voittajalle. <br> Sponsored by K-Citymarket Valkeakoski",
    status: ""
  },
  {
    number: "800",
    points: 800,
    title: "KOKO VALKEAKOSKI LEIPOO - TAI NO AINAKIN BURNI",
    description: "Kuinka luonnistuu Burnilta täytekakun teko?<br>Monta kertaa kerkeät sanot Brita-kakku ennen kuin kakku on valmiina? ",
    status: ""
  },
  {
    number: "880",
    points: 880,
    title: "NAPAKYMPPI VAI ONKO SITTENKÄÄN?",
    description: "Kaikkien rakastama kultakutri palaa etsimään rakkautta. <br> Mutta löytääkö hän sen?",
    status: ""
  },
  {
    number: "960",
    points: 960,
    title: "¡OH DIOS MíO, ES LA HORA FELIZ!",
    description: "Ei, nyt ei oo aika espanjalaiselle telenovelalle <br> vaan aika pistää happy hour käyntiin!",
    status: ""
  },
  {
    number: "1080",
    points: 1080,
    title: "UUSI PÄIVÄ",
    description: "Vieläkö riittää puhti? Jatkuuko Subathon extrapäivän ajan? <br> Nyt siihen on mahdollisuus - max aika 9.6. klo 16:00 saakka.",
    status: ""
  },
  {
    number: "1200",
    points: 1200,
    title: "FORT'OH BOY'ARD",
    description: "Selvittääkö Burni tiensä ulos pakohuoneesta chätin kanssa?",
    status: ""
  },
  {
    number: "1320",
    points: 1320,
    title: "ONNENPYÖRÄ",
    description: "Voittajalle valitsemansa tuote Merch-storesta.",
    status: ""
  },
  {
    number: "1440",
    points: 1440,
    title: "EI ENÄÄ NIIN TENAVA MUTTA EHKÄ TÄHTI",
    description: "Pääsette nauttimaan Burnin kauniista lauluista karaoken muodossa.",
    status: ""
  }
];

