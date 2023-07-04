import React, { useState } from "react";
import Dropdown from "../Dropdown";
import BooleanCheckbox from "../BooleanCheckbox";
import NumberInput from "../NumberInput";
import StringInput from "../StringInput";
import Collapsible from "../Collapsible";
import "../styles.css";
import { camelCaseToTitleCase } from "../../utilities/utils";

const CollapsibleItem = ({ keyName, schema, value, setValue, keyPath }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  if (Array.isArray(schema)) {
    return (
      <Dropdown
        keyName={keyName}
        value={value}
        setValue={(val) => setValue(keyPath, val)}
        options={schema}
      />
    );
  } else if (schema === "boolean") {
    return (
      <BooleanCheckbox
        keyName={keyName}
        value={value}
        setValue={(val) => setValue(keyPath, val)}
      />
    );
  } else if (schema === "number") {
    return (
      <NumberInput
        keyName={keyName}
        value={value}
        setValue={(val) => setValue(keyPath, val)}
      />
    );
  } else if (schema === "string") {
    return (
      <StringInput
        keyName={keyName}
        value={value}
        setValue={(val) => setValue(keyPath, val)}
      />
    );
  }

  return (
    <fieldset className={`fieldset-wrapper ${isCollapsed ? "" : "expanded"}`}>
      <legend onClick={toggleCollapse}>
        <div className="key-name-row">
          {isCollapsed ? "▶" : "▼"}
          <span className="collapsible-title">
            {camelCaseToTitleCase(keyName)}
          </span>
        </div>
      </legend>
      {!isCollapsed && (
        <Collapsible
          schema={schema}
          values={value}
          setValue={setValue}
          keyPath={keyPath}
        />
      )}
    </fieldset>
  );
};

export default CollapsibleItem;
