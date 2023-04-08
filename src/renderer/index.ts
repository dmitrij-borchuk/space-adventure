import Phaser from 'phaser'

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
}

function preload() {}

function create() {}

function update() {}

export function setupGame() {
  return new Phaser.Game(config)
}
