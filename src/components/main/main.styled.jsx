import styled from "styled-components";

export const Container = styled.main`
  width: 428px;
  height: 926px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  align-self: center;
  border-radius: 20px;
  @media screen and (max-width: 429px) {
    border-radius: 0px;
  }
  @media screen and (max-width: 425px) {
    width: 100vw;
  }
  background-image: ${({ image }) => `url("${image}")`};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const StartButton = styled.div`
  background: #323edd;
  max-width: 370px;
  height: 70px;
  border-radius: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
  margin: 70px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainArticle = styled.p`
  position: relative;
  margin: ${({ marginTop }) => `${marginTop}px auto 0px auto`};
  max-width: 370px;
  padding: 40px 25px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 146.52%;
  z-index: 3;
  background: #ffffff;
`;

export const MainText = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 128%;
  text-align: center;
  color: #ffffff;
  max-width: 260px;
  margin: 0 auto;
`;

export const MainImage = styled.img`
  position: absolute;
  top: 100px;
  left: 0px;
  z-index: 1;
`;

export const PageContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  position: relative;
`;
