import Button from "@/components/molecules/Button";
import InputText from "@/components/molecules/InputText";
import Header from "@/components/molecules/Header";
import * as S from "./styles";

const HeaderWithHome = () => {
  return (
    <Header>
      <S.ContentHeader>
        <S.ImgLogo src="./marvel-logo.png" alt="marvel" />
        <S.SearchHero>
          <InputText labelText="Personagem" />
          <Button label="Pesquisar" action={() => alert("Testando Botão")} />
        </S.SearchHero>
      </S.ContentHeader>
    </Header>
  );
};

export default HeaderWithHome;
