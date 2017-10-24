import React from 'react';
import PropTypes from "prop-types";
import Button from "./Button";

const ListItem = props => {
    return (
        <li>{props.item}<Button handleRemove={props.handleRemove}/></li>
    );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default ListItem;
