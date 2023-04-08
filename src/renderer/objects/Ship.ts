import { Container, Graphics } from 'pixi.js'
import { RenderColors } from './types'

export class Ship extends Container {
  graphics: Container

  constructor({ colors }: ShipProps) {
    super()

    this.graphics = makeTriangle(80, 50, colors)
    this.graphics.pivot.x = this.graphics.width / 4
    this.graphics.pivot.y = this.graphics.height / 2
    this.addChild(this.graphics)
  }
}

function makeTriangle(
  w: number,
  h: number,
  { fillColor, strokeColor }: RenderColors
) {
  let container = new Container()
  const graphics = new Graphics()
  graphics.beginFill(fillColor)
  graphics.lineStyle(3, strokeColor, 1)
  graphics.moveTo(0, 0)
  graphics.lineTo(0, h)
  graphics.lineTo(w, h / 2)
  graphics.lineTo(0, 0)
  graphics.closePath()
  graphics.endFill()
  container.addChild(graphics)
  return container
}

type ShipProps = {
  colors: RenderColors
}
