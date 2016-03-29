import React, { Component } from 'react';

function addTodo(text){
	console.log('dispatch action to add todo with text:', text)
}

const AddTodo = () => {
	let input
	return (
	<div>
		<input type="text" ref={(ref) => input = ref}/>
		<button onClick={() => {
			addTodo(input.value)
			input.value = ''
		}}
		>
			Add Todo
		</button>
	</div>
	)
}

export default AddTodo
