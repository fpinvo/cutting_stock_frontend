import React, { useState, useEffect } from "react";
import Table from "../components/table";
import TablePartsTopContainer from "./atoms/tablePartsTopContainer";
import TableTopContainer from "./atoms/tableTopContainer";
import TopContainer from "./atoms/topContainer";

function LaminatApp(props) {
  const [dataStore, setDataStore] = useState([]);
  const [dataChanged, setDataChanged] = useState(0);

  const insertDataFromCSV = (data) => {
    setDataStore(data);
    setDataChanged(dataChanged + 1);
  };

  return (
    <div>
      <TopContainer data={dataStore} setData={insertDataFromCSV} />
      <div className="col-lg-12 pr-0 pl-0">
        <div className="col-lg-5 pr-2">
          <TableTopContainer
            dataStore={dataStore}
            setFinalData={setDataStore}
            setTheData={dataChanged}
          />
        </div>
        <div className="col-lg-7 pl-0">
          <TablePartsTopContainer
            dataStore={dataStore}
            setFinalData={setDataStore}
            setTheData={dataChanged}
          />
        </div>
      </div>
    </div>
  );
}

export default LaminatApp;
