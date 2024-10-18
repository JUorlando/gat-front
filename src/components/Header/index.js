import React, { useState } from "react";
import logo from "../../assets/img/Vector.png";
import produto from "../../assets/img/menu_01.png";
import colecao from "../../assets/img/menu_02.png";
import busca from "../../assets/img/search.png";
import user from "../../assets/img/user.png";
import cart from "../../assets/img/cart.png";
import title from "../../assets/img/Group.png";
import { StyledHeader } from "./style";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Buscando:", searchTerm);
  };

  return (
    <StyledHeader>
      <div className="title-content">
        <img src={logo} alt="Logo Gat PetShop" className="logo" />
        <img src={title} alt="título do site" className="title" />
      </div>
      <nav className="menu-content">
        <div className="menu-contents">
          <img src={produto} alt="menu de produtos" className="menu-logo" />
          produtos
        </div>
        <div className="menu-contents-colect">
          <img src={colecao} alt="menu de coleções" className="menu-logo" />
          coleções
        </div>
      </nav>
      <nav className="button-group">
        <div className="button-content">
          <button>blog</button>
          <button>lookbook</button>
          <button>sobre a Gat</button>
          <button>wishlist</button>
        </div>
      </nav>
      <div className="search-container">
        <div className="search-input">
          <button onClick={handleSearch} aria-label="Botão de busca">
            <img src={busca} alt="Ícone de busca" className="search-icon"/>
          </button>
          <input
            type="text"
            placeholder="digite aqui o que procura"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Campo de busca"
          />
        </div>
          <button className="icon-button-user">
            <img src={user} alt="ícone de usuário" className="icon-user"/>
          </button>
          <button className="icon-button-cart">
            <img src={cart} alt="ícone do carrinho" className="icon-cart"/>
          </button>
        </div>
    </StyledHeader>
  );
};
