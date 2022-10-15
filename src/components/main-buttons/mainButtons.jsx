import { useEffect, useState } from "react";
import {
  ButtonContainer,
  Triangle,
  Image,
  TextContainer,
  Text,
} from "./mainButtons.styled";
import Link from "next/link";

const MainButtons = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props);
  }, [props]);
  return (
    <Link href={`${data?.path}`} passHref>
      <ButtonContainer>
        <Image image={data?.src}></Image>
        <Triangle />
        <TextContainer>
          <Text>{data?.text}</Text>
        </TextContainer>
      </ButtonContainer>
    </Link>
  );
};

export default MainButtons;
