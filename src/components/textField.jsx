import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, handler, error, max }) => {
  const getInputClasses = () => {
    return `form-control ${error ? "is-invalid" : ""}`;
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handler}
          className={getInputClasses()}
          max={max ? max : null}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handle: PropTypes.func,
  error: PropTypes.string,
  max: PropTypes.number,
};

export default TextField;
