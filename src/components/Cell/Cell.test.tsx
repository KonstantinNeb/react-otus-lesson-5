import { act, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Cell } from "./Cell"

describe("render tests", () => {
  it("Cell render alive works", async () => {
    render(<Cell alive height={10} width={10} onClick={() => {}} id="1" />)
    expect(screen.getByTestId("1")).toBeInTheDocument()
    expect(screen.getByTestId("1")).toHaveClass("cellAlive")
  })
  it("Cell render dead works", async () => {
    render(<Cell alive={false} height={10} width={10} onClick={() => {}} id="1" />)
    expect(screen.getByTestId("1")).toBeInTheDocument()
    expect(screen.getByTestId("1")).toHaveClass("cellDead")
  })
  it("click test", () => {
    let x = false
    render(<Cell alive height={10} width={10} onClick={() => {x = true}} id="1" />)
    const cell = screen.getByTestId("1")
    act(() => {
      cell.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(x).toBe(true)
  })
})
