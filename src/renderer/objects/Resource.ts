import { Container } from 'pixi.js'
import { makeTriangle } from '../graphics/triangle'
import { resourceColors } from '../config'

export class Resource extends Container {
  constructor(public type: ResourceType) {
    super()
    const color = resourceColors[type]
    this.addChild(makeTriangle(20, 20, color))
  }
}

const resourceTypes = ['metal', 'water', 'ice', 'rock'] as const
type ResourceType = typeof resourceTypes[number]
