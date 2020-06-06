import { ArrowRightAlt } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { createData, headRows, rowsData } from "../../../../mockData/tutorials";
import CustomizedIconButton from "../../../../partials/content/CustomizedIconButton";
import Rating from "../../../../partials/content/Socials/Rating";
import MatTable from "../../../../partials/content/Table";

const UserPosts = () => {
  const dataRows = React.useMemo(() => {
    return rowsData.map((_item, index) => {
      return createData(
        _item.id,
        _item.post_id,
        _item.author_id,
        _item.title,
        <Rating number={_item.rates} fontSize="small" />,
        _item.last_modified,
        _item.last_created,
        <>
          <Link to={`/tutorials/1`}>
            <CustomizedIconButton Icon={<ArrowRightAlt />} title="Detail" />
          </Link>
        </>
      );
    });
  }, []);

  return (
    <>
      <MatTable headRows={headRows} rows={dataRows} />
    </>
  );
};

UserPosts.propTypes = {};

export default UserPosts;
