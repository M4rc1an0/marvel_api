import CardImage from "../../../components/atoms/CardImage"
import TextParagraph from "../../../components/atoms/TextParagraph"

import * as S from './styles'

type CharacterCardProps = {
    data: {
        thumbnail: {
            path: string
            extension: string
        }
        name: string
        description: string
    }
}


const CharacterCard = ({data}: CharacterCardProps) => {
    return (
        <S.ContentPerson>
            <CardImage url={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
            <S.Description>
                <TextParagraph text={data.name} type="h2" />
                <TextParagraph text={data.description ? data.description : 'There is no description...'} type="h5" />
            </S.Description>
        </S.ContentPerson>
    )
}

export default CharacterCard