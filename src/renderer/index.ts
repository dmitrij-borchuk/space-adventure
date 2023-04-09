import { Application, Container } from 'pixi.js'
import { SpaceBg } from './objects/SpaceBg'
import { fillColor, strokeColor } from './config'
import { Player } from './objects/Player'
import { attachControls } from './controls'
import { Camera } from './objects/Camera'

export function setupGame() {
  const app = new Application<HTMLCanvasElement>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const bg = new SpaceBg(app.renderer.view.width, app.renderer.view.height)
  app.stage.addChild(bg)

  // Container for the all game objects
  const world = new Container()
  app.stage.addChild(world)

  const player = new Player({
    fillColor: fillColor,
    strokeColor: strokeColor,
  })
  world.addChild(player)
  const x = app.view.width / 2
  const y = app.view.height / 2
  player.x = x
  player.y = y

  attachControls(app, player)

  const camera = new Camera(app, world, bg)
  camera.followTo(player)

  return app
}
