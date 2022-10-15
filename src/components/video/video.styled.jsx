import styled from "styled-components";

export const VideoContainer = styled.video`
  border-radius: 33px;
  margin-top: 110px;
  width: 390px;
  height: 400px;
  object-fit: cover;
  @media screen and (max-width: 428px) {
    width: 355px;
  }
`;

export const VideoButtons = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
`;

export const VideoButtonsContainer = styled.div`
  margin: 100px auto;
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const VideoButtonMain = styled.div`
  background: #323edd;
  width: 370px;
  height: 70px;
  border-radius: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
