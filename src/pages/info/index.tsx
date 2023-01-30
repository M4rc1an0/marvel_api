import Icon from "../../components/molecules/Icon";
import CharacterCard from "../../components/organisms/CharacterCard";
import List from "../../components/organisms/List";
import LayoutBase from "../../components/templates/LayoutBase";

import * as S from './styles'

import Router from "next/router";
import { useAppSelector } from "../../storeConfig/hooks/useAppSelector";


import characterApi from "../../storeConfig/apiSlice";

const Info = () => {
    const { idCharacter } = useAppSelector((store) => store.personGet)
    const { data } = characterApi.useGetCharacterSingleQuery(idCharacter)

    return (
        <LayoutBase>
            <S.ContentInfo>
                <S.ComeBack onClick={() => Router.push('/person')}>
                    <Icon type="back" text="Return" typeParagraph="h4" />
                </S.ComeBack>
                {data &&
                    data.data.results.map((character: any, index: any) => {
                        return (
                            <S.Column key={index}>
                                <CharacterCard data={character} />
                                <S.Appearances>
                                    <List title='Comics' data={character.comics} />
                                    <List title='Events' data={character.events} />
                                    <List title='Series' data={character.series} />
                                    <List title='Stories' data={character.stories} />
                                </S.Appearances>
                            </S.Column>
                        )
                    })}
            </S.ContentInfo>
        </LayoutBase>
    );
};

export default Info