// components/Eeeiprstx.tsx;
import Image from "next/image";

const expertiseData = [
  {
    icon: "/think.svg",
    title: "Think",
    description:
      "Chart The Course → Product strategy, roadmaps, leadership mentoring",
  },
  {
    icon: "/plan.svg",
    title: "Plan",
    description: "Design With Purpose → UX/UI, branding, prototyping",
  },
  {
    icon: "/execute.svg",
    title: "Execute",
    description: "Ignite & Launch → MVPs, growth optimization, ongoing support",
  },
];

export default function Expertise() {
  return (
    <section
      className="flex flex-col w-full items-end gap-8 relative flex-[0_0_auto] max-lg:px-5"
      aria-labelledby="expertise-heading"
    >
      <header className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id="expertise-heading"
          className="relative self-stretch -mt-px font-['Poppins'] font-semibold text-primary text-5xl leading-normal max-md:text-4xl max-sm:text-[28px]"
        >
          Expertise
        </h2>
        <p className="relative self-stretch font-['Poppins'] font-normal text-secondary text-base leading-7">
          End-to-end digital services that transform ideas into impactful
          solutions
        </p>
      </header>
      <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto] max-lg:flex-col max-lg:items-start">
        {expertiseData.map((item, idx) => (
          <article
            key={idx}
            className="flex flex-col w-[408px] items-start justify-center gap-6 px-8 pt-12 pb-8 relative bg-[#2524277a] rounded-xl max-lg:w-full"
          >
            <div
              className="relative inline-flex flex-col items-start gap-2.5 p-5 flex-[0_0_auto] rounded-lg overflow-hidden border-0 bg-gradient-to-br from-[rgba(250,250,250,0.13)] via-transparent to-transparent before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:bg-gradient-to-b before:from-[rgba(46,46,46,1)] before:to-transparent before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              aria-hidden="true"
            >
              <Image
                src={item.icon}
                alt=""
                width={30}
                height={30}
                className="relative w-[30px] h-[30px]"
              />
            </div>
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch -mt-px font-['Poppins'] font-semibold text-primary text-[32px] leading-normal max-sm:text-2xl">
                {item.title}
              </h3>
              <p className="relative self-stretch font-['Poppins'] font-normal text-secondary text-base leading-7">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
