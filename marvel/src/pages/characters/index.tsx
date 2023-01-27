import FooterDeveloper from '@/components/organisms/FooterDeveloper'
import HeaderWithHome from '@/components/organisms/HeaderWithHome'
import * as S from './styles'

const Characters = () => {
    return (
        <S.Container>
            <S.ContentHome>
                <HeaderWithHome />
                <FooterDeveloper />
            </S.ContentHome>
        </S.Container>
    )
}

export default Characters