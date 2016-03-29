import React, { Component } from 'react';

const Todo = (props) => {
	return (
		<li onClick={() => props.onClick(props.id)}>
			{props.text}
		</li>
	)
}

export default Todo
