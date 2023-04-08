import * as PIXI from 'pixi.js'
import { SpaceBg } from './objects/SpaceBg'
import { fillColor, strokeColor } from './config'
import { Player } from './objects/Player'
import { attachControls } from './controls'

export function setupGame() {
  const app = new PIXI.Application<HTMLCanvasElement>({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const bg = new SpaceBg(app.renderer.view.width, app.renderer.view.height)
  app.stage.addChild(bg)

  const player = new Player({
    fillColor: fillColor,
    strokeColor: strokeColor,
  })
  app.stage.addChild(player)
  const x = app.view.width / 2
  const y = app.view.height / 2
  player.x = x
  player.y = y

  attachControls(app, player)

  return app
}
