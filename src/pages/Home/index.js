import React, { useEffect, useState } from "react";
import { ModalState } from "../../redux/selectors";
import { useSelector } from "react-redux";
import {
  Header,
  ContentHome,
  ContentCard,
  ItemHome,
  Card,
  CardBusca,
  InputBusca,
  ButtonBusca,
} from "./style";

import IconBusca from "../../assets/icons/IconBusca";

export default function Home() {
  const showModal = useSelector(ModalState);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const [scrollposition, setScrollPosition] = useState(0);

  const onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    setScrollPosition(scrollY);
  };
  //OBJETO TESTE --- INICIO
  const Camisetas = [
    {
      id: 1,
      tipo: "Camiseta",
      item: "Camiseta 1",
      preco: 10,
    },
    {
      id: 2,
      tipo: "Camiseta",
      item: "Camiseta 2",
      preco: 10,
    },
    {
      id: 3,
      tipo: "Camiseta",
      item: "Camiseta 3",
      preco: 10,
    },
  ];
  const Calcas = [
    {
      id: 1,
      tipo: "Calça",
      item: "Calça 1",
      preco: 10,
    },
    {
      id: 2,
      tipo: "Calça",
      item: "Calça 2",
      preco: 10,
    },
    {
      id: 3,
      tipo: "Calça",
      item: "Calça 3",
      preco: 10,
    },
  ];
  const Calcados = [
    {
      id: 1,
      tipo: "Tenis",
      item: "Tenis 1",
      preco: 10,
    },
    {
      id: 2,
      tipo: "Tenis",
      item: "Tenis 2",
      preco: 10,
    },
    {
      id: 3,
      tipo: "Tenis",
      item: "Tenis 3",
      preco: 10,
    },
  ];
  //OBJETO TESTE -- FINAL

  return (
    <div style={{ filter: showModal ? "blur(3px)" : "none" }}>
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardBusca>
            <InputBusca></InputBusca>
            <ButtonBusca>
              <IconBusca />
              <span>BUSCAR</span>
            </ButtonBusca>
          </CardBusca>
        </div>
      </Header>

      <ContentHome scrollposition={scrollposition}>
        <ItemHome>
          <Card>
            <ContentCard>Classeficação: Camisetas</ContentCard>
            <ContentCard>
              {Camisetas.map((item) => (
                <div key={item.id}>
                  <div>{item.item}</div>
                </div>
              ))}
            </ContentCard>
            <ContentCard>
              <div>Mais...</div>
            </ContentCard>
          </Card>
        </ItemHome>
        <ItemHome>
          <Card>
            <ContentCard>Classeficação: Calças</ContentCard>
            <ContentCard>
              {Calcas.map((item) => (
                <div key={item.id}>
                  <div>{item.item}</div>
                </div>
              ))}
            </ContentCard>
            <ContentCard>
              <div>Mais...</div>
            </ContentCard>
          </Card>
        </ItemHome>
        <ItemHome>
          <Card>
            <ContentCard>Classeficação: Calçados</ContentCard>
            <ContentCard>
              {Calcados.map((item) => (
                <div key={item.id}>
                  <div>{item.item}</div>
                </div>
              ))}
            </ContentCard>
            <ContentCard>
              <div>Mais...</div>
            </ContentCard>
          </Card>
        </ItemHome>
      </ContentHome>
    </div>
  );
}
