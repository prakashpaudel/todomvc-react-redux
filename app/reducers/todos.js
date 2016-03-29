const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state, {
					id: action.id,
					text: action.text,
					complete: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if (todo.id === action.id)
					return { ...todo, complete: !todo.complete }
				return todo
			})
		case 'EDIT_TODO':
			return state.map(todo => {
				if (todo.id === action.id)
					return { ...todo, text: action.text }
				return todo
			})
		case 'DELETE_TODO':
			return state.filter(todo => {
				return !(todo.id === action.id)
			})
		default:
			return state
	}
}

export default todos