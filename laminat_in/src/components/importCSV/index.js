import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "..";
import ImportAsSvg from "../../utils/importAsSVG";
import $ from "jquery";

function ImportCSV(props) {
  const { setData } = props;
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

  useEffect(() => {
    if (csvFile) submit();
  }, [csvFile]);

  $(document).ready(function () {
    $("#OpenImgUpload").click(function () {
      $("#csvFile").click();
    });
  });

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text); // plugged in here
    };

    reader.readAsText(file);
  };

  const processCSV = (str, delim = ",") => {
    str = str.replace(/['"]+/g, "");
    const headers = str.slice(0, str.indexOf("\n")).split(delim);

    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setCsvArray(newArray);
    setData(newArray);
  };

  return (
    <div>
      <div id="OpenImgUpload">
        <Button
          title=" Import Diagram"
          icon={<ImportAsSvg color={"black"} />}
          type="outlined"
          big
          onClick={() => {}}
        ></Button>
      </div>
      <input
        id="csvFile"
        type="file"
        accept=".csv"
        onChange={(e) => {
          setCsvFile(e.target.files[0]);
        }}
        style={{ display: "none" }}
      ></input>

      {csvArray.length > 0 ? (
        <>
          <table>
            <tbody>
              {csvArray.map((item, i) => (
                <tr key={i}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
}

export default ImportCSV;
