import { Application, Graphics, Point } from 'pixi.js'
import { GameBody } from '../utils/collisionDetection'

export class Bullet extends GameBody<Graphics> {
  speed = 25
  liveTime = 2000
  createdAt: number
  constructor(
    private app: Application,
    x: number,
    y: number,
    public direction: Point
  ) {
    super(new Graphics())
    const { container } = this
    container.beginFill(0xff0000)
    container.drawCircle(0, 0, 5)
    container.endFill()
    container.x = x
    container.y = y

    app.ticker.add(this.update)

    this.createdAt = app.ticker.lastTime
  }

  update = () => {
    if (this.createdAt + this.liveTime < this.app.ticker.lastTime) {
      this.container.destroy()
      this.app.ticker.remove(this.update)
    } else {
      this.container.x += this.direction.x * this.speed
      this.container.y += this.direction.y * this.speed
    }
  }
}
