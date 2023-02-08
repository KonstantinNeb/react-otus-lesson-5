import { render, screen, act, fireEvent } from "@testing-library/react"
import { GamePanel } from "./GamePanel"

import "@testing-library/jest-dom"
import { configureStore } from "@reduxjs/toolkit"
import { Provider, useSelector } from "react-redux"
import { createStore, Store } from "redux"
import { GameStateReducer } from "../Store/store"

let store: Store
describe("render tests", () => {
  beforeEach(() => {
    store = createStore(GameStateReducer)
  })
  it("render", () => {
    render(
      <Provider store={store}>
        <GamePanel />
      </Provider>
    )
    expect(screen.getByTestId("speed")).toBeInTheDocument()
    expect(screen.getByTestId("run")).toBeInTheDocument()
    expect(screen.getByTestId("restart")).toBeInTheDocument()
  })
  it("state test cells count", () => {
    render(
      <Provider store={store}>
        <GamePanel />
      </Provider>
    )
    const cellCount = screen.getByPlaceholderText("Cell count")
    act(() => {
      fireEvent.change(cellCount, { target: { value: "5" } })
    })
    const values = store.getState()
    expect(values.length).toBe(5)
  })
  it("state test percentage", () => {
    render(
      <Provider store={store}>
        <GamePanel />
      </Provider>
    )
    const percentage = screen.getByPlaceholderText("Population")
    const startButton = screen.getByTestId("run")

    act(() => {
      fireEvent.change(percentage, { target: { value: "100" } })
      startButton.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    let values: boolean[] = store.getState()
    expect(values.reduce((x, y) => x && y)).toBe(true)

    act(() => {
      fireEvent.change(percentage, { target: { value: "0" } })
      startButton.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    values = store.getState()
    expect(values.reduce((x, y) => x || y)).toBeFalsy()
  })
  it("after restart state changed", () => {
    render(
      <Provider store={store}>
        <GamePanel />
      </Provider>
    )
    const restartButton = screen.getByTestId("restart")
    const values: boolean[] = store.getState()
    store.subscribe(() => {
      const values2: boolean[] = store.getState()
      expect(
        values2.filter((x, index) => x !== values[index]).length
      ).toBeGreaterThan(0)
    })
    act(() => {
      restartButton.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
  })
  it("after stop state the same", () => {
    render(
      <Provider store={store}>
        <GamePanel />
      </Provider>
    )
    const runButton = screen.getByTestId("run")
    const values: boolean[] = store.getState()
    store.subscribe(() => {
      const values2: boolean[] = store.getState()
      expect(values2.filter((x, index) => x !== values[index]).length).toBe(0)
    })
    act(() => {
      runButton.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
  })
})
