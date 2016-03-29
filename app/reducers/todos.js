const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state, {
					id: action.id,
					text: action.text,
					status: 'active'
				}
			]
		case 'SET_TODO_STATUS':
			return state.map(todo => {
				if (todo.id === action.id)
					return { ...todo, status: action.status }
				return todo
			})
		default:
			return state;
	}
}

export default todos