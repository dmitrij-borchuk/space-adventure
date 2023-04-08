import { keyboard } from './keyboard'

export function shipControl() {
  const velocity = {
    v: 0,
    a: 0,
  }

  //Capture the keyboard arrow keys
  const left = keyboard('KeyA')
  const up = keyboard('KeyW')
  const right = keyboard('KeyD')
  const down = keyboard('KeyS')

  //Up
  up.press = () => {
    velocity.v = -5
    // velocity.vx = 0
  }
  up.release = () => {
    if (!down.isDown) {
      velocity.v = 0
    }
  }

  //Down
  down.press = () => {
    velocity.v = 5
    // velocity.vx = 0
  }
  down.release = () => {
    if (!up.isDown) {
      velocity.v = 0
    }
  }

  //Left arrow key `press` method
  left.press = () => {
    velocity.a = -5
  }

  //Left arrow key `release` method
  left.release = () => {
    //If the left arrow has been released, and the right arrow isn't down,
    //and the cat isn't moving vertically:
    //Stop the cat
    if (!right.isDown) {
      velocity.a = 0
    }
  }

  //Right
  right.press = () => {
    velocity.a = 5
  }
  right.release = () => {
    if (!left.isDown) {
      velocity.a = 0
    }
  }

  return velocity
}
