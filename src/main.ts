import './style.css'
import { Renderer } from './renderer'

const renderer = new Renderer()
document.body.appendChild(renderer.container)

renderer.showNotification('Gather 20 rock from asteroids.')
