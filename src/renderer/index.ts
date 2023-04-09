import { Application, Container } from 'pixi.js'
import { Response } from 'detect-collisions'
import { SpaceBg } from './objects/SpaceBg'
import { fillColor, strokeColor } from './config'
import { Player } from './objects/Player'
import { attachControls } from './controls'
import { Camera } from './objects/Camera'
import { NotificationPanel } from './components/NotificationPanel'
import { Resource } from './objects/Resource'
import { Collider, GameBody } from './utils/collisionDetection'

export class Renderer {
  container: HTMLDivElement
  app: Application<HTMLCanvasElement>
  notificationPanel: NotificationPanel
  collider: Collider
  playerBody: GameBody<Player>

  constructor() {
    const app = new Application<HTMLCanvasElement>({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    this.app = app

    const bg = new SpaceBg(app.renderer.view.width, app.renderer.view.height)
    app.stage.addChild(bg)

    // Container for the all game objects
    const world = new Container()
    world.sortableChildren = true
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
    player.zIndex = 100

    const res = new Resource('rock')
    res.x = 100
    res.y = 100
    world.addChild(res)

    attachControls(app, player)

    const camera = new Camera(app, world, bg)
    camera.followTo(player)

    const container = document.createElement('div')
    this.notificationPanel = new NotificationPanel()
    container.appendChild(app.view)
    container.appendChild(this.notificationPanel.container)
    this.container = container

    this.collider = new Collider()
    this.playerBody = this.collider.add(player)
    this.collider.add(res)

    app.ticker.add(this.update.bind(this))
  }

  update() {
    this.playerBody.setPosition(
      this.playerBody.container.x,
      this.playerBody.container.y
    )
    this.collider.getCollided((res) => {
      const details = getCollisionDetails(res)
      if (details.isCollisionWithPlayer) {
        const collidedWith = details.object
        if (collidedWith.container instanceof Resource) {
          this.playerBody.container.addItem(collidedWith.container)
          collidedWith.container.destroy()
          this.collider.remove(collidedWith.body)
        }
      }
    })
  }

  showNotification(message: string) {
    this.notificationPanel.showMessage(message)
  }
}

function getCollisionDetails(res: Response): CollisionDetails {
  const isCollisionWithPlayer =
    res.a.container instanceof Player || res.b.container instanceof Player
  if (!isCollisionWithPlayer) {
    return {
      isCollisionWithPlayer: false,
    }
  }
  const aIsPlayer = res.a.container instanceof Player
  return {
    isCollisionWithPlayer: true,
    player: {
      body: aIsPlayer ? res.a : res.b,
      container: aIsPlayer ? res.a.container : res.b.container,
    },
    object: {
      body: aIsPlayer ? res.b : res.a,
      container: aIsPlayer ? res.b.container : res.a.container,
    },
  }
}
type CollisionDetails =
  | {
      isCollisionWithPlayer: false
    }
  | {
      isCollisionWithPlayer: true
      player: {
        container: Player
        body: GameBody<Player>
      }
      object: {
        container: Container
        body: GameBody<Container>
      }
    }
