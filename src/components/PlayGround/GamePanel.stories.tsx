import { GamePanel } from "./GamePanel"
import { createStore } from "redux"
import { GameStateReducer } from "../Store/store"
import { ProviderWrapper } from "../ProviderWrapper/ProviderWrapper"
export default {
  title: "GamePanel",
  component: GamePanel,
}
const store = createStore(GameStateReducer)

export const Basic = () => (
  <ProviderWrapper store={store}>
    <GamePanel />
  </ProviderWrapper>
)

