import React from "react";
import BottomLeftSvg from "../../assets/svgs/BottomLeftSvg";
import BottomRightSvg from "../../assets/svgs/BottomRightSvg";
import TopLeftSvg from "../../assets/svgs/TopLeftSvg";
import TopRightSvg from "../../assets/svgs/TopRightSvg";
import { Container, H1 } from "./styles";
import Main from "../../components/Main";

function Home() {
  return (
    <Main>
      <H1>Home page</H1>
      <TopLeftSvg />
      <TopRightSvg />
      <BottomLeftSvg />
      <BottomRightSvg />
    </Main>
  );
}

export default Home;
