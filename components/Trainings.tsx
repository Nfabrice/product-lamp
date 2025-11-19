// components/Trainings.tsx;
import Image from "next/image";
import Link from "next/link";

const trainings = [
  { title: "Professional Agile Leadership", link: "#explore-pal" },
  { title: "Go To Market Strategy", link: "#explore-gtm" },
  { title: "Professional Agile Leadership", link: "#explore-pal-2" },
  { title: "Professional Agile Leadership", link: "#explore-pal-3" },
  { title: "Professional Agile Leadership", link: "#explore-pal-4" },
];

export default function Trainings() {
  return (
    <section
      id="trainings"
      className="flex flex-col w-full items-end gap-8 relative flex-[0_0_auto] max-lg:px-5 my-64"
      aria-labelledby="trainings-heading"
    >
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto] min-h-[800px] max-lg:min-h-0">
        <header className="flex items-center justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-8 relative flex-1 grow">
            <h2
              id="trainings-heading"
              className="relative w-fit -mt-px font-['Poppins'] font-semibold text-primary text-5xl leading-normal max-md:text-4xl max-sm:text-[28px]"
            >
              Our Trainings
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-3 grid-rows-2 w-full h-[700px] absolute top-[104px] left-0 gap-0 max-lg:grid-cols-2 max-lg:grid-rows-3 max-lg:static max-lg:h-auto max-lg:gap-6 max-md:flex max-md:flex-col">
          {trainings.map((training, idx) => (
            <article
              key={idx}
              className={`flex flex-col items-start justify-between px-8 pt-12 pb-8 relative bg-[#2524277a] max-md:w-full max-md:h-auto max-md:min-h-[200px] max-md:rounded-xl
              ${
                idx === 0
                  ? "row-start-1 col-start-1 rounded-tl-xl max-lg:rounded-l-xl max-md:rounded-xl"
                  : ""
              }
              ${
                idx === 1
                  ? "row-start-1 col-start-2 h-[350px] max-lg:h-full max-lg:rounded-r-xl max-md:rounded-xl"
                  : ""
              }
              ${
                idx === 2
                  ? "row-start-1 col-start-3 h-[350px] rounded-tr-xl max-lg:row-start-2 max-lg:col-start-1 max-lg:rounded-l-xl max-md:rounded-xl"
                  : ""
              }
              ${
                idx === 3
                  ? "row-start-2 col-start-1 rounded-bl-xl max-lg:row-start-2 max-lg:col-start-2 max-lg:rounded-r-xl max-md:rounded-xl"
                  : ""
              }
              ${
                idx === 4
                  ? "row-start-2 col-start-2 max-lg:row-start-3 max-lg:col-start-1 max-lg:rounded-l-xl max-md:rounded-xl"
                  : ""
              }
            `}
            >
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative self-stretch -mt-px font-['Poppins'] font-semibold text-primary text-[28px] leading-[42px] max-sm:text-2xl">
                  {training.title}
                </h3>
                <p className="relative self-stretch font-['Poppins'] font-normal text-secondary text-sm leading-7">
                  Master Agile leadership and boost your Scrum Team&#39;s and
                  organization&#39;s performance with our PAL-E training.
                </p>
              </div>
              <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <Link
                  href={training.link}
                  className="inline-flex items-center justify-center gap-2 px-0 pr-[18px] relative flex-[0_0_auto] rounded-lg transition-opacity duration-300 hover:opacity-80 focus:outline-2 focus:outline-primary focus:outline-offset-2"
                >
                  <span className="text-primary relative w-fit -mt-[1.5px] font-['Poppins'] font-semibold text-sm text-center leading-6 whitespace-nowrap">
                    Explore
                  </span>
                  <Image
                    src="/arrow-trainings.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                    className="relative w-6 h-6 aspect-square"
                  />
                </Link>
              </div>
            </article>
          ))}

          <article className="relative row-start-2 col-start-3 flex flex-col items-start justify-between px-8 pt-12 pb-8 bg-primary rounded-br-xl max-lg:row-start-3 max-lg:col-start-2 max-lg:rounded-r-xl max-md:w-full max-md:h-auto max-md:min-h-[200px] max-md:rounded-xl">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch -mt-px font-['Poppins'] font-semibold text-dark text-[28px] leading-[42px] max-sm:text-2xl">
                Can&#39;t find the course you&#39;re looking for? There&#39;s
                more!
              </p>
            </div>
            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <Link
                href="#all-trainings"
                className="inline-flex items-center justify-center px-[18px] py-2 relative flex-[0_0_auto] rounded-lg border-2 border-solid border-dark cursor-pointer transition-all duration-300 hover:bg-[#2e2e2e1a] focus:outline-2 focus:outline-dark focus:outline-offset-2"
              >
                <span className="text-dark relative w-fit -mt-[1.5px] font-['Poppins'] font-semibold text-sm text-center leading-6 whitespace-nowrap">
                  View All Trainings
                </span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
