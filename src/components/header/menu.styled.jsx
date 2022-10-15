import styled, { keyframes, css } from "styled-components";

const show = keyframes` {
    from {transform: translateX(-100%);}
    to {transform: translateX(0);}
  }`;
const hide = keyframes` {
    from {transform: translateX(0);}
    to {transform: translateX(-100%);}
  }`;

export const Menu = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  position: absolute;
  width: 415px;
  height: 926px;
  display: flex;
  top: -50px;
  left: -35px;
  z-index: 4;
  background: #ffffff;
  // transform: translateX(-100%);
  // animation-delay: 2s;
  @media screen and (max-width: 427px) {
    width: 100vw;
    left: 0px;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  height: 926px;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 425px) {
    width: 100vw;
  }
`;

export const Image = styled.img`
  margin: 140px auto 0px auto;
  width: 110px;
  height: 110px;
`;

export const MenuText = styled.h1`
  margin: 60px auto 40px auto;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  justify-content: center;
  display: flex;
`;
export const TabText = styled.h1`
  margin-left: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  justify-content: center;
  display: flex;
`;

export const Line = styled.div`
  border: 1px solid rgba(229, 229, 229, 0.34);
`;

export const MenuButtonClose = styled.img`
  position: absolute;

  width: 25px;
  display: flex;
  flex-direction: flex-end;
  height: 25px;
  // top: 0px;
  left: 350px;
  @media screen and (max-width: 425px) {
    left: 320px;
  }
`;

export const MenuTab = styled.div`
  width: 300px;
  padding: 30px 0px 30px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TabIcon = styled.img`
  width: 25px;
  height: 20px;
  margin-left: 50px;
`;
