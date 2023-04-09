import { Container } from 'pixi.js'
import { ResourceType } from './types'
import { makePolygon } from '../graphics/polygon'
import { resourceColors } from '../config'

export class Asteroid extends Container {
  constructor(public type: ResourceType, size: number) {
    super()
    const color = resourceColors[type]
    const dimensionalSize = (size - 2) * 20
    this.addChild(
      makePolygon(
        dimensionalSize,
        dimensionalSize,
        Math.max(3, Math.min(7, size)),
        color
      )
    )
  }
}
