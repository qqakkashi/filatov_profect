import React from "react";
import bg from "../../images/bg.png";
import {
  StartButton,
  PageContainer,
  MainArticle,
  MainImage,
  MainText,
} from "../main/main.styled";
import { Container } from "../main/main.styled";
import reach_point from "../../images/reach-point.png";
import Link from "next/link";

const Point = () => {
  return (
    <Container image={bg.src}>
      <PageContainer>
        <MainText>Достичь цель</MainText>
        <MainImage src={reach_point.src}></MainImage>
        <MainArticle marginTop={315}>
          Если ты не знаешь куда хочешь попасть, то ты в итоге там и окажешься..
          Большинство людей идут к чужим целям, которые им кто-то навязал. Найди
          свою цель и иди к ней.
        </MainArticle>
        <Link href="/point/video" as="point/video/43/">
          <StartButton>Начать</StartButton>
        </Link>
      </PageContainer>
    </Container>
  );
};

export default Point;
