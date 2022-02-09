import React, { useState } from "react";
import Select from "react-select";
import ImportAsSvg from "../../../utils/importAsSVG";
import { ImageWrapper } from "../../../wrappers/ImageWrapper";
import { SelectWrapper } from "../../../wrappers/SelectWrapper";

function Selectc(props) {
  const { options, handleSheetChange, columnWidth } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      zIndex: 100,
    }),
  };

  const handleChange = (change) => {
    handleSheetChange(change);
    setSelectedOption(change);
  };

  return (
    <Select
      className={`ml-0 pr-0 pl-2 mr-2 ${columnWidth}`}
      styles={customStyles}
      value={selectedOption}
      options={options}
      onChange={handleChange}
      formatOptionLabel={(item) => (
        <SelectWrapper>
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.img && (
            <ImageWrapper
              src={item.img}
              width={"20px"}
              height={"20px"}
              round={true}
            />
          )}
          <span>{item.value}</span>
        </SelectWrapper>
      )}
    />
  );
}

export default Selectc;
