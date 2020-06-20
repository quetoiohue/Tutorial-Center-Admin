// ================== Hard code ================
export const periodOptions = [
  {value: 'day', label: 'Daily'},
  {value: 'month', label: 'Monthly'},
  {value: 'year', label: 'Yearly'}
]
export const roleOptions = [
  { title: "post-tutorial" },
  { title: "comment" },
  { title: "like" },
  { title: "admin"},
  { title: "create-tutorial"},
];

export function createData(
  id,
  name,
  email,
  isActive,
  role,
  last_modified,
  last_created,
  actions
) {
  return {
    id,
    name,
    email,
    isActive,
    role,
    last_modified,
    last_created,
    actions,
  };
}
export const headRows = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    sortable: true,
    label: "Username",
  },
  {
    id: "email",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "isActive",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "isActive",
  },
  {
    id: "role",
    numeric: false,
    sortable: false,
    disablePadding: false,
    label: "Roles",
  },
  {
    id: "last_modified",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Last modified",
  },
  {
    id: "last_created",
    numeric: false,
    sortable: false,
    disablePadding: false,
    label: "Last Created",
  },
  {
    id: "actions",
    numeric: false,
    sortable: false,
    disablePadding: false,
    label: "Actions",
  },
];

export const rowsData = [...Array(13).keys()].map((_item, index) => {
  let boolRandom = Math.random() >= 0.5;
  let indexRandom = Math.floor(Math.random() * (roleOptions.length - 0));
  return createData(
    _item,
    "Gwang Chan",
    "quangtran16t3@gmail.com",
    boolRandom,
    roleOptions.filter((_, index) => index !== indexRandom),
    `2020-03-2${index % 10}`,
    "2020-03-20",
    null
  );
});
