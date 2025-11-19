// components/Solutions.tsx
import Image from "next/image";

const solutions = [
  "Project Discovery",
  "UI/UX Design",
  "Development",
  "Launch",
];

export default function Solutions() {
  return (
    <section
      className="flex flex-col w-full items-start gap-5 relative flex-[0_0_auto] max-lg:px-5 my-64"
      aria-labelledby="solutions-heading"
    >
      <header className="flex flex-col lg:flex-row gap-8 relative w-full">
        <h2
          id="solutions-heading"
          className=" flex-3 relative font-semibold text-primary text-5xl leading-normal max-md:text-4xl max-sm:text-[28px]"
        >
          Solutions We offer
        </h2>
        <p className="flex-5 text-xl leading-[38px] relative font-['Poppins'] font-normal text-secondary">
          Where design meets technology, your ideas come alive; crafted into
          digital experiences that inspire and delight. Where design meets
          technology, your ideas come alive.
        </p>
      </header>
      <div className="flex flex-col items-start relative self-stretch w-full">
        {solutions.map((solution) => (
          <article
            key={solution}
            className="flex w-full h-[120px] items-center justify-between px-0 py-8 relative border-b border-solid border-[#bab8bb33] max-md:h-auto max-md:flex-col max-md:items-start max-md:gap-5"
          >
            <div className="flex w-[519px] h-24 items-center gap-2.5 relative -mt-5 -mb-5 max-md:w-full max-md:h-auto">
              <h3 className="relative w-fit bg-linear-to-b from-[rgba(255,255,255,0.08)] to-[rgba(85,84,85,0.2)] bg-clip-text text-transparent font-['Poppins'] font-semibold text-5xl leading-normal max-md:text-4xl max-sm:text-[28px]">
                {solution}
              </h3>
            </div>
            <button
              className="inline-flex items-center gap-2.5 p-[13px] relative flex-[0_0_auto] rounded-full overflow-hidden border-0 bg-gradient-to-b from-[rgba(26,27,31,0.2)] to-transparent before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-full before:bg-gradient-to-br before:from-[rgba(26,27,31,0.2)] before:to-transparent before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-2 focus:outline-primary focus:outline-offset-2"
              aria-label={`Learn more about ${solution}`}
            >
              <Image
                src="/arrow.svg"
                alt=""
                width={24}
                height={24}
                className="relative w-6 h-6 aspect-square"
              />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
