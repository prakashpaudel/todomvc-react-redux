import React from 'react'
import { render } from 'react-dom'
import TodoApp from './components/TodoApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
// Don't do this! You’re bringing DevTools into the production bundle.
import DevTools from './containers/DevTools'

let store = createStore(todoApp, DevTools.instrument())

render(
	<Provider store={store}>
		<div>
			<TodoApp />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('app')
)