import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import store from './store'
import { Provider } from 'react-redux'

const container = document.querySelector('#app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)
