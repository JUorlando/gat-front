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
  flex-direction: column;

  .title-container {
    width: 100%;
    height: 238px;
    background-color: var(--color-block);
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }

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

  .second-div-benefic {
    width: 718px;
    height: 129px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    border: solid 1px var(--color-grey-0);

    p {
      width: 206px;
      height: 35px;
      font-size: 14px;
      font-weight: 300;
    }

    .second-box {
      width: 239px;
      height: 129px;
      gap: 12px;
      border-right: solid 1px var(--color-grey-0);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .icon-title {
      width: 100%;
      height: 44px;
      gap: 8px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      h2 {
        width: 130px;
        height: 44px;
        font-size: 22px;
        font-weight: 700;
      }
    }
  }

  .third-div-benefic{
    width: 716px;
    height: 52px;
    border: solid 1px var(--color-grey-0);
    display: flex;
    flex-direction: row;
    margin-left: 400px;
    margin-bottom: 600px;
  }
`;
