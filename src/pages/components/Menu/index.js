import React from "react";
import { LeftMenu, Titulo, ListaMenu, ItemMenu } from "./style";
import IconCart from "../../../assets/icons/IconCart";
import IconUser from "../../../assets/icons/IconUser";

export default function Menu({ open, setOpen }) {
  return (
    <LeftMenu open={open}>
      <div>
        <Titulo>Off_Supply</Titulo>
      </div>
      <ListaMenu open={open}>
        <ItemMenu open={open}>
          <h2>Perfil</h2>
          <IconUser />
        </ItemMenu>
        <ItemMenu open={open}>
          <h2>Teste</h2>
          <IconCart />
        </ItemMenu>
      </ListaMenu>
    </LeftMenu>
  );
}
