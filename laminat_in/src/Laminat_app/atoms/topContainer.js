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
import axios from "axios";

function TopContainer(props) {
  const { data, setData, dataForSheets, dataForParts } = props;

  const [csvData, setCsvData] = useState([]);
  const date = new Date(Date.now()).toLocaleString().split(",")[0];

  useEffect(() => {
    setCsvData(data);
  }, [data]);

  const shapeData = () => {
    let finalSheetData = [];
    let finalPartsData = [];
    dataForSheets.forEach((el, k) => {
      let cuts = [];
      dataForParts.forEach((el2, j) => {
        if (el.type == el2.type) {
          let i = 0;
          while (i < el2.quantity) {
            cuts.push([el2.width, el2.lengthi]);
            i++;
          }
        }
      });
      //cuts = cuts.join(",");
      finalSheetData.push({
        marterial_name: el.type,
        x_axis: el.width,
        y_axis: el.lengthi,
        quantity: el.quantity,
        cuts: cuts,
      });
    });

    generateShapes(finalSheetData);
  };

  const generateShapes = async (data) => {
    // console.log("data: ", data);
    // const backendData = await axios.post("/add", data);
    // console.log("backend data: ", backendData);
    window.location.href = "/diagram";
  };

  return (
    <TopBarWrapper>
      <Button
        title=" Run Calculation"
        icon={<CalculatorSvg color={"black"} />}
        type="outlined"
        onClick={() => {
          shapeData();
        }}
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
