import { useState } from "@hydrophobefireman/ui-lib";
import { NameLogo } from "./NameLogo";
import { css } from "catom";
import { AnimateLayout } from "@hydrophobefireman/ui-anim";
import {
  actionButton,
  formContainer,
  regContainer,
  regInput,
} from "./demo.styles";
import { Form } from "@/components/Form";

export function Register() {
  const [name, setName] = useState<string>(null);
  return (
    <>
      <div>{!name && <RegisterHandler next={(name) => setName(name)} />}</div>
      <div>{name && <Profile name={name} clear={() => setName("")} />}</div>
    </>
  );
}

function RegisterHandler({ next }: { next(name: string): void }) {
  const [name, setName] = useState("john Doe");
  return (
    <div class={regContainer}>
      <div>
        <NameLogo text={name} />
        <AnimateLayout
          element="div"
          animId="name-anim"
          class={css({ display: "inline-block" })}
        >
          {name}
        </AnimateLayout>
      </div>
      <Form onSubmit={() => name.trim() && next(name.trim())}>
        <div class={formContainer}>
          <input
            class={regInput}
            placeholder="Full Name"
            value={name}
            onInput={(e) => setName(e.currentTarget.value)}
          />
          <div>
            <button class={actionButton}>Submit</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

function Profile({ name, clear }: { name: string; clear(): void }) {
  return (
    <div class={regContainer}>
      <div class={css({ margin: "auto", textAlign: "right" })}>
        <NameLogo size="60px" text={name} />
        <div>
          <AnimateLayout
            element="div"
            animId="name-anim"
            class={css({
              display: "inline-block",
            })}
          >
            {name}
          </AnimateLayout>
        </div>
      </div>

      <div>
        <button class={actionButton} onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}
