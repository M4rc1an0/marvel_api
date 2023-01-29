import api from "../../services/api";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import * as S from './styles'
import CardImage from "../../components/atoms/CardImage";
import TextParagraph from "../../components/atoms/TextParagraph";
import LayoutBase from "../../components/templates/LayoutBase";
import ButtonAction from "../../components/molecules/ButtonAction";
import Card from "../../components/molecules/Card";
import personApi from "@/storeConfig/apiSlice";

const Person = () => {
  const [searchPerson, setSearchPerson] = useState<any>();
  const [personLength, setPersonLength] = useState<any>()
  const router = useRouter();
  const { character }: any = router.query;

  useEffect(() => {
    document.title = 'Marvel API';
  }), [];

  const baseURL = character ? `/characters?nameStartsWith=${character}` : '/characters';

  useEffect(() => {
    localStorage.setItem('person', character);
  }, [])

  useEffect(() => {
    api.get(baseURL)
      .then((response) => {
        setSearchPerson(response?.data?.data?.results);
        setPersonLength(response?.data?.data.total)
      }).catch(() => alert('No character with that name found !!'));
  }, [character]);

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
                <S.CardClick onClick={() => {
                  router.push(`info?id=${person.id}`)
                  localStorage.setItem('id', person.id);
                }} key={index}>
                  <Card noBorder>
                    <S.DetailsPerson>
                      <CardImage width={200} height={200} url={`${person.thumbnail.path}.${person.thumbnail.extension}`} />
                      <TextParagraph text={person.name} type="h5" />
                    </S.DetailsPerson>
                  </Card>
                </S.CardClick>
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
