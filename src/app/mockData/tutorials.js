const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const generateKey = () => {
  const character = "qwertyuiopasdfghjklzxcvbnm";
  const number = "0123456789";
  const others = "!@#$%^&*()_+[]/;,.";

  const characters = character + number + others;
  let hashKey = "";
  for (let i = 0; i < 20; i++) {
    hashKey += characters.charAt(getRandomInt(characters.length));
  }
  return hashKey;
};

export function createData(
  id,
  post_id,
  author_name,
  title,
  is_active,
  rates,
  last_modified,
  last_created,
  actions
) {
  return {
    id,
    post_id,
    author_name,
    title,
    is_active,
    rates,
    last_modified,
    last_created,
    actions
  };
}
export const headRows = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    sortable: true,
    label: "Id"
  },
  {
    id: "author_name",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Author"
  },
  {
    id: "title",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Title"
  },
  {
    id: "is_active",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Active"
  },
  {
    id: "rates",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Rates"
  },
  {
    id: "last_modified",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Last modified"
  },
  {
    id: "last_created",
    numeric: false,
    sortable: true,
    disablePadding: false,
    label: "Last Created"
  },
  {
    id: "actions",
    numeric: false,
    sortable: false,
    disablePadding: false,
    label: "Actions"
  }
];

export const rowsData = [...Array(13).keys()].map((_item, index) => {
  let rates = Math.floor(Math.random() * 6);
  let hashKey = generateKey();

  return createData(
    hashKey,
    hashKey,
    `author${_item}`,
    "Covid-China",
    rates,
    `2020-03-2${index % 10}`,
    "2020-03-20",
    null
  );
});
