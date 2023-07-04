import React from "react";
import CollapsibleItem from "../CollapsibleItem";
import "../styles.css";

const Collapsible = ({ schema, values, setValue, keyPath = [] }) => (
  <div className="collapsible-wrapper">
    {Object.keys(schema).map((key) => (
      <CollapsibleItem
        key={key}
        keyName={key}
        schema={schema[key]}
        value={values[key]}
        setValue={setValue}
        keyPath={[...keyPath, key]}
      />
    ))}
  </div>
);

export default Collapsible;
