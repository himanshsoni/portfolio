"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function About() {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "from",
    },

    {
      text: "Udaipur, India. ❤️",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section
      id="about"
      className="transition duration-500 ease-in-out h-[20rem]"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl p-2 ">About me.</h1>
        <p className=" text-neutral-600 dark:text-neutral-200 text-xs sm:text-xl mt-5">
          I am Software Engineer. Passionate about web development and software
          engineering. Love to learn new languages, frameworks, and
          technologies.
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
    </section>
  );
}
