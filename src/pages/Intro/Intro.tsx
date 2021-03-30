import { A } from "@hydrophobefireman/ui-lib";
import { code, link, codePre } from "@/styles";
import { ContentSection } from "../../components/ContentSection/ContentSection";
import { contentBox, notText } from "./Intro.styles";
import { useAnchorHashOnMount } from "@/customHooks";

export default function Intro() {
  useAnchorHashOnMount();
  return (
    <div class={contentBox}>
      <WhatisThis />
      <Why />
      <How />
      <Usage />
      <UiAnimIsNotCss />
      <Note />
    </div>
  );
}

function WhatisThis() {
  return (
    <ContentSection hash="what-is-this" heading={"What is this?"}>
      <p>
        A{" "}
        <a
          href="https://bundlephobia.com/result?p=@hydrophobefireman/ui-anim"
          target="_blank"
          rel="noopener"
          class={link}
        >
          {" "}
          Tiny
        </a>
        <sup>
          <sup>(1.9kb)</sup>
        </sup>
        Layout animation library for{" "}
        <a
          class={link}
          target="_blank"
          rel="noopener"
          href="https://github.com/hydrophobefireman/ui-lib"
        >
          UI-Lib
        </a>{" "}
        and friends (including react)
      </p>
    </ContentSection>
  );
}
function Why() {
  return (
    <ContentSection hash="why" heading="why?">
      <p>
        Layout animations are tough, and there is a visible gap between the
        interactions we have in web apps and their native counterparts.
      </p>
      <p>
        Web apps usually miss out on most of the micro interactions that
        designers have in mind. <b>It's just impractical</b> to write layout
        animations without JavaScript, meaning your code will now be riddled
        with your own logic and other considerations for the animations.
      </p>
      <p>UI-Anim is just a tiny abstraction that does this job for you</p>
      <p>
        this library is <b class={notText}>NOT</b> a{" "}
        <a class={link} href="/intro#ui-anim-is-not-css">
          {" "}
          css animations
        </a>{" "}
        replacement
      </p>
      <p>
        Check the{" "}
        <A class={link} href="/v0/examples">
          examples
        </A>{" "}
        for some use cases
      </p>
    </ContentSection>
  );
}

function How() {
  return (
    <ContentSection hash="how" heading="How?">
      <p>
        This library is largely based on{" "}
        <a
          target="_blank"
          rel="noopener"
          class={link}
          href="https://www.framer.com/motion/"
        >
          Framer Motion
        </a>
        <sup>
          <sup>(93kb)</sup>
        </sup>
        (which you should use if you're looking for something battle-tested,
        well supported, built for react) and its{" "}
        <a
          target="_blank"
          rel="noopener"
          class={link}
          href="https://mattperry.is/writing-code/layout-projection-animate-browser-layout-60fps"
        >
          {" "}
          Layout Projection
        </a>
      </p>
      <p>
        The library takes snapshots of the dom element using{" "}
        <span class={code}>Element#getBoundingClientRect()</span>
        and whenever your component updates, it calculates the difference
        between the previous and the current snapshot and sets the{" "}
        <span class={code}>translate</span> and <span class={code}>scale</span>{" "}
        values accordingly.
      </p>
      <p>
        We do not use css animations. Instead it calls{" "}
        <span class={code}>requestAnimationFrame</span> repeatedly to animate
        the element
      </p>
    </ContentSection>
  );
}

const codeBlock1 = `function MyComponent() {
  const styleBasedOnState = useStyle();
  return (
    <div style={styleBasedOnState}>
        My Component which changes its style
    </div>
  );
}`;

const codeBlock2 = `
import { AnimateLayout } from "@hydrophobefireman/ui-anim";
function MyComponent() {
  const styleBasedOnState = useStyle();
  return (
    <AnimateLayout
      animId="animation-id"
      element="div"
      time={300}
      style={styleBasedOnState}
    >
      My Component which changes its style
    </AnimateLayout>
  );
}
`.trim();
function Usage() {
  return (
    <ContentSection hash="usage" heading="Usage">
      <p>It's very easy to introduce ui-anim in your existing apps</p>
      <p>
        <h3>From:</h3>
        <pre class={[code, codePre]} style={{ padding: "2rem" }}>
          {codeBlock1}
        </pre>
      </p>
      <p>
        <h3>To:</h3>
        <pre class={[code, codePre]} style={{ padding: "2rem" }}>
          {codeBlock2}
        </pre>
      </p>
      <p>
        Just replacing the DOM Element with{" "}
        <span class={code}>AnimateLayout</span>, setting a unique{" "}
        <span class={code}>animId</span>
        and specifying the time for the animation in ms and you're good to go!
      </p>
    </ContentSection>
  );
}

function UiAnimIsNotCss() {
  return (
    <ContentSection hash="ui-anim-is-not-css" heading={"UI Anim is not css"}>
      <p>
        Please do not use UI Anim where a simple css class/keyframe/transform
        will suffice
      </p>
      <p>
        Layout animations are expensive. They use CPU to calculate the position
        of the elements. overusing them will cause your app to slow down (not to
        mention your users will hate random elements moving, scaling around for
        the tiniest of interactions)
      </p>
      <p>
        UI Anim is also not compatible with elements that are already using
        keyframes and css transforms. This is by design as it's impossible to
        know how the element is being animated (by css or by your JavaScript)
        causing undefined behaviour and broken animations
      </p>
      <p>
        do not over use UI Anim (or framer motion), only do so where regular CSS
        just doesn't cut it.
      </p>
    </ContentSection>
  );
}

function Note() {
  return (
    <ContentSection hash="note" heading="Note">
      <p>
        UI Anim is still in{" "}
        <a
          href="https://github.com/hydrophobefireman/ui-anim"
          class={link}
          target="_blank"
          rel="noopener"
        >
          active development
        </a>
        , there is scope for improvement, you might find some issues, reports
        are appreciated
      </p>
    </ContentSection>
  );
}
