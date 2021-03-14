import styled from "styled-components";

export const Card = styled.div`
  width: 600px;
  height: 500px;
  background-color: white;
  margin: 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 15px 0px black;

  @media (min-width: 1024px) {
    width: 80%;
  }
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
  margin-top: -120px;
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
