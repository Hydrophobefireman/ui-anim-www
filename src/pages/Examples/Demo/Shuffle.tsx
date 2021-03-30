import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import { useState } from "@hydrophobefireman/ui-lib";
import { css } from "catom";
import { shuffleBox, actionButton } from "./demo.styles";
const count = 15;

export function Shuffle() {
  const [arr, setArr] = useState(() =>
    Array.from({ length: count }).map((_, i) => count - i)
  );

  return (
    <div>
      <button class={actionButton} onClick={() => setArr(shuffleArray(arr))}>
        Shuffle
      </button>
      <div class={css({ marginTop: "15px" })}>
        {arr.map((i) => (
          <AnimateLayout
            element="div"
            animId={`${count - i}`}
            data-anim={`${count - i}`}
            class={shuffleBox}
          >
            {count - i}
          </AnimateLayout>
        ))}
      </div>
    </div>
  );
}

function shuffleArray(a) {
  const array = a.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
