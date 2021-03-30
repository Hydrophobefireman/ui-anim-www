import { center, link } from "@/styles";
import { A } from "@hydrophobefireman/ui-lib";
import { buttonBox, heading } from "./Landing.styles";

export default function Landing() {
  return (
    <div>
      <section class={center}>
        <div>
          <h1 class={heading}>UI Motion</h1>
          <div>Delightfully simple layout animations</div>
          <div class={buttonBox}>
            <A class={link} href="/intro">
              Read More
            </A>
            <A class={link} href="/v0/examples">
              Examples
            </A>
          </div>
        </div>
      </section>
    </div>
  );
}
