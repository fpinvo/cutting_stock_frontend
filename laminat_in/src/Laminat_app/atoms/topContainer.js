import React, { useState } from "react";
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
  const [csvData, setCsvData] = useState([
    ["firstname", "lastname", "email"],
    ["John", "Doe", "john.doe@xyz.com"],
    ["Jane", "Doe", "jane.doe@xyz.com"],
  ]);
  const date = new Date(Date.now()).toLocaleString().split(",")[0];

  return (
    <TopBarWrapper>
      <Button
        title=" Run Calculation"
        icon={<CalculatorSvg color={"black"} />}
        type="outlined"
        onClick={() => {}}
        big
      />

      <ImportCSV />

      <CSVLink data={csvData} filename={date + ".csv"}>
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
