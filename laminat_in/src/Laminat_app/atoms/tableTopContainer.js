import React, { useState } from "react";
import { OptionSelect, SelectComp } from "../../components";
import { LabelWrapper } from "../../wrappers/LabelWrapper";
import { SelectWrapper } from "../../wrappers/SelectWrapper";
import { TableTopWrapper } from "../../wrappers/TableTopWrapper";

function TableTopContainer(props) {
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

  const [accessoryOptions, setAccessoryOption] = useState([
    {
      value: "",
      value: "Tools",
      icon: (
        <svg
          width={"14px"}
          height={"14px"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="tools"
          className="svg-inline--fa fa-tools fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width={"14px"}
          height={"14px"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="globe"
          className="svg-inline--fa fa-globe fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="green"
            d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
          />
        </svg>
      ),
      value: "Select All",
    },
    {
      icon: (
        <svg
          width={"14px"}
          height={"14px"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="broom"
          className="svg-inline--fa fa-broom fa-w-20"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"
          />
        </svg>
      ),
      value: "Clear Table",
    },
    {
      icon: (
        <svg
          width={"14px"}
          height={"14px"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times-circle"
          className="svg-inline--fa fa-times-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="red"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
          />
        </svg>
      ),
      value: "Delete Selected Rows",
    },
  ]);

  const [sortingOptions, setSortingOption] = useState([
    {
      value: "",
      value: "Sort",
      icon: (
        <svg
          width={"16px"}
          height={"16px"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="sort-alpha-up-alt"
          className="svg-inline--fa fa-sort-alpha-up-alt fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160zm272 64h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 65.63V48a16 16 0 0 0-16-16H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 190.37V208a16 16 0 0 0 16 16zm159.06 234.62l-59.27-160A16 16 0 0 0 372.72 288h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 480h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 480H432a16 16 0 0 0 15.06-21.38zM335.61 400L352 352l16.39 48z"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width={"14px"}
          height={"14px"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="swatchbook"
          className="svg-inline--fa fa-swatchbook fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="green"
            d="M434.66,167.71h0L344.5,77.36a31.83,31.83,0,0,0-45-.07h0l-.07.07L224,152.88V424L434.66,212.9A32,32,0,0,0,434.66,167.71ZM480,320H373.09L186.68,506.51c-2.06,2.07-4.5,3.58-6.68,5.49H480a32,32,0,0,0,32-32V352A32,32,0,0,0,480,320ZM192,32A32,32,0,0,0,160,0H32A32,32,0,0,0,0,32V416a96,96,0,0,0,192,0ZM96,440a24,24,0,1,1,24-24A24,24,0,0,1,96,440Zm32-184H64V192h64Zm0-128H64V64h64Z"
          />
        </svg>
      ),
      value: "Material",
    },
    {
      icon: (
        <svg
          width={"14px"}
          height={"14px"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrows-alt-h"
          className="svg-inline--fa fa-arrows-alt-h fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z"
          />
        </svg>
      ),
      value: "Length (X)",
    },
    {
      icon: (
        <svg
          width={"14px"}
          height={"14px"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrows-alt-v"
          className="svg-inline--fa fa-arrows-alt-v fa-w-8"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            fill="currentColor"
            d="M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z"
          />
        </svg>
      ),
      value: "Length (Y)",
    },
    {
      icon: (
        <svg
          width={"14px"}
          height={"14px"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star-of-life"
          className="svg-inline--fa fa-star-of-life fa-w-15"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 512"
        >
          <path
            fill="orange"
            d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256 8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85z"
          />
        </svg>
      ),
      value: "Quantity",
    },
  ]);

  const handleOptionSelected = (option) => {
    //console.log("option: ", option);
  };

  const handleSheetOptionSelected = (option) => {
    //console.log("option: ", option);
  };

  const handleSortingOptionSelected = (option) => {
    //console.log("option: ", option);
  };

  return (
    <div>
      <LabelWrapper className="ml-5">Table of Sheets</LabelWrapper>
      <TableTopWrapper>
        <SelectComp
          options={data}
          handleSheetChange={handleSheetOptionSelected}
        />
        <OptionSelect
          options={accessoryOptions}
          handleSelectedChange={handleOptionSelected}
        />

        <OptionSelect
          options={sortingOptions}
          handleSelectedChange={handleSortingOptionSelected}
        />
      </TableTopWrapper>
    </div>
  );
}

export default TableTopContainer;
