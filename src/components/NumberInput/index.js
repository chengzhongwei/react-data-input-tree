import React from "react";
import "../styles.css";
import { camelCaseToTitleCase } from "../../utilities/utils";

const NumberInput = ({ keyName, value, setValue }) => (
  <div className="key-name-row">
    <label className="key-name-text">{camelCaseToTitleCase(keyName)}</label>
    <input
      className="key-name-input"
      type="number"
      value={value}
      onChange={(e) => setValue(parseFloat(e.target.value))}
    />
  </div>
);

export default NumberInput;
