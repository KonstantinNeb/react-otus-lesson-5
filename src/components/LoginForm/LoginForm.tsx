import React from "react"
import styles from "./LoginForm.module.css"

type LoginFormProps = {
  onSubmit: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault()
    }}
  >
    <div className={styles.centerScreen}>
      <input type="text" placeholder="Input your name" />
      <button
        type="submit"
        className={styles.submitButton}
        onClick={() => {
          onSubmit()
        }}
      >
        Start
      </button>
    </div>
  </form>
)
