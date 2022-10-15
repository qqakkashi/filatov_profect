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
import solve_image from "../../images/solve-problem.png";
import Link from "next/link";

const Solve = () => {
  return (
    <Container image={bg.src}>
      <PageContainer>
        <MainText>Решить проблему</MainText>
        <MainImage src={solve_image.src}></MainImage>
        <MainArticle marginTop={315}>
          У вас появилась проблема, которую не знаете как решить? На самом деле
          проблема это нечто глобальное, что не имеет решения. Чтобы найти
          выход, сначала надо превратить её в задачу, а затем уже найти решение.
        </MainArticle>
        <Link href="solve/video" as="solve/video/21/">
          <StartButton>Начать</StartButton>
        </Link>
      </PageContainer>
    </Container>
  );
};

export default Solve;
