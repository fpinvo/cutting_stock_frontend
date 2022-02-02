import React from "react";
import TableTopContainer from "./atoms/tableTopContainer";
import TopContainer from "./atoms/topContainer";

function index(props) {
  return (
    <div>
      <TopContainer />
      <div className="col-lg-12 pr-0 pl-0">
        <div className="col-lg-5">
          <TableTopContainer />
        </div>
      </div>
    </div>
  );
}

export default index;
