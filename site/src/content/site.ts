// Photo and video keys are file names (without extension) in src/assets/photos and src/assets/video.

import type { PhotoKey, VideoKey } from '../lib/media'

export type CategoryId = 'drzewa' | 'teren' | 'drewno'

export const business = {
  brand: 'Dobrze Tniemy',
  legalName: 'Usługi Pilarskie i Leśne Damian Treder',
  owner: 'Damian Treder',
  nip: '000-000-00-00',
  motto: 'Zero ściemy',
  tagline: 'Precyzja na każdej wysokości.',
  phone: { display: '723 277 958', href: 'tel:+48723277958' },
  email: 'info.damiantreder@gmail.com',
  area: 'Warmińsko-Mazurskie, Podlaskie',
} as const

export const socials = [
  {
    id: 'facebook',
    label: 'Facebook',
    note: 'Zdjęcia i filmy z realizacji',
    href: 'https://www.facebook.com/',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    note: 'Na bieżąco z pracy',
    href: 'https://www.instagram.com/',
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
  { href: '#o-nas', label: 'O nas' },
  { href: '#obszar', label: 'Obszar' },
  { href: '#kontakt', label: 'Kontakt' },
] as const

export const hero = {
  eyebrow: `Usługi pilarskie i leśne · ${business.owner}`,
  lede: 'Wycinka drzew, również alpinistyczna i sekcyjna. Pielęgnacja koron, mulczowanie i przygotowanie działek, frezowanie pni oraz transport drewna z HDS. Pracujemy na Warmii, Mazurach i Podlasiu.',
  facts: [
    'Wycinka przy budynkach i liniach',
    'Własny rębak i frezarka',
    'Wywozimy drewno i gałęzie',
  ],
  photo: 'hero-wspinaczka' satisfies PhotoKey,
  photoAlt: 'Arborysta na linie w koronie drzewa, z pilarką uniesioną nad głową',
  badge: { title: 'Zero ściemy', note: 'Uczciwa wycena' },
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
  // CSS object-position for the crop, e.g. '50% 20%' to keep the top of a tall photo.
  photoPosition?: string
  services: Service[]
}

export const services = {
  eyebrow: 'Usługi arborystyczne',
  title: ['Od korony', 'po korzeń'],
  lede: 'Zajmujemy się drzewem od pierwszego cięcia w koronie do wyfrezowania pnia, a terenem od zarośli do czystego placu. Gałęzie zrębkujemy na miejscu, drewno wywozimy.',
  categories: [
    {
      id: 'drzewa',
      title: 'Drzewa',
      lead: 'Wycinka i pielęgnacja',
      photo: 'ciecie-korona',
      photoAlt: 'Arborysta w uprzęży tnie konar w koronie dębu',
      photoPosition: '50% 45%',
      services: [
        {
          name: 'Wycinka alpinistyczna i sekcyjna',
          description:
            'Drzewa przy domach, ogrodzeniach i liniach rozbieramy kawałek po kawałku, z liny lub z podnośnika.',
        },
        {
          name: 'Wycinka tradycyjna',
          description: 'Ścinka z kontrolowanym powaleniem drzewa, na działkach i w lesie.',
        },
        {
          name: 'Pielęgnacja koron',
          description:
            'Cięcia sanitarne, prześwietlanie i redukcja korony, usuwanie suchych konarów.',
        },
      ],
    },
    {
      id: 'teren',
      title: 'Teren i działki',
      lead: 'Od zarośli do czystego placu',
      photo: 'kat-teren',
      photoAlt: 'Ciągnik z mulczerem leśnym na oczyszczonej działce między drzewami',
      services: [
        {
          name: 'Mulczowanie terenu',
          description:
            'Mulczer leśny rozdrabnia krzaki, samosiejki i gałęzie na miejscu. Teren zostaje równy.',
        },
        {
          name: 'Karczowanie i przygotowanie działek',
          description:
            'Usuwamy drzewa, krzewy i karpy. Przygotowujemy teren pod budowę, ogród lub uprawę.',
        },
        {
          name: 'Trzebieże i czyszczenie działek leśnych',
          description: 'Przerzedzamy młodniki i porządkujemy zarośnięte działki leśne.',
        },
        {
          name: 'Frezowanie pni',
          description:
            'Pień schodzi poniżej poziomu gruntu. Zostaje miejsce pod trawnik, rabatę albo kostkę.',
        },
      ],
    },
    {
      id: 'drewno',
      title: 'Drewno i transport',
      lead: 'Wywóz, zrębka, sprzedaż',
      photo: 'kat-drewno',
      photoAlt: 'Ciągnik z przyczepą leśną wyładowaną drewnem, o zachodzie słońca',
      services: [
        {
          name: 'Transport drewna z HDS',
          description:
            'Ciągnik z przyczepą leśną i żurawiem. Ładujemy kłody i dłużyce, wywozimy drewno.',
        },
        {
          name: 'Zrębkowanie gałęzi',
          description: 'Gałęzie idą do rębaka na miejscu. Zrębkę możesz zostawić na ściółkę.',
        },
        {
          name: 'Utylizacja bioodpadów',
          description: 'Zabieramy gałęzie, liście i resztki po pracach.',
        },
        {
          name: 'Sprzedaż drewna i zrębki',
          description: 'Drewno i zrębka z bieżących zleceń. Zapytaj, co jest dostępne.',
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
    alt: 'Oczyszczona działka z drewnianym domem w tle',
    caption: 'Działka po karczowaniu',
    category: 'teren',
  },
  {
    kind: 'photo',
    photo: 'hds-zachod',
    alt: 'Ciągnik z żurawiem ładuje gałęzie na przyczepę',
    caption: 'Załadunek żurawiem HDS',
    category: 'drewno',
  },
  { kind: 'video', video: 'wycinka', caption: 'Wycinka z asekuracją liną', category: 'drzewa' },
  {
    kind: 'photo',
    photo: 'swierk-dom',
    alt: 'Wysoki świerk z pozostawionym wierzchołkiem obok domu',
    caption: 'Wycinka sekcyjna świerka przy domu',
    category: 'drzewa',
  },
  {
    kind: 'photo',
    photo: 'przecinka',
    alt: 'Oczyszczona droga między rzędami świerków',
    caption: 'Przecinka w świerkach',
    category: 'teren',
  },
  { kind: 'video', video: 'mulczer', caption: 'Mulczer leśny w pracy', category: 'teren' },
  {
    kind: 'photo',
    photo: 'na-konarze',
    alt: 'Arborysta w uprzęży siedzi na ściętym konarze z pilarką',
    caption: 'Praca na wysokości',
    category: 'drzewa',
  },
  {
    kind: 'photo',
    photo: 'zrywka-las',
    alt: 'Czerwony ciągnik z przyczepą drewna w lesie',
    caption: 'Zrywka drewna z lasu',
    category: 'drewno',
  },
  {
    kind: 'photo',
    photo: 'frezarka',
    alt: 'Frezarka do pni na oczyszczonym terenie',
    caption: 'Frezowanie karp',
    category: 'teren',
  },
  {
    kind: 'photo',
    photo: 'kat-drzewa',
    alt: 'Arborysta z pilarką na szczycie pnia ściętego świerka',
    caption: 'Rozbiórka świerka od góry',
    position: '50% 10%',
    category: 'drzewa',
  },
  { kind: 'video', video: 'rebak', caption: 'Rębak do gałęzi', category: 'drewno' },
  {
    kind: 'photo',
    photo: 'dzialka-sad',
    alt: 'Działka z pozostawionymi drzewami po usunięciu zarośli',
    caption: 'Oczyszczanie działki z zarośli',
    category: 'teren',
  },
  {
    kind: 'photo',
    photo: 'klody',
    alt: 'Chwytak żurawia nad kłodami na przyczepie leśnej',
    caption: 'Kłody na przyczepie leśnej',
    category: 'drewno',
  },
  {
    kind: 'photo',
    photo: 'swierk-korona',
    alt: 'Arborysta wspina się w koronie świerka',
    caption: 'Wejście w koronę świerka',
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
    alt: 'Arborysta przy pniu nad dachem altany z panelem słonecznym',
    caption: 'Wycinka nad dachem',
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
    photo: 'trzebiez',
    alt: 'Tyczki z trzebieży ułożone na łące',
    caption: 'Trzebież młodnika',
    category: 'teren',
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
    caption: 'Wycinka pod liniami',
    category: 'drzewa',
  },
  {
    kind: 'photo',
    photo: 'pnie',
    alt: 'Świeżo ścięte pnie w trawie',
    caption: 'Pnie przed frezowaniem',
    category: 'teren',
  },
]

export const gallery = {
  eyebrow: 'Realizacje',
  title: ['Tak wygląda', 'nasza robota'],
  items: galleryItems,
}

export const about = {
  eyebrow: 'O nas',
  title: ['Zero ściemy.', 'Dobrze tniemy.'],
  photo: 'pien-serce' satisfies PhotoKey,
  photoAlt: 'Przekrój pnia w kształcie serca z wypalonym logo DT',
  photoCaption: 'Pień w kształcie serca z jednego ze zleceń. Logo wypaliliśmy sami.',
  paragraphs: [
    'Dobrze Tniemy to firma Damiana Tredera. Robimy wycinki, pielęgnację drzew i prace leśne, od jednego drzewa w ogrodzie po czyszczenie całych działek.',
    'Przed robotą mówimy wprost, co zrobimy, ile to potrwa i ile kosztuje. Pracujemy na własnym sprzęcie, więc nie czekasz na podwykonawców.',
  ],
  gearTitle: 'Nasz sprzęt',
  gear: [
    'Sprzęt do wspinaczki drzewnej',
    'Podnośnik koszowy',
    'Rębak do gałęzi',
    'Frezarka do pni',
    'Mulczer leśny',
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
