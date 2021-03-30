import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import { css } from "catom";

export interface NameLogoProps {
  text: string;
  size?: string;
}
export function NameLogo({ text, size }: NameLogoProps) {
  const val = `${size || "50px"}`;
  return (
    <AnimateLayout
      element="span"
      animId="name-logo"
      style={{ height: val, width: val }}
      class={css({
        display: "inline-flex",
        borderRadius: "50%",
        padding: "2px",
        userSelect: "none",
        border: "2px solid var(--accent)",
        background: "transparent",
        color: "var(--font)",
        alignItems: "center",
        transition: "0.2s linear",
        justifyContent: "center",
        // pseudo: {
        //   ":hover": {
        //     background: "var(--current-alpha)",
        //   },
        //   ":focus": { background: "var(--current-alpha)" },
        // },
      })}
    >
      <span class={css({ textTransform: "initial" })}>
        {getInitials(text).substr(0, 3)}
      </span>
    </AnimateLayout>
  );
}
const LETTERS_REG = /[A-Za-z]/;
function getInitials(text: string): string {
  return text
    .split(" ")
    .map(([x]) => (LETTERS_REG.test(x) ? x : ""))
    .join("");
}
