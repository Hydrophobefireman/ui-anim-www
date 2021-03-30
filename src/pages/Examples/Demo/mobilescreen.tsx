import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import { useState } from "@hydrophobefireman/ui-lib";
import {
  bottomBar,
  box,
  boxActive,
  component,
  mobileContainer,
} from "./demo.styles";

export function MobileScreen() {
  const [active, setActive] = useState<number>(null);

  const redActive = active === 1;
  const blueActive = active === 2;
  return (
    <div class={mobileContainer}>
      <AnimateLayout
        element="div"
        animId="red"
        onClick={() => setActive(redActive ? null : 1)}
        class={component}
        style={{
          zIndex: blueActive ? 0 : 1,
          backgroundColor: "red",
          margin: active == null ? "1rem" : 0,
          flex: blueActive ? 0 : 1,
        }}
      >
        <AnimateLayout
          element="div"
          animId="red-child"
          class={bottomBar}
          style={{ opacity: blueActive ? "0" : "1" }}
        >
          <AnimateLayout
            element="div"
            animId="red-box"
            style={{
              background: "blue",
              marginLeft: redActive ? "8rem" : "1rem",
              marginTop: redActive ? "2rem" : "5px",
            }}
            class={redActive ? boxActive : box}
          ></AnimateLayout>
        </AnimateLayout>
      </AnimateLayout>
      <AnimateLayout
        element="div"
        animId="blue"
        onClick={() => setActive(blueActive ? null : 2)}
        class={component}
        style={{
          zIndex: redActive ? 0 : 1,
          backgroundColor: "blue",
          margin: active == null ? "1rem" : 0,
          flex: redActive ? 0 : 1,
        }}
      >
        <AnimateLayout
          element="div"
          animId="blue-child"
          class={bottomBar}
          style={{ opacity: redActive ? "0" : "1" }}
        >
          <AnimateLayout
            element="div"
            animId="blue-box"
            style={{
              background: "red",
              marginLeft: blueActive ? "8rem" : "1rem",
              marginTop: blueActive ? "2rem" : "5px",
            }}
            class={blueActive ? boxActive : box}
          ></AnimateLayout>
        </AnimateLayout>
      </AnimateLayout>
    </div>
  );
}
