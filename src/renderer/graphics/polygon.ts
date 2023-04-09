import { Container, Graphics } from 'pixi.js'
import { RenderColors } from './types'

export function makePolygon(
  w: number,
  h: number,
  n: number,
  { fillColor, strokeColor }: RenderColors
) {
  const coords: [number, number][] = []
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n
    const x = Math.cos(angle) * w
    const y = Math.sin(angle) * h
    coords.push([x, y])
  }
  let container = new Container()
  if (coords.length < 3) {
    throw new Error('Polygon must have at least 3 points')
  }
  const graphics = new Graphics()
  graphics.beginFill(fillColor)
  graphics.lineStyle(3, strokeColor, 1)
  graphics.moveTo(coords[0][0], coords[0][1])
  for (let i = 1; i < n; i++) {
    graphics.lineTo(coords[i][0], coords[i][1])
  }
  graphics.closePath()
  graphics.endFill()
  container.addChild(graphics)
  return container
}
