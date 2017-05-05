import React from 'react'
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isComplete} /> {props.name}
    </li>
  )
}

export default TodoItem

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}