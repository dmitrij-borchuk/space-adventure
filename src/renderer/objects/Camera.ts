import { Application, Container, TilingSprite } from 'pixi.js'

export class Camera {
  private target?: Container
  constructor(
    private app: Application,
    private world: Container,
    private bg: TilingSprite
  ) {
    app.ticker.add(this.update.bind(this))
  }

  update() {
    if (this.target) {
      this.world.x = -this.target.x + this.app.view.width / 2
      this.world.y = -this.target.y + this.app.view.height / 2

      const bgDx = 0.2
      this.bg.tilePosition.x = -this.target.x * bgDx
      this.bg.tilePosition.y = -this.target.y * bgDx
    }
  }

  followTo(target: Container) {
    this.target = target
  }
}
