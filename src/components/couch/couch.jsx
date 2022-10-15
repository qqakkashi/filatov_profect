import { Container, MainText, PageContainer } from "../main/main.styled";
import InputBoxCouch from "../input/inputBoxCouch";
import { CouchText } from "./couch.styled";
import bg from "../../images/bg.png";

const Couch = () => {
  return (
    <Container image={bg.src}>
      <PageContainer>
        <MainText>Персональный коуч</MainText>
        <CouchText>
          работа с живым человеком позволит вам быстро и максимально качественно
          решить любую задачу
        </CouchText>
        <InputBoxCouch />
      </PageContainer>
    </Container>
  );
};

export default Couch;
