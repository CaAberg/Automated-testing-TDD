import { render, screen } from '@testing-library/react'
import CountButton from '.'

describe("Render the seconds to display in game", () => {

    test("Check if the time is showing", () => {
        render(<CountButton countFunction={() => {}}/>)

        const element= screen.getByTestId(/CountButton/i)

        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent("GO!")
    })
})
