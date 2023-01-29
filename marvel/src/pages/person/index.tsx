import TextParagraph from "../../components/atoms/TextParagraph";
import LayoutBase from "../../components/templates/LayoutBase";
import ButtonAction from "../../components/molecules/ButtonAction";
import CharacterOption from "../../components/organisms/CharacterOption";

import * as S from './styles'

import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import api from "../../services/api";
import characterApi from "../../storeConfig/apiSlice";
 
const Person = () => {
  const [searchPerson, setSearchPerson] = useState<any>();
  const [personLength, setPersonLength] = useState<any>()
  const router = useRouter();
  const { character }: any = router.query;

  useEffect(() => {
    document.title = 'Marvel API';
  }), [];

  const baseURL = character ? `/characters?nameStartsWith=${character}` : '/characters';

  const { data: allCharacters } = characterApi.useGetCharactersQuery()
  const { data: searchCharacters } = characterApi.useGetCharacterIdQuery(character)

  useEffect(() => {
    localStorage.setItem('person', character);
  }, [])

  useEffect(() => {
    if (character) {
      setSearchPerson(searchCharacters?.data?.results)
      setPersonLength(searchCharacters?.data?.total)
    } else {
      setSearchPerson(allCharacters?.data?.results)
      setPersonLength(allCharacters?.data?.total)
    }
  },[character, searchCharacters, allCharacters])

  const handleMore = useCallback(async () => {
    try {
      const offset = searchPerson.length;
      const response = await api.get(baseURL, {
        params: {
          offset,
        }
      })

      setSearchPerson([...searchPerson, ...response.data.data.results])
    } catch (err) {
      alert(err)
    }
  }, [searchPerson])

  return (
    <LayoutBase>
      {searchPerson?.length > 0 ?
        <>
          <S.ContentTitle>
            <TextParagraph text='choose a character' type="h1" />
          </S.ContentTitle>
          <S.ContentCards>
            {searchPerson?.map((person: any, index: string) => {
              return (
                <CharacterOption option={person} index={index} key={index}/>
              )
            })}
          </S.ContentCards>
          {searchPerson.length !== personLength &&
            <S.ContainerButton>
              <ButtonAction label='More' action={() => handleMore()} />
            </S.ContainerButton>
          }
        </>
        :
        <TextParagraph text='No characters found' type="h1" />
      }
    </LayoutBase>
  );
};

export default Person;
