import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { Renderer } from './renderer'
// import { setupCounter } from './counter'

const renderer = new Renderer()
document.body.appendChild(renderer.container)
