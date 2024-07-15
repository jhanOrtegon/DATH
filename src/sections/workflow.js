/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.svg";
import ArrowEven from "assets/arrowEven.svg";
import { useContext } from "react";
import { LoginContext } from "contexts/login-context";

const data = [
  {
    id: 1,
    title: "Innovación",
    text: "Capacidad para introducir nuevos servicios, procesos o modelos de negocio que generen valor tanto para la empresa como para sus clientes. Implica la creatividad, el pensamiento original y la implementación de ideas novedosas que permitan a la empresa mantenerse competitiva en un entorno en constante cambio.",
  },
  {
    id: 2,
    title: "Trabajo en equipo",
    text: "Implica la coordinación de esfuerzos, la comunicación efectiva, el respeto mutuo y la valoración de las fortalezas individuales para lograr resultados exitosos. Cuando se fomenta un buen trabajo en equipo, los empleados pueden combinar sus habilidades y conocimientos para resolver problemas, tomar decisiones acertadas y alcanzar metas de manera más eficiente.",
  },
  {
    id: 3,
    title: "Honestidad",
    text: "Actuar con integridad, transparencia y ética en todas las interacciones y transacciones comerciales dentro y fuera de nuestra empresa, es fundamental para construir una reputación sólida, ganarse la confianza de los clientes y mantener relaciones a largo plazo basadas en la credibilidad y el respeto mutuo.",
  },
  {
    id: 4,
    title: "Compromiso",
    text: "Es un valor indispensable en nuestra organización el cual nos ayuda a establecer una cultura de alto rendimiento y productividad, comprometidos con los procesos ofrecidos. ",
  },
];

export default function WorkFlow() {
  const { isLogin } = useContext(LoginContext);

  if (!isLogin) {
    return (
      <section sx={styles.workflow}>
        <Container>
          <SectionHeader
            slogan="Whats the function"
            title="Valores"
            isWhite={true}
          />

          <Grid sx={styles.grid}>
            {data.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Container>
      </section>
    );
  }

  return null
}

const styles = {
  workflow: {
    backgroundColor: "secondary",
    borderRadius: 10,
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 30px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
