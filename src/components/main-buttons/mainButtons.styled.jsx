import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 8px 0px 8px 0px;
  box-shadow: 0px 9px 17px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;

export const Image = styled.div`
  width: 120px;
  height: 75px;
  z-index: 1;
  background-image: ${({ image }) => `url("${image}")`};
  object-fit: fill;
`;

export const Triangle = styled.div`
  position: absolute;
  left: 75px;
  width: 45px;
  height: 0;
  border-bottom: 75px solid #ffffff;
  border-left: 35px solid transparent;
  z-index: 2;
`;

export const TextContainer = styled.div`
  width: 240px;
  display: flex;
  height: 75px;

  align-items: center;
  border-radius: 0px 40px 40px 0px;
  background-color: #ffffff;
`;

export const Text = styled.p`
  margin-rigth: 25px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
`;
