import { render, screen, act, fireEvent } from "@testing-library/react"
import { FieldProp } from "./FieldProp"

import "@testing-library/jest-dom"

describe("render tests", () => {
  it("render", () => {
    render(
      <FieldProp
        onCellCountChange={() => {}}
        onHeightChange={() => {}}
        onPopulationChange={() => {}}
        onWidthChange={() => {}}
      />
    )
    expect(screen.getByPlaceholderText("Width")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Height")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Cell count")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Population")).toBeInTheDocument()
  })
  it("input", () => {
    let x = 0
    render(
      <FieldProp
        onWidthChange={() => { x = 1 }}
        onHeightChange={() => { x = 2 }}
        onCellCountChange={() => { x = 3 }}
        onPopulationChange={() => { x = 4 }}        
      />
    )

    const width = screen.getByPlaceholderText("Width")
    act(() => {
      fireEvent.change(width, { target: { value: "10" } })
    })
    expect(x).toBe(1)

    const height = screen.getByPlaceholderText("Height")
    act(() => {
      fireEvent.change(height, { target: { value: "10" } })
    })
    expect(x).toBe(2)

    const cellCount = screen.getByPlaceholderText("Cell count")
    act(() => {
      fireEvent.change(cellCount, { target: { value: "10" } })
    })
    expect(x).toBe(3)

    const percentage = screen.getByPlaceholderText("Population")
    act(() => {
      fireEvent.change(percentage, { target: { value: "10" } })
    })
    expect(x).toBe(4)
  })
})
