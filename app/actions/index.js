//action creators
let nextTodoId = 0

export const addTodo = (text) => {
	return {
		type:'ADD_TODO',
		id: nextTodoId++,
		text,
		status: 'active'
	}
}

export const setTodoStatus = (id, status) => {
	return {
		type: 'SET_TODO_STATUS',
		id,
		status
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}