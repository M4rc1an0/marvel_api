import { fireEvent, render, screen } from '@testing-library/react'
import Router from 'next/router';
import HeaderWithHome from '.'

jest.mock('next/router', () => require('next-router-mock'));

describe('<HeaderWithHome />', () => {

    it('should render the HeaderWithHome', () => {
        render(<HeaderWithHome />)

        const buttonSearch = screen.getByText('Search')
        fireEvent.click(buttonSearch)

        expect(screen.getAllByText(/Character/i)[0]).toBeInTheDocument()
    })
})