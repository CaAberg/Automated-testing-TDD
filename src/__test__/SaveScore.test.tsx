import {render, screen, fireEvent} from '@testing-library/react'

import SaveScore from '.'

describe("Save new score function works as expected", () => {
    test("Check if number is passed in", () => {
        render(<SaveScore count={16} scores={[]} addScore={() => {}} />)

        const userScore = screen.getByTestId("userCount")
        expect(userScore).toHaveTextContent("16")
    })

    test("Check if button are rendered with correct test", () => {
        render(<SaveScore count={0} scores={[]} addScore={() => {}} />)
        
        const saveScoreButton = screen.getByTestId('saveScoreButton');

        expect(saveScoreButton).toBeInTheDocument();
        expect(saveScoreButton).toHaveTextContent("Save score!"); 
    });
    
    test("test if score array is empty, nothing is showed", () => {
        render(<SaveScore count={0} scores={[]} addScore={() => {}} />)
        const mockArray = null
        let scores = screen.queryAllByTestId("save-item")
        
        expect(scores.length).not.toBe(mockArray);
    })
    
    test("prevues saved score are rendered", () => {
        render(<SaveScore count={0} scores={[15, 20, 8]} addScore={() => {}} />)
        
        let saveItem = screen.queryAllByTestId("save-item")
        
        expect(saveItem.length).toBe(3)
        expect(saveItem[0]).toHaveTextContent("15")
        expect(saveItem[1]).toHaveTextContent("20")
    })
})