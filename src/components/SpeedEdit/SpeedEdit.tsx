import { useEffect, useState } from "react"
import styles from "./SpeedEdit.module.css"

export const isNum = (value: string) => {
  return /[0-9]/.test(value)
}

type SpeedEditProps = {
  startValue: number
  onValueChange: (val: number) => void
  id?: string
}

export const SpeedEdit = ({
  startValue,
  onValueChange,
}: SpeedEditProps) => {
  const [value, setValue] = useState(startValue)
  useEffect(() => {
    if (value) {
      onValueChange(value)
    }
  }, [value])
  return (
    <div className={styles.speedEditContainer}>
      <div className={styles.speedEditInput}>
        <input
          value={value}
          style={{ width: "30px", color: "#41cb71"}}
          onChange={(e) => {
            const val = e.target.value && isNum(e.target.value) ? parseInt(e.target.value) : 0
            setValue(val)
          }}
          onKeyPress={(event) => {
            if (!isNum(event.key)) {
              event.preventDefault()
            }
          }}
        ></input>
      </div>
    </div>
  )
}
