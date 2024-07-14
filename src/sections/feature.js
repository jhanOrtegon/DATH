/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Text } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Empatía",
    title: "Empatía",
    text: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Innovación",
    title: "Innovación",
    text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Trabajo en equipo",
    title: "Trabajo en equipo",
    text: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Honestidad",
    title: "Honestidad",
    text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
  },
  {
    id: 5,
    imgSrc: Support,
    altText: "Compromiso",
    title: "Compromiso",
    text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
  },
];

export default function Feature() {
  return (
    <section>
      <Text sx={styles.subTitle}>Valores</Text>
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCard
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>
    </section>
  );
}

const styles = {
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
    marginBottom: '20px'
  },
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [0],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
