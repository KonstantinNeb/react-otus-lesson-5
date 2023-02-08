import { useState, memo, DetailedHTMLProps } from "react"

export const isNum = (value: string) => {
  return /[0-9]/.test(value)
}

interface TextBoxProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  defaultValue: number
  placeHolder: string
  onValueChange: (val: number) => void
}

export const NumberTextBox = memo<TextBoxProps>(
  ({ defaultValue, placeHolder, onValueChange, className }) => {
    const [value, setValue] = useState(defaultValue)
    return (
      <input
        type="text"
        value={value}
        placeholder={placeHolder}
        className={className}
        onChange={(e) => {
          const val = e.target.value && isNum(e.target.value) ? parseInt(e.target.value) : 0
          setValue(val)
          onValueChange(val)
        }}
        onKeyPress={(event) => {
          if (!isNum(event.key)) {
            event.preventDefault()
          }
        }}
      ></input>
    )
  }
)
