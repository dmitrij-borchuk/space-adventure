import * as PIXI from 'pixi.js'
import { SpaceBg } from './objects/SpaceBg'

export function setupGame() {
  const app = new PIXI.Application<HTMLCanvasElement>({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const bg = new SpaceBg(app.renderer.view.width, app.renderer.view.height)
  app.stage.addChild(bg)

  return app
}
