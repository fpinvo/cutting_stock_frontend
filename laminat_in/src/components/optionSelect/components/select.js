import React, { useState } from "react";
import Select from "react-select";
import ImportAsSvg from "../../../utils/importAsSVG";
import { ImageWrapper } from "../../../wrappers/ImageWrapper";
import { SelectWrapper } from "../../../wrappers/SelectWrapper";

function OptionSelect(props) {
  const { options, handleSelectedChange, columnWidth } = props;
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: "16em",
      borderBottom: "1px dotted pink",
      zIndex: 100,
    }),
  };

  const handleChange = (change) => {
    handleSelectedChange(change);
    setSelectedOption(options[0]);
  };

  return (
    <Select
      className={`ml-2 mr-2 pl-0 pr-0 ${columnWidth}`}
      styles={customStyles}
      placeholder={""}
      value={selectedOption}
      defaultValue={options[0]}
      options={options}
      onChange={handleChange}
      formatOptionLabel={(item) => (
        <SelectWrapper>
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.img && (
            <ImageWrapper src={item.img} width={"15px"} height={"15px"} />
          )}
          <span
            style={{
              overflow: "scroll",
            }}
          >
            {item.value}
          </span>
        </SelectWrapper>
      )}
    />
  );
}

export default OptionSelect;
