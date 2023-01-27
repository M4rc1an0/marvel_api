import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { publicKey, privateKey } from "@/utils/keys";
import FooterDeveloper from '@/components/organisms/FooterDeveloper'
import HeaderWithHome from '@/components/organisms/HeaderWithHome'
import * as S from './styles'
import md5 from "md5";

const Person = () => {
  const [searchPerson, setSearchPerson] = useState();
  const router = useRouter();
  const { character } = router.query;
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  console.log(character, "CARA");

  const baseURL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${character}&ts=${time}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    axios.get(baseURL).then((data) => {
      setSearchPerson(data?.data?.data?.results);
    });
  }, []);

  console.log(searchPerson, "searchPerson");

  return (
    <S.Container>
      <S.ContentHome>
        <HeaderWithHome />
        <S.ContentCards>
          {searchPerson?.map((person: any, index: string) => {
            return person.name
          })}
        </S.ContentCards>
        <FooterDeveloper />
      </S.ContentHome>
    </S.Container>
  );
};

export default Person;
