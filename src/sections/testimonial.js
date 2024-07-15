/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Button,
  Image,
} from "theme-ui";
import { keyframes } from "@emotion/core";
import TextFeature from "components/text-feature";
import ModalVideo from "react-modal-video";
import { IoIosPlay } from "react-icons/io";
import service from "assets/service.png";
import ServiceThumb from "assets/service-thumb.png";
import { useContext, useState } from "react";
import PatternBG from "assets/patternBG.png";
import { LoginContext } from "contexts/login-context";

const data = {
  subTitle: "",
  title: "Políticas",
  features: [
    {
      id: 1,
      text: "Mantener su conocimiento actualizado en base a los últimos avances de todo lo que tenga que ver con su área laboral.",
    },
    {
      id: 2,
      imgSrc: service,
      text: "Fomentar el orden y la disciplina en el área laboral .",
    },
    {
      id: 3,
      text: "Respeto a la dignidad de la persona.",
    },
    {
      id: 4,
      text: "Confidencialidad.",
    },
    {
      id: 5,
      text: "Buscar el bienestar general.",
    },
    {
      id: 6,
      text: "Actuar con responsabilidad, iniciativa y conciencia.",
    },
    {
      id: 7,
      text: "Integridad.",
    },
  ],
};

export default function TestimonialCard() {
  const { isLogin } = useContext(LoginContext);

  // modal popup video handler
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  if (!isLogin) {
    return (
      <div style={{ marginBottom: "60px" }}>
        <section style={{ margin: "30px 0 0 0" }}>
          <Container sx={styles.containerBox}>
            <Box sx={styles.contentBox}>
              <div>
                <TextFeature title={data.title} />

                <Text sx={styles.subTitleCenter}>
                  Las políticas internas de nuestra empresa Dath son un conjunto
                  de principios y normas, que guían la conducta técnica de los
                  profesionales que la ejercen. Se trata de un marco de
                  referencia, que establece los valores y deberes que dichos
                  profesionales deben respetar, para mantener un alto nivel de
                  integridad y responsabilidad en su práctica.
                </Text>

                <div
                  style={{
                    padding: "0 40px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  {data.features?.map((el) => (
                    <div
                      key={el.id}
                      style={{
                        background: "#002bfb",
                        padding: "10px",
                        borderRadius: 10,
                        color: "white",
                        display: "grid",
                        gridTemplateColumns: "20px 1fr",
                        gap: 10,
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          background: "white",
                          padding: 5,
                          borderRadius: 5,
                          color: "#002bfb",
                          textAlign: "center",
                        }}
                      >
                        {el.id}
                      </div>
                      <div>{el.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          </Container>
        </section>
      </div>
    );
  }

  return null
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  subTitleCenter: {
    fontSize: 2,
    fontWeight: 400,
    lineHeight: "1.9",
    color: "#474747",
    textAlign: "center",
    marginBottom: "40px",
  },
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative",
  },
  containerBox: {
    display: "grid",
    alignItems: ["flex-start", null, null, "center"],
    justifyContent: ["flex-start", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    pb: [0, null, null, null, null, 7],
    gridTemplateColumns: "1fr",
  },
  thumbnail: {
    mr: ["auto", null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ["auto", null, null, 0],
    display: "inline-flex",
    position: "relative",
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"],
  },
  videoBtn: {
    zIndex: 2,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: ["60px", null, "80px", null, "100px"],
    height: ["60px", null, "80px", null, "100px"],
    p: "0px !important",
    backgroundColor: "transparent",
    "&::before": {
      position: "absolute",
      content: '""',
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      display: "block",
      width: ["60px", null, "80px", null, "100px"],
      height: ["60px", null, "80px", null, "100px"],
      backgroundColor: "primary",
      borderRadius: "50%",
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    "> span": {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: "inherit",
      height: "inherit",
      textAlign: "center",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.5s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ["100%"],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    pr: [2, 0, null, null, 6, "70px"],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px"],
    gridTemplateColumns: ["repeat(3,1fr)"],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s",
  },

  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, "14px", 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: "100%",
    position: "relative",
    width: "900px",
    "&:before": {
      content: '""',
      display: "block",
      paddingTop: "56.25%",
    },
    iframe: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
};
