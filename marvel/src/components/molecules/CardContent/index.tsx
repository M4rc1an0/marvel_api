import * as S from "./styles";

type CardProps = {
  children?: React.ReactNode;
};

const CardContent = ({ children }: CardProps) => {
  return (
    <S.Container>
      <S.ContentCard>{children}</S.ContentCard>
    </S.Container>
  );
};

export default CardContent;
