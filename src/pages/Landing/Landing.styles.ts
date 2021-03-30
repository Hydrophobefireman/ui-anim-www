import { css } from "catom";

export const heading = css({
  fontSize: "4rem",
  display: "block",
  marginBottom: "1rem",
  WebkitBackgroundClip: "text",
  textTransform: "none",
  WebkitTextFillColor: "transparent",
  animation: "gradient-anim 3s ease infinite",
  backgroundSize: "300% 100%",
  backgroundImage: "linear-gradient(111deg, #ff8cff 32%, #1330ff)",
});

export const buttonBox = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginTop: "2rem",
});
