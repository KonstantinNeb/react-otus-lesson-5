import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { SettingsPanel } from "./Group"

describe("render tests", () => {
  it("render title", () => {
    render(<SettingsPanel title="Test" />)
    expect(screen.getByText("Test")).toBeInTheDocument()
  })
  it("render title", () => {
    render(
      <SettingsPanel title="Test">
        <button></button>
      </SettingsPanel>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
  })
})
