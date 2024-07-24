import { getByTitle, render, screen } from '@testing-library/react';
import Example from '../Example';


describe("Example", () => {
    //This for the listItems
    test('renders 3 list items', () => {
        render(<Example />)
        const listitem = screen.getAllByRole("listitem")
        expect(listitem).toHaveLength(3)
    })

    //This h1 tag
    test("renders title", () => {
        render(<Example />)
        const title = screen.getByTestId("mytestid")
        expect(title).toBeInTheDocument
    })

    //This sum and in the span tag
    test("sum should be 6", () => {
        render(<Example />)
        const sum = screen.getByTitle("sum")
        expect(sum.textContent).toBe("6")
    })
})
