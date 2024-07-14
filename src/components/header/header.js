/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/single_logo.jpg";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
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
          >
            Portal de colaboradores
          </Button>

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
