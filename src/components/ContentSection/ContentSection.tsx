import { useLocation } from "@/util/customHooks";
import { contentLink, introHeading } from "./ContentSection.styles";

export function ContentSection({
  children,
  hash,
  heading,
}: {
  children?: any;
  hash: string;
  heading: string | JSX.Element;
}) {
  const loc = useLocation();
  return (
    <section>
      <h1 class={introHeading} id={hash || null}>
        {hash ? (
          <a class={contentLink} href={`${loc}#${hash}`}>
            {heading}
          </a>
        ) : (
          heading
        )}
      </h1>
      <div>{children}</div>
    </section>
  );
}
