import React from 'react';
import PropTypes from "prop-types";
import Logo from "../images/Inventive-logo.png";
import ListItem from "./ListItem";

const List = props => {
    return (
      <ul>
        {props.list.map((item,index) => (
            <ListItem
              key={index}
              item={item.name}
              handleRemove={() => props.removeItemAt(item.id)}
            />
          ))
        }
      </ul>
    );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  removeItemAt: PropTypes.func.isRequired
}

export default List;
