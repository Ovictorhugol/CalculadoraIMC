import React, { useState } from "react";
import { Label, Input, Title, LabelText } from "./InputRanger.styled";
import "./index.css";
function InputRanger({
  rangeMin,
  rangeMax,
  stepRange,
  setValueHeight,
  setValueWeight,
  title,
}) {
  const [value, setValue] = useState(rangeMin);
  return (
    <>
      <Label>
        <Title>{title}</Title>
        <LabelText>{value}</LabelText>
      </Label>
      <Input
        type="range"
        min={rangeMin}
        max={rangeMax}
        step={stepRange}
        value={value}
        className="slider"
        onChange={(e) => {
          setValue(e.target.value);
          setValueHeight
            ? setValueHeight(e.target.value)
            : setValueWeight(e.target.value);
        }}
      />
    </>
  );
}

export default InputRanger;
