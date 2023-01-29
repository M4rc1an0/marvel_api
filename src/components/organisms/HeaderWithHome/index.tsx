import { useState } from "react";
import { useRouter } from "next/router";

import ButtonAction from "../../molecules/ButtonAction";
import InputText from "../../molecules/InputText";
import Header from "../../molecules/Header";
import Link from "../../atoms/Link";

import * as S from "./styles";

const HeaderWithHome = () => {
  const [search, setSearch] = useState('')
  const router = useRouter();

  const submitSearch = () => {
    router.push(`/person?character=${search}`)
    localStorage.setItem('person', search);
  }

  return (
    <Header>
      <S.ContentHeader>
        <Link href="/">
          <S.ImgLogo src="./marvel-logo.png" alt="marvel" />
        </Link>
        <S.SearchHero>
          <InputText labelText="Character" change={(e: any) => setSearch(e.target.value)} />
          <ButtonAction label="Search" action={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault()
            submitSearch()}} />
        </S.SearchHero>
      </S.ContentHeader>
    </Header>
  );
};

export default HeaderWithHome;
