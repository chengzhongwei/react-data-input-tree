import React, { useState } from "react";
import IconArrowUp from "../assets/IconArrowUp.svg";
import IconArrowDown from "../assets/IconArrowDown.svg";

const JsonInput = ({ setValues, formData, defaultValues }) => {
  const [jsonString, setJsonString] = useState("");

  const handleInputChange = (event) => {
    setJsonString(event.target.value);
  };

  function isJsonMatchingSchema(json, schema) {
    if (Array.isArray(schema)) {
      return (
        Array.isArray(json) &&
        json.every((item, index) => isJsonMatchingSchema(item, schema[0]))
      );
    }

    if (typeof schema === "object") {
      return (
        typeof json === "object" &&
        Object.keys(schema).every((key) => {
          // Ignore keys that are not present in the JSON
          if (!json.hasOwnProperty(key)) {
            return true;
          }
          return isJsonMatchingSchema(json[key], schema[key]);
        })
      );
    }

    // Check types directly for non-object types
    return typeof json === typeof schema;
  }

  const handleImportClick = () => {
    try {
      const parsedJson = JSON.parse(jsonString);
      if (!isJsonMatchingSchema(parsedJson, defaultValues)) {
        alert("Invalid JSON schema.");
        return;
      }
      setValues(parsedJson);
    } catch (error) {
      alert("Invalid JSON string.");
    }
  };
  const handleExportClick = () => {
    console.log({ formData });
    setJsonString(JSON.stringify(formData));
  };
  const buttonStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="json-input">
      <button className="json-input-button" onClick={handleImportClick}>
        <img src={IconArrowUp} alt="arrow-up" width="16px" height="16px" />
        Import JSON data
      </button>
      <button className="json-input-button" onClick={handleExportClick}>
        <img src={IconArrowDown} alt="arrow-down" width="16px" height="16px" />
        Export data to JSON
      </button>
      <textarea
        placeholder="Enter JSON String here"
        value={jsonString}
        onChange={handleInputChange}
        rows={6}
        cols={80}
      />
      <br></br>
    </div>
  );
};

export default JsonInput;
