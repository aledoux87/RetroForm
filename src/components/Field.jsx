import React from 'react';
import { string, oneOf, oneOfType, number, func } from 'prop-types';

function Field({ id, name, type, label, placeholder, defaultValue, onChange }) {
  return (
    <div className="retro-field">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className="retro-input"
        id={id}
        name={name || id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}

Field.defaultProps = {
  type: 'text'
};

Field.propTypes = {
  id: string.isRequired,
  name: string,
  type: oneOf(['text', 'number', 'email', 'password']),
  label: string,
  placeholder: string,
  defaultValue: oneOfType([string, number]),
  onChange: func.isRequired
};

export default Field;
