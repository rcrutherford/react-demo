import React from 'react';
import PropTypes from "prop-types";
import Logo from "../images/Inventive-logo.png";

const InputForm = props => {
    return (
      <form className="todoInput" onSubmit={props.newItemSubmitHandler}>
        <input
          className="input"
          type="text"
          onChange={props.handleItemInput}
          value = {props.pendingItem}
          placeholder="Add an Item"
        />
        <button type="submit" name="submit" value="submit">
          add
        </button>
      </form>
    );
};

InputForm.propTypes={
  handleItemInput: PropTypes.func.isRequired,
  pendingItem: PropTypes.string.isRequired,
  newItemSubmitHandler: PropTypes.func.isRequired
}

export default InputForm;
