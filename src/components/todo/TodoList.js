import React from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
      </ul>
    </div>
  )
}

export default TodoList

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}