/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Text } from "theme-ui";
import Mision from "assets/mision.svg";
import Vision from "assets/vision.svg";
import Image from "components/image";
import TextFeature from "components/text-feature";

export default function KeyFeature() {
  return (
    <section id="sobre_nosotros" style={{marginBottom: 70, paddingTop:40}}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <TextFeature title={"Sobre nosotros"} />
        </div>
        <Text sx={styles.wrapper.subTitleCenter}>
          Somos el Departamento Apoyo de Talento Humano (DATH), dedicada a la
          consultoría de los procesos de la gestión humana, la cual está
          comprometida con mejorar los resultados de las organizaciones a través
          del desarrollo de sus líderes y la mejora de sus procesos. DATH, nace
          en el año 2021, como resultado de estudios realizados, que
          determinaron las necesidades de implementar los procesos de gestión
          humana en las pymes de la ciudad de barranquilla.
        </Text>

        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 30%",
              gap: "20px",
            }}
          >
            <div>
              <TextFeature title={"Misión"} />
              <Text sx={styles.wrapper.subTitleJustify}>
                Somos una organización encargada de brindar y facilitar el
                servicio de Talento Humano, buscando el crecimiento y éxito de
                las pymes, a través de soluciones integrales, brindando personal
                altamente capacitado para ofrecer un servicio con innovación,
                que busca satisfacer las necesidades de las organizaciones.
              </Text>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Image src={Mision} height={240} />
            </div>
          </div>

          <div
            style={{
              marginTop: "-15px",
              display: "grid",
              gridTemplateColumns: "30% 1fr",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Image src={Vision} height={240} />
            </div>
            <div>
              <TextFeature title={"Visión"} />
              <Text sx={styles.wrapper.subTitleJustify}>
                El Departamento de Apoyo del Talento Humano (DATH), busca ser
                reconocida como organización líder del mercado, por la alta
                calidad de nuestros trabajadores y la diversidad fomentada en
                nuestro ambiente laboral, así aportando al desarrollo sostenible
                de las organizaciones a nivel nacional.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
const styles = {
  wrapper: {
    subTitleCenter: {
      fontSize: 2,
      fontWeight: 400,
      lineHeight: "1.9",
      color: "#474747",
      textAlign: "center",
      marginBottom: "40px",
    },
    subTitleJustify: {
      fontSize: 2,
      fontWeight: 400,
      lineHeight: "1.9",
      color: "#474747",
      textAlign: "justify",
      marginBottom: "20px",
    },
    subTitle: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#002bfb",
    },
  },
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
