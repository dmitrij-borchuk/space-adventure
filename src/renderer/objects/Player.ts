import { Container, Graphics } from 'pixi.js'
import { Ship } from './Ship'
import { RenderColors } from './types'

export class Player extends Container {
  ship: Ship

  constructor(colors: RenderColors) {
    super()

    this.ship = new Ship({
      colors,
    })
    this.addChild(this.ship)
  }
}
