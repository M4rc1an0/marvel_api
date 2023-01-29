import { render, screen } from '@testing-library/react'

import HeaderWithHome from '.'

describe('<HeaderWithHome />', () => {

    it('should render the FooterDeveloper', () => {
        render(<HeaderWithHome />)

        expect(screen.getByText(/Character/i)).toBeInTheDocument()
    })
})