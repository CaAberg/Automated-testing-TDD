import { render, screen } from '@testing-library/react'
import Header from '.'

describe("Header is rendered correctly", () => {

    test("Renders the page title", () => {
        render(<Header />)

        const headerText = screen.getByRole("heading", {level: 1, name: "Try your reaction!"})

        expect(headerText).toBeInTheDocument()
    })

    test("Render the subtitle component", () => {
        render(<Header />)

        const subTitle = screen.getByRole("heading", {level: 3})

        expect(subTitle).toHaveTextContent("How fast can you click in 1 min")
    })
})