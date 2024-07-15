/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import Sticky from "react-stickynode";
import Header from "./header/header";
import Footer from "./footer/footer";
import { LoginContext } from "contexts/login-context";
import whatsapp from "../assets/whatsapp.png";

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  const whatsappStyle = {
    position: 'absolute',
    zIndex: 111,
    height: "50px",
    width: "50px",
    bottom: 10,
    right: 0,
  };

  return (
    <React.Fragment>
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
          <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
        </Sticky>
        <main
          id="content"
          sx={{
            variant: "layout.main",
          }}
        >
          {children}
        </main>
        <Footer />
      </LoginContext.Provider>
    </React.Fragment>
  );
}
