import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

export default class TodoApp extends Component {
	render() {
		return (
		<div>
			<AddTodo />
			<TodoList />
			<Footer />
		</div>
		);
	}
}
