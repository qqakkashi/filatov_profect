import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "../main/main.styled";
import Video from "./video";
import {
  VideoButtonsContainer,
  VideoButtons,
  VideoButtonMain,
} from "./video.styled";
import Link from "next/link";
import bg from "../../images/bg.png";
import reload_button from "../../images/reload-button.svg";
import next_button from "../../images/next-vid-button.svg";

export const VideoPage = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    if (router.pathname.includes("exit")) {
      setPageUrl("/exit/video");
      if (Number(router?.asPath?.substring(12)) <= 9) {
        router.push("/exit");
      } else if (Number(router?.asPath?.substring(12)) > 18) {
        router.push("/review");
      } else {
        router?.asPath?.substring(7).includes("video")
          ? null
          : setUrl(router?.asPath?.substring(12));
      }
    } else if (router.pathname.includes("solve")) {
      setPageUrl("/solve/video");

      if (Number(router?.asPath?.substring(13)) <= 0) {
        router.push("/solve");
      } else if (Number(router?.asPath?.substring(13)) > 41) {
        router.push("/review");
      } else {
        router?.asPath?.substring(8).includes("video")
          ? null
          : setUrl(router?.asPath?.substring(13));
      }
    } else if (router.pathname.includes("point")) {
      setPageUrl("/point/video");

      if (Number(router?.asPath?.substring(13)) <= 0) {
        router.push("/point");
      } else if (Number(router?.asPath?.substring(13)) > 102) {
        router.push("/review");
      } else {
        router?.asPath?.substring(8).includes("video")
          ? null
          : setUrl(router?.asPath?.substring(13));
      }
    }
  }, [router.asPath?.substring(12)]);
  const refreshPage = () => {
    window.location.reload();
  };
  const folder = router.pathname.slice(0, -17);
  console.log(`../../videos${folder}${folder}${url}.mp4`);
  return (
    <>
      <Container image={bg.src}>
        {url && <Video src={`../../videos${folder}${folder}_${url}.mp4`} />}
        <VideoButtonsContainer>
          <Link href={pageUrl} as={`${Number(url) - 1}/`}>
            <VideoButtons src={next_button.src} rotate={180}></VideoButtons>
          </Link>
          <VideoButtons
            src={reload_button.src}
            onClick={() => refreshPage()}
          ></VideoButtons>
          <Link href={pageUrl} as={`${Number(url) + 1}/`}>
            <VideoButtons src={next_button.src}></VideoButtons>
          </Link>
        </VideoButtonsContainer>
        <VideoButtonMain onClick={() => router.push("/")}>
          На главную
        </VideoButtonMain>
      </Container>
    </>
  );
};
