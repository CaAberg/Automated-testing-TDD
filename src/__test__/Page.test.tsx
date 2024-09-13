import {render, screen, fireEvent, act, createEvent} from '@testing-library/react'
import Home from './page'

beforeEach(() => {
    jest.useFakeTimers();
});
 
afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

describe("Test all functionality works", () => {
    beforeEach(() => {
        render(<Home />);
      });
    
    test("Test if initial second is showing, test user press startButton-hide, CountUp button is rendered", () => {   //test startTimer function, test if initial seconds is showing, test when user press button, start timer?
        let startButton = screen.getByTestId("startUp")
        let startTime = screen.getByTestId("countdown")
        
        expect(startButton).toBeInTheDocument();
        expect(startTime).toHaveTextContent("00:10")
        
        fireEvent.click(startButton);

        let goButton = screen.getByTestId("CountButton")
        expect(goButton).toBeInTheDocument();
    })
    
    test("GO button to be in the document, Countdown to have 10 seconds, GO button to rendered click events", () => {
        
        let startButton = screen.getByTestId("startUp")
        fireEvent.click(startButton);
        let goButton = screen.getByTestId("CountButton")
        expect(goButton).toBeInTheDocument();
        expect(startButton).not.toBeInTheDocument();
    
        let startTime = screen.getByTestId("countdown") 
        for(let i = 0; i < 15; i++) {
            fireEvent.click(goButton)
        }

        act(() => {
            jest.advanceTimersByTime(10000); // för tiden
        });
        
        startTime = screen.getByTestId("countdown")
        
        expect(startTime).toHaveTextContent("00:00");

        const userScore = screen.getByTestId("userCount")

        expect(userScore).toHaveTextContent("15")
    })

    test("Test that GO button is hidden at 00:00 and save/Play Again button is rendered", () => {
        const startButton = screen.getByTestId("startUp")
        fireEvent.click(startButton)

        const goButton = screen.getByTestId("CountButton")
        expect(goButton).toBeInTheDocument()
        
        act(() => {
            jest.advanceTimersByTime(10000);
        })
        expect(goButton).not.toBeInTheDocument()

        const saveScoreButton = screen.getByTestId('saveScoreButton');

        expect(saveScoreButton).toBeInTheDocument();

        const playAgain = screen.getByTestId("playAgainBtn")
        expect(playAgain).toBeInTheDocument();
        
    })

    test("Test if saved score is saved", () => {
        let startButton = screen.getByTestId("startUp")
        fireEvent.click(startButton);
        expect(startButton).not.toBeInTheDocument();

        let goButton = screen.getByTestId("CountButton")
        expect(goButton).toBeInTheDocument();

        for(let i = 0; i < 15; i++) {
            fireEvent.click(goButton)
        }

        act(() => {
            jest.advanceTimersByTime(10000);
        })
        
        expect(goButton).not.toBeInTheDocument();

        let saveScoreButton = screen.getByTestId('saveScoreButton'); //Test one for first saved score!

        expect(saveScoreButton).toBeInTheDocument();
        fireEvent.click(saveScoreButton)

        let saveItem = screen.queryAllByTestId("save-item")
        
        expect(saveItem.length).toBe(1)             
        expect(saveItem[0]).toHaveTextContent("15")
        
        const playAgain = screen.getByTestId("playAgainBtn")
        expect(playAgain).toBeInTheDocument();
        fireEvent.click(playAgain)

        startButton = screen.getByTestId("startUp")
        fireEvent.click(startButton);
        expect(startButton).not.toBeInTheDocument();

        goButton = screen.getByTestId("CountButton")
        expect(goButton).toBeInTheDocument();

        for(let i = 0; i < 66; i++) {
            fireEvent.click(goButton)
        }

        act(() => {
            jest.advanceTimersByTime(10000);
        })
        
        saveScoreButton = screen.getByTestId('saveScoreButton'); //Test two to test for a second save!

        expect(saveScoreButton).toBeInTheDocument();
        fireEvent.click(saveScoreButton)

        saveItem = screen.queryAllByTestId("save-item")
        
        expect(saveItem.length).toBe(2)                 
        expect(saveItem[0]).toHaveTextContent("15")
        expect(saveItem[1]).toHaveTextContent("66")
    })

    test("Test if play again button is rendered and function", () => {
        let startButton = screen.getByTestId("startUp")
        fireEvent.click(startButton);
        expect(startButton).not.toBeInTheDocument();

        let goButton = screen.getByTestId("CountButton")
        expect(goButton).toBeInTheDocument();
        act(() => {
            jest.advanceTimersByTime(10000);
        })
        
        fireEvent.click(goButton);
        expect(goButton).not.toBeInTheDocument();

        const playAgain = screen.getByTestId("playAgainBtn")
        expect(playAgain).toBeInTheDocument();

        fireEvent.click(playAgain);
        expect(playAgain).not.toBeInTheDocument();

        startButton = screen.getByTestId("startUp")
        expect(startButton).toBeInTheDocument();
    })
 })