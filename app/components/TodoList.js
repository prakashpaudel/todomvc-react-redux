import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = (props) => {
	return (
		<ul>
			{props.todos.map(todo => 
				<Todo key={todo.id}
							text={todo.text}
							complete={todo.complete}
							onClick={(id) => props.onTodoClick(todo.id)} />
			)}
		</ul>
	)
}

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList
