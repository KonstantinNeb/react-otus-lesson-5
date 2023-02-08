import { useDispatch, useSelector } from "react-redux"
import { Cell } from "../Cell/Cell"
import { gameFieldWidth, gameFieldHeight, gameCellCount } from "../Game/Game"
import styles from "./Field.module.css"

interface FieldProps {
  title?: string
  width?: number
  height?: number
  cellCount?: number
}

export const Field: React.FC<FieldProps> = ({
  title,
  width,
  height,
  cellCount,
}) => {
  const renderChildren = (width: number, height: number, cellCount: number) => {
    const values = useSelector<boolean[], boolean[]>((state) => state)
    const dispatch = useDispatch()

    const cards = []
    for (let index = 0; index < cellCount; index++) {
      cards.push(
        <Cell
          key={index.toString()}
          id={index.toString()}
          alive={values[index]}
          width={width}
          height={height}
          onClick={() => {
            dispatch({ type: "MUTATE", payload: { cellIndex: index } })
          }}
        ></Cell>
      )
    }
    return cards
  }

  const elemInRow = cellCount ? Math.ceil(Math.sqrt(cellCount)) : 0
  const elemWidth = cellCount && width ? width / elemInRow : 0
  const elemHeight = cellCount && height ? height / elemInRow : 0
  width = elemInRow > 0 ? elemInRow * elemWidth : width
  height = cellCount && elemInRow > 0 ? Math.ceil(cellCount / elemInRow) * elemHeight : height
  return (
    <div key="fld2">
      <div className={styles.header}>{title}</div>
      <div
        key="fld"
        className={styles.field}
        style={{
          width,
          height,
        }}
      >
        {cellCount ? renderChildren(elemWidth - 2, elemHeight - 2, cellCount) : ""}
      </div>
    </div>
  )
}

Field.defaultProps = {
  width: gameFieldWidth,
  height: gameFieldHeight,
  cellCount: gameCellCount
}
