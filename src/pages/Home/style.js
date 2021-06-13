import styled from "styled-components";

export const Card = styled.div`
  /* width: ${({ open }) => (open ? "590px" : "600px")}; */
  /* width: 600px; */
  height: ${({ open }) => (open ? "490px" : "500px")};
  background-color: white;
  margin: 20px;
  border-radius: 30px;
  box-shadow: ${({ open }) =>
    open ? "none" : "rgb(0 0 0 / 50%) 0px 1px 15px 2px"};
  transition: 500ms;


  @media (min-width: 2560px){
    width: ${({ open }) => (open ? "75%" : "80%")};
  };
  @media (min-width: 1920px) and (max-width: 2559px){
    width: ${({ open }) => (open ? "1490px" : "1500px")};
  };
  @media (min-width: 1601px) and (max-width: 1919px){
    width: ${({ open }) => (open ? "1290px" : "1300px")};
  };
  @media (min-width: 1441px) and (max-width: 1600px){
    width: ${({ open }) => (open ? "1190px" : "1200px")};
  };
  @media (min-width: 1280px) and (max-width: 1440px){
    width: ${({ open }) => (open ? "1090px" : "1100px")};
  };
  @media (min-width: 1025px) and (max-width: 1279px){
    width: ${({ open }) => (open ? "790px" : "800px")};
  };
  @media (min-width: 830px) and (max-width: 1024px){
    width: ${({ open }) => (open ? "780px" : "790px")};
  };
  @media (min-width: 768px) and (max-width: 829px){
    width: ${({ open }) => (open ? "680px" : "690px")};
  };
  @media (min-width: 550px) and (max-width: 767px){
    width: ${({ open }) => (open ? "570px" : "580px")};
  };
  @media (min-width: 425px) and (max-width: 549px){
    width: ${({ open }) => (open ? "370px" : "380px")};
  };
  @media (min-width: 375px) and (max-width: 424px) {
    width: ${({ open }) => (open ? "330px" : "335px")};
  };
  @media (min-width: 320px) and (max-width: 374px) {
    width: ${({ open }) => (open ? "270px" : "280px")};
  };
`;

export const ItemHome = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  background-color: #7947b3;
  height: 450px;
`;

export const ContentHome = styled.div`
  background-color: transparent;
  margin-top: ${({ open }) => (open ? "-110px" : "-120px")};
  transition: 500ms;
`;

export const CardBusca = styled.div`
  margin-top: 200px;
  display: flex;
  width: 900px;
  height: 80px;
  background-color: white;
  border-radius: 30px;
  background-color: #10002b;
`;

export const InputBusca = styled.input`
  width: 70%;
  height: 50%;
  border-radius: 30px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border: none;
  font-size: 30px;
  padding: 20px;

  :focus {
    outline: none;
  }
`;

export const ButtonBusca = styled.button`
  width: 25%;
  height: 100%;
  border-radius: 30px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border: none;
  cursor: pointer;
  background-color: #10002b;
  color: white;
  transition: transform 0.5s ease-in-out;
  display: flex;
  align-items: center;

  span {
    @media (max-width: 720px) {
      display: none;
    }
  }

  :hover {
    box-shadow: 5px 1px 10px 0px black;
    color: white;
  }

  :active {
    box-shadow: 0px 0px 0px 0px black;
    transition: transform 0.5s ease-in-out;
  }

  :focus {
    outline: none;
  }
`;
// #7800FF #5300B3 #AD66FF #7947B3 #000000 #FFFFFF
