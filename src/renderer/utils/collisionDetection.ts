import { Box, System, Response } from 'detect-collisions'
import { Container } from 'pixi.js'

export class Collider {
  system: System
  constructor() {
    this.system = new System()
  }

  add<T extends Container>(container: T) {
    const box = new GameBody<T>(container)

    this.system.insert(box)

    return box
  }

  remove<T extends Container>(box: GameBody<T>) {
    this.system.remove(box)
  }

  getCollided(cb: (response: Response) => void) {
    return this.system.checkAll(cb)
  }
}

export class GameBody<T extends Container> extends Box {
  container: T
  constructor(container: T) {
    const bounds = container.getBounds()
    super(
      {
        x: bounds.x,
        y: bounds.y,
      },
      bounds.width,
      bounds.height
    )
    this.container = container
  }

  update() {
    this.setPosition(this.container.x, this.container.y)
  }
}
