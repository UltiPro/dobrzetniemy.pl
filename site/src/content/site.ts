// Photo and video keys are file names (without extension) in src/assets/photos and src/assets/video.

import type { PhotoKey, VideoKey } from '../lib/media'

export type CategoryId = 'drzewa' | 'teren' | 'drewno'

export const business = {
  brand: 'Dobrze Tniemy',
  legalName: 'Usługi Pilarskie i Leśne Damian Treder',
  owner: 'Damian Treder',
  nip: '848-189-35-52',
  address: { street: 'Przykopka 18', postalCode: '19-311', city: 'Przykopka' },
  // The bare address lands on the wrong spot in Maps, the name plus Google's "Ełk" address opens the listing.
  mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Dobrze Tniemy, Przykopka 18, 19-311 Ełk')}`,
  tagline: 'Precyzja na każdej wysokości.',
  phone: { display: '723 277 958', href: 'tel:+48723277958' },
  email: 'info.damiantreder@gmail.com',
  area: 'Warmińsko-Mazurskie, Podlaskie',
} as const

export const addressLine = `${business.address.street}, ${business.address.postalCode} ${business.address.city}`

export const socials = [
  {
    id: 'facebook',
    label: 'Facebook',
    note: 'Zdjęcia i filmy z realizacji',
    href: 'https://www.facebook.com/61583947207461',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    note: 'Na bieżąco z pracy',
    href: 'https://www.instagram.com/dobrze.tniemy',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    note: 'Wyślij zdjęcia drzewa do wyceny',
    href: 'https://wa.me/48723277958',
  },
] as const

export type SocialId = (typeof socials)[number]['id']

