import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
return(
    <div>
        <h1>Custom App!!!</h1>
    </div>
)
}

const reactElement = {
  type: 'a',
  props: {
      href:"https://google.com",
      target: "_blank"
  },
  children: "Click me to visit google"
}

const anotherElem = <a href='https://google.com' target='_blank'>Click to visit google</a>

const reactElem = React.createElement('a', 
  {href:"https://google.com", target:'_blank'}, 'click to visit google')


createRoot(document.getElementById('root')).render(
  <App />
  // reactElem
)
