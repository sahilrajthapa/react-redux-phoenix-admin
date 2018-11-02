import React from "react";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  input,
  placeholder,
  label,
  type,
  info,
  meta: {touched, error}
}) => {
  return (
    <div className="form-group">
       {label && <label htmlFor={input.name}>{label}</label> }
       { info && <p className="text-sm text-muted">{info}</p>}
      <input
        {...input}
        type={type}
        className="form-control"
        placeholder={placeholder}  
        onBlur={(e) => {console.log('I blurred!'); input.onBlur(e)}}  
      />
      {touched && error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
};

TextFieldGroup.propTypes =  {
     input: PropTypes.object.isRequired,
     placeholder: PropTypes.string,
     label: PropTypes.string,
     type: PropTypes.string.isRequired,
     info: PropTypes.string,
}

TextFieldGroup.defaultProps = {
     type: 'text'
}

export default TextFieldGroup;