import ReactDOM from "react-dom";
import "./index.css";
import InputTree from "./containers/InputTree";
import reportWebVitals from "./reportWebVitals";
import JsonInput from "./containers/JsonInput";
import React, { useState } from "react";
import originalSchema from "./mocks/data/schema.json";

const getDefaultValues = (schema) => {
  if (Array.isArray(schema)) return schema[0];
  if (schema === "number") return 0;
  if (schema === "boolean") return false;
  if (schema === "string") return "";
  return Object.keys(schema).reduce(
    (defaults, key) => ({
      ...defaults,
      [key]: getDefaultValues(schema[key]),
    }),
    {}
  );
};

const App = () => {
  const defaultValues = getDefaultValues(originalSchema);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleImportJson = (values) => {
    setFormValues(values);
  };

  return (
    <React.StrictMode>
      <InputTree values={formValues} setFormValues={setFormValues} />
      <JsonInput
        setValues={handleImportJson}
        formData={formValues}
        defaultValues={defaultValues}
      />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();
