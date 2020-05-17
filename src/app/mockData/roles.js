export function createData(
    id,
    name,
    actions
  ) {
    return {
        id,
        name,
        actions
    };
  }
  export const headRows = [
    {
      id: "name",
      numeric: false,
      sortable: true,
      disablePadding: false,
      label: "Name",
    },
    {
      id: "action",
      numeric: false,
      sortable: false,
      disablePadding: false,
      label: "Action",
    }
  ];
  
  export const rowsData = ['post-tutorial', 'comment', 'like'].map((_item, index) => { 
    return createData(
        `role-${index}`,
        _item,
        null
    );
  });
  