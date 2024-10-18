import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import imagem1 from "../../assets/img/baner_01.png";
import imagem2 from "../../assets/img/baner_02 (1).png";
import imagem3 from "../../assets/img/baner_03.png";
import prize from "../../assets/img/prize.png";
import paw from "../../assets/img/paw.png";
import { ReactComponent as LeftArrow } from "../../assets/img/Arrow 1.svg";
import { ReactComponent as RightArrow } from "../../assets/img/Arrow 2.svg";
import {
  CarouselContainer,
  Button,
  StyledGalleryContainer,
  BeneficConteiner,
} from "./style";

const Carousel = () => {
  const images = [
    {
      original: imagem1,
      thumbnail: imagem1,
    },
    {
      original: imagem2,
      thumbnail: imagem2,
    },
    {
      original: imagem3,
      thumbnail: imagem3,
    },
  ];

  const LeftArrowButton = ({ onClick }) => (
    <Button onClick={onClick} className="prev">
      <LeftArrow />
    </Button>
  );

  const RightArrowButton = ({ onClick }) => (
    <Button onClick={onClick} className="next">
      <RightArrow />
    </Button>
  );

  return (
    <CarouselContainer>
      <StyledGalleryContainer>
        <ImageGallery
          items={images}
          startIndex={1}
          autoPlay={false}
          showThumbnails={false}
          showPlayButton={false}
          showBullets={false}
          showIndex={false}
          showFullscreenButton={false}
          renderLeftNav={(onClick) => <LeftArrowButton onClick={onClick} />}
          renderRightNav={(onClick) => <RightArrowButton onClick={onClick} />}
        />
      </StyledGalleryContainer>
      <BeneficConteiner>
        <div className="title-container">
          <div className="first-div-benefic">
            <h2>10</h2>
            <div>
              <h3>Benefício Principal</h3>
              <p>Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
            </div>
          </div>
          <div className="second-div-benefic">
            <div className="second-box">
              <div className="icon-title">
                <img src={prize} alt="ícone de benefícios" />
                <h2>Benefício Secundário</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
            </div>
            <div className="second-box">
              <div className="icon-title">
                <img src={prize} alt="ícone de benefícios" />
                <h2>Benefício Secundário</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
              </div>
            </div>
            <div className="second-box-3">
              <div className="icon-title">
                <img src={prize} alt="ícone de benefícios" />
                <h2>Benefício Secundário</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="third-div-benefic">
          <div>
            <img src={paw} alt="ícone de pata" />
            <h2>Benefício Terciário</h2>
          </div>
          <div>
            <img src={paw} alt="ícone de pata" />
            <h2>Benefício Terciário</h2>
          </div>
          <div>
            <img src={paw} alt="ícone de pata" />
            <h2>Benefício Terciário</h2>
          </div>
          <div>
            <img src={paw} alt="ícone de pata" />
            <h2>Benefício Terciário</h2>
          </div>
        </div>
      </BeneficConteiner>
    </CarouselContainer>
  );
};

export default Carousel;
