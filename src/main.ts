import './style.css'
import { Renderer } from './renderer'

const renderer = new Renderer()
document.body.appendChild(renderer.container)

renderer.showNotification('Gather 20 rock from asteroids.')

renderer.on('playerInventoryUpdated', () => {
  renderer.playerBody.container.inventory.forEach((item) => {
    if (item.type === 'rock') {
      if (item.count >= 20) {
        renderer.showNotification('You win!')
      } else {
        renderer.showNotification(`You have ${item.count}/20 rocks.`)
      }
    }
  })
})
