import React from 'react';
import PropTypes from 'prop-types';
import Logo from "../images/Inventive-logo.png";

const Button = props => {
    return (
      <button className="action" onClick={props.handleRemove}>
        x
      </button>
    );
}

Button.propTypes = {
  handleRemove: PropTypes.func.isRequired
};

export default Button;
