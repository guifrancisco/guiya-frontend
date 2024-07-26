import { tokens } from "../theme";

export const mockDataUsers = [
  {
    id: 1,
    firstName: "Jon",
    lastName: "Snow",
    email: "jonsnow@gmail.com",
    status: "ativo",
    phone: "(665)121-5454",
    access: "moderador",
    lastAccess: "2024-06-30 14:32",
    avatar: "user1",
  },
  {
    id: 2,
    firstName: "Cersei",
    lastName: "Lannister",
    email: "cerseilannister@gmail.com",
    status: "ativo",
    phone: "(421)314-2288",
    access: "membro",
    lastAccess: "2024-06-29 10:15",
    avatar: "user3",
  },
  {
    id: 3,
    firstName: "Jaime",
    lastName: "Lannister",
    email: "jaimelannister@gmail.com",
    status: "bloqueado",
    phone: "(422)982-6739",
    access: "membro",
    lastAccess: "2024-06-28 09:20",
    avatar: "user6",
  },
  {
    id: 4,
    firstName: "Anya",
    lastName: "Stark",
    email: "anyastark@gmail.com",
    status: "bloqueado",
    phone: "(921)425-6742",
    access: "moderador",
    lastAccess: "2024-06-27 16:45",
    avatar: "user7",
  },
  {
    id: 5,
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "daenerystargaryen@gmail.com",
    status: "suspenso",
    phone: "(421)445-1189",
    access: "membro",
    lastAccess: "2024-06-26 12:00",
    avatar: "user8",
  },
  {
    id: 6,
    firstName: "Ever",
    lastName: "Melisandre",
    email: "evermelisandre@gmail.com",
    status: "ativo",
    phone: "(232)545-6483",
    access: "moderador",
    lastAccess: "2024-06-25 08:30",
    avatar: "user9",
  },
  {
    id: 7,
    firstName: "Ferrara",
    lastName: "Clifford",
    email: "ferraraclifford@gmail.com",
    status: "ativo",
    phone: "(543)124-0123",
    access: "membro",
    lastAccess: "2024-06-24 11:20",
    avatar: "user10",
  },
  {
    id: 8,
    firstName: "Rossini",
    lastName: "Frances",
    email: "rossinifrances@gmail.com",
    status: "ativo",
    phone: "(222)444-5555",
    access: "membro",
    lastAccess: "2024-06-23 14:10",
    avatar: "user4",
  },
  {
    id: 9,
    firstName: "Harvey",
    lastName: "Roxie",
    email: "harveyroxie@gmail.com",
    status: "ativo",
    phone: "(444)555-6239",
    access: "moderador",
    lastAccess: "2024-06-22 17:05",
    avatar: "user3",
  },
];

export const mockDataClients = [
  {
    id: 124512,
    firstName: "Jon",
    lastName: "Snow",
    email: "jonsnow@gmail.com",
    birthDate: "1988-12-01",
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
  },
  {
    id: 164512,
    firstName: "Cersei",
    lastName: "Lannister",
    email: "cerseilannister@gmail.com",
    birthDate: "1981-05-15",
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
  },
  {
    id: 413643,
    firstName: "Jaime",
    lastName: "Lannister",
    email: "jaimelannister@gmail.com",
    birthDate: "1978-08-12",
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
  },
  {
    id: 123542,
    firstName: "Anya",
    lastName: "Stark",
    email: "anyastark@gmail.com",
    birthDate: "2007-02-19",
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
  },
  {
    id: 143512,
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "daenerystargaryen@gmail.com",
    birthDate: "1993-11-23",
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
  },
  {
    id: 123554,
    firstName: "Ever",
    lastName: "Melisandre",
    email: "evermelisandre@gmail.com",
    birthDate: "1873-06-25",
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
  },
  {
    id: 124312,
    firstName: "Ferrara",
    lastName: "Clifford",
    email: "ferraraclifford@gmail.com",
    birthDate: "1979-01-13",
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
  },
  {
    id: 12512,
    firstName: "Rossini",
    lastName: "Frances",
    email: "rossinifrances@gmail.com",
    birthDate: "1987-09-30",
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
  },
  {
    id: 543215,
    firstName: "Enteri",
    lastName: "Redack",
    email: "enteriredack@gmail.com",
    birthDate: "1981-02-18",
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
  },
  {
    id: 92197,
    firstName: "Steve",
    lastName: "Goodman",
    email: "stevegoodmane@gmail.com",
    birthDate: "2012-03-11",
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
  },
];

