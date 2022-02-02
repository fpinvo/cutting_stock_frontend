import React, { useState } from "react";
import Select from "react-select";
import ImportAsSvg from "../../../utils/importAsSVG";
import { ImageWrapper } from "../../../wrappers/ImageWrapper";
import { SelectWrapper } from "../../../wrappers/SelectWrapper";

function Selectc(props) {
  const { options, handleSheetChange } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (change) => {
    handleSheetChange(change);
    setSelectedOption(change);
  };

  return (
    <Select
      className={"ml-0 col-lg-4 pr-0 pl-2 mr-2"}
      value={selectedOption}
      options={options}
      onChange={handleChange}
      formatOptionLabel={(item) => (
        <SelectWrapper>
          <ImageWrapper
            src={item.img}
            width={"20px"}
            height={"20px"}
            round={true}
          />
          <span>{item.value}</span>
        </SelectWrapper>
      )}
    />
  );
}

export default Selectc;
