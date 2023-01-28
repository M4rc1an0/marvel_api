import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { publicKey, time, hash } from "@/utils/keys";
import * as S from './styles'
import CardImage from "@/components/atoms/CardImage";
import CardContent from "@/components/molecules/CardContent";
import TextParagraph from "@/components/atoms/TextParagraph";
import LayoutBase from "@/components/templates/LayoutBase";
import Link from "next/link";

const Person = () => {
  const [searchPerson, setSearchPerson] = useState<any>();
  const router = useRouter();
  const { character } = router.query;
  const baseURL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${character}&ts=${time}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setSearchPerson(response?.data?.data?.results);
      }).catch(() => alert('No character with that name found !!'));
  }, [character]);

  return (
    <LayoutBase>
      <S.ContentTitle>
        <TextParagraph text='choose a character' type="h1" />
      </S.ContentTitle>
      <S.ContentCards>
        {searchPerson?.map((person: any, index: string) => {
          return (
            <Link href={`info?id=${person.id}`} key={index}>
              <CardContent >
                <S.DetailsPerson>
                  <CardImage width={200} height={200} url={`${person.thumbnail.path}.${person.thumbnail.extension}`} />
                  <TextParagraph text={person.name} type="h5" />
                </S.DetailsPerson>
              </CardContent>
            </Link>
          )
        })}
      </S.ContentCards>
    </LayoutBase>
  );
};

export default Person;
