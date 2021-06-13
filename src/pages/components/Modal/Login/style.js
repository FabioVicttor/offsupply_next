import styled from "styled-components";

export const Content = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentX = styled.div`
  float: right;
  display: "flex";
  :hover {
    div {
      cursor: pointer;
    }
  }
`;

export const X1 = styled.div`
  width: 35px;
  height: 7px;
  border-radius: 20px;
  transform: rotate(45deg);
  position: absolute;
  background-color: white;
`;
export const X2 = styled.div`
  width: 35px;
  height: 7px;
  border-radius: 20px;
  transform: rotate(-45deg);
  background-color: white;
`;

export const Modal = styled.div`
  box-shadow: 0px 0px 12px 0px black;
  width: 500px;
  height: 700px;
  background-color: #7800ff;
  border-radius: 20px;
  margin-top: 50px;
`;

export const ContentModal = styled.div`
  height: 100%;
  padding: 40px;
  color: white;
  /* display: flex; */
`;

export const ItemModal = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

export const InputLogin = styled.input`
  width: 295px;
  height: 40px;
  border-radius: 25px;
  padding: 5px;
  border: 0;
  outline: none;
  text-align: center;
`;

export const ButtonLogin = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 25px;
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: #ffffff;
  transition: transform 0.5s ease-in-out;
  color: black;

  :hover {
    box-shadow: 0px 0px 15px 0px #10002b;
  }

  :active {
    box-shadow: 0px 0px 0px 0px #10002b;
    transition: transform 0.5s ease-in-out;
  }
`;

export const Item = styled.div`
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;
