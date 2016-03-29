import expect from 'expect'
import {addTodo, setTodoStatus, setVisibilityFilter} from './index'

describe('actions', () => {
	it('should create an action to add a todo ', () => {
		expect(addTodo("test")).toEqual({
			type: 'ADD_TODO',
			id: 0,
			text: 'test',
			status: 'active'
		})
	})
	it('should increment todo id when adding todos', () => {
		expect(addTodo("test1")).toEqual({
			type: 'ADD_TODO',
			id: 1,
			text: 'test1',
			status: 'active'
		})
	})
	it('should create an action to set the visibility filter', () => {
		expect(setVisibilityFilter('SHOW_COMPLETE')).toEqual({
			type: 'SET_VISIBILITY_FILTER',
			filter: 'SHOW_COMPLETE'
		})
	})
	it('should create an action to set todo status', () => {
		expect(setTodoStatus(2, 'complete')).toEqual({
			type: 'SET_TODO_STATUS',
			id: 2,
			status: 'complete'
		})
	})
})