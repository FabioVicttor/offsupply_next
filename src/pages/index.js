import React, { useState, useRef } from "react";
import Burger from "../pages/components/Menu/Burger/Burger";
import Menu from "../pages/components/Menu/index";
import Home from "../pages/Home/index";
import Footer from "../pages/components/Footer/footer";
import Navbar from "../pages/components/Navbar/index";
import ModalLogin from "../pages/components/Modal/Login/index";
import { useOnClickOutside } from "../pages/hooks";

export default function Index() {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div>
        <div ref={node}>
          <Navbar />
          <Burger open={open} setOpen={setOpen}></Burger>
          <Menu open={open} setOpen={setOpen}></Menu>
        </div>
        <ModalLogin />
        <Home />
        <Footer />
      </div>
    </div>
  );
}
