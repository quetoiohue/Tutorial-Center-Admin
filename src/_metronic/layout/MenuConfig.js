export default {
  aside: {
    self: {},
    items: [
      {
        title: "Dashboard",
        root: true,
        icon: "flaticon2-architecture-and-city",
        page: "dashboard",
        translate: "MENU.DASHBOARD",
        bullet: "dot"
      },
      {
        title: "Administration",
        root: true,
        bullet: "dot",
        icon: "flaticon2-browser-2",
        submenu: [
          {
            title: "Users Management",
            bullet: "dot",
            page: "users"
          },
          {
            title: "Tutorials Management",
            bullet: "dot",
            page: "tutorials"
          },
          {
            title: "Roles Management",
            bullet: "dot",
            page: "roles"
          }
        ]
      }
    ]
  }
};
