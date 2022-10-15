import React from "react";
import { Container } from "../main/main.styled";
import bg from "../../images/bg.png";
import {
  StartButton,
  PageContainer,
  MainArticle,
  MainImage,
  MainText,
} from "../main/main.styled";
import exit_image from "../../images/exit-image.png";
import Link from "next/link";

const Exit = () => {
  return (
    <Container image={bg.src}>
      <PageContainer>
        <MainText>Выйти из кризисной ситуации</MainText>
        <MainImage src={exit_image.src}></MainImage>
        <MainArticle marginTop={215}>
          Если вы оказались в ситуации когда вам кажется, что все безнадежно,
          хочется расплакаться и думать только о худшем. Если вы ощущаете шок,
          тревогу и страх. Если появилось мышечное напряжение, бессонница и
          ночные кошмары. Воспользуйтесь простыми и быстрыми техниками для
          приведения себя в норму.
        </MainArticle>
        <Link href="/exit/video" as="exit/video/10/">
          <StartButton>Начать</StartButton>
        </Link>
      </PageContainer>
    </Container>
  );
};

export default Exit;
