import { strokeColor } from '../config'

export class NotificationPanel {
  container = document.createElement('div')
  constructor() {
    this.container.style.display = 'flex'
    this.container.style.position = 'absolute'
    this.container.style.top = '0'
    this.container.style.left = '0'
    this.container.style.color = `#${strokeColor.toString(16)}`
    this.container.style.padding = '0.8rem'
    this.container.style.fontSize = '2.4rem'
    this.container.style.background = 'rgba(0, 0, 0, 0.5)'
  }

  showMessage(message: string) {
    this.container.innerHTML = message
  }
}
