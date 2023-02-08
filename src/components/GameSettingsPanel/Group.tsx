import React from "react"
import styles from "./Group.module.css"

type SettingsProps = {
  title?: string
  children?: React.ReactNode
}

export const SettingsPanel: React.FC<SettingsProps> = ({ title, children }) => (
  <div className={styles.group}>
    <div className={styles.groupLabelWrapper}>
      <div className={styles.groupLabel}>{title}</div>
    </div>
    <div className={styles.groupFrame}>{children}</div>
  </div>
)
