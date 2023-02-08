import { Store } from "@reduxjs/toolkit"
import React from "react"
import { Provider } from "react-redux"
import { ActionType } from "../Store/store"
type ProviderWrapperProps = {
  children: React.ReactNode
  store: Store<boolean[] | undefined, ActionType>
}
export const ProviderWrapper: React.FC<ProviderWrapperProps> = ({
  children,
  store,
}) => <Provider store={store}>{children}</Provider>
