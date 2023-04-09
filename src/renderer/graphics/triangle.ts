import { Container, Graphics } from 'pixi.js'
import { RenderColors } from './types'

export function makeTriangle(
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
