import { configureStore } from "@reduxjs/toolkit"
import { Reducer } from "redux"
import { initialize, mutateCell, nextStep } from "../Game/Game"

export type ActionType = {
  type: "INIT" | "MUTATE" | "NEXT_STEP"
  payload: {
    cellCount?: number
    percentage?: number
    cellIndex?: number
    cellInRow?: number
  }
}

export const GameStateReducer: Reducer<boolean[] | undefined, ActionType> = (
  state: boolean[] | undefined,
  action: ActionType
) => {
  if (!state || state === undefined) {
    return []
  }
  switch (action.type) {
    case "INIT":
      return action.payload.cellCount &&
        (action.payload.percentage || action.payload.percentage === 0)
        ? initialize(action.payload.cellCount, action.payload.percentage)
        : state
    case "MUTATE":
      return action.payload.cellIndex || action.payload.cellIndex === 0
        ? mutateCell(action.payload.cellIndex, state)
        : state
    case "NEXT_STEP":
      return action.payload.cellInRow
        ? nextStep(state, action.payload.cellInRow)
        : state
    default:
      return state
  }
}
export default configureStore({
  reducer: GameStateReducer,
})
