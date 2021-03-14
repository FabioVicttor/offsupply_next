import React, { useCallback, useReducer, useState } from "react";
import { ModalState } from "../../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../../../../redux/actions";
import {
  Content,
  Modal,
  ContentModal,
  ItemModal,
  InputLogin,
  ButtonLogin,
  Item,
  ContentX,
  X1,
  X2,
} from "./style";
// import { Frame } from "framer";
import { motion } from "framer-motion";

export default function ModalLogin() {
  const dispatch = useDispatch();
  const showModal = useSelector(ModalState);

  React.useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  function showModalLogin() {
    dispatch(setShow());
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setLogin(event.target[0].value);
    setSenha(event.target[1].value);
    alert(event.target[1].value);
  };

  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  if (showModal) {
    return (
      <div>
        <Content>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Modal>
              <form onSubmit={handleSubmit}>
                <ContentModal>
                  <ContentX onClick={showModalLogin}>
                    <X1></X1>
                    <X2></X2>
                  </ContentX>
                  <div style={{ marginTop: "170px" }}>
                    <ItemModal>
                      <InputLogin
                        name="loginemail"
                        id="loginemail"
                        type="text"
                        placeholder="E-Mail"
                      />
                    </ItemModal>
                    <ItemModal>
                      <InputLogin
                        name="senhalogin"
                        id="senhalogin"
                        type="password"
                        placeholder="Senha"
                      />
                    </ItemModal>
                    <ItemModal>
                      <ButtonLogin type="submit">ENTRAR</ButtonLogin>
                    </ItemModal>
                    <ItemModal>
                      <Item>Recuperar Senha</Item>
                      <Item>Registrar-se</Item>
                    </ItemModal>
                  </div>
                </ContentModal>
              </form>
            </Modal>
          </motion.div>
        </Content>
      </div>
    );
  } else {
    return null;
  }
}
