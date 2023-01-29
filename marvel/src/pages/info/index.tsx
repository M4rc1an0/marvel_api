import Icon from "../../components/molecules/Icon";
import LayoutBase from "../../components/templates/LayoutBase";
import List from "../../components/organisms/List";

import * as S from './styles'

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import characterApi from "../../storeConfig/apiSlice";
import CharacterCard from "../../components/organisms/CharacterCard";

const Info = () => {
    const [infoPerson, setInfoPerson] = useState([])
    const [filterSearch, setFilterSearch] = useState<any>('')
    const [idPerson, setIdPerson] = useState<any>()
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setFilterSearch(localStorage?.getItem('person'))
            setIdPerson(localStorage.getItem('id'));
        }
    }, [])
    
    const { data } = characterApi.useGetCharacterSingleQuery(idPerson)

    const searchInfo = useCallback(() => {
        if (data) {
            setInfoPerson(data?.data?.results)
        }
    }, [data])

    useEffect(() => {
        if (data !== undefined) {
            searchInfo()
        }
    }, [data])
    

    const redirectSearch = () => {
        if (filterSearch === undefined || filterSearch === 'undefined') {
            router.push('/person')
        } else {
            router.push(`/person?character=${filterSearch}`)
        }
    }

    return (
        <LayoutBase>
            <S.ContentInfo>
                <S.ComeBack onClick={() => redirectSearch()}>
                    <Icon type="back" text="Return" typeParagraph="h4" />
                </S.ComeBack>
                {infoPerson &&
                    infoPerson.map((character: any, index: any) => {
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