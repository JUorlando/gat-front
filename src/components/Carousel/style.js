import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  max-width: 1179px;
  margin: 0 auto;
  overflow: hidden;
`;

export const StyledGalleryContainer = styled.div`
  .image-gallery-slide img {
    width: 100%;
    height: 559px;
    margin-top: 10px;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 10px;
  cursor: pointer;
  background: none;
  z-index: 10;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  svg {
    width: 59px;
    height: 30px;
  }
`;

export const BeneficConteiner = styled.div`
  width: 100%;
  height: 238px;
  background-color: var(--color-block);
  display: flex;
  justify-content: center;
  align-items: center;

  .first-div-benefic {
    width: 315px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
    gap: 15px;
    border: solid 1px var(--color-grey-0);

    h2 {
      font-size: 140px;
      font-weight: 250;
      font-family: "Oswald", sans-serif;
    }

    div {
      width: 155px;
      height: 95px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      h3 {
        width: 148px;
        height: 60px;
        font-size: 30px;
        font-weight: 700;
      }

      p {
        width: 155px;
        height: 35px;
        padding-top: 10px;
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
`;
