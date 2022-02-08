import React, { useEffect, useState } from "react";
import { OptionSelect, SelectComp } from "../../components";
import {
  accessoryOptionsData,
  partsTableData,
  rotationOptionsData,
  sortingOptionsData,
} from "../../components/optionsData";
import PartsTable from "../../components/partsTable";
import Table from "../../components/table";
import { LabelWrapper } from "../../wrappers/LabelWrapper";
import { SelectWrapper } from "../../wrappers/SelectWrapper";
import { TableTopWrapper } from "../../wrappers/TableTopWrapper";

function TablePartsTopContainer(props) {
  const { setFinalData, dataStore, setTheData } = props;

  const [data, setData] = useState([
    {
      img: "data:image/jpeg;base64,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",
      value: "Kiefer",
    },
    {
      img: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      value: "Kirschb",
    },
    {
      img: "https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      value: "Mahagoni",
    },
    {
      img: "data:image/jpeg;base64,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",
      value: "Mahogoni",
    },
    {
      img: "https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg",
      value: "Redoak",
    },
  ]);

  const [tableData, setTableData] = useState(partsTableData);

  const [accessoryOptions, setAccessoryOption] = useState(accessoryOptionsData);
  const [sortingOptions, setSortingOption] = useState(sortingOptionsData);
  const [rotationOptions, setRotationOptions] = useState(rotationOptionsData);

  const [sheetImage, setSheetImage] = useState("");
  const [rotation, setRotation] = useState(0);
  const [selectAll, setSelectAll] = useState(0);
  const [deleteSelected, setdeleteSelected] = useState(0);
  const [clear, setClear] = useState(0);
  const [rerender, setRerender] = useState(0);

  useEffect(() => {
    setData(data);
    setFinalData(tableData);
  }, [tableData]);

  useEffect(() => {
    if (setTheData > 0) setTableData(dataStore);
  }, [setTheData]);

  var selectedRow = [];
  var selectedRotation = [];

  const handleOptionSelected = (option) => {
    if (option.value == "Select All") {
      setSelectAll(selectAll + 1);
    } else if (option.value == "Clear Table") {
      setClear(clear + 1);
    } else if (option.value == "Delete Selected Rows") {
      setdeleteSelected(deleteSelected + 1);
    }
  };

  const handleSheetOptionSelected = (option) => {
    let td = tableData;
    selectedRow[0] &&
      (td[td.findIndex((item) => item.id == selectedRow[0].id)].img =
        option.img);
    setTableData(td);
    setSheetImage(option.img);
  };

  const handleSortingOptionSelected = (option) => {
    if (option.value == "Material") {
      setTableData(
        tableData.sort((a, b) => (a.img > b.img ? 1 : b.img > a.img ? -1 : 0))
      );
    } else if (option.value == "Width") {
      setTableData(
        tableData.sort((a, b) =>
          a.width > b.width ? 1 : b.width > a.width ? -1 : 0
        )
      );
    } else if (option.value == "Length") {
      setTableData(
        tableData.sort((a, b) =>
          a.lengthi > b.lengthi ? 1 : b.lengthi > a.lengthi ? -1 : 0
        )
      );
    } else if (option.value == "Quantity") {
      setTableData(
        tableData.sort((a, b) =>
          a.quantity > b.quantity ? 1 : b.quantity > a.quantity ? -1 : 0
        )
      );
    }
    setRerender(rerender + 1);
  };

  const handlePartsRotationSelected = (option) => {
    let td = tableData;

    selectedRow[0] &&
      (td[td.findIndex((item) => item.id == selectedRow[0].id)].rotID =
        option.id) &&
      (td[td.findIndex((item) => item.id == selectedRow[0].id)].rotation =
        option.value);
    setTableData(td);
    setRotation(option.id);
    console.log("dD: ", td, option.id, option.value);
  };

  return (
    <div>
      <LabelWrapper className="ml-5">Table of Parts</LabelWrapper>
      <TableTopWrapper className={"ml-0"}>
        <SelectComp
          options={data}
          handleSheetChange={handleSheetOptionSelected}
          columnWidth={"col-lg-4"}
        />
        <OptionSelect
          options={accessoryOptions}
          handleSelectedChange={handleOptionSelected}
          columnWidth={"col-lg-3"}
        />

        <OptionSelect
          options={sortingOptions}
          handleSelectedChange={handleSortingOptionSelected}
          columnWidth={"col-lg-2"}
        />

        <SelectComp
          options={rotationOptions}
          handleSheetChange={handlePartsRotationSelected}
          columnWidth={"col-lg-2"}
        />
      </TableTopWrapper>
      <PartsTable
        selectedImage={sheetImage}
        selectedRotation={rotation}
        tableData={tableData}
        setSelectedRowData={(data) => {
          selectedRow = data;
        }}
        setTableData={setTableData}
        callTheSelectAll={selectAll}
        callDeleteSelected={deleteSelected}
        callClearTable={clear}
      />
    </div>
  );
}

export default TablePartsTopContainer;
