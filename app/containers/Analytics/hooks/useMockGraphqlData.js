import { sleep } from "../utils";
const data = [
  {
    id: 1,
    name: "aphna",
    status: "UNSUCCESSFUL",
    dueDate: "1589741347",
    totalModules: 88,
    dueDateEnabled: false,
    completedModules: 11
  },
  {
    id: 2,
    name: "achelle",
    status: "REVOCATED",
    dueDate: "1578759952",
    totalModules: 89,
    dueDateEnabled: true,
    completedModules: 13
  },
  {
    id: 3,
    name: "oddie",
    status: "UNSUCCESSFUL",
    dueDate: "1561708116",
    totalModules: 23,
    dueDateEnabled: false,
    completedModules: 6
  },
  {
    id: 4,
    name: "affi",
    status: "UNSUCCESSFUL",
    dueDate: "1575867518",
    totalModules: 48,
    dueDateEnabled: true,
    completedModules: 16
  },
  {
    id: 5,
    name: "rystie",
    status: "PENDING",
    dueDate: "1567605929",
    totalModules: 81,
    dueDateEnabled: true,
    completedModules: 19
  },
  {
    id: 6,
    name: "andie",
    status: "REVOCATED",
    dueDate: "1564098298",
    totalModules: 52,
    dueDateEnabled: true,
    completedModules: 1
  },
  {
    id: 7,
    name: "imitry",
    status: "ACCREDITED",
    dueDate: "1575482295",
    totalModules: 75,
    dueDateEnabled: false,
    completedModules: 9
  },
  {
    id: 8,
    name: "asty",
    status: "REVOCATED",
    dueDate: "1586574506",
    totalModules: 45,
    dueDateEnabled: false,
    completedModules: 10
  },
  {
    id: 9,
    name: "rville",
    status: "ACCREDITED",
    dueDate: "1566362421",
    totalModules: 49,
    dueDateEnabled: true,
    completedModules: 13
  },
  {
    id: 10,
    name: "Rena",
    status: "ACCREDITED",
    dueDate: "1569293581",
    totalModules: 90,
    dueDateEnabled: true,
    completedModules: 19
  },
  {
    id: 11,
    name: "Freddy",
    status: "UNSUCCESSFUL",
    dueDate: "1582138128",
    totalModules: 35,
    dueDateEnabled: true,
    completedModules: 19
  },
  {
    id: 12,
    name: "Glynnis",
    status: "UNSUCCESSFUL",
    dueDate: "1586936251",
    totalModules: 75,
    dueDateEnabled: true,
    completedModules: 8
  },
  {
    id: 13,
    name: "Evelyn",
    status: "ACCREDITED",
    dueDate: "1585503771",
    totalModules: 48,
    dueDateEnabled: true,
    completedModules: 2
  },
  {
    id: 14,
    name: "Dunc",
    status: "ACCREDITED",
    dueDate: "1567974714",
    totalModules: 26,
    dueDateEnabled: true,
    completedModules: 17
  },
  {
    id: 15,
    name: "Audie",
    status: "PENDING",
    dueDate: "1560977476",
    totalModules: 79,
    dueDateEnabled: true,
    completedModules: 10
  },
  {
    id: 16,
    name: "Glenn",
    status: "UNSUCCESSFUL",
    dueDate: "1576068650",
    totalModules: 93,
    dueDateEnabled: false,
    completedModules: 17
  },
  {
    id: 17,
    name: "Carleen",
    status: "UNSUCCESSFUL",
    dueDate: "1581041263",
    totalModules: 37,
    dueDateEnabled: true,
    completedModules: 18
  },
  {
    id: 18,
    name: "Bernadette",
    status: "REVOCATED",
    dueDate: "1567547337",
    totalModules: 63,
    dueDateEnabled: false,
    completedModules: 10
  },
  {
    id: 19,
    name: "Alecia",
    status: "REVOCATED",
    dueDate: "1589632114",
    totalModules: 64,
    dueDateEnabled: false,
    completedModules: 16
  },
  {
    id: 20,
    name: "Markus",
    status: "ACCREDITED",
    dueDate: "1561428979",
    totalModules: 85,
    dueDateEnabled: true,
    completedModules: 0
  },
  {
    id: 21,
    name: "Kev",
    status: "PENDING",
    dueDate: "1566312362",
    totalModules: 27,
    dueDateEnabled: true,
    completedModules: 11
  },
  {
    id: 22,
    name: "Marsiella",
    status: "ACCREDITED",
    dueDate: "1578196665",
    totalModules: 95,
    dueDateEnabled: true,
    completedModules: 20
  },
  {
    id: 23,
    name: "Marina",
    status: "ACCREDITED",
    dueDate: "1561527275",
    totalModules: 61,
    dueDateEnabled: false,
    completedModules: 2
  },
  {
    id: 24,
    name: "Arri",
    status: "ACCREDITED",
    dueDate: "1563124337",
    totalModules: 79,
    dueDateEnabled: true,
    completedModules: 11
  },
  {
    id: 25,
    name: "Anallise",
    status: "ACCREDITED",
    dueDate: "1571987036",
    totalModules: 52,
    dueDateEnabled: true,
    completedModules: 20
  },
  {
    id: 26,
    name: "Reamonn",
    status: "ACCREDITED",
    dueDate: "1572582411",
    totalModules: 39,
    dueDateEnabled: true,
    completedModules: 16
  },
  {
    id: 27,
    name: "Artur",
    status: "ACCREDITED",
    dueDate: "1565796619",
    totalModules: 90,
    dueDateEnabled: false,
    completedModules: 7
  },
  {
    id: 28,
    name: "Kiley",
    status: "ACCREDITED",
    dueDate: "1574884229",
    totalModules: 87,
    dueDateEnabled: false,
    completedModules: 19
  },
  {
    id: 29,
    name: "Brenda",
    status: "REVOCATED",
    dueDate: "1560014095",
    totalModules: 59,
    dueDateEnabled: false,
    completedModules: 20
  },
  {
    id: 30,
    name: "Liana",
    status: "REVOCATED",
    dueDate: "1566407112",
    totalModules: 35,
    dueDateEnabled: true,
    completedModules: 14
  },
  {
    id: 31,
    name: "Georas",
    status: "PENDING",
    dueDate: "1567367307",
    totalModules: 82,
    dueDateEnabled: true,
    completedModules: 3
  },
  {
    id: 32,
    name: "Tadeas",
    status: "UNSUCCESSFUL",
    dueDate: "1565477511",
    totalModules: 43,
    dueDateEnabled: false,
    completedModules: 2
  },
  {
    id: 33,
    name: "Diandra",
    status: "ACCREDITED",
    dueDate: "1574232971",
    totalModules: 40,
    dueDateEnabled: true,
    completedModules: 6
  },
  {
    id: 34,
    name: "Mariska",
    status: "UNSUCCESSFUL",
    dueDate: "1561846543",
    totalModules: 63,
    dueDateEnabled: false,
    completedModules: 17
  },
  {
    id: 35,
    name: "Enrica",
    status: "PENDING",
    dueDate: "1567343924",
    totalModules: 72,
    dueDateEnabled: true,
    completedModules: 6
  },
  {
    id: 36,
    name: "Gena",
    status: "PENDING",
    dueDate: "1578949791",
    totalModules: 33,
    dueDateEnabled: true,
    completedModules: 5
  },
  {
    id: 37,
    name: "Merle",
    status: "PENDING",
    dueDate: "1573892843",
    totalModules: 91,
    dueDateEnabled: true,
    completedModules: 13
  },
  {
    id: 38,
    name: "Leela",
    status: "ACCREDITED",
    dueDate: "1573158422",
    totalModules: 54,
    dueDateEnabled: true,
    completedModules: 19
  }
];
const useGraphqlData = () => {
  return {
    list: {
      data: data.slice(0, 10),
      total: 34,
      start: 0,
      hasMore: true
    },
    aggregations: {
      pendingCount: 8,
      accreditedCount: 16,
      unsuccessfulCount: 10
    },
    lastUpdatedAt: Math.ceil(Date.now() / 1000),
    loaded: true,
    loading: false,
    hasError: false,
    error: undefined,
    loadmore: async start => {
      await sleep(3000);
      return data.slice(start, 10);
    }
  };
};

export default useGraphqlData;
