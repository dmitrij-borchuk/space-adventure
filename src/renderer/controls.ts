import { Application, Container } from 'pixi.js'
import { shipControl } from '../game/shipControl'

export function attachControls(app: Application, container: Container) {
  const control = shipControl()
  app.ticker.add(() => {
    // this.app.screen.x = this.player.x
    // this.camera.pivot.x =
    //   this.player.position.x - this.app.renderer.view.width / 2
    // this.camera.pivot.y =
    //   this.player.position.y - this.app.renderer.view.height / 2

    container.angle += control.a
    const dx = Math.cos(container.rotation) * control.v
    const dy = Math.sin(container.rotation) * control.v
    container.x -= dx
    container.y -= dy

    // const bgDx = 0.2
    // this.background.tilePosition.x = -this.player.x * bgDx
    // this.background.tilePosition.y = -this.player.y * bgDx
  })
}
