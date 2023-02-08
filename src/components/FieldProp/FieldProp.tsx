import { SettingsPanel } from "../GameSettingsPanel/Group"
import { NumberTextBox } from "../Input/NumberTextBox"
import styles from "./FieldProp.module.css"
import { gameFieldWidth, gameFieldHeight, gameCellCount, gamePopulation } from "../Game/Game"

type FieldPropProps = {
  onWidthChange: (width: number) => void
  onHeightChange: (height: number) => void
  onCellCountChange: (cellCount: number) => void
  onPopulationChange: (percentage: number) => void
}

export const FieldProp = ({
  onWidthChange,
  onHeightChange,
  onCellCountChange,
  onPopulationChange
}: FieldPropProps) => {
  const numberTextBoxClasses = `${styles.fieldPropElement} ${styles.fieldPropTextbox}`

  return (
    <SettingsPanel title="Field settings">
      <div className={styles.fieldPropPanel}>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Width:</div>
          <NumberTextBox
            className={numberTextBoxClasses}
            placeHolder="Width"
            defaultValue={gameFieldWidth}
            onValueChange={onWidthChange}
          ></NumberTextBox> 
        </div>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Height:</div>
          <NumberTextBox
            className={numberTextBoxClasses}
            placeHolder="Height"
            defaultValue={gameFieldHeight}
            onValueChange={onHeightChange}
          ></NumberTextBox>
        </div>
        <div className={styles.fieldPropGroup}>  
          <div className={styles.fieldPropElement}>Cell count:</div>
          <NumberTextBox
            className={numberTextBoxClasses}
            placeHolder="Cell count"
            defaultValue={gameCellCount}
            onValueChange={onCellCountChange}
          ></NumberTextBox>
        </div>
        <div className={styles.fieldPropGroup}>
          <div className={styles.fieldPropElement}>Population:</div>
          <NumberTextBox
            className={numberTextBoxClasses}
            placeHolder="Population"
            defaultValue={gamePopulation}
            onValueChange={onPopulationChange}
          ></NumberTextBox>
        </div>
      </div>
    </SettingsPanel>
  )
}
