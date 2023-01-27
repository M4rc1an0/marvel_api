import * as S from "./styles";
import CardContent from "@/components/molecules/CardContent";
import TextParagraph from "@/components/atoms/TextParagraph";
import HeaderWithHome from "@/components/organisms/HeaderWithHome";
import FooterDeveloper from "@/components/organisms/FooterDeveloper";
import Button from "@/components/molecules/Button";
import Router from "next/router";

export const Introduction = () => {
  return (
    <S.Container>
      <S.ContentHome>
        <HeaderWithHome />

        <S.ContentIntroduction>
          <CardContent>
            <S.ContentCard>
              <S.ImgBackground width={300} src="escudo.png" />
              <TextParagraph type="h1" text="MARVEL API" />
              <TextParagraph
                type="h4"
                text="A API da Marvel Comics permite que desenvolvedores 
              em qualquer lugar acessem informações sobre a vasta biblioteca 
              de quadrinhos da Marvel - desde o que está por vir até 70 anos 
              atrás."

              />
            </S.ContentCard>
            <S.ContentButtons>
            <Button label="Personagens" action={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault()
            Router.push('characters')}} />
            </S.ContentButtons>
          </CardContent>
          <S.ContentImg>
            <S.ImgBackground src="iron-man.png" alt="iron-man" />
          </S.ContentImg>
        </S.ContentIntroduction>

        <FooterDeveloper />
      </S.ContentHome>
    </S.Container>
  );
};
