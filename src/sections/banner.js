/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
// import BannerImg from "assets/banner-thumb.jpg";
import BannerImg from "assets/team.svg";

import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";

export default function Banner() {
  return (
    <div id="home">
      <div class="container_all" id="container__all">
        <div class="cover">
          <div class="bg_color"></div>
          <div class="wave w1"></div>
          <div class="wave w2"></div>

          <div class="container__cover">
            <div class="container__info">
              <div>
                <h1>Juntos desafiando límites </h1>
                <h2>y sumando éxitos</h2>
              </div>
              <p>
                Transformamos los resultados de las organizaciones desarrollando
                el potencial de las personas.
              </p>
            </div>
            <div class="container__vector">
              <img src={BannerImg} alt="team" height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    // background: "#373B44" /* fallback for old browsers */,
    // background:
    //   " -webkit-linear-gradient(to right, #4286f4, #373B44)" /* Chrome 10-25, Safari 5.1-6 */,
    // background:
    //   "linear-gradient(to right, #4286f4, #373B44)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
