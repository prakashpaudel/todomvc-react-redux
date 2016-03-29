import expect from 'expect'
import todos from './todos'

describe('todos reducer', () => {
	it('should handle initial state', () => {
		expect(todos(undefined, {})).toEqual([])
	})

	it('should handle ADD_TODO', () => {
		//adding 1st todo
		expect(todos([],
			{
				type: 'ADD_TODO',
				id: 0,
				text: 'first todo'
			}
		)).toEqual([
			{
				id: 0,
				text: 'first todo',
				status: 'active'
			}
		])

		//adding 2nd todo
		expect(todos([
			{
				id: 0,
				text: 'first todo',
				status: 'active'
			}
		],
			{
				type: 'ADD_TODO',
				id: 1,
				text: 'second todo'
			}
		)).toEqual([
			{
				id: 0,
				text: 'first todo',
				status: 'active'
			},
			{
				id: 1,
				text: 'second todo',
				status: 'active'
			}
		])

	})

	it('should handle SET_TODO_STATUS', () => {
		expect(true).toEqual(false)
	})
})