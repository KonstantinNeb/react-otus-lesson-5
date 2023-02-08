import { act, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { createStore, Store } from "redux"
import { Provider } from "react-redux"
import { App } from "./App"
import { GameStateReducer } from "../Store/store"

let store: Store

describe("App render tests", () => {
  beforeEach(() => {
    store = createStore(GameStateReducer)
  })
  it("render APP test", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    const button = screen.getByRole("button")
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(screen.getByTestId("run")).toBeInTheDocument()
  })
})
