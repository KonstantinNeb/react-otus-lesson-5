import { NumberTextBox } from "./NumberTextBox"
export default {
  title: "NumberTextBox",
  component: NumberTextBox,
}

export const Basic = () => (
  <NumberTextBox
    defaultValue={10}
    onValueChange={(value) => {
      console.log(value)
    }}
    placeHolder='text'
  />
)

