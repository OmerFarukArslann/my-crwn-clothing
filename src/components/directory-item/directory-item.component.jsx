import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Fragment>
      <Link
        className="directory-item-container"
        to={`shop/${title.toLowerCase()}`}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="body">
          <h2>{title}</h2>

          <p>SHOP NOW</p>
        </div>{" "}
      </Link>
    </Fragment>
  );
};

export default DirectoryItem;
