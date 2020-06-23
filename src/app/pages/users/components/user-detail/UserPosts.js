import { Avatar, Checkbox } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { createData, headRows } from "../../../../mockData/tutorials";
import CustomizedIconButton from "../../../../partials/content/CustomizedIconButton";
import Rating from "../../../../partials/content/Socials/Rating";
import MatTable from "../../../../partials/content/Table";

const UserPosts = (props) => {
  const { getUserById, isFetching } = props;
  const { tutorials = [], avatar_url, name } = getUserById || {};

  const dataRows = React.useMemo(() => {
    return (
      tutorials &&
      tutorials.map((_item, index) => {
        return createData(
          _item.id,
          _item.id,
          {
            value: (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "8px" }}>
                  <Avatar src={avatar_url} />
                </span>
                <span>{ name } </span>
              </div>
            ),
            subValue: name,
          },
          _item.title,
          {
            value: <Checkbox checked={Boolean(_item.is_active)} />,
            subValue: Boolean(_item.is_active),
          },
          {
            value: <Rating number={_item.average_rate} fontSize="small" />,
            subValue: _item.average_rate,
          },
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
  }, [tutorials, name, avatar_url]);

  return (
    <>
      <MatTable
        headRows={headRows}
        rows={dataRows}
        isFetching={isFetching}
      />
    </>
  );
};

UserPosts.propTypes = {};

export default UserPosts;
