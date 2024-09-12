import { render, screen, fireEvent } from '@testing-library/react'
import StartButton from '.'

describe("Check if there is a button", () => {
    
    test("Check if button rendered", () => {
        render(<StartButton startFunction={() => {

        const startButton = screen.getByTestId(/startUp/i)

        expect(startButton).toBeInTheDocument()
        expect(startButton).toHaveTextContent("Start")
        }} />)
    })
})