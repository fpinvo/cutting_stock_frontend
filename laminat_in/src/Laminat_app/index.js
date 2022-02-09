import React, { useState, useEffect } from "react";
import { DiagramBuilder } from "../components/diagramBuilder";
import Table from "../components/table";
import TablePartsTopContainer from "./atoms/tablePartsTopContainer";
import TableTopContainer from "./atoms/tableTopContainer";
import TopContainer from "./atoms/topContainer";

function LaminatApp(props) {
  const [dataStore, setDataStore] = useState([]);
  const [dataStoreForSheets, setDataStoreForSheets] = useState([]);
  const [dataStoreForParts, setDataStoreForParts] = useState([]);
  const [dataChanged, setDataChanged] = useState(0);
  const [refreshStore, setRefreshStore] = useState(0);

  useEffect(() => {
    let dataMake = [];
    dataMake = dataMake.concat(dataStoreForSheets);
    dataMake.push({ id: -100 });
    dataMake = dataMake.concat(dataStoreForParts);
    setDataStore(dataMake);
  }, [dataStoreForParts, dataStoreForSheets, refreshStore]);

  const insertDataFromCSV = (data) => {
    setDataStoreForSheets(
      data.slice(
        0,
        data.findIndex((item) => item.id == -100)
      )
    );
    setDataStoreForParts(
      data.slice(data.findIndex((item) => item.id == -100) + 1, data.length)
    );
    setDataChanged(dataChanged + 1);
  };

  return (
    <div>
      <TopContainer
        data={dataStore}
        setData={insertDataFromCSV}
        dataForSheets={dataStoreForSheets}
        dataForParts={dataStoreForParts}
      />
      <div className="col-lg-12 pr-0 pl-0">
        <div className="col-lg-5 pr-2">
          <TableTopContainer
            dataStore={dataStoreForSheets}
            setFinalData={setDataStoreForSheets}
            setTheData={dataChanged}
            freshStore={refreshStore}
            setRefreshStore={setRefreshStore}
          />
        </div>
        <div className="col-lg-7 pl-0">
          <TablePartsTopContainer
            dataStore={dataStoreForParts}
            setFinalData={setDataStoreForParts}
            setTheData={dataChanged}
            freshStore={refreshStore}
            setRefreshStore={setRefreshStore}
          />
        </div>
      </div>
    </div>
  );
}

export default LaminatApp;
