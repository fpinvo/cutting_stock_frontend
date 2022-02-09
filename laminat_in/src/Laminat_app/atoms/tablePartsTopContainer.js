import React, { useEffect, useState } from "react";
import { OptionSelect, SelectComp } from "../../components";
import {
  accessoryOptionsData,
  partsTableData,
  rotationOptionsData,
  sortingOptionsData,
} from "../../components/optionsData";
import PartsTable from "../../components/partsTable";
import { LabelWrapper } from "../../wrappers/LabelWrapper";
import { TableTopWrapper } from "../../wrappers/TableTopWrapper";

function TablePartsTopContainer(props) {
  const { setFinalData, dataStore, setTheData, freshStore, setRefreshStore } =
    props;

  const [data, setData] = useState([
    {
      img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
      value: "Sheet 1",
    },
    {
      img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
      value: "Sheet 2",
    },
    {
      img: "https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      value: "Sheet 3",
    },
  ]);

  const [tableData, setTableData] = useState(partsTableData);

  const [accessoryOptions, setAccessoryOption] = useState(accessoryOptionsData);
  const [sortingOptions, setSortingOption] = useState(sortingOptionsData);
  const [rotationOptions, setRotationOptions] = useState(rotationOptionsData);

  const [sheetImage, setSheetImage] = useState("");
  const [rotation, setRotation] = useState(0);
  const [rotationValue, setRotationValue] = useState("");
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
    if (selectedRow[0]) {
      td[td.findIndex((item) => item.id == selectedRow[0].id)].img = option.img;
      td[td.findIndex((item) => item.id == selectedRow[0].id)].type =
        option.value;
    }
    setTableData(td);
    setSheetImage(option.img);
    setRefreshStore(freshStore + 1);
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
    if (selectedRow[0]) {
      td[td.findIndex((item) => item.id == selectedRow[0].id)].rotID =
        option.id;
      td[td.findIndex((item) => item.id == selectedRow[0].id)].rotation =
        option.value == "Rotation" ? "Do not Rotate" : option.value;
    }
    setRotation(option.id);
    setRotationValue(
      option.value == "Rotation" ? "Do not Rotate" : option.value
    );
    setTableData(td);
    setRefreshStore(freshStore + 1);
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
        selectedRotationValue={rotationValue}
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
