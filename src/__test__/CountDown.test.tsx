import { render, screen } from '@testing-library/react'
import CountDown from '.'

describe("Render the seconds to display in game", () => {

    test("Check if the time is showing", () => {
        render(<CountDown secondToDisplay={10} />)

        const element= screen.getByTestId(/countSeconds/i)

        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent("10")
    })
})