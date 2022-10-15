import { Container, ButtonsContainer } from "./main.styled";
import image from "../../images/bg.png";
import Video from "../video/video";
import MainButtons from "../main-buttons/mainButtons";
import exit from "../../images/exit_situations.png";
import solve from "../../images/solve_problem.png";
import point from "../../images/reach_point.png";
import couch from "../../images/personal_couch.png";

const Main = () => {
  return (
    <Container image={image.src}>
      <Video src="../../videos/main/main_video.mp4" />
      <ButtonsContainer>
        <MainButtons
          src={exit.src}
          text="выйти из кризисной ситуации"
          path="/exit"
        />
        <MainButtons src={solve.src} text="решить проблему" path="/solve" />
        <MainButtons src={point.src} text="достичь цель" path="/point" />
        <MainButtons src={couch.src} text="персональный коуч" path="/couch" />
      </ButtonsContainer>
    </Container>
  );
};

export default Main;
