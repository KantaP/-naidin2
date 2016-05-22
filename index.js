import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cartApp from './reducers'
import App from './components/App'
import "!style!css!sass!./assets/scss/style.scss"

let store = createStore(cartApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
)