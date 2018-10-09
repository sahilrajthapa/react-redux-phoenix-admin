import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  label,
  value,
  type,
  onChange,
  info
}) => {
  return (
    <div className="form-group">
       <label htmlFor={name}>{label}</label>
       { info && <p className="text-sm text-muted">{info}</p>}
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextFieldGroup.propTypes =  {
     name: PropTypes.string.isRequired,
     placeholder: PropTypes.string,
     value: PropTypes.string.isRequired,
     label: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired,
     info: PropTypes.string,
     onChange: PropTypes.func.isRequired,
}

TextFieldGroup.defaultProps = {
     type: 'text'
}

export default TextFieldGroup;