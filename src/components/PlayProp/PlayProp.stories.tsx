import { PlayProp } from "./PlayProp"
export default {
  title: "PlayProp",
  component: PlayProp,
}

export const PlayPropDefault = () => (
  <PlayProp
    onRestart={() => {}}
    onPlayChange={() => {}}
    onSpeedChange={() => {}}
  />
)
