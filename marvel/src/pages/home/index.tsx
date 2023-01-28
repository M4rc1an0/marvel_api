import * as S from "./styles";
import CardContent from "@/components/molecules/CardContent";
import TextParagraph from "@/components/atoms/TextParagraph";
import ButtonAction from "@/components/molecules/ButtonAction";
import Router from "next/router";
import LayoutBase from "@/components/templates/LayoutBase";

export const Introduction = () => {
  return (
    <LayoutBase>
      <S.ContentIntroduction>
        <CardContent>
          <S.ContentCard>
            <S.ImgBackground width={300} src="escudo.png" />
            <TextParagraph type="h1" text="MARVEL API" />
            <TextParagraph
              type="h4"
              text="The Marvel Comics API allows developers 
              everywhere to access information about Marvel's 
              vast library of comics—from what's coming up, to 
              70 years ago."
            />
          </S.ContentCard>
          <S.ContentButtons>
            <ButtonAction label="Characters" action={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.preventDefault()
              Router.push('characters')
            }} />
          </S.ContentButtons>
        </CardContent>
        <S.ContentImg>
          <S.ImgBackground src="iron-man.png" alt="iron-man" />
        </S.ContentImg>
      </S.ContentIntroduction>
    </LayoutBase>
  );
};
