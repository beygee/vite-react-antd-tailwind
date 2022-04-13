import React from 'react'
import ReactDOM from 'react-dom'
import './styles/tailwind.css'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
