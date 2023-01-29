import { fireEvent, render, screen } from '@testing-library/react'

import Introduction from '.'

jest.mock('next/router', () => require('next-router-mock'));

describe('<Introduction />', () => {

    it('should render Introduction', () => {
        render(<Introduction />)

        const buttonPerson = screen.getByText(/Characters/i)

        fireEvent.click(buttonPerson)

        expect(screen.getAllByText(/Characters/i)[0]).toBeInTheDocument()
    })
})