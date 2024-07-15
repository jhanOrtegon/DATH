/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Text } from "theme-ui";
import Mision from "assets/mision.svg";
import Vision from "assets/vision.svg";
import Image from "components/image";
import TextFeature from "components/text-feature";
import { LoginContext } from "contexts/login-context";
import { useContext } from "react";

export default function KeyFeature() {
  const { isLogin } = useContext(LoginContext);
  if (isLogin) {
    return (
      <Container>
        <section id="deberes" style={{ marginBottom: 50, paddingTop: 30 }}>
          <div
            style={{
              height: "400px",
              display: "grid",
              gap: 20,
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div>
              <div style={{ textAlign: "center" }}>
                <a
                  href="https://drive.google.com/file/d/1WqXBzvQVtu1zJO7yqY2CMZ_xqmptk0aC/preview"
                  target="_blank"
                >
                  <TextFeature title={"Deberes y obligaciones"} />
                </a>
              </div>
              <Text sx={styles.wrapper.subTitleCenter}>
                Los deberes para DATH pueden ser legales, morales o sociales y
                establecen la forma en que nuestros colaboradores deben
                comportarse o actuar frente a la organización. Nuestra
                organización también cuenta con unos deberes que cumplir frente
                a sus colaboradores.
              </Text>
            </div>

            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1WqXBzvQVtu1zJO7yqY2CMZ_xqmptk0aC/preview"
            ></iframe>
          </div>
        </section>

        <section
          id="prohibiciones"
          style={{ marginBottom: 50, paddingTop: 30 }}
        >
          <div
            style={{
              height: "400px",
              display: "grid",
              gap: 20,
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1u37prvhZzL1j8WKJdI8c6feCnLfkLV8E/preview"
            ></iframe>

            <div>
              <div style={{ textAlign: "center" }}>
                <a
                  href="https://drive.google.com/file/d/1u37prvhZzL1j8WKJdI8c6feCnLfkLV8E/preview"
                  target="_blank"
                >
                  <TextFeature title={"Prohibiciones"} />
                </a>
              </div>
              <Text sx={styles.wrapper.subTitleCenter}>
                Las prohibiciones de los trabajadores son un conjunto de normas
                que regulan la relación entre los trabajadores y el empresario.
                Estas normas pueden incluir lo dispuesto en el reglamento de la
                empresa
              </Text>
            </div>
          </div>
        </section>

        <section id="faltas" style={{ marginBottom: 50, paddingTop: 30 }}>
          <TextFeature title={"Faltas leves, graves y muy graves"} />
          <Text sx={styles.wrapper.subTitleJustify}>
            Constituyen faltas disciplinarias el incumplimiento de los deberes y
            la violación de las obligaciones y prohibiciones consagrados en el
            Código Sustantivo del Trabajo, en el contrato de trabajo, en los
            reglamentos de la empresa (ART 43)
          </Text>

          <ul style={{ padding: "0 0 0 20px" }}>
            <li style={{ listStyle: "disc" }}>
              Se considera falta grave el hecho de haber sido sancionados cinco
              o más veces por faltas leves en un periodo igual o inferior a los
              tres meses.
            </li>
            <li style={{ listStyle: "disc" }}>
              Se considera falta muy grave el hecho de haber sido sancionados
              dos o más veces por faltas graves en un periodo igual o inferior
              al año.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: 50, paddingTop: 30 }}>
          <TextFeature title={"Sanciones"} />
          <Text sx={styles.wrapper.subTitleJustify}>
            La gravedad de la sanción impuesta dependerá de factores como{" "}
            <b>el tipo de falta de trabajo</b> que se haya cometido,{" "}
            <b>su frecuencia, sus consecuencias</b> para la empresa y sus
            trabajadores, y <b>el cargo ocupado</b> por el trabajador
            sancionado.
          </Text>

          <ul style={{ padding: "0 0 0 20px" }}>
            <li style={{ listStyle: "disc" }}>
              <b>Sanciones por faltas leves:</b> suelen consistir en una
              amonestación, verbal o escrita. También pueden aplicarse hasta 2
              días de suspensión de empleo y sueldo.
            </li>
            <li style={{ listStyle: "disc" }}>
              <b>Sanciones por faltas graves:</b> suelen conllevar suspensiones
              de empleo y sueldo de hasta 20 días.
            </li>
            <li style={{ listStyle: "disc" }}>
              <b>Sanciones por faltas muy graves:</b> suelen consistir en
              inhabilitaciones para el ascenso y en suspensiones de empleo y
              sueldo de hasta 6 meses de duración. También se contemplan los
              traslados a otro centro de trabajo y, en los casos más graves, el
              despido.
            </li>
          </ul>
        </section>

        <section id="conflicto" style={{ marginBottom: 50, paddingTop: 30 }}>
          <TextFeature title={"A quién dirigirse en caso de conflicto."} />
          <Text sx={styles.wrapper.subTitleJustify}>
            En caso de presentarse un conflicto laboral el trabajador debe
            informar inmediatamente a los responsables del área de talento
            humano DATH, quienes tienen que estar preparados para solucionarlos
            lo más rápido posible.
            <br />
            El departamento de talento humano DATH, maneja diferentes técnicas,
            que ayudan a que las partes implicadas, puedan llegar a un acuerdo:
            la facilitación, la mediación, el arbitraje, la negociación, la
            indagación.
          </Text>

          <ul style={{ padding: "0 0 0 20px", display: "flex", gap: 50 }}>
            <li style={{ listStyle: "disc" }}>
              <b>Talento Humano</b>
            </li>
            <li style={{ listStyle: "disc" }}>
              <b>Jefe Directo</b>
            </li>
          </ul>
        </section>

        <section id="reglamento" style={{ marginBottom: 50, paddingTop: 30 }}>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://drive.google.com/file/d/1qALSNz1rL3NYCQyK87AjRNnvp7XKIH57/preview"
              target="_blank"
            >
              <TextFeature title={"Reglamento interno"} />
            </a>
          </div>
          <div
            style={{
              height: "400px",
              display: "grid",
              gap: 20,
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1qALSNz1rL3NYCQyK87AjRNnvp7XKIH57/preview"
            ></iframe>

            <div>
              <h3 style={{ color: "#002bfb" }}>Horario</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div>
                  <div>
                    <b>Lunes a viernes </b>
                  </div>
                  <div>Entrada: 8:00 a.m.</div>
                  <div>Salida: 5:00 p.m.</div>
                  <div>
                    <b>Almuerzo</b>
                  </div>
                  <div>De 12:00 p.m. a 1:00 p.m</div>
                </div>

                <div>
                  <div>
                    <b>Sabados</b>
                  </div>
                  <div>Entrada: 8:00 a.m.</div>
                  <div>Salida: 12:00 p.m.</div>
                </div>
              </div>
              <div>
                <h3 style={{ color: "#002bfb" }}>Modalidades de pago</h3>
                <ul style={{ padding: "0 0 0 20px" }}>
                  <li style={{ listStyle: "disc" }}>
                    La modalidad de pago será mensual, con fecha de pago los 30
                    de cada mes
                  </li>
                  <li style={{ listStyle: "disc" }}>
                    El salario de cada trabajador será según lo que la empresa y
                    el trabajador haya convenido previamente.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 50, paddingTop: 30 }}>
          <TextFeature title={"Codigo de vestimenta"} />
          <h3 style={{ color: "#002bfb" }}>Qué es el código de vestuario?</h3>
          <Text sx={styles.wrapper.subTitleJustify}>
            Este código es la guía que busca orientarte sobre los aspectos que
            intervienen en nuestra imagen personal y la alineación con la imagen
            corporativa de DATH; brindando sugerencias para proyectar una imagen
            profesional que genere confianza, seguridad y cercanía a nuestros
            clientes.
          </Text>

          <h3 style={{ color: "#002bfb" }}>
            A quién va dirigido el código de vestuario?
          </h3>
          <Text sx={styles.wrapper.subTitleJustify}>
            Todo colaborador de DATH debe conocer y estar alineado con este
            código de vestuario.
          </Text>
        </section>

        <section style={{ marginBottom: 50, paddingTop: 30 }}>
          <TextFeature title={"Condiciones de trabajo"} />
          <h3 style={{ color: "#002bfb" }}>Ambientales</h3>
          <Text sx={styles.wrapper.subTitleJustify}>
            El trabajo se realiza en una oficina con:
          </Text>
          <ul style={{ padding: "0 0 0 20px" }}>
            <li style={{ listStyle: "disc" }}>Iluminación adecuada</li>
            <li style={{ listStyle: "disc" }}>Buena temperatura</li>
            <li style={{ listStyle: "disc" }}>
              El puesto de trabajo cuenta con un buen espacio para desarrollar
              sus actividades.
            </li>
          </ul>
          <h3 style={{ color: "#002bfb", marginTop: 20 }}>
            Riesgos ocupacionales
          </h3>
          <Text sx={styles.wrapper.subTitleJustify}>
            Por la naturaleza del cargo los riesgos ocupacionales a que está
            expuesta la persona que lo desempeña son:
          </Text>
          <ul style={{ padding: "0 0 0 20px" }}>
            <li style={{ listStyle: "disc" }}>
              Varices por permanecer sentado por un largo periodo de tiempo
            </li>
            <li style={{ listStyle: "disc" }}>
              Problemas visuales por el constante manejo de computadores y
              lecturas extensas
            </li>
            <li style={{ listStyle: "disc" }}>
              Problemas lumbares por permanecer en la misma posición por un
              periodo de tiempo prolongado.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: 50, paddingTop: 30 }}>
          <TextFeature title={"Beneficios de la empresa "} />
          <h3 style={{ color: "#002bfb" }}>Casino de alimentos:</h3>
          <Text sx={styles.wrapper.subTitleJustify}>
            Uno de los beneficios más destacados en nuestra empresa, es contar
            con un casino de alimentos el cual da la posibilidad de tener una
            alimentación saludable y equilibrada con una gran variedad de menús
            semanales.
          </Text>
          <Text sx={styles.wrapper.subTitleJustify}>
            Tendrá un costo de 1200 pesos, los cuales podrán ser descontados
            quincenalmente de su nómina.
          </Text>

          <h3 style={{ color: "#002bfb", marginTop: 20 }}>Ruta</h3>
          <Text sx={styles.wrapper.subTitleJustify}>
            En DATH ofrecemos además del Auxilio de transporte legal, una ruta
            de transporte para nuestros colaboradores
          </Text>
        </section>
      </Container>
    );
  }

  if (!isLogin) {
    return (
      <section id="sobre_nosotros" style={{ marginBottom: 70, paddingTop: 40 }}>
        <Container>
          <div style={{ textAlign: "center" }}>
            <TextFeature title={"Sobre nosotros"} />
          </div>
          <Text sx={styles.wrapper.subTitleCenter}>
            Somos el Departamento Apoyo de Talento Humano (DATH), dedicada a la
            consultoría de los procesos de la gestión humana, la cual está
            comprometida con mejorar los resultados de las organizaciones a
            través del desarrollo de sus líderes y la mejora de sus procesos.
            DATH, nace en el año 2021, como resultado de estudios realizados,
            que determinaron las necesidades de implementar los procesos de
            gestión humana en las pymes de la ciudad de barranquilla.
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
                  las pymes, a través de soluciones integrales, brindando
                  personal altamente capacitado para ofrecer un servicio con
                  innovación, que busca satisfacer las necesidades de las
                  organizaciones.
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
                  nuestro ambiente laboral, así aportando al desarrollo
                  sostenible de las organizaciones a nivel nacional.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
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
    subTitleStart: {
      fontSize: 2,
      fontWeight: 400,
      lineHeight: "1.9",
      color: "#474747",
      textAlign: "start",
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
