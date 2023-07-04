import React from "react";
import "../styles.css";
import { camelCaseToTitleCase } from "../../utilities/utils";

const StringInput = ({ keyName, value, setValue }) => (
  <div className="key-name-row">
    <label className="key-name-text">{camelCaseToTitleCase(keyName)}</label>
    <input
      className="key-name-input"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

export default StringInput;
