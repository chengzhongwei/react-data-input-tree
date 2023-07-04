import React, { useState, useEffect } from "react";
import originalSchema from "../mocks/data/schema-2.json";
import Collapsible from "../components/Collapsible";
import "./index.css";

const InputTree = ({ values, setFormValues }) => {
  const [schema, setSchema] = useState(originalSchema);

  const setValue = (keyPath, newValue) => {
    setFormValues((prevValues) => {
      const updateNestedObject = (nestedObject, keyPath, value, index = 0) => {
        if (index === keyPath.length - 1) {
          return {
            ...nestedObject,
            [keyPath[index]]: value,
          };
        }

        return {
          ...nestedObject,
          [keyPath[index]]: updateNestedObject(
            nestedObject[keyPath[index]],
            keyPath,
            value,
            index + 1
          ),
        };
      };

      return updateNestedObject(prevValues, keyPath, newValue);
    });
  };

  return (
    <div className="input-tree">
      <h1>React Data Input Tree</h1>
      <Collapsible schema={schema} values={values} setValue={setValue} />
    </div>
  );
};

export default InputTree;