export const mockDataOrders = [
  {
    orderId: 5345345,
    orderDate: "2022-05-02",
    deliveryDate: "2022-05-08",
    customer: {
      customerId: 4534535,
      firstName: "Jaime",
      lastName: "Lannister",
      email: "jaimelannister@gmail.com",
      phone: "(422) 982-6739",
      address: "The Red Keep, King's Landing, 00001",
      city: "King's Landing",
      zipCode: "00001",
    },
    createdBy: {
      userId: 3534534,
      firstName: "Guilherme",
      lastName: "Lannister",
      email: "jaimelannister@gmail.com",
      avatar: "user4",
    },
    status: "Em Processamento",
    paymentType: "crédito",
    cost: 11.24,
    orderDescription: "Sword",
  },
  {
    orderId: 1234567,
    orderDate: "2022-06-01",
    deliveryDate: "2022-06-05",
    customer: {
      customerId: 1231231,
      firstName: "Arya",
      lastName: "Stark",
      email: "aryastark@gmail.com",
      phone: "(123) 456-7890",
      address: "Winterfell, The North, 00002",
      city: "Winterfell",
      zipCode: "00002",
    },
    createdBy: {
      userId: 7897897,
      firstName: "Ned",
      lastName: "Stark",
      email: "nedstark@gmail.com",
      avatar: "user1",
    },
    status: "Entregue",
    paymentType: "pix",
    cost: 22.45,
    orderDescription: "Needle",
  },
  {
    orderId: 9876543,
    orderDate: "2022-07-10",
    deliveryDate: "2022-07-15",
    customer: {
      customerId: 9879879,
      firstName: "Jon",
      lastName: "Snow",
      email: "jonsnow@gmail.com",
      phone: "(987) 654-3210",
      address: "Castle Black, The Wall, 00003",
      city: "The Wall",
      zipCode: "00003",
    },
    createdBy: {
      userId: 6546546,
      firstName: "Samwell",
      lastName: "Tarly",
      email: "samwelltarly@gmail.com",
      avatar: "user2",
    },
    status: "Aguardando Pagamento",
    paymentType: "débito",
    cost: 33.67,
    orderDescription: "Dragonglass",
  },
  {
    orderId: 1928374,
    orderDate: "2022-08-20",
    deliveryDate: "2022-08-25",
    customer: {
      customerId: 1921921,
      firstName: "Daenerys",
      lastName: "Targaryen",
      email: "daenerystargaryen@gmail.com",
      phone: "(192) 837-4650",
      address: "Dragonstone, The Narrow Sea, 00004",
      city: "Dragonstone",
      zipCode: "00004",
    },
    createdBy: {
      userId: 5675675,
      firstName: "Tyrion",
      lastName: "Lannister",
      email: "tyrionlannister@gmail.com",
      avatar: "user3",
    },
    status: "Cancelado",
    paymentType: "dinheiro",
    cost: 44.89,
    orderDescription: "Dragon Eggs",
  },
  {
    orderId: 5647382,
    orderDate: "2022-09-15",
    deliveryDate: "2022-09-20",
    customer: {
      customerId: 5645645,
      firstName: "Cersei",
      lastName: "Lannister",
      email: "cerseilannister@gmail.com",
      phone: "(564) 738-1920",
      address: "The Red Keep, King's Landing, 00005",
      city: "King's Landing",
      zipCode: "00005",
    },
    createdBy: {
      userId: 8908908,
      firstName: "Qyburn",
      lastName: "",
      email: "qyburn@gmail.com",
      avatar: "user4",
    },
    status: "Aguardando Retirada",
    paymentType: "crédito",
    cost: 55.00,
    orderDescription: "Wildfire",
  },
  {
    orderId: 6574839,
    orderDate: "2022-10-05",
    deliveryDate: "2022-10-10",
    customer: {
      customerId: 6576576,
      firstName: "Tyrion",
      lastName: "Lannister",
      email: "tyrionlannister@gmail.com",
      phone: "(657) 483-1920",
      address: "Casterly Rock, The Westerlands, 00006",
      city: "Casterly Rock",
      zipCode: "00006",
    },
    createdBy: {
      userId: 3453453,
      firstName: "Varys",
      lastName: "",
      email: "varys@gmail.com",
      avatar: "user3",
    },
    status: "Pagamento Confirmado",
    paymentType: "pix",
    cost: 29.99,
    orderDescription: "Wine",
  },
  {
    orderId: 3847562,
    orderDate: "2022-11-12",
    deliveryDate: "2022-11-17",
    customer: {
      customerId: 3843843,
      firstName: "Brienne",
      lastName: "Tarth",
      email: "briennetarth@gmail.com",
      phone: "(384) 756-1920",
      address: "Evenfall Hall, The Stormlands, 00007",
      city: "Evenfall Hall",
      zipCode: "00007",
    },
    createdBy: {
      userId: 2132132,
      firstName: "Podrick",
      lastName: "Payne",
      email: "podrickpayne@gmail.com",
      avatar: "user2",
    },
    status: "Aguardando Entrega",
    paymentType: "débito",
    cost: 18.75,
    orderDescription: "Armor",
  },
  {
    orderId: 7293847,
    orderDate: "2022-12-01",
    deliveryDate: "2022-12-06",
    customer: {
      customerId: 7297297,
      firstName: "Hodor",
      lastName: "",
      email: "hodor@gmail.com",
      phone: "(729) 384-7561",
      address: "Winterfell, The North, 00008",
      city: "Winterfell",
      zipCode: "00008",
    },
    createdBy: {
      userId: 9879879,
      firstName: "Meera",
      lastName: "Reed",
      email: "meerareed@gmail.com",
      avatar: "user1",
    },
    status: "Em Processamento",
    paymentType: "dinheiro",
    cost: 12.34,
    orderDescription: "Doorstop",
  },
  {
    orderId: 1928475,
    orderDate: "2023-01-15",
    deliveryDate: "2023-01-20",
    customer: {
      customerId: 1921928,
      firstName: "Theon",
      lastName: "Greyjoy",
      email: "theongreyjoy@gmail.com",
      phone: "(192) 847-5667",
      address: "Pyke, The Iron Islands, 00009",
      city: "Pyke",
      zipCode: "00009",
    },
    createdBy: {
      userId: 6546547,
      firstName: "Yara",
      lastName: "Greyjoy",
      email: "yaragreyjoy@gmail.com",
      avatar: "user4",
    },
    status: "Entregue",
    paymentType: "crédito",
    cost: 34.56,
    orderDescription: "Ship",
  },
  {
    orderId: 4657382,
    orderDate: "2023-02-10",
    deliveryDate: "2023-02-15",
    customer: {
      customerId: 4654654,
      firstName: "Jorah",
      lastName: "Mormont",
      email: "jorahmormont@gmail.com",
      phone: "(465) 738-1920",
      address: "Bear Island, The North, 00010",
      city: "Bear Island",
      zipCode: "00010",
    },
    createdBy: {
      userId: 3453456,
      firstName: "Lyanna",
      lastName: "Mormont",
      email: "lyannamormont@gmail.com",
      avatar: "user3",
    },
    status: "Aguardando Retirada",
    paymentType: "pix",
    cost: 45.67,
    orderDescription: "Shield",
  },
];


