import { css } from "catom";

const headerLink = css({
  padding: ".5rem",
  borderRadius: "50px",
  paddingLeft: "1rem",
  paddingRight: "1rem",
});

export const homeLink = [
  css({ fontSize: "1.2rem", color: "var(--font)" }),
  headerLink,
].join(" ");

export const examples = [
  css({
    background: "var(--accent)",
    color: "var(--bg)",
    textDecoration: "none",
    transition: ".3s linear",
    pseudo: {
      ":hover": { boxShadow: "var(--box-shadow)" },
    },
  }),
  headerLink,
].join(" ");

export const header = css({
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: "0px",
  background: "var(--bg)",
  zIndex: 10,
});

export const externLinkContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const githubLink = css({
  borderRadius: "20px",
  margin: "10px",
  transform: "scale(1.2)",
});
