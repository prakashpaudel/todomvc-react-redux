import expect from 'expect'
import * as actions from './index'

describe('actions', () => {
	it('should create an action to add a todo ', () => {
		expect(actions.addTodo("test")).toEqual({
			type: 'ADD_TODO',
			id: 0,
			text: 'test'
		})
	})
	it('should increment todo id when adding todos', () => {
		expect(actions.addTodo("test1")).toEqual({
			type: 'ADD_TODO',
			id: 1,
			text: 'test1'
		})
	})
	it('should create an action to set the visibility filter', () => {
		expect(actions.setVisibilityFilter('SHOW_COMPLETE')).toEqual({
			type: 'SET_VISIBILITY_FILTER',
			filter: 'SHOW_COMPLETE'
		})
	})
	it('should create an action to toggle todos', () => {
		expect(actions.toggleTodo(2)).toEqual({
			type: 'TOGGLE_TODO',
			id: 2
		})
	})
	it('should create an action to edit todos', () => {
		expect(actions.editTodo(2, 'test edit')).toEqual({
			type: 'EDIT_TODO',
			id: 2,
			text: 'test edit'
		})
	})
	it('should create an action to delete todos', () => {
		expect(actions.deleteTodo(2)).toEqual({
			type: 'DELETE_TODO',
			id: 2
		})
	})

})