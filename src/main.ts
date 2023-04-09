import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { setupRenderer } from './renderer'
// import { setupCounter } from './counter'

const { container } = setupRenderer()
document.body.appendChild(container)
