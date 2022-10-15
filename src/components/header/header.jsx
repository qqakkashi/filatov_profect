import menu from "../../images/menu.svg";
import arrow from "../../images/arrow.svg";
import xcross from "../../images/x-cross.svg";
import you_can from "../../images/you-can.png";
import human_check from "../../images/human-check.svg";
import like_arm from "../../images/like-arm.svg";
import telegramm from "../../images/telegramm.svg";
import {
  HeaderContainer,
  MenuButton,
  Arrow,
  NavContainer,
} from "./header.styled";
import {
  Menu,
  MenuContainer,
  MenuButtonClose,
  Image,
  MenuText,
  Line,
  MenuTab,
  TabIcon,
  TabText,
} from "./menu.styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);
  const routBack = pathname.slice(0, -17);
  const backClick = () => {
    if (pathname.includes("video")) {
      router.push(routBack);
    } else if (
      pathname == "/exit" ||
      pathname == "/solve" ||
      pathname == "/point"
    ) {
      router.push("/");
    } else {
      router.back();
    }
  };

  const isArrow = pathname == "/" ? true : false;

  return (
    <>
      <HeaderContainer>
        <NavContainer arrow={isArrow}>
          {pathname &&
            (pathname == "/" ? (
              <Arrow
                src={arrow.src}
                onClick={() => backClick()}
                arrow={false}
              />
            ) : (
              <Arrow src={arrow.src} onClick={() => backClick()} arrow={true} />
            ))}

          <MenuButton
            src={menu.src}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          ></MenuButton>
        </NavContainer>
        <Menu isMenuOpen={isMenuOpen}>
          {isMenuOpen ? (
            <MenuContainer>
              <MenuButtonClose
                src={xcross.src}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
              <Image src={you_can.src}></Image>
              <MenuText fontSize={20} lineHeight={24}>
                ✨ Купить PRO сейчас ✨
              </MenuText>
              <Line />
              <MenuTab>
                <TabIcon src={human_check.src} />
                <TabText fontSize={17} lineHeight={21}>
                  Оценить приложение
                </TabText>
              </MenuTab>
              <Line />

              <MenuTab>
                <TabIcon src={like_arm.src} />
                <TabText fontSize={17} lineHeight={21}>
                  Пригласить друга
                </TabText>
              </MenuTab>
              <Line />

              <MenuTab>
                <TabIcon src={telegramm.src} />
                <TabText fontSize={17} lineHeight={21}>
                  Чат разработчика
                </TabText>
              </MenuTab>
            </MenuContainer>
          ) : null}
        </Menu>
      </HeaderContainer>
    </>
  );
};

export default Header;
