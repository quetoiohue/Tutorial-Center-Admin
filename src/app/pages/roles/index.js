import { default as React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createData, headRows } from "../../mockData/roles";
import MatTable from "../../partials/content/Table";
import roleActions from "../../store/ducks/actions/roles";


const Roles = () => {
  const dispatch = useDispatch();
  const [pagination, setPagination] = React.useState({ offset: 0, limit: 5 });

  const { roles, isFetching } = useSelector((store) => store.roleList);

  React.useEffect(() => {
    dispatch(roleActions.getRoles());
  }, [dispatch]);

  const dataRows = React.useMemo(() => {
    if (!roles || !roles.length) return [];
    return roles.map((_item, index) => {
      return createData(_item.id, _item.id, _item.name);
    });
  }, [roles]);

  return (
    <>
      <div className="layout-header-toolbar">
        <h1>Role management</h1>
      </div>
      <MatTable
        headRows={headRows}
        rows={dataRows}
        pagination={pagination}
        setPagination={setPagination}
        count={roles && roles.length}
        isFetching={isFetching}
      />
    </>
  );
};

export default Roles;
