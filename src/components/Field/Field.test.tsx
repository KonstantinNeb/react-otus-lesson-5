import { render, screen, act } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore, Store } from "redux"
import "@testing-library/jest-dom"
import { configureStore } from "@reduxjs/toolkit"
import { Field } from "./Field"
import { GameStateReducer } from "../Store/store"

let store: Store

describe("render tests", () => {
  beforeEach(() => {
    store = createStore(GameStateReducer)
    configureStore({ reducer: GameStateReducer, preloadedState: [false] })
  })

  it("has no cell", () => {
    render(
      <Provider store={store}>
        <Field cellCount={0} />
      </Provider>
    )
    expect(screen.queryByTestId("0")).toBeNull()
  })

  it("has cell inside", () => {
    render(
      <Provider store={store}>
        <Field cellCount={1} />
      </Provider>
    )
    expect(screen.getByTestId("0")).toBeInTheDocument()
  })

  it("click test", () => {
    render(
      <Provider store={store}>
        <Field cellCount={1} />
      </Provider>
    )
    const cell = screen.getByTestId("0")
    act(() => {
      cell.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(screen.getByTestId("0")).toHaveClass("cellDead")
  })
})
