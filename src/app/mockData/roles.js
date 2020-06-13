export function createData(
    id,
    roleId,
    name,
  ) {
    return {
        id,
        roleId,
        name,
    };
  }
  export const headRows = [
    {
      id: "id",
      numeric: false,
      sortable: true,
      disablePadding: false,
      label: "Id",
    },
    {
      id: "name",
      numeric: false,
      sortable: true,
      disablePadding: false,
      label: "Name",
    }
  ];
  
  export const rowsData = ['post-tutorial', 'comment', 'like'].map((_item, index) => { 
    return createData(
        `role-${index}`,
        _item,
        null
    );
  });
  