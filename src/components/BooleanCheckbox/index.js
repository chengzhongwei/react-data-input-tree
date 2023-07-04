import React from "react";
import "../styles.css";
import { camelCaseToTitleCase } from "../../utilities/utils";
const BooleanCheckbox = ({ keyName, value, setValue }) => (
  <div className="key-name-row">
    <label className="key-name-text">{camelCaseToTitleCase(keyName)}</label>
    <input
      className="key-name-input"
      type="checkbox"
      checked={value}
      onChange={(e) => setValue(e.target.checked)}
    />
  </div>
);

export default BooleanCheckbox;
