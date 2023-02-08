import { createStore } from "@reduxjs/toolkit"
import { ProviderWrapper } from "../ProviderWrapper/ProviderWrapper"
import { GameStateReducer } from "../Store/store"
import { App } from "./App"

export default {
  title: "App",
  component: App,
}
const store = createStore(GameStateReducer)

export const Basic = () => (
  <ProviderWrapper store={store}>
    <App />
  </ProviderWrapper>
)
