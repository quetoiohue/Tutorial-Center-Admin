import { ArrowRightAlt } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { createData, headRows, rowsData } from "../../../../mockData/tutorials";
import CustomizedIconButton from "../../../../partials/content/CustomizedIconButton";
import Rating from "../../../../partials/content/Socials/Rating";
import MatTable from "../../../../partials/content/Table";
import moment from "moment";
import { Checkbox } from "@material-ui/core";

const UserPosts = (props) => {
  console.log("--------", props);
  const { getUserById, isFetching } = props;
  const { tutorials } = getUserById || [];
  const [pagination, setPagination] = React.useState({
    offset: 0,
    limit: 10,
  });

  const dataRows = React.useMemo(() => {
    return (
      tutorials &&
      tutorials.map((_item, index) => {
        return createData(
          _item.id,
          _item.id,
          _item.author_id,
          _item.title,
          <Checkbox checked={Boolean(_item.is_active)} />,
          <Rating
            number={Number.parseInt(_item.average_rate)}
            fontSize="small"
          />,
          moment(_item.updated_at).format("DD/MM/YYYY"),
          moment(_item.created_at).format("DD/MM/YYYY"),
          <>
            <Link to={`/tutorials/${_item.id}`}>
              <CustomizedIconButton Icon={<ArrowRightAlt />} title="Detail" />
            </Link>
          </>
        );
      })
    );
  }, [getUserById]);

  return (
    <>
      <MatTable
        headRows={headRows}
        rows={dataRows}
        pagination={pagination}
        setPagination={setPagination}
        count={(tutorials && tutorials.length) || 0}
        isFetching={isFetching}
      />
    </>
  );
};

UserPosts.propTypes = {};

export default UserPosts;
