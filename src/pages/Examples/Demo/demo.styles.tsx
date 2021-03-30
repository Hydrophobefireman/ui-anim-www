import { css } from "catom";

export const mobileContainer = css({
  width: "200px",
  height: "400px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  margin: "2rem",
  border: "2px solid",
  borderRadius: "5px",
});

export const component = css({
  flex: 1,
  borderRadius: "inherit",
  cursor: "pointer",
  position: "relative",
});

export const bottomBar = css({
  position: "absolute",
  bottom: "0px",
  width: "100%",
  height: "20%",
  background: "black",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
});

export const box = css({
  marginLeft: "10px",
  height: "20px",
  width: "20px",
  marginTop: "5px",
});

export const boxActive = css({
  marginLeft: "10px",
  height: "50px",
  width: "50px",
  marginTop: "5px",
});

export const shuffleBox = css({
  width: "100px",
  height: "100px",
  border: "2px solid red",
  margin: "5px",
  borderRadius: "10px",
  display: "inline-flex",
  boxShadow: "var(--box-shadow)",
  alignItems: "center",
  background: "var(--bg)",
  justifyContent: "center",
});

export const actionButton = css({
  boxShadow: "var(--box-shadow)",
  padding: ".5rem",
  background: "var(--accent)",
  borderRadius: "10px",
  color: "var(--bg)",
  transition: "0.3s linear",
});

export const regContainer = css({
  width: "500px",
  maxWidth: "80vw",
  borderRadius: "10px",
  boxShadow: "var(--box-shadow)",
  padding: "2rem",
});

export const regInput = css({
  padding: ".5rem",
  outline: "none",
  margin: "10px",
  width: "60%",
  textDecoration: "none",
});

export const formContainer = css({ margin: "auto", textAlign: "center" });
