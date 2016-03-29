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
				complete: false
			}
		])
		//adding 2nd todo
		expect(todos([
			{
				id: 0,
				text: 'first todo',
			complete: false
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
				complete: false
			},
			{
				id: 1,
				text: 'second todo',
				complete: false
			}
		])

	})

	it('should handle TOGGLE_TODO', () => {
		expect(todos([
			{
				id: 0,
				text: 'first todo',
			complete: true
			}
		],
			{
				type: 'TOGGLE_TODO',
				id: 0
			}
		)).toEqual([
			{
				id: 0,
				text: 'first todo',
				complete: false
			}
		])
	})

	it('should handle EDIT_TODO', () => {
		expect(todos([
			{
				id: 0,
				text: 'first todo',
			complete: false
			}
		],
			{
				type: 'EDIT_TODO',
				id: 0,
				text: 'edited todo'
			}
		)).toEqual([
			{
				id: 0,
				text: 'edited todo',
				complete: false
			}
		])
	})

	it('should handle DELETE_TODO', () => {
		expect(todos([
			{
				id: 0,
				text: 'first todo',
				complete: false
			},
			{
				id: 1,
				text: 'second todo',
				complete: false
			},
			{
				id: 2,
				text: 'third todo',
				complete: false
			}
		],
			{
				type: 'DELETE_TODO',
				id: 1
			}
		)).toEqual([
			{
				id: 0,
				text: 'first todo',
				complete: false
			},
			{
				id: 2,
				text: 'third todo',
				complete: false
			}
		])
	})
})