import { Container } from 'pixi.js'
import { Ship } from './Ship'
import { RenderColors } from '../graphics/types'

export class Player extends Container {
  ship: Ship
  inventory: any[] = []

  constructor(colors: RenderColors) {
    super()

    this.ship = new Ship({
      colors,
    })
    this.addChild(this.ship)
  }

  addItem(item: any) {
    this.inventory.push(item)
  }
}
