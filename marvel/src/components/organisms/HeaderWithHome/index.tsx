import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Button from "@/components/molecules/Button";
import InputText from "@/components/molecules/InputText";
import Header from "@/components/molecules/Header";
import * as S from "./styles";
import { changeTeste } from "@/storeConfig/userSlice";

const HeaderWithHome = () => {
  const [search, setSearch] = useState('')
  // const dispatch = useDispatch()
  const router = useRouter();

  const submitSearch = () => {
    router.push(`/person?character=${search}`)
  }

  return (
    <Header>
      <S.ContentHeader>
        <S.ImgLogo src="./marvel-logo.png" alt="marvel" />
        <S.SearchHero>
          <InputText labelText="Personagem" change={(e: any) => setSearch(e.target.value)} />
          <Button label="Pesquisar" action={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault()
            submitSearch()}} />
        </S.SearchHero>
      </S.ContentHeader>
    </Header>
  );
};

export default HeaderWithHome;
