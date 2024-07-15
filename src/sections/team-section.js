/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Member1 from "assets/team/jenifer.jpg";
import Member2 from "assets/team/daniela.jpg";
import Member3 from "assets/team/valentina.jpg";
import Member4 from "assets/team/ricardo.jpg";
import { useContext } from "react";
import { LoginContext } from "contexts/login-context";

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Jennifer Acosta",
    title: "Jennifer Acosta",
    designation: "Asesora legal",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: "Daniela Smith",
    title: "Daniela Smith",
    designation: "Jefe de Talento Humano",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: "Valentina Ortegón",
    title: "Valentina Ortegón",
    designation: "Gerente general",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: "Ricardo Velasquez",
    title: "Ricardo Velasquez",
    designation: "Jefe de marketing",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  const { isLogin } = useContext(LoginContext);

  if (!isLogin) {
    return (
      <section id="equipo" style={{ marginBottom: "30px", paddingTop: 30 }}>
        <Container>
          <SectionHeader title="Nuestro equipo" />

          <Grid sx={styles.grid}>
            {data.map((item) => (
              <TeamCard
                key={`team--key${item.id}`}
                src={item.imgSrc}
                altText={item.altText}
                title={item.title}
                designation={item.designation}
              />
            ))}
          </Grid>
        </Container>
      </section>
    );
  }

  return null
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
