import { ContentSection } from "@/components/ContentSection/ContentSection";
import { center } from "@/styles";
import { css } from "catom";
import { MobileScreen } from "./Demo/mobilescreen";
import { AnimateLayout, Motion } from "@hydrophobefireman/ui-anim";
import { Shuffle } from "./Demo/Shuffle";
import { Register } from "./Demo/Register";
import { HeightAuto } from "./Demo/HeightAuto";
import { useState } from "@hydrophobefireman/ui-lib";
const marginTop = css({ marginTop: "2rem" });
export default function Examples() {
  const [, reRender] = useState({});
  return (
    <div class={css({ maxWidth: "80ch", margin: "auto" })}>
      <Motion>
        <div class={marginTop}>
          <ContentSection hash="mobile-screen" heading="Mobile Screen">
            <div class={center}>
              <MobileScreen />
            </div>
          </ContentSection>
        </div>
        <div class={marginTop}>
          <ContentSection hash="shuffle" heading="Shuffle">
            <div class={[center, css({ textAlign: "center" })]}>
              <Shuffle />
            </div>
          </ContentSection>
        </div>
        <div class={marginTop}>
          <ContentSection hash="height-auto" heading="Height Auto">
            <div class={center}>
              <HeightAuto reRender={reRender} />
            </div>
          </ContentSection>
        </div>
        <AnimateLayout
          element="div"
          class={marginTop}
          animId="reg-page-wrapper"
        >
          <ContentSection hash="register" heading="Register Page">
            <div class={center}>
              <Register />
            </div>
          </ContentSection>
        </AnimateLayout>
      </Motion>
    </div>
  );
}
