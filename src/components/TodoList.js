import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import '../Style.css'

const TodoList = ({ todos, onTodoClick }) => (
		<div>
			<ul className="items">
				{todos.map(todo => (
			      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
			    ))}
			</ul>
		</div>

)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList