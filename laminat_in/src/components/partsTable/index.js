import MaterialTable, {
  MTableBodyRow,
  MTableEditField,
  MTableEditRow,
} from "material-table";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { partsTableColumns } from "../optionsData";

function PartsTable(props) {
  const {
    tableData,
    setTableData,
    setSelectedRowData,
    selectedImage,
    selectedRotation,
    callTheSelectAll,
    callDeleteSelected,
    callClearTable,
  } = props;

  const [data, setData] = useState([]);
  const tableRef = useRef();
  const [rerender, setRerender] = useState(0);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  useEffect(() => {
    if (callTheSelectAll > 0) selectAllChecked();
  }, [callTheSelectAll]);

  useEffect(() => {
    if (callDeleteSelected > 0) deleteSelectedRows();
  }, [callDeleteSelected]);

  useEffect(() => {
    if (callClearTable > 0) clearTable();
  }, [callClearTable]);

  const [selectedRow, setSelectedRow] = useState([]);

  const selectAllChecked = () => {
    if (!tableRef) {
      return;
    }
    tableData.forEach((element, idx) => {
      tableRef.current.dataManager.changeRowSelected(true, [idx]);
    });
    setSelectedRow(tableData);
  };

  const deleteSelectedRows = () => {
    let selectedItems = tableRef.current.dataManager.data.filter(
      (item) => item.tableData.checked == true
    );
    let finalArray = tableData;
    finalArray = finalArray.filter((el) => selectedItems.indexOf(el) < 0);
    setTableData(finalArray);
  };

  const clearTable = () => {
    if (!tableRef) {
      return;
    }
    tableData.forEach((element, idx) => {
      tableRef.current.dataManager.changeRowSelected(false, [idx]);
    });
    setRerender(rerender + 1);
    setSelectedRow([]);
  };

  return (
    <div className="ml-0">
      <MaterialTable
        tableRef={tableRef}
        title=""
        columns={partsTableColumns}
        data={data}
        options={{
          selection: true,
          rowStyle: (rowData) => ({
            backgroundColor: selectedRow.includes(rowData) ? "#EEE" : "#FFF",
          }),
          paging: false,
        }}
        style={{
          paddingBottom: "10em",
          border: "1px solid gray",
          height: "46em",
          overflow: "scroll",
        }}
        onRowClick={(evt, selectedRow) => setSelectedRow([selectedRow])}
        onSelectionChange={(rows) => {
          setSelectedRow(rows);
        }}
        actions={[
          {
            tooltip: "Remove All Selected Users",
            icon: "delete",
            onClick: (evt, datah) =>
              new Promise((resolve, reject) => {
                let actualData = [...data];
                datah.forEach((el) => {
                  actualData.splice(actualData.indexOf(el), 1);
                });
                setData(actualData);
                setTableData(actualData);
                resolve();
              }),
          },
        ]}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setData([...data, newData]);
              setTableData([...data, newData]);
              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData(dataUpdate);
              resolve();
            }),
        }}
        components={{
          EditRow: (props) => {
            setSelectedRowData([props.data]);
            return (
              <MTableEditRow
                {...props}
                onEditingApproved={(mode, newData, oldData) => {
                  if (oldData == undefined) {
                    newData = {
                      ...newData,
                      id: tableData.length + 1,
                      img: selectedImage || "",
                      rotation:
                        selectedRotation == 0
                          ? "Rotate"
                          : selectedRotation == 1
                          ? "Do not Rotate"
                          : "Joint rotation" || "",
                      rotID: selectedRotation || 0,
                    };
                    console.log("njk: ", newData);

                    setTableData([...data, newData]);
                  } else {
                    const dataCopy = [...data];
                    const index = dataCopy.indexOf(oldData);
                    newData.img = selectedImage || newData.img;
                    newData.rotation =
                      selectedRotation == 0
                        ? "Rotate"
                        : selectedRotation == 1
                        ? "Do not Rotate"
                        : "Joint rotation" || "";
                    console.log("njk: ", newData);
                    newData.rotID = selectedRotation || 0;
                    dataCopy[index] = newData;
                    setTableData(dataCopy);
                  }
                }}
              />
            );
          },
        }}
      />
    </div>
  );
}

export default PartsTable;
