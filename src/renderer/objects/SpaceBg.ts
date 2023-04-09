import { Texture, TilingSprite } from 'pixi.js'

export class SpaceBg extends TilingSprite {
  constructor(w: number, h: number) {
    super(Texture.from('assets/spaceBg.png'), w, h)
  }
}