export const nav = [
  { href: '#uslugi', label: 'Usługi' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#opinie', label: 'Opinie' },
  { href: '#o-nas', label: 'O nas' },
  { href: '#obszar', label: 'Obszar' },
  { href: '#kontakt', label: 'Kontakt' },
] as const

export const hero = {
  eyebrow: `Usługi pilarskie i leśne · ${business.owner}`,
  lede: 'Nie ma dla nas znaczenia, czy drzewo stoi na otwartej działce, tuż przy domu, czy w pobliżu linii energetycznej. Każde zlecenie zaczynamy od oceny sytuacji oraz doboru odpowiedniego rozwiązania i sprzętu. Działamy z głową i dbamy o to, żeby praca była wykonana fachowo, ponieważ wiemy, że liczy się nie tylko efekt, ale też bezpieczeństwo, porządek i terminowa realizacja.',
  closing: [
    'Ty mówisz, czego potrzebujesz — my znajdujemy rozwiązanie i robimy swoje.',
    'Dobrze tniemy. Jeszcze lepiej znamy się na swojej robocie.',
  ],
  highlights: [
    'Wycinka drzew trudnych i niebezpiecznych',
    'Oczyszczanie działek',
    'Zrębkowanie gałęzi i wywóz bioodpadów',
    'Frezowanie pni',
  ],
  photo: 'hero-wspinaczka' satisfies PhotoKey,
  photoAlt: 'Arborysta na linie w koronie drzewa, z pilarką uniesioną nad głową',
  slogans: [
    'Wycinka z głową.\nPraca z charakterem.',
    'Tam, gdzie liczy się\nkażdy ruch.',
    'Fachowo od korony\npo korzenie.',
    'Pewna ręka.\nDobry sprzęt.\nKonkretna robota.',
  ],
}

export const marquee = [
  'Wycinka drzew',
  'Pielęgnacja koron',
  'Mulczowanie terenu',
  'Frezowanie pni',
  'Zrębkowanie gałęzi',
  'Trzebieże',
  'Transport HDS',
  'Utylizacja odpadów',
]

export type Service = { name: string; description: string }
export type Category = {
  id: CategoryId
  title: string
  lead: string
  photo: PhotoKey
  photoAlt: string
  photoPosition?: string
  // Badge text on the photo; \n marks a line break.
  slogan?: string
  services: Service[]
}

export const services = {
  eyebrow: 'Zakres usług',
  title: ['Od korony', 'po korzeń'],
  lede: 'Drzewo myślało, że stoi tu na zawsze. Dobrze tniemy i właśnie wchodzimy z piłami. Gałęzie zamieniamy w zrębki, drewno wywozimy, a pniak znika pod frezem. Po nas zostaje czysty plac i lekkie zdziwienie, że w ogóle coś tu rosło.',
  categories: [
    {
      id: 'drzewa',
      title: 'Drzewa',
      lead: 'Wycinka i pielęgnacja',
      photo: 'ciecie-korona',
      photoAlt: 'Arborysta w uprzęży tnie konar w koronie dębu',
      photoPosition: '50% 45%',
      slogan: 'Wycinka z głową.\nPraca z charakterem.',
      services: [
        {
          name: 'Wycinka metodą alpinistyczną',
          description:
            'Drzewo rozbieramy precyzyjnie kawałek po kawałku, bez użycia ciężkiego sprzętu. Idealne rozwiązanie przy domach, ogrodzeniach i liniach energetycznych.',
        },
        {
          name: 'Wycinka drzew trudnych i niebezpiecznych',
          description:
            'Pochylone, spróchniałe, połamane przez wichurę? Bezpiecznie usuwamy nawet te, przy których inni odmawiają.',
        },
        {
          name: 'Wycinka tradycyjna',
          description:
            'Ścinka z kontrolowanym powaleniem drzewa. Sprawnie i bez zbędnych kosztów, na działkach i w lesie. Przy większych obszarach możliwość rozliczenia się za materiał.',
        },
        {
          name: 'Pielęgnacja koron',
          description:
            'Cięcia sanitarne, prześwietlanie i usuwanie suchych konarów. Zdrowsze, bezpieczniejsze i ładniejsze drzewo.',
        },
      ],
    },
    {
      id: 'teren',
      title: 'Teren i działki',
      lead: 'Od zarośli do czystego placu',
      photo: 'kat-teren',
      photoAlt: 'Ciągnik z mulczerem leśnym na oczyszczonej działce między drzewami',
      slogan: 'Zarośla znikają.\nMożliwości rosną.',
      services: [
        {
          name: 'Mulczowanie terenu',
          description:
            'Jedno przejście mulczera i po zaroślach nie ma śladu. Drobno rozdrobniona biomasa zostaje na gruncie jako naturalna ściółka, a Wy oszczędzacie czas i koszty wywozu.',
        },
        {
          name: 'Karczowanie i przygotowanie działek',
          description:
            'Drzewa, krzewy i karpy znikają, zanim zdążą się obrazić. Dostajecie czysty teren pod budowę, ogród lub uprawę albo po prostu zwiększycie wartość działki pod sprzedaż.',
        },
        {
          name: 'Trzebieże i czyszczenie działek leśnych',
          description:
            'Młodnik za gęsty, a działka wygląda jak dżungla? Przerzedzamy, porządkujemy i oddajemy las, w którym da się oddychać (i chodzić).',
        },
        {
          name: 'Frezowanie pni',
          description:
            'Pniak schodzi pod ziemię, jakby nigdy go tu nie było. Na jego miejscu powstaje trawnik, rabata albo kostka.',
        },
      ],
    },
    {
      id: 'drewno',
      title: 'Drewno i transport',
      lead: 'Wywóz, zrębka, sprzedaż',
      photo: 'kat-drewno',
      photoAlt: 'Ciągnik z przyczepą leśną wyładowaną drewnem, o zachodzie słońca',
      slogan: 'Pewna ręka.\nDobry sprzęt.\nKonkretna robota.',
      services: [
        {
          name: 'Transport drewna z HDS',
          description:
            'Ciągnik z przyczepą leśną, solówka z HDS albo bus wywrotka, zależnie od terenu i ilości drewna. Kłody i dłużyce lądują na pace, a Wy nie dźwigacie niczego poza kubkiem kawy.',
        },
        {
          name: 'Zrębkowanie gałęzi',
          description:
            'Gałęzie wrzucamy do rębaka, wychodzi zrębka. A co z nią dalej, to już Twoja decyzja: na rabatę albo z nami na wywrotkę.',
        },
        {
          name: 'Utylizacja bioodpadów',
          description:
            'Gałęzie, liście i resztki po pracach wywozimy naszymi busami wywrotkami. Zostaje czysty teren, a nie sterta do ogarnięcia w weekend.',
        },
        {
          name: 'Sprzedaż drewna i zrębki',
          description:
            'Drewno i zrębka prosto z naszych zleceń, do kominka, pieca albo ogrodu. Dowozimy busem wywrotką pod Twój dom, więc zapytaj, co mamy akurat na placu.',
        },
      ],
    },
  ] satisfies Category[],
}

export type GalleryItem =
  | {
      kind: 'photo'
      photo: PhotoKey
      alt: string
      caption: string
      category: CategoryId
      position?: string
      slogan?: string
    }
  | { kind: 'video'; video: VideoKey; caption: string; category: CategoryId }

const galleryItems: GalleryItem[] = [
  {
    kind: 'photo',
    photo: 'dab-osiedle',
    alt: 'Arborysta w koronie dębu przy osiedlu',
    caption: 'Pielęgnacja dębu przy osiedlu',
    category: 'drzewa',
  },
  {
    kind: 'photo',
    photo: 'dzialka-dom',
    slogan: 'Czysta działka\nzyskuje na wartości.',
    alt: 'Działka po mulczowaniu z drewnianym domem w tle',
    caption: 'Po mulczowaniu',
    category: 'teren',
  },
  {
    kind: 'photo',
    photo: 'hds-zachod',
    alt: 'Ciągnik z żurawiem ładuje gałęzie na przyczepę',
    caption: 'Załadunek żurawiem HDS',
    position: '40% 50%',
    category: 'drewno',
  },
  { kind: 'video', video: 'wycinka', caption: 'Wycinka z asekuracją liną', category: 'drzewa' },
  {
    kind: 'photo',
    photo: 'swierk-dom',
    alt: 'Wysoki świerk z pozostawionym wierzchołkiem obok domu',
    caption: 'Wycinka sekcyjna świerka przy domu',
    position: '50% 40%',
    category: 'drzewa',
  },
  {
    kind: 'photo',
    photo: 'przecinka',
    slogan: 'Trudny teren?\nMamy na to sposób.',
    alt: 'Oczyszczona droga między rzędami świerków',
    caption: 'Przecinka w świerkach',
    category: 'teren',
  },
  { kind: 'video', video: 'mulczer', caption: 'Mulczer leśny w pracy', category: 'teren' },
  {
    kind: 'photo',
    photo: 'kat-drzewa',
    slogan: 'Precyzja na każdej\nwysokości.',
    alt: 'Arborysta z pilarką na szczycie pnia ściętego świerka',
    caption: 'Rozbiórka świerka od góry',
    position: '50% 10%',
    category: 'drzewa',
  },
  {
    kind: 'photo',
    photo: 'klody',
    alt: 'Chwytak żurawia nad kłodami na przyczepie leśnej',
    caption: 'Kłody na przyczepie leśnej',
    position: '20% 50%',
    category: 'drewno',
  },
  {
    kind: 'photo',
    photo: 'frezarka',
    slogan: 'Robimy miejsce\nna Twoje plany.',
    alt: 'Frezarka do pni na oczyszczonym terenie',
    caption: 'Frezowanie karp',
    category: 'teren',
  },
  { kind: 'video', video: 'rebak', caption: 'Rębak do gałęzi', category: 'drewno' },
  {
    kind: 'photo',
    photo: 'dzialka-sad',
    slogan: 'Więcej przestrzeni =\nwięcej możliwości.',
    alt: 'Działka z pozostawionymi drzewami po usunięciu zarośli',
    caption: 'Oczyszczanie działki z zarośli',
    category: 'teren',
  },
  {
    kind: 'photo',
    photo: 'swierk-korona',
    alt: 'Arborysta wspina się w koronie świerka',
    caption: 'Wejście w koronę świerka',
    position: '50% 25%',
    category: 'drzewa',
  },
  { kind: 'video', video: 'frezowanie', caption: 'Frezowanie pnia', category: 'teren' },
  {
    kind: 'photo',
    photo: 'zrebka-przyczepa',
    alt: 'Przyczepa wypełniona zrębką',
    caption: 'Zrębka z jednego zlecenia',
    category: 'drewno',
  },
  {
    kind: 'photo',
    photo: 'nad-dachem',
    slogan: 'Od problematycznego\ndrzewa do czystego\nterenu.',
    alt: 'Arborysta przy pniu nad dachem altany z panelem słonecznym',
    caption: 'Usunięcie niebezpiecznego drzewa',
    position: '35% 50%',
    category: 'drzewa',
  },
  {
    kind: 'photo',
    photo: 'rabata',
    alt: 'Rabata obłożona kamieniami i wysypana zrębką',
    caption: 'Rabata wysypana naszą zrębką',
    category: 'drewno',
  },
  {
    kind: 'photo',
    photo: 'plac-dluzyce',
    alt: 'Ciągnik z żurawiem i przyczepą leśną przy stosach dłużyc',
    caption: 'Plac z dłużycami',
    category: 'drewno',
  },
  {
    kind: 'photo',
    photo: 'sciolka',
    alt: 'Zrębka rozłożona jako ściółka pod młodymi świerkami',
    caption: 'Ściółka pod iglakami',
    category: 'drewno',
  },
  {
    kind: 'photo',
    photo: 'sekcyjna-linie',
    alt: 'Ogołocony pień świerka pod liniami energetycznymi',
    caption: 'Wycinka przy liniach energetycznych',
    position: '50% 0%',
    category: 'drzewa',
  },
  {
    kind: 'photo',
    photo: 'pnie',
    slogan: 'Ktoś chętny\nna nowy stolik?',
    alt: 'Dwa plastry z pnia akacji leżące w trawie',
    caption: 'Plastry z akacji',
    category: 'drewno',
  },
]

export const gallery = {
  eyebrow: 'Realizacje',
  title: ['Tak wygląda', 'nasza robota'],
  items: galleryItems,
}

export const benefits = {
  eyebrow: 'Korzyści',
  title: ['Dlaczego warto', 'nas wybrać?'],
  items: [
    {
      title: 'Doświadczenie i wiedza',
      text: 'Wiemy, że każde drzewo i każda działka to inne wyzwanie. Przez lata pracy wykonaliśmy setki zleceń – od pojedynczych drzew przy domu, po rozległe tereny pod inwestycje. Dzięki temu od razu wiemy, jak bezpiecznie powalić drzewo w ciasnym miejscu, jak ochronić ogrodzenie, dach czy instalacje i jak zrobić to szybciej, bez ukrytych kosztów. Płacisz za fachowość, nie za naukę na Twojej posesji.',
    },
    {
      title: 'Szybka i darmowa wycena',
      text: 'Zadzwoń lub wyślij zdjęcia – oddzwonimy z konkretną ofertą. Dojeżdżamy na oględziny bez żadnych opłat i bez zobowiązań. Cena, którą usłyszysz, jest ceną, którą zapłacisz – bez niespodzianek po zakończeniu pracy.',
    },
    {
      title: 'Bezpieczeństwo',
      text: 'Pracujemy z rozwagą, w pełnym wyposażeniu ochronnym i zgodnie z zasadami BHP. Przed rozpoczęciem prac oceniamy otoczenie i zabezpieczamy teren. Nasza ekipa jest ubezpieczona, więc Ty i Twoje mienie jesteście bezpieczni, a my pracujemy spokojnie i pewnie, także przy drzewach rosnących tuż przy budynkach i liniach energetycznych.',
    },
    {
      title: 'Nowoczesny sprzęt',
      text: 'Profesjonalne piły, rębaki, frezarki do pni i sprzęt do prac wysokościowych pozwalają nam wykonać zlecenie sprawniej i czyściej. Efekt dla Ciebie: krótszy czas pracy, mniej bałaganu i dokładnie uporządkowany teren – bez śladów po maszynach i bez pozostawionych gałęzi.',
    },
    {
      title: 'Terminowość',
      text: 'Szanujemy Twój czas. Ustalony termin to dla nas zobowiązanie – przyjeżdżamy punktualnie i kończymy prace zgodnie z planem. Dzięki temu możesz spokojnie zaplanować budowę, remont czy sprzedaż działki, bez przesuwania kolejnych etapów.',
    },
    {
      title: 'Pomoc w formalnościach',
      text: 'Wycinka często wymaga zgłoszenia lub zezwolenia, a przepisy potrafią zniechęcić. Zajmiemy się tym za Ciebie – doradzimy, jakie dokumenty są potrzebne, i pomożemy przejść przez procedurę, tak by wszystko odbyło się zgodnie z prawem i bez ryzyka kar.',
    },
  ],
}

export const reviews = {
  eyebrow: 'Opinie',
  title: ['Co mówią', 'nasi klienci'],
  rating: '5,0',
  source: 'Google',
  href: 'https://share.google/iaUEYhHgTq2hQCfag',
  items: [
    {
      author: 'Magdalena G.',
      text: 'Szybko, rzetelnie i super profesjonalnie. Drzewa wycięte, pnie sfrezowane, gałęzie zebrane, teren oczyszczony, wszystko uporządkowane! Każda nowa sytuacja jaka pojawiła się przy okazji prac, opanowana z chęcią pomocy i rozwiązania problemu. Polecam!',
    },
    {
      author: 'Milena',
      text: 'Szybka i konkretna akcja! Wycięli drzewa, sfrezowali pnie, a wszystko (razem z gałęziami) od razu zabrali i wywieźli z działki. Zostawili po sobie idealny porządek, zero bałaganu. Kontakt z chłopakami rewelacyjny i na pełnym luzie. Szczerze polecam!',
    },
    {
      author: 'Michał',
      text: 'Profesjonalna obsługa, miły kontakt i solidnie wykonana praca. Wycinka i mulczowanie wykonane bez zarzutu – zdecydowanie polecam!',
    },
  ],
}

export const about = {
  eyebrow: 'O nas',
  title: ['Pasja, która', 'stała się pracą'],
  photo: 'na-konarze' satisfies PhotoKey,
  photoAlt: 'Damian Treder w uprzęży siedzi na ściętym konarze z pilarką',
  photoPosition: '50% 38%',
  photoCaption: 'Fachowiec Damian Treder przy pracy.',
  slogan: 'Fachowo od korony\npo korzenie.',
  paragraphs: [
    'Nazywam się Damian Treder. Pierwszy raz na Mazury zabrała mnie żona. Spojrzałem na jeziora, lasy i drzewa i od razu wiedziałem, że zostaję. Tak zaczęła się moja miłość do drzew.',
    'Od dzieciaka kręciły mnie silniki, traktory i ciężarówki. Do tego góry, wysokość i kontakt z naturą. Arborystyka połączyła to wszystko w jedno: pracuję na wysokości, z piłą w ręku, a w garażu stoi sprzęt, o jakim marzyłem jako dzieciak.',
    'Wycinam drzewa, także te trudne i niebezpieczne, i oczyszczam działki. Liczą się dla mnie trzy rzeczy: precyzja, bezpieczeństwo i szacunek do natury. Drzewo ścinam tylko wtedy, gdy trzeba, a gdy trzeba, robię to dobrze.',
    'Dla mnie to nie jest zwykła praca. To pasja, którą mogę wykonywać każdego dnia.',
  ],
  teamNote: 'Resztę ekipy poznacie później!',
  gearTitle: 'Nasz sprzęt',
  gear: [
    'Sprzęt do wspinaczki drzewnej',
    'Podnośnik koszowy',
    'Rębak do gałęzi',
    'Frezarka do pni',
    'Mulczer leśny',
    'Łuparka do drewna',
    'Brona bijakowa',
    'Wywrotka z HDS',
    'Ciągnik z przyczepą leśną i HDS',
  ],
}

export const area = {
  eyebrow: 'Obszar działania',
  title: ['Warmia, Mazury', 'i Podlasie'],
  lede: 'Dojeżdżamy na terenie dwóch województw. Przy większych zleceniach pojedziemy dalej, zadzwoń i zapytaj.',
  regions: [
    {
      name: 'Warmińsko-Mazurskie',
      mapName: 'warmińsko-mazurskie',
      towns: 'Olsztyn, Elbląg, Ełk i okolice',
    },
    { name: 'Podlaskie', mapName: 'podlaskie', towns: 'Białystok, Suwałki, Łomża i okolice' },
  ],
  // Coordinates in the map's 600-wide viewBox (src/data/poland.ts).
  towns: [
    { name: 'Olsztyn', x: 381, y: 103, anchor: 'start' },
    { name: 'Elbląg', x: 316, y: 66, anchor: 'end' },
    { name: 'Ełk', x: 493, y: 98, anchor: 'start' },
    { name: 'Suwałki', x: 527, y: 72, anchor: 'start' },
    { name: 'Białystok', x: 541, y: 166, anchor: 'middle' },
    { name: 'Łomża', x: 475, y: 161, anchor: 'end' },
  ],
} as const

export const contact = {
  eyebrow: 'Kontakt',
  title: ['Zadzwoń,', 'wycenimy'],
  lede: 'Najszybciej przez telefon. Możesz też wysłać zdjęcia drzewa lub działki na WhatsAppie, a oddzwonimy z wyceną.',
  socialsTitle: 'Znajdziesz nas też tutaj',
}
