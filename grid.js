export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * 31) + 1,
    y: Math.floor(Math.random() * 31) + 1
  }
}

export function outsideGrid(position) {
  return position.x < 1 || position.x > 31 || position.y < 1 || position.y > 31
}
