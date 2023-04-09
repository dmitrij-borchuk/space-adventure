import { Container } from 'pixi.js'
import { makeTriangle } from '../graphics/triangle'
import { RenderColors } from '../graphics/types'

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

type ShipProps = {
  colors: RenderColors
}
