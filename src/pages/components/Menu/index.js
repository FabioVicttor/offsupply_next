import React from "react";
import { ModalLoginState } from "../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../../../redux/actions";
import { LeftMenu, ListaMenu, ItemMenu } from "./style";
import IconCart from "../../../assets/icons/IconCart";
import IconUser from "../../../assets/icons/IconUser";

export default function Menu({ open, setOpen }) {
  const dispatch = useDispatch();
  function showModalLogin() {
    dispatch(setShow());
  }

  return (
    <LeftMenu open={open}>
      <ListaMenu open={open} style={{ marginTop: "100px" }}>
        <ItemMenu
          open={open}
          onClick={() => {
            showModalLogin();
          }}
        >
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
