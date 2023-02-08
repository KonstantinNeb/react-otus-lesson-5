import { render, screen, act, fireEvent } from "@testing-library/react"
import { PlayProp } from "./PlayProp"

import "@testing-library/jest-dom"

describe("render tests", () => {
  it("render", () => {
    render(
      <PlayProp
        onPlayChange={() => {}}
        onRestart={() => {}}
        onSpeedChange={() => {}}
      />
    )
    expect(screen.getByTestId("speed")).toBeInTheDocument()
    expect(screen.getByTestId("run")).toBeInTheDocument()
    expect(screen.getByTestId("restart")).toBeInTheDocument()
  })
  it("input", () => {
    let speed = 0
    let restart = false
    let started = true
    render(
      <PlayProp
        onPlayChange={(value) => {
          started = value
        }}
        onRestart={() => {
          restart = true
        }}
        onSpeedChange={(value) => {
          speed = value
        }}
      />
    )
    const speedInput = screen.getByRole("textbox")
    act(() => {
      fireEvent.change(speedInput, { target: { value: "10" } })
    })
    expect(speed).toBe(10)

    const startButton = screen.getByTestId("run")
    act(() => {
      startButton.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(started).toBe(false)

    const restartButton = screen.getByTestId("restart")
    act(() => {
      restartButton.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(restart).toBe(true)
  })
})
