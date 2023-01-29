import { render, screen } from '@testing-library/react'

import Home from '.'

jest.mock('next/router', () => require('next-router-mock'));

describe('<App />', () => {

    it('should render App', () => {
        render(<Home />)

        expect(screen.getAllByText(/Characters/i)[0]).toBeInTheDocument()
    })
})