export const mockTransactions = [
  {
    txId: "#43455",
    user: "Guilherme Francisco",
    date: "28 Jan. 2022",
    status: "Em Processamento",
    cost: "43.95",
  },
  {
    txId: "#98549",
    user: "João Silva",
    date: "01 Apr. 2022",
    status: "Aguardando Pagamento",
    cost: "133.45",
  },
  {
    txId: "#87982",
    user: "Ana Souza",
    date: "01 Sep. 2021",
    status: "Pagamento Confirmado",
    cost: "43.95",
  },
  {
    txId: "#51034",
    user: "Carlos Pereira",
    date: "05 Nov. 2022",
    status: "Aguardando Entrega",
    cost: "200.95",
  },
  {
    txId: "#02123",
    user: "Maria Oliveira",
    date: "02 Nov. 2022",
    status: "Aguardando Retirada",
    cost: "13.55",
  },
  {
    txId: "#01445",
    user: "Ana Souza",
    date: "01 Sep. 2021",
    status: "Cancelado",
    cost: "43.95",
  },
  {
    txId: "#12051",
    user: "Pedro Lima",
    date: "15 Apr. 2019",
    status: "Entregue",
    cost: "24.20",
  },
  {
    txId: "#03152",
    user: "João Silva",
    date: "01 Apr. 2022",
    status: "Entregue",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
