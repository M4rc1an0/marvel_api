import { useState } from "react";
import { useRouter } from "next/router";

import Button from "@/components/molecules/Button";
import InputText from "@/components/molecules/InputText";
import Header from "@/components/molecules/Header";
import * as S from "./styles";

const HeaderWithHome = () => {
  const [search, setSearch] = useState('')
  const router = useRouter();

  const submitSearch = (event: SubmitEvent) => {
    event.preventDefault()

    router.push(`/heroes?name=${search}`)
  }

  return (
    <Header>
      <S.ContentHeader>
        <S.ImgLogo src="./marvel-logo.png" alt="marvel" />
        <S.SearchHero>
          <InputText labelText="Personagem" change={(e: any) => setSearch(e.target.value)} />
          <Button label="Pesquisar" action={() => submitSearch()} />
        </S.SearchHero>
      </S.ContentHeader>
    </Header>
  );
};

export default HeaderWithHome;
