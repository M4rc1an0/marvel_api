import Footer from "@/components/molecules/Footer"
import TextParagraph from "@/components/atoms/TextParagraph"
import * as S from './styles'

const FooterDeveloper = () => {
    return (
        <Footer>
            <S.ContentFooter>
                <S.AuthorDeveloper>
                    <TextParagraph type="h6" color='#fff' text='© 2023 -'/>
                    <TextParagraph type="h6" color='#fff' text='Desenvolvido por Rogério Marciano'/>
                </S.AuthorDeveloper>
                <S.NetworkSocial>
                </S.NetworkSocial>
            </S.ContentFooter>
        </Footer>
    )
}

export default FooterDeveloper