import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { setupGame } from './renderer'
// import { setupCounter } from './counter'

const app = setupGame()
document.body.appendChild(app.view)
