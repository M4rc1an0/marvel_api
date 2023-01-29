import { fireEvent, render, screen } from '@testing-library/react'

import Info from '.'

jest.mock('next/router', () => require('next-router-mock'));

describe('<Info />', () => {

    it('should render Info', () => {
        render(<Info />)

        const buttonReturn = screen.getByText(/Return/i)

        fireEvent.click(buttonReturn)

        expect(buttonReturn).toBeInTheDocument()
    })
})