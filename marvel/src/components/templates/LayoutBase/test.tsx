import { render, screen } from '@testing-library/react'

import LayoutBase from '.'

jest.mock('next/router', () => require('next-router-mock'));

describe('<LayoutBase />', () => {

    it('should render the LayoutBase', () => {
        render(<LayoutBase>value</LayoutBase>)

        expect(screen.getByText('value')).toBeInTheDocument()
    })
})