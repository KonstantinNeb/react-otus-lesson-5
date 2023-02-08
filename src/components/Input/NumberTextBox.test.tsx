import { NumberTextBox } from "./NumberTextBox"
import { act, render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
describe("render tests numberTextBox", () => {
  it("render", () => {
    render(
      <NumberTextBox
        defaultValue={0}
        onValueChange={() => {}}
        placeHolder="Test"
      />
    )
    expect(screen.getByPlaceholderText("Test")).toBeInTheDocument()
  })
})

describe("change value tests", () => {
  it("enter number and char", () => {
    let x = 0
    render(
      <NumberTextBox
        onValueChange={(value) => {
          x = value
        }}
        placeHolder="Test"
        defaultValue={0}
      />
    )

    const input = screen.getByPlaceholderText("Test")
    act(() => {
      fireEvent.change(input, { target: { value: "1" } })
    })
    expect(x).toBe(1)
    act(() => {
      fireEvent.change(input, { target: { value: "a" } })
    })
    expect(x).toBe(0)
  })
})
