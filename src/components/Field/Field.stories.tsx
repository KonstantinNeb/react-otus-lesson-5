import { createStore } from "redux"
import { GameStateReducer } from "../Store/store"
import { ProviderWrapper } from "../ProviderWrapper/ProviderWrapper"
import { Field } from "./Field"

export default {
  title: "Field",
  component: Field,
}
const store = createStore(GameStateReducer)
export const Basic = () => {
  store.dispatch({ type: "INIT", payload: { cellCount: 100, percentage: 50 } })
  return (
    <ProviderWrapper store={store}>
      <Field />
    </ProviderWrapper>
  )
}
export const Second = () => {
  store.dispatch({
    type: "INIT",
    payload: { cellCount: 12, percentage: 50 },
  })

  return (
    <ProviderWrapper store={store}>
      <Field title="My second tag" cellCount={12} />
    </ProviderWrapper>
  )
}

export const WithTwoChild = () => {
  store.dispatch({
    type: "INIT",
    payload: { cellCount: 2, percentage: 50 },
  })

  return (
    <ProviderWrapper store={store}>
      {" "}
      <Field cellCount={2} />{" "}
    </ProviderWrapper>
  )
}

export const WithCustomSize = () => {
  store.dispatch({ type: "INIT", payload: { cellCount: 100, percentage: 50 } })
  return (
    <ProviderWrapper store={store}>
      <Field cellCount={100} height={300} />
    </ProviderWrapper>
  )
}

export const With7Child = () => {
  store.dispatch({ type: "INIT", payload: { cellCount: 7, percentage: 50 } })
  return (
    <ProviderWrapper store={store}>
      {" "}
      <Field cellCount={7} />
    </ProviderWrapper>
  )
}

export const With30Percentage = () => {
  store.dispatch({ type: "INIT", payload: { cellCount: 100, percentage: 30 } })
  return (
    <ProviderWrapper store={store}>
      <Field />
    </ProviderWrapper>
  )
}
export const With0Percentage = () => {
  store.dispatch({ type: "INIT", payload: { cellCount: 100, percentage: 0 } })
  return (
    <ProviderWrapper store={store}>
      <Field />
    </ProviderWrapper>
  )
}
export const With100Percentage = () => {
  store.dispatch({ type: "INIT", payload: { cellCount: 100, percentage: 100 } })
  return (
    <ProviderWrapper store={store}>
      <Field />
    </ProviderWrapper>
  )
}
