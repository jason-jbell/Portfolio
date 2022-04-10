import React from 'react'
import App from './App'
import store from './store'
// import {Provider} from 'react-redux'
// upgrading to react-dom v18 here

// before: 
// import { render } from 'react-dom'
// render(
//   <App />,
//   document.querySelector("#root")
// );

// after:
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />);
