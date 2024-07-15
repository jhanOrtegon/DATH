/** @jsx jsx */

import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/single_logo.jpg";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import { useContext, useState } from "react";
import Modal from "react-responsive-modal";
import Swal from "sweetalert2";
import { LoginContext } from "contexts/login-context";
import whatsapp from 'assets/whatsapp.png';

export default function Header({ className }) {
  const { setIsLogin, isLogin } = useContext(LoginContext);

  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onLogin = () => {
    const password = inputs.password === "123456";
    const email = inputs.email === "dath@gmail.com";
    if (password && email) {
      setInputs({ email: "", password: "" });
      onCloseModal();
      setIsLogin(true);
      return;
    }

    return Swal.fire({
      icon: "error",
      title: "Vuelve a intentarlo",
      text: "Usuario o contraseña incorrecto",
    });
  };

  console.log(isLogin,'isLogin');

  const onChangeEmail = ({ target }) =>
    setInputs({ ...inputs, email: target.value });

  const onChangePassword = ({ target }) =>
    setInputs({ ...inputs, password: target.value });

  const login = () => {
    return (
      <div>
        <Modal open={open} onClose={onCloseModal} center>
          <div className="login-box">
            <h1>Iniciar sesión</h1>

            <form>
              <label for="username">Usuario</label>
              <input
                value={inputs.email}
                type="email"
                placeholder="ingresa un correo"
                onChange={onChangeEmail}
              />
              <label for="password">Contraseña</label>
              <input
                value={inputs.password}
                type="password"
                placeholder="ingresa una contraseña"
                onChange={onChangePassword}
              />
              <input type="button" value="Entrar" onClick={onLogin} />
            </form>
          </div>
        </Modal>
      </div>
    );
  };

  const getMenuItem = () => {
    if (isLogin) {
      return [
        {
          path: "deberes",
          label: "Deberes y obligaciones",
        },
        {
          path: "prohibiciones",
          label: "Prohibiciones",
        },
        {
          path: "faltas",
          label: "Faltas y sanciones",
        },
        {
          path: "conflicto",
          label: "Conflicto",
        },
        {
          path: "reglamento",
          label: "Reglamento",
        },
      ];
    }

    return menuItems;
  };

  const whatsappStyle = {
    position: 'absolute',
    zIndex: 111,
    height: "40px",
    width: "40px",
    right: 10,
    cursor:'pointer'
  };

  return (
    <DrawerProvider>
      {login()}
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} />

          <Flex as="nav" sx={styles.nav}>
            {getMenuItem().map(({ path, label }, i) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Get Started"
            onClick={() => {
              if (!isLogin) {
                return onOpenModal();
              }
              setIsLogin(false);
            }}
          >
            {isLogin ? "Cerrar sesión" : "Portal de colaboradores"}
          </Button>

          {/* <img src={whatsapp} style={whatsappStyle} /> */}

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "#002bfb",
    fontWeight: "bold",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "white",
      color: "#002bfb",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        backgroundColor: "#002bfb",
        borderRadius: "5px",
        color: "white",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      padding: "10px 5px",
      fontSize: 2,
      fontWeight: "500",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 200ms",
      "&:hover": {
        backgroundColor: "#002bfb",
        borderRadius: "5px",
        color: "white",
      },
      "&.active": {
        color: "primary",
        "&:hover": {
          color: "white",
        },
      },
    },
  },
};
