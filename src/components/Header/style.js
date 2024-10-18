import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 1245px; /* Limita a largura máxima para centralizar */
  height: 40px;
  margin: 0 auto; /* Centraliza o Header */
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  background-color: var(--color-grey-4);

  .title-content {
    width: 126px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #141614;
    background-color: var(--color-grey-0);

    .logo {
      width: 34px;
      height: 34.16px;
    }

    .title {
      width: 64.61px;
      height: 47.11px;
      margin-top: 10.8px;
      margin-left: 10.39px;
      margin-right: 5px;
    }
  }

  .menu-content {
    width: 266px;
    height: 40px;
    display: flex;
    flex-direction: row;

    .menu-contents {
      width: 135px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: solid 1px var(--color-grey-0);
      font-weight: bolder;
      gap: 5px;

      .menu-logo {
        width: 16px;
        height: 16px;
      }
    }
  }

  .button-group {
    width: 853px;
    height: 40px;
    border-right: solid 1px var(--color-grey-0);
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .button-content {
      width: 297px;
      height: 10px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  .search-container {
    display: flex;
    align-items: center;

    .search-input {
      width: 212px; /* Ajuste conforme necessário */
      display: flex;
      align-items: center;
      border-right: solid 1px var(--color-grey-0);
      padding: 5px;

      input {
        border: none;
        outline: none;
        background: transparent;
        color: var(--color-grey-0);
        width: 80%; /* Ajuste para evitar quebrar em telas pequenas */
      }

      .search-icon {
        width: 15.49px;
        height: 16px;
      }
    }

    .icon-button-user {
      width: 40px;
      height: 40px;
      border-right: solid 1px var(--color-grey-0);
      display: flex;
      justify-content: center;
      align-items: center;

      .icon-user {
        width: 17.75px;
        height: 18px;
      }
    }

    .icon-button-cart {
      width: 59px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 17px;
        height: 16px;
      }
    }
  }
`;

