import { LoginForm } from "./LoginForm"
import { act, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
describe("render tests", () => {
  it("render", () => {
    render(<LoginForm onSubmit={() => {}} />)
    expect(screen.getByPlaceholderText("Input your name")).toBeInTheDocument()
  })
})

describe("click tests", () => {
  it("submit called", () => {
    let x = false
    render(<LoginForm onSubmit={() => (x = true)} />)

    const button = screen.getByRole("button")
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(x).toBe(true)
  })
})
