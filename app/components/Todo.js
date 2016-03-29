import React, { PropTypes } from 'react';

const Todo = (props) => {
	return (
		<li onClick={() => props.onClick()}
				style={{ textDecoration: props.complete ? 'line-through' : 'none' }} >
			{props.text}
		</li>
	)
}

Todo.propTypes = {
	text: PropTypes.string.isRequired,
	complete: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Todo
