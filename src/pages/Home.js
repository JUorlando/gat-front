import React from "react";
import { Header } from "../components/Header";
import Carousel from "../components/Carousel";
import { MainContainer } from "../styles/container";

const Home = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Carousel />
      </MainContainer>
    </>
  );
};

export default Home;
