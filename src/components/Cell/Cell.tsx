import styles from "./Cell.module.css"

export interface CellProps {
  alive: boolean
  width: number
  height: number
  id: string
  onClick: () => void
}
export const Cell: React.FC<CellProps> = ({
  alive,
  width,
  height,
  id,
  onClick,
}) => {
  const classes = `${styles.cell} ${alive ? styles.cellAlive : styles.cellDead}`
  return (
    <div      
      id={id}
      className={classes}
      style={{ width, height, }}
      onClick={onClick}
      data-testid={id}
    ></div>
  )
}
