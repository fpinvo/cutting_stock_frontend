const styles = {
  cellStyle: {
    fontSize: "12px",
    padding: "2px",
    textAlign: "center",
  },
  headerStyle: {
    fontSize: "12px",
    padding: "2px",
    textAlign: "center",
  },
};

export const accessoryOptionsData = [
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
];

export const sortingOptionsData = [
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
    value: "Width",
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
    value: "Length",
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
];

export const rotationOptionsData = [
  {
    value: "Rotation",
    id: 1,
    icon: (
      <svg
        width={"14px"}
        height={"14px"}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="sync-alt"
        className="svg-inline--fa fa-sync-alt fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"
        />
      </svg>
    ),
  },
  {
    value: "Do not Rotate",
    id: 1,
    icon: (
      <svg
        width={"14px"}
        height={"14px"}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="ban"
        className="svg-inline--fa fa-ban fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="red"
          d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"
        />
      </svg>
    ),
  },
  {
    id: 0,
    value: "Rotate",
    icon: (
      <svg
        width={"14px"}
        height={"14px"}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="undo"
        className="svg-inline--fa fa-undo fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="green"
          d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    value: "Joint Rotation",
    icon: (
      <svg
        width={"14px"}
        height={"14px"}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="sync"
        className="svg-inline--fa fa-sync fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="blue"
          d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"
        />
      </svg>
    ),
  },
];

export const partsTableColumns = [
  {
    title: "Material",
    field: "img",
    render: (item) => (
      <img src={item.img} alt="" border="3" height="20em" width="60em" />
    ),
    cellStyle: styles.cellStyle,
    headerStyle: styles.headerStyle,
    editable: "never",
  },
  {
    title: "Length",
    field: "lengthi",
    type: "numeric",
    validate: (rowData) =>
      rowData.lengthi < 0 ||
      rowData.lengthi == undefined ||
      isNaN(rowData.lengthi)
        ? {
            isValid: false,
            helperText: "Length cannot be empty or less than 0",
          }
        : true,
    cellStyle: styles.cellStyle,
    headerStyle: styles.headerStyle,
  },
  {
    title: "Width",
    field: "width",
    type: "numeric",
    validate: (rowData) =>
      rowData.width < 0 || rowData.width == undefined || isNaN(rowData.width)
        ? {
            isValid: false,
            helperText: "Width cannot be empty or less than 0",
          }
        : true,
    cellStyle: styles.cellStyle,
    headerStyle: styles.headerStyle,
  },
  {
    title: "Quantity",
    field: "quantity",
    type: "numeric",
    validate: (rowData) =>
      rowData.quantity < 0 ||
      rowData.quantity == undefined ||
      isNaN(rowData.quantity)
        ? {
            isValid: false,
            helperText: "Quantity cannot be empty or less than 0",
          }
        : true,
    cellStyle: styles.cellStyle,
    headerStyle: styles.headerStyle,
  },
  {
    title: "Rotation",
    field: "rotation",
    type: "numeric",
    editable: "never",

    validate: (rowData) =>
      rowData.rotation < 0 ||
      rowData.rotation == undefined ||
      isNaN(rowData.rotation)
        ? {
            isValid: false,
            helperText: "Rotation cannot be empty or less than 0",
          }
        : true,
    cellStyle: styles.cellStyle,
    headerStyle: styles.headerStyle,
  },
];

export const partsTableData = [
  {
    id: 1,
    type: "Kiefer",
    lengthi: 30,
    width: 43,
    quantity: 23,
    img: "data:image/jpeg;base64,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",
    rotation: "Rotate",
    rotID: 0,
  },
  {
    id: 2,
    type: "Kirschb",
    lengthi: 0,
    width: 95,
    quantity: 35,
    img: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rotation: "Do not Rotate",
    rotID: 1,
  },
  {
    id: 3,
    type: "Mahagoni",
    lengthi: 0,
    width: 2,
    quantity: 33,
    img: "https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rotation: "Joint rotation",
    rotID: 2,
  },
  {
    id: 4,
    type: "Mahogoni",
    lengthi: 0,
    width: 5,
    quantity: 34,
    img: "https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg",
    rotation: "Do not Rotate",
    rotID: 1,
  },
];

export const sheetsTableColumns = [
  {
    title: "Sheet Type",
    field: "img",
    render: (item) => (
      <img src={item.img} alt="" border="3" height="20em" width="60em" />
    ),
    cellStyle: styles.cellStyle,
    headerStyle: styles.headerStyle,
    editable: "never",
  },
  {
    title: "Length",
    field: "lengthi",
    type: "numeric",
    validate: (rowData) =>
      rowData.lengthi < 0 ||
      rowData.lengthi == undefined ||
      isNaN(rowData.lengthi)
        ? {
            isValid: false,
            helperText: "Length cannot be empty or less than 0",
          }
        : true,
    cellStyle: styles.cellStyle,
    headerStyle: styles.headerStyle,
  },
  {
    title: "Width",
    field: "width",
    type: "numeric",
    validate: (rowData) =>
      rowData.width < 0 || rowData.width == undefined || isNaN(rowData.width)
        ? {
            isValid: false,
            helperText: "Width cannot be empty or less than 0",
          }
        : true,
    cellStyle: styles.cellStyle,
    headerStyle: styles.headerStyle,
  },
  {
    title: "Quantity",
    field: "quantity",
    type: "numeric",
    validate: (rowData) =>
      rowData.quantity < 0 ||
      rowData.quantity == undefined ||
      isNaN(rowData.quantity)
        ? {
            isValid: false,
            helperText: "Quantity cannot be empty or less than 0",
          }
        : true,
    cellStyle: styles.cellStyle,
    headerStyle: styles.headerStyle,
  },
];

export const sheetsTableData = [
  {
    id: 1,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 2,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
  {
    id: 3,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 4,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
  {
    id: 5,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 6,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
  {
    id: 7,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 8,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
  {
    id: 9,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 10,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
  {
    id: 11,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 12,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
  {
    id: 13,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 14,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
  {
    id: 15,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 16,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
  {
    id: 17,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 18,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
  {
    id: 19,
    type: "Sheet 2",
    lengthi: 0,
    width: 0,
    quantity: 63,
    img: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 20,
    type: "Sheet 1",
    lengthi: 0,
    width: 55,
    quantity: 34,
    img: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg",
  },
];
