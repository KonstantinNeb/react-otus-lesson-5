export const gameFieldWidth = 500
export const gameFieldHeight = 500
export const gameCellCount = 625
export const gamePopulation = 50
export const gameSpeed = 1

export const initialize = (
  cellCount: number,
  percentage: number
): boolean[] => {
  let liveAmount = (cellCount * percentage) / 100
  const states: boolean[] = new Array(cellCount)
  if (liveAmount === cellCount) {
    states.fill(true, 0, cellCount)
    return states
  }
  states.fill(false, 0, cellCount)
  const freeCells: number[] = [...Array(cellCount).keys()]

  while (liveAmount > 0) {
    const random = generateRandom(freeCells.length)
    states[freeCells[random]] = true
    freeCells.splice(random, 1)
    liveAmount--
  }
  return states
}

export const mutateCell = (cellIndex: number, states: boolean[]) =>
  states.map((state, index) => (index === cellIndex ? !state : state))

export const nextStep = (states: boolean[], cellInRow: number) => {
  return states.map((state, index) => nextStepForCell(states, cellInRow, index))
}

export const nextStepForCell = (
  states: boolean[],
  cellInRow: number,
  cellIndex: number
) => {
  if (states.length === 1) {
    return states[0]
  }
  let aliveNeighbourCount = 0
  switch (cellIndex) {
    case 0:
      aliveNeighbourCount =
        getValue(states, cellIndex + 1) +
        getValue(states, cellIndex + cellInRow) +
        getValue(states, cellIndex + cellInRow + 1)
      break
    case cellInRow - 1:
      aliveNeighbourCount =
        getValue(states, cellIndex - 1) +
        getValue(states, cellIndex + cellInRow) +
        getValue(states, cellIndex + cellInRow - 1)
      break
    default: {
      const remainder = cellIndex % cellInRow
      switch (remainder) {
        case 0:
          aliveNeighbourCount = sumNeighbours(states, [
            cellIndex + 1,
            cellIndex + cellInRow,
            cellIndex + cellInRow + 1,
            cellIndex - cellInRow,
            cellIndex - cellInRow + 1,
          ])
          break
        case cellInRow - 1:
          aliveNeighbourCount = sumNeighbours(states, [
            cellIndex - 1,
            cellIndex + cellInRow,
            cellIndex + cellInRow - 1,
            cellIndex - cellInRow,
            cellIndex - cellInRow - 1,
          ])
          break
        default:
          aliveNeighbourCount = sumNeighbours(states, [
            cellIndex - 1,
            cellIndex + 1,
            cellIndex + cellInRow,
            cellIndex + cellInRow - 1,
            cellIndex + cellInRow + 1,
            cellIndex - cellInRow,
            cellIndex - cellInRow - 1,
            cellIndex - cellInRow + 1,
          ])
          break
      }
      break
    }
  }
  const currentState = states[cellIndex]

  return (
    (currentState &&
      (aliveNeighbourCount === 2 || aliveNeighbourCount === 3)) ||
    (!currentState && aliveNeighbourCount === 3)
  )
}

const sumNeighbours = (states: boolean[], cellIndexes: number[]) => {
  return cellIndexes
    .map((index) => getValue(states, index))
    .reduce((prev: number, cur: number) => prev + cur, 0)
}

const getValue = (states: boolean[], cellIndex: number) => {
  const boolValue =
    cellIndex > 0 && cellIndex < states.length ? states[cellIndex] : false
  return boolValue ? 1 : 0
}

const generateRandom = (maxLimit: number): number => {
  return Math.floor(Math.random() * maxLimit)
}
