import { useEffect, useState } from "react"
import { SpeedEdit } from "../SpeedEdit/SpeedEdit"
import { SettingsPanel } from "../GameSettingsPanel/Group"
import { gameSpeed } from "../Game/Game"
import styles from "./PlayProp.module.css"

type PlayPropProps = {
  onPlayChange: (val: boolean) => void
  onRestart: () => void
  onSpeedChange: (speed: number) => void
}

export const PlayProp = ({
  onPlayChange,
  onRestart,
  onSpeedChange,
}: PlayPropProps) => {

  const [isRunnung, setIsRunnung] = useState(true)
  const onClickRunButton = () => {
    setIsRunnung((prev) => !prev)
  }
  const onClickRestartButton = () => {
    onRestart()
    setIsRunnung(true)
  }
  useEffect(() => {
    onPlayChange(isRunnung)
  }, [isRunnung])
  const btnStyle = `${styles.playProp} ${styles.playPropButton}`
  return (
    <SettingsPanel title="Speed">
      <div className={styles.playPropContainer}>
        <div
          data-testid="speed"
          className={`${styles.playProp} ${styles.playPropLabel}`}
        >
        </div>
        <div className={`${styles.playProp} ${styles.speedStepper}`}>
          <SpeedEdit
            startValue={gameSpeed}
            onValueChange={onSpeedChange}
          ></SpeedEdit>
        </div>
        <div
          data-testid="run"
          className={
            isRunnung ? `${btnStyle} ${styles.play}` : `${btnStyle} ${styles.stop}`
          }
          onClick={onClickRunButton}
        ></div>
        <div
          data-testid="restart"
          className={`${btnStyle} ${styles.reload}`}
          onClick={onClickRestartButton}
        ></div>
      </div>
    </SettingsPanel>
  )
}
