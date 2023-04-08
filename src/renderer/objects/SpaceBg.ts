import { Container, Texture, TilingSprite } from 'pixi.js'

export class SpaceBg extends Container {
  background: TilingSprite

  constructor(w: number, h: number) {
    super()
    this.background = new TilingSprite(Texture.from('assets/spaceBg.png'), w, h)
    this.addChild(this.background)
  }
}
