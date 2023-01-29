import * as S from './styles'
import { useRouter } from "next/router";
import Card from '../../../components/molecules/Card';
import CardImage from '../../../components/atoms/CardImage';
import TextParagraph from '../../../components/atoms/TextParagraph';

type CharacterOptionProps = {
    option: {
        id: string
        thumbnail: {
            path: string
            extension: string
        }
        name: string
    }
    index: string
}


const CharacterOption = ({ option, index }: CharacterOptionProps) => {
    const router = useRouter();

    return (
        <S.CardClick onClick={() => {
            router.push(`info?id=${option.id}`)
            localStorage.setItem('id', option.id);
        }}
            key={index}
            data-testid='button-card'>
            <Card noBorder>
                <S.DetailsPerson>
                    <CardImage width={200} height={200} url={`${option.thumbnail.path}.${option.thumbnail.extension}`} />
                    <TextParagraph text={option.name} type="h5" />
                </S.DetailsPerson>
            </Card>
        </S.CardClick>
    )
}

export default CharacterOption