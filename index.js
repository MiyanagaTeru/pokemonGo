import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import todoApp from './reducers'
import App from './components/App'

import thunk from 'redux-thunk';

let store = createStore(
	todoApp,
	compose(
  	applyMiddleware(thunk),
  	window.devToolsExtension && window.devToolsExtension()
	)
)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
