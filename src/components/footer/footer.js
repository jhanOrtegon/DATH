/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from "theme-ui";
import { Link } from "react-scroll";
import data from "./footer.data";
import FooterLogo from "assets/logo.jpg";
export default function Footer() {
  return (
    <footer sx={styles.footer} style={{ boxShadow: "0px 0px 2px #ccc" }}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image sx={{ height: "50px" }} src={FooterLogo} alt="Logo" />
          </Link>

          <Box sx={styles.socialShare} className="social__share">
            {data.socialProfile.map((item) => (
              <Link key={item.id} href={item.path} className={item.name}>
                {item.icon}
              </Link>
            ))}
          </Box>

          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} DATH
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  socialShare: {
    display: "block",
    cursor: "pointer",
    a: {
      fontSize: [0, 1, null, 2],
      color: ["text", null, "primary"],
      lineHeight: "1em",
      my: [0, null, "-2px"],
      px: 1,
      transition: "all 0.25s",
      "&:hover": {
        color: ["primary", null, "text"],
      },
    },
  },
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [60],
      pb: [60],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      nav: {
        mx: 'auto',
        display: 'none',
        '@media screen and (min-width: 1024px)': {
          display: 'block',
        },
        a: {
          fontSize: 2,
          fontWeight: 'body',
          px: 5,
          cursor: 'pointer',
          lineHeight: '1.2',
          transition: 'all 0.15s',
          '&:hover': {
            color: 'primary',
          },
          '&.active': {
            color: 'primary',
          },
        },
      },
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: ["40px 0", null, "45px 30px", null, "60px 30px", "50px 90px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      "repeat(3,1fr)",
    ],
    widgetItem: {
      textAlign: "center",
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: "heading_secondary",
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, "15px"],
      },

      p: {
        fontSize: [1, "15px"],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
