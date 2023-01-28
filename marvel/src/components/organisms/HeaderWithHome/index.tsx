import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import ButtonAction from "@/components/molecules/ButtonAction";
import InputText from "@/components/molecules/InputText";
import Header from "@/components/molecules/Header";
import * as S from "./styles";
import Link from "@/components/atoms/Link";

const HeaderWithHome = () => {
  const [search, setSearch] = useState('')
  const router = useRouter();

  const submitSearch = () => {
    router.push(`/person?character=${search}`)
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
