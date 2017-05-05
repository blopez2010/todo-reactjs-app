import React from 'react'
import PropTypes from 'prop-types';

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text"
        value={props.currentTodo}
        onChange={props.handleInputChange} />
    </form>
  )
}

export default TodoForm

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}