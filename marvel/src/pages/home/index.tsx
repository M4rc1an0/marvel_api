import * as S from "./styles";
import CardContent from "@/components/molecules/CardContent";
import TextParagraph from "@/components/atoms/TextParagraph";
import HeaderWithHome from "@/components/organisms/HeaderWithHome";
import FooterDeveloper from "@/components/organisms/FooterDeveloper";

export const Introduction = () => {
  return (
    <S.Container>
      <S.ContentHome>
        <HeaderWithHome />

        <S.ContentIntroduction>
          {/* <S.ImgBackground src="capitain-america.png" /> */}
          <CardContent>
            <TextParagraph type="h1" text="MARVEL API" />
          </CardContent>
          <S.ImgBackground src="iron-man.png" />
        </S.ContentIntroduction>

        <FooterDeveloper />
      </S.ContentHome>
    </S.Container>
  );
};
