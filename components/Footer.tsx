// components/Feoort.tsx;
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "Solution", href: "#solutions" },
    { name: "Training", href: "#training" },
    { name: "About", href: "#about" },
    { name: "Join Us", href: "#join" },
  ],
  expertise: [
    { name: "Ux Audits", href: "#ux-audits" },
    { name: "Products", href: "#products" },
  ],
  insights: [
    { name: "Videos", href: "#videos" },
    { name: "Blog", href: "#blog" },
    { name: "Podcast", href: "#podcast" },
  ],
};

const socialIcons = [
  "linkedin.svg",
  "twitter.svg",
  "facebook.svg",
  "github.svg",
  "instagram.svg",
];

export default function Footer() {
  return (
    <footer className="flex w-full max-w-screen-2xl gap-2 flex-col items-start max-lg:px-5">
      <div className="flex items-start gap-32 px-0 pb-[30px] relative self-stretch w-full border-b border-solid border-[#fafafa33] max-lg:flex-col max-lg:gap-10">
        <div className="flex flex-col items-start gap-10 relative">
          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <Image
              src="/logo.svg"
              alt="ProductLamp Logo"
              width={231}
              height={50}
              className="relative w-[231px] h-[50px]"
            />
          </div>
          <p className="relative self-stretch font-['Poppins'] font-normal text-secondary text-base leading-7">
            ProductLamp is a digital product studio dedicated to transforming
            ideas into impactful solutions through end-to-end services and
            expert training.
          </p>
        </div>
        <div className="flex items-start justify-between gap-32 relative w-full max-lg:gap-10 max-lg:flex-wrap">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col items-start gap-6">
              <h3 className="relative -mt-px font-['Poppins'] font-semibold text-primary text-xl leading-normal">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              <ul className="flex flex-col items-start gap-4 list-none m-0 p-0">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="relative w-fit -mt-px font-['Poppins'] font-normal text-secondary text-base leading-normal hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-0 pt-6 relative self-stretch w-full flex-[0_0_auto] max-lg:flex-col max-lg:gap-4">
        <p className="relative font-['Poppins'] font-normal text-secondary text-sm leading-6">
          © 2024 ProductLamp. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialIcons.map((icon) => (
            <Link
              key={icon}
              href="#"
              className="inline-flex items-center justify-center p-2 rounded-full hover:bg-[#e2ab2e33] transition-colors duration-300"
            >
              <Image
                src={`/${icon}`}
                alt={`${icon.split(".")[0]} icon`}
                width={24}
                height={24}
                className="relative w-6 h-6"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
