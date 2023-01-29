import { render, screen } from '@testing-library/react'

import TextParagraph from '.'

describe('<TextParagraph />', () => {
    it('should render the TextParagraph', () => {
        render(<TextParagraph text='texto' type='p' />)

        screen.debug(undefined, 100000)

        expect(screen.getByText('texto')).toBeInTheDocument()
    })
})