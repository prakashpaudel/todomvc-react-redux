import expect from 'expect'
import visibilityFilter from './visibilityFilter'

describe('visibilityFilter reducer', () => {
	it('should handle initial state', () => {
		expect(visibilityFilter(undefined, '')).toEqual('SHOW_ALL')
	})

	it('should handle SET_VISIBILITY_FILTER', () => {
		const action = {
			type: "SET_VISIBILITY_FILTER",
			filter: "SHOW_COMPLETED"
		}

		expect(visibilityFilter('SHOW_ALL', action)).toEqual('SHOW_COMPLETED')
	})
})