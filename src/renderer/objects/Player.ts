import { Container } from 'pixi.js'
import { Ship } from './Ship'
import { RenderColors } from '../graphics/types'

export class Player extends Container {
  ship: Ship
  inventory: InventoryItem[] = []

  constructor(colors: RenderColors) {
    super()

    this.ship = new Ship({
      colors,
    })
    this.addChild(this.ship)
  }

  addItem(item: InventoryItem) {
    this.inventory.push(item)
  }
}

type InventoryItem = {
  type: string
  count: number
}
