import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 380px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  margin: 50px auto 0px auto;
  @media screen and (max-width: 425px) {
    width: 100vw;
    // width: 350px;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  left: 0;
  right: 0;
  justify-content: ${({ arrow }) => (arrow ? `flex-end` : `space-between`)};
  align-items: center;
  position: absolute;
  display: flex;
  @media screen and (max-width: 425px) {
    width: 350px;
  }
`;

export const MenuButton = styled.img`
  position: relative;
`;

export const Arrow = styled.img`
  position: relative;
  display: ${({ arrow }) => (arrow ? `flex` : `none`)};
`;
