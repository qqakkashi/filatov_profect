import styled from "styled-components";

export const Label = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;

  color: #ffffff;
`;

export const InputBox = styled.div`
  width: 370px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 5px auto 30px auto;
  background: #ffffff;
  border-radius: 8px;
  width: 368px;
  height: 50px;
  border: 0;
`;

export const InputButton = styled.div`
  z-index: 1;
  width: 360px;
  height: 60px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  color: ${({ filled }) => (filled ? `#000000` : `#FFD600`)};
  border: ${({ filled }) => (filled ? `0` : `2px solid #FFD600`)};
  background: ${({ filled }) => (filled ? `#FFD600` : `none`)};
`;
