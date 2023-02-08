import { SettingsPanel } from "./Group"

export default {
  title: "Group",
  component: SettingsPanel,
}

export const Empty = () => (
  <SettingsPanel title="test"/>
)

export const WithClid = () => (
  <SettingsPanel title="test">
    <div>Inner Div</div>
  </SettingsPanel>
)
