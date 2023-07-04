import React from "react";
import "../styles.css";
import { camelCaseToTitleCase } from "../../utilities/utils";

const Dropdown = ({ keyName, value, setValue, options }) => (
  <div className="key-name-row">
    <label className="key-name-text">{camelCaseToTitleCase(keyName)}</label>
    <select
      className="key-name-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
