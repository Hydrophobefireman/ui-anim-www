import { useState } from "@hydrophobefireman/ui-lib";
import { actionButton } from "./demo.styles";
import { css } from "catom";
import { AnimateLayout } from "@hydrophobefireman/ui-anim";

export function HeightAuto() {
  const [mode, setMode] = useState<"small" | "medium" | "full">("medium");
  const lines = { small: 3, medium: 5, full: 7 };
  function handleClick(e: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    setMode(e.currentTarget.dataset.mode as any);
  }
  return (
    <div class={css({ paddingBottom: "2rem" })}>
      <div
        class={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: "1rem",
        })}
      >
        {Object.keys(lines).map((x) => (
          <button
            class={actionButton}
            data-mode={x}
            disabled={x === mode}
            onClick={handleClick}
          >
            {x}
          </button>
        ))}
      </div>
      <AnimateLayout
        element="div"
        animId="height-auto"
        class={css({
          borderRadius: "10px",
          padding: "1rem",
          background: "#d0d0d0",
        })}
      >
        {Array.from({ length: lines[mode] }).map(() => (
          <div
            class={css({
              width: "400px",
              height: "1rem",
              margin: "10px",
              background: "var(--accent)",
              borderRadius: "20px",
            })}
          ></div>
        ))}
      </AnimateLayout>
    </div>
  );
}
