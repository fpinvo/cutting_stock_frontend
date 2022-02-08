import React, { useState, useEffect } from "react";
import { Button } from "../../components";
import { TopBarWrapper } from "../../wrappers/TopBarWrapper";
import CalculatorSvg from "../../utils/calculatorSVG";
import { DocumentSvg } from "../../utils/document";
import ImportAsSvg from "../../utils/importAsSVG";
import { LogoSvg } from "../../utils/LogoSVG";
import TotalSvg from "../../utils/totalSVG";
import { CSVLink, CSVDownload } from "react-csv";
import ImportCSV from "../../components/importCSV";

function TopContainer(props) {
  const { data, setData } = props;

  const [csvData, setCsvData] = useState([]);
  const date = new Date(Date.now()).toLocaleString().split(",")[0];

  useEffect(() => {
    setCsvData(data);
  }, [data]);

  return (
    <TopBarWrapper>
      <Button
        title=" Run Calculation"
        icon={<CalculatorSvg color={"black"} />}
        type="outlined"
        onClick={() => {}}
        big
      />

      <ImportCSV setData={setData} />

      <CSVLink data={data} filename={date + ".csv"}>
        <Button
          title=" Save Project"
          icon={<DocumentSvg color={"black"} />}
          type="outlined"
          onClick={() => {}}
          big
        />
      </CSVLink>

      <Button
        title=" Total Areas"
        icon={<TotalSvg color={"black"} />}
        type="outlined"
        onClick={() => {}}
        big
      />
    </TopBarWrapper>
  );
}

export default TopContainer;
