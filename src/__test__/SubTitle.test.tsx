import {render, screen} from '@testing-library/react'
import SubTitle from '@/app/components/SubTitle/subtitle'

test("That the subtitle is rendered correctly", () => {
    const mockDataText = "Mock subtitle"
    render(<SubTitle text={mockDataText}/>)

    const subtitleText = screen.getByRole("heading", {level:3, name:mockDataText})
    expect(subtitleText).toBeInTheDocument();
})