import { Field } from "../Field/Field"
import { PlayProp } from "../PlayProp/PlayProp"
import { FieldProp } from "../FieldProp/FieldProp"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { gameFieldWidth, gameFieldHeight, gameCellCount, gamePopulation, gameSpeed } from "../Game/Game"

interface GamePanelProps {}

export const GamePanel: React.FC<GamePanelProps> = ({}) => {
  const dispatch = useDispatch()
  const gameState = useSelector<boolean[], boolean[]>((state) => state)

  const [running, setRunning] = useState(true)
  const [restart, setRestart] = useState(false)
  const [speed, setSpeed] = useState(gameSpeed)

  const [width, setWidth] = useState(gameFieldWidth)
  const [height, setHeight] = useState(gameFieldHeight)
  const [cellCount, setCellCount] = useState(gameCellCount)
  const [percentage, setPercentage] = useState(gamePopulation)
  useEffect(() => {
    if (running && !gameState) {
      dispatch({ type: "INIT", payload: { cellCount, percentage } })
    }
  }, [running, gameState])
  useEffect(() => {
    dispatch({ type: "INIT", payload: { cellCount, percentage } })
  }, [restart, cellCount, percentage])
  useEffect(() => {
    if (running) {
      const timer = setTimeout(() => {
        const cellInRow = cellCount ? Math.ceil(Math.sqrt(cellCount)) : 0
        dispatch({ type: "NEXT_STEP", payload: { cellInRow } })
      }, 1000 / speed)
      return () => clearTimeout(timer)
    }
  })
  return (
    <div style={{ width: gameFieldWidth }}>
      <PlayProp
        onRestart={() => {
          setRestart((prev) => !prev)
        }}
        onPlayChange={setRunning}
        onSpeedChange={setSpeed}
      ></PlayProp>
      <FieldProp
        onCellCountChange={setCellCount}
        onHeightChange={setHeight}
        onPopulationChange={setPercentage}
        onWidthChange={setWidth}
      ></FieldProp>
      <Field width={width} height={height} cellCount={cellCount} />
    </div>
  )
}
