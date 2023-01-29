import { fireEvent, render, screen } from '@testing-library/react'

import Person from '.'

jest.mock('next/router', () => require('next-router-mock'));

describe('<Person />', () => {
    it('should render Person', () => {
        render(<Person />)

        expect(screen.getByText(/No characters found/i)).toBeInTheDocument()
    })
})