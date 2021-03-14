import styled from "styled-components";

export const LeftMenu = styled.div`
  z-index: 100;
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
  width: 380px;
  height: 100%;
  background-color: white;
  align-items: center;
  position: fixed;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ open }) =>
    open ? "1px 1px 20px 0px black" : "0px 0px 0px 0px black"};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-75%)")};

  @media (max-width: 1024px) {
    width: 300px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
`;

export const Titulo = styled.h1`
  margin-top: 5%;
  margin-top: 10%;
  margin-left: 80px;
`;

export const ListaMenu = styled.div``;

export const ItemMenu = styled.div`
  height: 65px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  @media (min-width: 1024px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(37%)")};
  }

  :hover {
    box-shadow: 0px 0px 7px 0px black;
    color: white;
    background-color: #7800ff;
    transition: transform 0.5s ease-in-out;

    svg {
      height: 110px;
      width: 90px;
      transition-duration: 300ms;
    }
  }

  :active {
    svg {
      cursor: pointer;
      height: 100px;
      width: 65px;
    }
    box-shadow: 0px 0px 0px 0px black;
    transition: transform 0.5s ease-in-out;
  }

  h2 {
    @media (min-width: 1024px) {
      display: ${({ open }) => (open ? "block" : "none")};
    }
  }
`;
