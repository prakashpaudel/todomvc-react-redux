import React, { Component } from 'react'
import Todo from './Todo'

const todos = [
	{
		id: 1,
		text: "Start this app",
		status: "active"
	},
	{
		id: 2,
		text: "End this app",
		status: "complete"
	}
]

function onTodoClick (id) {
	todos.map(todo => {
		if(todo.id === id)
					console.log(todo)
			return {...todo, text: "clicked"};
		return todo
	})
}


const TodoList = () => {
	return (
		<ul>
			{todos.map(todo => 
				<Todo key={todo.id}
							id={todo.id}
							text={todo.text}
							status={todo.status}
							onClick={onTodoClick} />
			)}
			
		</ul>
	)
}

export default TodoList
