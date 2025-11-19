// components/HowWeHelp.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    number: "01.",
    title: "Design & Prototype",
    description:
      "Ideas take shape through UX/UI design, branding, and rapid testing.",
    position: "top-[752px]",
  },
  {
    number: "02.",
    title: "Dream & Discover",
    description:
      "We uncover insights, define strategy, and align with your vision.",
    position: "top-[200px]",
  },
  {
    number: "03.",
    title: "Build & Launch",
    description:
      "From development to go-to-market, we bring your product to life.",
    position: "top-[1552px]",
  },
  {
    number: "04.",
    title: "Grow & Optimize",
    description:
      "Post-launch, we scale, refine, and keep you ahead of the curve.",
    position: "top-[2352px]",
  },
];

export default function HowWeHelp() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      className="relative w-full mx-auto h-[2952px] max-lg:h-auto max-lg:px-5 my-64"
      aria-labelledby="how-we-help-heading"
    >
      <aside className="w-1/2 sm:border-0 lg:border-r border-solid border-[#bab8bb33] flex flex-col items-start gap-80 absolute top-0 left-0 max-lg:static max-lg:w-full max-lg:py-[100px] max-lg:gap-[100px]">
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full pr-10 max-lg:border-0 max-lg:pr-0">
          <h2 className="relative self-stretch -mt-px font-['Poppins'] font-semibold text-[32px] leading-normal max-sm:text-2xl">
            <span className="text-primary">ProductLamp</span>
            <span className="text-secondary">
              {" "}
              is Design & Technology Consultancy
            </span>
          </h2>
          <p className="self-stretch text-base leading-8 relative font-['Poppins'] font-normal text-secondary">
            Where design meets technology, your ideas come alive; crafted into
            digital experiences that inspire and delight.
          </p>
          <Link
            href="#learn-more"
            className="inline-flex items-center justify-center px-[18px] py-2 relative flex-[0_0_auto] rounded-lg border-[1.5px] border-solid border-primary cursor-pointer transition-all duration-300 hover:bg-[#e2ab2e1a] focus:outline-2 focus:outline-primary focus:outline-offset-2"
            role="button"
          >
            <span className="text-primary relative w-fit -mt-[1.5px] font-['Poppins'] font-semibold text-sm text-center leading-6 whitespace-nowrap">
              Learn More
            </span>
          </Link>
        </div>
        <h3
          id="how-we-help-heading"
          className="relative self-stretch h-[52px] font-['Poppins'] font-semibold text-primary text-2xl leading-normal"
        >
          How We Help
        </h3>
        <nav
          className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]"
          aria-label="Process steps"
        >
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 relative max-lg:w-full"
            >
              <button
                className="focus:outline-none relative w-full h-12 cursor-pointer bg-transparent border-0 p-0 text-left transition-opacity duration-300 hover:opacity-80 focus:outline-2 focus:outline-primary focus:outline-offset-4 max-lg:w-full"
                aria-pressed={activeStep === idx}
                aria-label={`Step ${step.number} ${step.title}`}
                onClick={() => setActiveStep(idx)}
              >
                <span
                  className={`absolute top-0 left-0 font-['Poppins'] ${
                    activeStep === idx
                      ? "font-semibold text-primary"
                      : "font-normal text-secondary"
                  } text-[32px] leading-normal max-sm:text-2xl`}
                >
                  {step.number}
                </span>
                <span
                  className={`absolute top-0 left-[78px] w-[431px] font-['Poppins'] ${
                    activeStep === idx
                      ? "font-semibold text-primary"
                      : "font-normal text-secondary"
                  } text-[32px] leading-normal max-sm:text-2xl`}
                >
                  {step.title}
                </span>
              </button>
            </div>
          ))}
        </nav>
      </aside>

      {processSteps.map((step, idx) => (
        <article
          key={idx}
          className={`flex items-start lg:items-end py-8 flex-col w-full gap-2.5 absolute ${step.position} max-lg:static max-lg:w-full max-lg:h-auto max-lg:mb-5`}
          aria-labelledby={`step-${idx}-heading`}
        >
          <div
            id={`step-${idx}-heading`}
            className={`relative w-full lg:w-2/5 ${
              idx === 3 ? "flex-1" : "h-9"
            } -mt-px font-['Poppins'] font-semibold text-primary ${
              idx === 3 ? "text-[32px]" : "text-2xl"
            } leading-normal`}
          >
            {step.title}
            <p className="relative flex-1 self-stretch font-['Poppins'] font-normal text-secondary text-base leading-7">
              {step.description}
            </p>
          </div>
        </article>
      ))}

      <div
        className="absolute top-0 left-[calc(50%-1px)] w-0.5 h-[2952px] pointer-events-none max-lg:hidden"
        role="presentation"
        aria-hidden="true"
      >
        <Image
          src="/img/vector-620.svg"
          alt=""
          width={2}
          height={2952}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
